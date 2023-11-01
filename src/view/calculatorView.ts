import subject from "../Observer/Subject"
import { Operators } from "../config/constants"
import calculatorController from "../controller/CalculatorController"
import { observerEvents } from "../config/observerEvents"

class CalculatorView {
    private inputEl = document.querySelector('#expression') as HTMLInputElement
    private resultEl = document.querySelector('.result') as HTMLDivElement
    private buttonContainer = document.querySelector('.button-container') as HTMLDivElement
    private evaluateBtn = document.querySelector('.eval-button') as HTMLButtonElement
    private errorBlock = document.querySelector('.error-block') as HTMLDivElement

    constructor() {
        this.buttonContainer.onclick = (event) => {
            if (event && event.target instanceof HTMLButtonElement) {
                if (event.target.dataset.calcBtn === Operators.CLEAR_ALL) {
                    this.inputEl.value = ''
                    this.resultEl.innerText = ''
                } else {
                    this.inputEl.value += event.target.dataset.calcBtn
                }
            }
        }

        this.evaluateBtn.addEventListener('click', () => {
            calculatorController.handleEvaluateButtonClick(this.inputEl.value)
        })

        subject.subscribe(observerEvents.CALCULATE, (result) => {
            this.resultEl.innerText = result + ''
        })

        subject.subscribe(observerEvents.SHOW_ERROR, (errorMessage) => {
            this.errorBlock.style.display = 'block'
            this.errorBlock.innerText = errorMessage as string
        })
    }

}

export default CalculatorView