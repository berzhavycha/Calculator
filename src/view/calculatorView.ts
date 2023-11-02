import subject from "../Observer/Subject"
import { SpecialOperators } from "../config/constants"
import { ObserverEvents } from "../config/observerEvents"

class CalculatorView {
    private inputEl = document.querySelector('#expression') as HTMLInputElement
    private resultEl = document.querySelector('.result') as HTMLDivElement
    private buttonContainer = document.querySelector('.button-container') as HTMLDivElement
    private evaluateBtn = document.querySelector('.eval-button') as HTMLButtonElement
    private errorBlock = document.querySelector('.error-block') as HTMLDivElement

    constructor() {
        this.buttonContainer.onclick = (event) => {
            if (event && event.target instanceof HTMLButtonElement) {
                if (event.target.dataset.calcBtn === SpecialOperators.CLEAR_ALL) {
                    this.inputEl.value = ''
                    this.resultEl.innerText = ''
                } else {
                    this.inputEl.value += event.target.dataset.calcBtn
                }
            }
        }

        this.evaluateBtn.addEventListener('click', () => {
            subject.notify(ObserverEvents.EVALUATE_BUTTON_CLICK, this.inputEl.value)
        })

        subject.subscribe(ObserverEvents.CALCULATED, (result: number) => {
            this.resultEl.innerText = result + ''
        })

        subject.subscribe(ObserverEvents.SHOW_ERROR, (errorMessage: string) => {
            this.errorBlock.style.display = 'block'
            this.errorBlock.innerText = errorMessage
        })
    }

}

export default CalculatorView