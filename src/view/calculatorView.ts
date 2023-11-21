import subject, { ObserverEvents } from '@observer';
import { MathOperators, SpecialOperators } from '@services';
import { isMathOperator, getElementsByText } from '@utils';
import config from '@config';
import { OPERATIONS_WITH_MINUS_PATTERN, TWO_MINUSES_PATTERN } from '@regex';
import {
  DATA_ATTRIBUTE_BUTTON,
  ENTER_CALCULATE_BUTTON,
  INITIAL_BUTTON_PER_ROW,
  calculatorViewConstants,
  numberButtonClasses,
  operatorButtonClasses,
  specialOperatorButtonClasses,
  rowWrapperClasses,
  evaluateButtonClasses,
  BACKSPACE,
  EVALUATE,
} from './index';

interface IButtonType {
  isOperator?: boolean;
  isSpecialOperator?: boolean;
  isNumericButton?: boolean;
  isEvaluateButton?: boolean;
}

interface IButtonData {
  content: string;
  buttonTypeObj: IButtonType;
}

interface IView {
  handleButtonClick(event: Event): void;
  handleEvaluateButtonClick(): void;
  handleInputKeyDown(event: KeyboardEvent): void;
  handleBackspaceButtonClick(): void;
  renderButtons(): void;
  showResult(result: number): void;
  showError(errorMessage: string): void;
}

export class CalculatorView implements IView {
  private calculatorContainer: HTMLDivElement;
  private inputEl: HTMLInputElement;
  private resultEl: HTMLDivElement;
  private buttonContainer: HTMLDivElement;
  private evaluateBtn: HTMLElement;
  private errorBlock: HTMLDivElement;
  private backspaceBtn: HTMLElement | null;
  private operators: string[];
  private specialOperators: string[];
  private buttonsPerRow = INITIAL_BUTTON_PER_ROW;
  private rowArray: HTMLDivElement[] = [];
  private currentRow: HTMLDivElement = this.createRowWrapper();
  private buttonCounter: number = 0;
  private operatorIndex: number = 0;
  private isRowCompleted: boolean = false;

  constructor() {
    this.calculatorContainer = document.querySelector('.calculator-container') as HTMLDivElement;
    this.inputEl = document.querySelector('#expression') as HTMLInputElement;
    this.resultEl = document.querySelector('.result') as HTMLDivElement;
    this.buttonContainer = document.querySelector('.button-container') as HTMLDivElement;
    this.errorBlock = document.querySelector('.error-block') as HTMLDivElement;

    this.operators = [...Object.keys(config.operations)];
    this.specialOperators = [...Object.values(SpecialOperators), BACKSPACE];
    this.renderButtons();

    this.backspaceBtn = getElementsByText(BACKSPACE, 'button');
    this.evaluateBtn = getElementsByText(EVALUATE, 'button');
    this.setupEventListeners();

    subject.subscribe(ObserverEvents.CALCULATED, this.showResult.bind(this));
    subject.subscribe(ObserverEvents.SHOW_ERROR, this.showError.bind(this));
  }

  private setupEventListeners() {
    this.buttonContainer.addEventListener('click', this.handleButtonClick.bind(this));
    this.evaluateBtn.addEventListener('click', this.handleEvaluateButtonClick.bind(this));
    this.inputEl.addEventListener('keydown', this.handleInputKeyDown.bind(this));
    this.inputEl.addEventListener('keyup', this.handleInputChange.bind(this));
    this.backspaceBtn?.addEventListener('click', this.handleBackspaceButtonClick.bind(this));
  }

  private validateForBadExpression(inputValue: string) {
    if (inputValue.match(TWO_MINUSES_PATTERN)) {
      inputValue = inputValue.replace(TWO_MINUSES_PATTERN, MathOperators.PLUS);
      this.inputEl.value = inputValue;
    }

    if (inputValue.match(OPERATIONS_WITH_MINUS_PATTERN)) {
      const modifiedInput = inputValue.replace(OPERATIONS_WITH_MINUS_PATTERN, '$1$2(-$3)');

      if (modifiedInput !== this.inputEl.value) {
        this.inputEl.value = modifiedInput;
      }
    }
  }

  private handleInputChange(): void {
    const inputValue = this.inputEl.value;

    this.validateForBadExpression(inputValue);
  }

  public handleButtonClick(event: Event): void {
    const target = event.target as HTMLButtonElement;
    if (target && target.dataset.calcBtn === SpecialOperators.CLEAR_ALL) {
      this.inputEl.value = '';
      this.resultEl.innerText = '0';
    } else if (target instanceof HTMLButtonElement && target.innerText !== BACKSPACE && target.innerText !== EVALUATE) {
      const inputValue = this.inputEl.value;
      this.validateForBadExpression(inputValue);
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

  private addClassesToElement(element: HTMLElement, classes: string[]) {
    classes.forEach((operatorClass) => {
      element.classList.add(operatorClass);
    });
  }

  private createButton({ content, buttonTypeObj }: IButtonData): HTMLButtonElement {
    const button = document.createElement('button');
    button.style.minWidth = `${calculatorViewConstants.BUTTON_MIN_WIDTH}px`;

    if (buttonTypeObj['isOperator']) {
      this.addClassesToElement(button, Object.values(operatorButtonClasses));
    } else if (buttonTypeObj['isSpecialOperator']) {
      this.addClassesToElement(button, Object.values(specialOperatorButtonClasses));
    } else if (buttonTypeObj['isNumericButton']) {
      this.addClassesToElement(button, Object.values(numberButtonClasses));
    } else {
      this.addClassesToElement(button, Object.values(evaluateButtonClasses));
    }

    button.setAttribute(DATA_ATTRIBUTE_BUTTON, content);
    button.textContent = content;

    return button;
  }

  private createRowWrapper(): HTMLDivElement {
    const rowWrapper = document.createElement('div');
    rowWrapper.classList.add(rowWrapperClasses.DISPLAY, rowWrapperClasses.MARGIN, rowWrapperClasses.GAP);

    this.rowArray.push(rowWrapper);

    return rowWrapper;
  }

  private adjustCalculatorWidth(increaseWidthBy: number): void {
    const { width } = this.calculatorContainer.getBoundingClientRect();
    this.calculatorContainer.style.minWidth = `${width + increaseWidthBy}px`;
  }

  private createAndAddButton(content: string, buttonTypeObj: IButtonType): void {
    const button = this.createButton({ content, buttonTypeObj });
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
    const basicOperators = this.operators.slice(0, 4);

    for (let i = calculatorViewConstants.MIN_BUTTON_VALUE; i <= calculatorViewConstants.MAX_BUTTON_VALUE; i++) {
      this.createAndAddButton(`${i}`, { isNumericButton: true });

      if (i % calculatorViewConstants.NUMBERS_COLUMNS_AMOUNT === 0 && this.operatorIndex < basicOperators.length) {
        this.createAndAddButton(`${basicOperators[this.operatorIndex]}`, { isOperator: true });
        this.operatorIndex++;
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
    this.createAndAddButton(`${SpecialOperators.DOT}`, { isNumericButton: true });
    this.buttonCounter = 1;

    this.createAndAddButton(`${0}`, { isNumericButton: true });
    this.createAndAddButton(EVALUATE, { isEvaluateButton: true });

    this.createAndAddButton(`${this.operators[this.operatorIndex]}`, { isOperator: true });
    this.operatorIndex++;
  }

  private renderSpecialOperators(): void {
    const filteredSpecialOperators = this.specialOperators.filter((op) => op !== '.');
    for (let i = 0; i < filteredSpecialOperators.length; i++) {
      if (this.buttonCounter % this.buttonsPerRow === 0) {
        this.addRowToContainer();
      }

      this.createAndAddButton(filteredSpecialOperators[i], { isSpecialOperator: true });
    }

    this.addRowToContainer();
    this.buttonCounter = 0;
  }

  private renderRemainingOperators(): void {
    const remainingOperators = this.operators.slice(4);
    let index = 1;

    remainingOperators.forEach((operator) => {
      const button = this.createButton({ content: `${operator}`, buttonTypeObj: { isOperator: true } });
      this.rowArray[index].prepend(button);
      index++;

      if (index >= this.rowArray.length - 1) {
        index = 1;
      } else {
        const isLastButton = operator === remainingOperators[remainingOperators.length - 1];
        const isRowIncomplete = this.buttonCounter % this.buttonsPerRow !== 0;

        if (isLastButton && isRowIncomplete) {
          const lastButtonCoords = button.getBoundingClientRect();
          console.log(lastButtonCoords);
          const amountOfRowsLeft = calculatorViewConstants.THRESHOLD_ROW_LEVEL - index + 3;
          const gapsHeight = amountOfRowsLeft * calculatorViewConstants.GAP - calculatorViewConstants.GAP;
          const height = amountOfRowsLeft * lastButtonCoords.height + gapsHeight;

          button.style.position = 'absolute';
          button.style.height = `${height}px`;
          button.style.top = `${lastButtonCoords.top}px`;
          button.style.left = `${lastButtonCoords.left}px`;
          button.style.width = `${lastButtonCoords.width}px`;

          if (index === 2) {
            this.adjustCalculatorWidth(calculatorViewConstants.BUTTON_MIN_WIDTH + calculatorViewConstants.GAP * 2);
          }
        }
      }
    });
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

    this.renderSpecialOperators();
    this.renderNumericButtons();
    this.renderZeroAndOperators();
    this.addRowToContainer();

    if (this.isRowCompleted) {
      this.currentRow = this.createRowWrapper();
      this.isRowCompleted = false;
    }

    this.renderRemainingOperators();
  }

  public showResult(result: number): void {
    this.errorBlock.innerText = '';
    this.resultEl.innerText = result.toString();
  }

  public showError(errorMessage: string): void {
    this.errorBlock.innerText = errorMessage;
  }
}
