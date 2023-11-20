import subject, { ObserverEvents } from '@observer';
import { SpecialOperators } from '@services';
import { isMathOperator } from '@utils';
import config from '@config';
import {
  DATA_ATTRIBUTE_BUTTON,
  ENTER_CALCULATE_BUTTON,
  INITIAL_BUTTON_PER_ROW,
  calculatorViewConstants,
  numberButtonClasses,
  operatorButtonClasses,
  rowWrapperClasses,
} from './index';

interface ButtonData {
  content: string;
  isOperator: boolean;
}

interface IView {
  handleButtonClick(event: Event): void,
  handleEvaluateButtonClick(): void,
  handleInputKeyDown(event: KeyboardEvent): void,
  handleBackspaceButtonClick(): void,
  renderButtons(): void,
  showResult(result: number): void,
  showError(errorMessage: string): void
}

export class CalculatorView implements IView {
  private calculatorContainer: HTMLDivElement;
  private inputEl: HTMLInputElement;
  private resultEl: HTMLDivElement;
  private buttonContainer: HTMLDivElement;
  private evaluateBtn: HTMLButtonElement;
  private errorBlock: HTMLDivElement;
  private backspaceBtn: HTMLButtonElement | null;
  private operators: string[];
  private buttonsPerRow = INITIAL_BUTTON_PER_ROW;
  private currentRow: HTMLDivElement = this.createRowWrapper()
  private buttonCounter: number = 0
  private operatorIndex: number = 0
  private isRowCompleted: boolean = false

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

  public handleButtonClick(event: Event): void {
    const target = event.target as HTMLButtonElement;
    if (target && target.dataset.calcBtn === SpecialOperators.CLEAR_ALL) {
      this.inputEl.value = '';
      this.resultEl.innerText = '0';
    } else if (target instanceof HTMLButtonElement) {
      this.inputEl.value += target.dataset.calcBtn ?? '';
    }
  }

  public handleEvaluateButtonClick(): void {
    subject.notify(ObserverEvents.EVALUATE_BUTTON_CLICK, this.inputEl.value);
  }

  public handleInputKeyDown(event: KeyboardEvent): void {
    if (event.key === ENTER_CALCULATE_BUTTON) {
      subject.notify(ObserverEvents.EVALUATE_BUTTON_CLICK, this.inputEl.value);
    }
  }

  public handleBackspaceButtonClick(): void {
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
      Object.values(operatorButtonClasses).forEach((operatorClass) => {
        button.classList.add(operatorClass);
      });
    } else {
      Object.values(numberButtonClasses).forEach((numberClass) => {
        button.classList.add(numberClass);
      });
    }

    button.setAttribute(DATA_ATTRIBUTE_BUTTON, content);
    button.textContent = content;

    return button;
  }

  private createRowWrapper(): HTMLDivElement {
    const rowWrapper = document.createElement('div');
    rowWrapper.classList.add(rowWrapperClasses.DISPLAY, rowWrapperClasses.MARGIN, rowWrapperClasses.GAP);
    return rowWrapper;
  }

  private adjustCalculatorWidth(increaseWidthBy: number): void {
    this.calculatorContainer.style.width = `${parseFloat(this.calculatorContainer.style.width) + increaseWidthBy}px`;
  }

  private createAndAddButton(content: string, isOperator: boolean): void {
    const button = this.createButton({ content, isOperator });
    this.addButtonToRow(button);
  }

  private addButtonToRow(button: HTMLButtonElement): void {
    if (!this.currentRow) {
      this.currentRow = this.createRowWrapper();
    }
    this.currentRow.appendChild(button);
    this.buttonCounter++;
  }

  private addRowToContainer(): void {
    if (this.currentRow) {
      this.buttonContainer.appendChild(this.currentRow);
      this.currentRow = this.createRowWrapper();
    }
  }

  private renderNumericButtons(): void {
    for (let i = calculatorViewConstants.MIN_BUTTON_VALUE; i <= calculatorViewConstants.MAX_BUTTON_VALUE; i++) {
      this.createAndAddButton(`${i}`, false);

      if (
        i % calculatorViewConstants.NUMBERS_COLUMNS_AMOUNT === 0 &&
        this.operatorIndex < this.operators.length
      ) {
        for (let j = this.buttonCounter; j < this.buttonsPerRow; j++) {
          this.createAndAddButton(`${this.operators[this.operatorIndex]}`, true);
          this.operatorIndex++;
        }
        this.isRowCompleted = true;
      }

      if (this.isRowCompleted) {
        this.addRowToContainer();
        this.isRowCompleted = false;
        this.buttonCounter = 0;
      }
    }
  }

  private renderZeroAndOperators(): void {
    const zeroButton = this.createButton({ content: '0', isOperator: false });
    this.addButtonToRow(zeroButton);
    this.buttonCounter = 1;

    while (this.operatorIndex < this.operators.length) {
      if (this.buttonCounter % this.buttonsPerRow === 0) {
        this.addRowToContainer();
      }

      this.createAndAddButton(`${this.operators[this.operatorIndex]}`, true);
      this.operatorIndex++;
    }

  }

  public renderButtons(): void {
    this.buttonContainer.innerHTML = '';

    const isRowLevelReached =
      this.buttonsPerRow * calculatorViewConstants.THRESHOLD_ROW_LEVEL <
      this.operators.length + calculatorViewConstants.NUMBERS_AMOUNT;

    if (isRowLevelReached) {
      this.buttonsPerRow++;
      this.adjustCalculatorWidth(calculatorViewConstants.BUTTON_WIDTH);
      return this.renderButtons();
    }

    this.renderNumericButtons();
    this.renderZeroAndOperators();
    this.addRowToContainer();

    if (this.isRowCompleted) {
      this.currentRow = this.createRowWrapper();
      this.isRowCompleted = false;
    }
  }

  public showResult(result: number): void {
    this.errorBlock.innerText = '';
    this.resultEl.innerText = result.toString();
  }

  public showError(errorMessage: string): void {
    this.errorBlock.innerText = errorMessage;
  }
}
