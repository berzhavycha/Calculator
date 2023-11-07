import subject from '../Observer/Subject';
import { SpecialOperators } from '../config/constants';
import { ObserverEvents } from '../config/observerEvents';
import { isMathOperator } from '../utils/utils';

class CalculatorView {
  private inputEl = document.querySelector('#expression') as HTMLInputElement;
  private resultEl = document.querySelector('.result') as HTMLDivElement;
  private buttonContainer = document.querySelector('.button-container') as HTMLDivElement;
  private evaluateBtn = document.querySelector('.eval-button') as HTMLButtonElement;
  private errorBlock = document.querySelector('.error-block') as HTMLDivElement;
  private backspaceBtn = document.querySelector('.backspace') as HTMLButtonElement;

  constructor() {
    this.buttonContainer.onclick = (event) => {
      if (event && event.target instanceof HTMLButtonElement) {
        if (event.target.dataset.calcBtn === SpecialOperators.CLEAR_ALL) {
          this.inputEl.value = '';
          this.resultEl.innerText = '0';
        } else {
          this.inputEl.value += event.target.dataset.calcBtn;
        }
      }
    };

    this.evaluateBtn.addEventListener('click', () => {
      subject.notify(ObserverEvents.EVALUATE_BUTTON_CLICK, this.inputEl.value);
    });

    this.inputEl.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        subject.notify(ObserverEvents.EVALUATE_BUTTON_CLICK, this.inputEl.value);
      }
    });

    this.backspaceBtn.addEventListener('click', () => {
      let inputValue = this.inputEl.value
      let stringOperator = ''
      let isFoundOperator = false

      for (let i = inputValue.length - 1; i >= 0; i--) {
        stringOperator = inputValue[i] + stringOperator

        if (isMathOperator(stringOperator)) {
          this.inputEl.value = inputValue.slice(0, -stringOperator.length)
          isFoundOperator = true
          break
        }
      }

      if (!isFoundOperator) {
        this.inputEl.value = inputValue.slice(0, -1)
      }
    });

    subject.subscribe(ObserverEvents.CALCULATED, this.showResult.bind(this));
    subject.subscribe(ObserverEvents.SHOW_ERROR, this.showError.bind(this));
  }

  private showResult(result: number) {
    this.errorBlock.innerText = '';
    this.resultEl.innerText = result + '';
  }

  private showError(errorMessage: string) {
    this.errorBlock.innerText = errorMessage;
  }
}

export default CalculatorView;
