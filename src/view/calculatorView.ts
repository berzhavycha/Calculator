import subject, { ObserverEvents } from '@observer/index';
import { SpecialOperators } from '@services/index';
import { isMathOperator } from '@utils/index';
import config from '@config/operations';
import { calculatorViewConstants } from './index';

interface ButtonData {
  content: string;
  isOperator: boolean;
}

export class CalculatorView {
  private calculatorContainer: HTMLDivElement;
  private inputEl: HTMLInputElement;
  private resultEl: HTMLDivElement;
  private buttonContainer: HTMLDivElement;
  private evaluateBtn: HTMLButtonElement;
  private errorBlock: HTMLDivElement;
  private backspaceBtn: HTMLButtonElement | null;
  private operators: string[];
  private operatorIndex = 0;
  private buttonsPerRow = 4;

  constructor() {
    this.calculatorContainer = document.querySelector('.calculator-container') as HTMLDivElement;
    this.inputEl = document.querySelector('#expression') as HTMLInputElement;
    this.resultEl = document.querySelector('.result') as HTMLDivElement;
    this.buttonContainer = document.querySelector('.button-container') as HTMLDivElement;
    this.evaluateBtn = document.querySelector('.eval-button') as HTMLButtonElement;
    this.errorBlock = document.querySelector('.error-block') as HTMLDivElement;
    this.backspaceBtn = document.querySelector('.backspace');

    this.operators = [...Object.keys(config.operations), ...Object.values(SpecialOperators)];

    this.setupEventListeners();
    this.renderButtons();

    subject.subscribe(ObserverEvents.CALCULATED, this.showResult.bind(this));
    subject.subscribe(ObserverEvents.SHOW_ERROR, this.showError.bind(this));
  }

  private setupEventListeners() {
    this.buttonContainer.addEventListener('click', this.handleButtonClick.bind(this));
    this.evaluateBtn.addEventListener('click', this.handleEvaluateButtonClick.bind(this));
    this.inputEl.addEventListener('keydown', this.handleInputKeyDown.bind(this));
    this.backspaceBtn?.addEventListener('click', this.handleBackspaceButtonClick.bind(this));
  }

  private handleButtonClick(event: Event) {
    const target = event.target as HTMLButtonElement;
    if (target && target.dataset.calcBtn === SpecialOperators.CLEAR_ALL) {
      this.inputEl.value = '';
      this.resultEl.innerText = '0';
    } else if (target instanceof HTMLButtonElement) {
      this.inputEl.value += target.dataset.calcBtn ?? '';
    }
  }

  private handleEvaluateButtonClick() {
    subject.notify(ObserverEvents.EVALUATE_BUTTON_CLICK, this.inputEl.value);
  }

  private handleInputKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      subject.notify(ObserverEvents.EVALUATE_BUTTON_CLICK, this.inputEl.value);
    }
  }

  private handleBackspaceButtonClick() {
    const inputValue = this.inputEl.value;
    let stringOperator = '';
    let isFoundOperator = false;

    for (let i = inputValue.length - 1; i >= 0; i--) {
      stringOperator = inputValue[i] + stringOperator;

      if (isMathOperator(stringOperator)) {
        this.inputEl.value = inputValue.slice(0, -stringOperator.length);
        isFoundOperator = true;
        break;
      }
    }

    if (!isFoundOperator) {
      this.inputEl.value = inputValue.slice(0, -1);
    }
  }

  private createButton({ content, isOperator }: ButtonData): HTMLButtonElement {
    const button = document.createElement('button');
    button.style.minWidth = `${calculatorViewConstants.BUTTON_MIN_WIDTH}px`;

    if (isOperator) {
      button.classList.add('p-2', 'bg-green-500', 'text-white', 'rounded', 'hover:bg-green-700');
      this.operatorIndex++;
    } else {
      button.classList.add('p-2', 'bg-blue-500', 'text-white', 'rounded', 'hover:bg-blue-700');
    }

    button.setAttribute('data-calc-btn', content);
    button.textContent = content;

    return button;
  }

  private createRowWrapper(): HTMLDivElement {
    const rowWrapper = document.createElement('div');
    rowWrapper.classList.add('flex', 'mb-4', 'gap-8');
    return rowWrapper;
  }

  private renderButtons(): void {
    this.buttonContainer.innerHTML = '';

    const isRowLevelReached =
      this.buttonsPerRow * calculatorViewConstants.THRESHOLD_ROW_LEVEL <
      this.operators.length + calculatorViewConstants.NUMBERS_AMOUNT;

    if (isRowLevelReached) {
      this.buttonsPerRow++;
      this.calculatorContainer.style.width = `${
        parseFloat(this.calculatorContainer.style.width) + calculatorViewConstants.BUTTON_WIDTH
      }px`;
      return this.renderButtons();
    }

    let buttonCounter = 0;
    let operatorIndex = 0;
    let currentRow: HTMLDivElement | null = this.createRowWrapper();
    let isRowCompleted = false;

    const addButtonToRow = (button: HTMLButtonElement) => {
      if (!currentRow) {
        currentRow = this.createRowWrapper();
      }
      currentRow.appendChild(button);
      buttonCounter++;
    };

    const addRowToContainer = () => {
      if (currentRow) {
        this.buttonContainer.appendChild(currentRow);
        currentRow = this.createRowWrapper();
      }
    };

    for (let i = calculatorViewConstants.MIN_BUTTON_VALUE; i <= calculatorViewConstants.MAX_BUTTON_VALUE; i++) {
      const button = this.createButton({ content: `${i}`, isOperator: false });
      addButtonToRow(button);

      if (i % calculatorViewConstants.NUMBERS_COLUMNS_AMOUNT === 0 && operatorIndex < this.operators.length) {
        for (let j = buttonCounter; j < this.buttonsPerRow; j++) {
          const operatorButton = this.createButton({ content: `${this.operators[operatorIndex]}`, isOperator: true });
          addButtonToRow(operatorButton);
          operatorIndex++;
        }
        isRowCompleted = true;
      }

      if (isRowCompleted) {
        addRowToContainer();
        isRowCompleted = false;
        buttonCounter = 0;
      }
    }

    if (isRowCompleted) {
      currentRow = this.createRowWrapper();
      isRowCompleted = false;
    }

    const zeroButton = this.createButton({ content: `0`, isOperator: false });
    addButtonToRow(zeroButton);

    buttonCounter = 1;
    while (operatorIndex < this.operators.length) {
      if (buttonCounter % this.buttonsPerRow === 0) {
        addRowToContainer();
      }

      const operatorButton = this.createButton({ content: `${this.operators[operatorIndex]}`, isOperator: true });
      addButtonToRow(operatorButton);
      operatorIndex++;
    }

    addRowToContainer();
  }

  private showResult(result: number) {
    this.errorBlock.innerText = '';
    this.resultEl.innerText = result.toString();
  }

  private showError(errorMessage: string) {
    this.errorBlock.innerText = errorMessage;
  }
}
