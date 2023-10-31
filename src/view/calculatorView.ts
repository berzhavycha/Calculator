import { IObserver } from "../Observer/Observer"
import { ISubject } from "../Observer/Subject"

export class CalculatorView implements IObserver {
    private inputEl: HTMLInputElement = document.querySelector('#expression')!
    private resultEl: HTMLDivElement = document.querySelector('.result')!
    private buttonContainer: HTMLDivElement = document.querySelector('.button-container')!
    private evaluateBtn: HTMLButtonElement = document.querySelector('.eval-button')!
    private errorBlock: HTMLDivElement | null = document.querySelector('.error-block')

    constructor() {
        this.buttonContainer.onclick = (event) => {
            if (event && event.target instanceof HTMLButtonElement) {
                if (event.target.innerText === 'C') {
                    this.inputEl.value = ''
                    this.resultEl.innerText = ''
                } else {
                    this.inputEl.value += event.target.innerText
                }
            }
        }
    }

    showError(errorMessage: string) {
        if (this.errorBlock) {
            this.errorBlock.style.display = 'block'
            this.errorBlock.innerText = errorMessage
        }
    }

    bindEvaluateButtonClick(handler: Function) {
        this.evaluateBtn.addEventListener('click', () => {
            handler(this.inputEl.value)
        })
    }

    update(subject: ISubject) {
        const { result, error } = subject.getState()

        if (result) {
            this.resultEl.innerText = result + ''
        }

        if (error) {
            this.showError(error)
        }
    }

}