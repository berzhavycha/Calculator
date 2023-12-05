import { calculatorViewConstants, IButtonData, ButtonType } from "@components";

type IGenerateNumberButtonsReturn = {
  operatorIndex: number;
  isRowCompleted: boolean;
  updatedRowArrayContainer: IButtonData[][];
};

export const generateNumericButtons = (
  rowArrayContainer: IButtonData[][],
  operations: string[],
): IGenerateNumberButtonsReturn => {
  const basicOperators = operations.slice(0, 4);
  let operatorIndex = 0;
  let isRowCompleted = false;
  const updatedRowArrayContainer: IButtonData[][] = [...rowArrayContainer];
  let currentRowContainer = [];

  for (let i = calculatorViewConstants.MIN_BUTTON_VALUE; i <= calculatorViewConstants.MAX_BUTTON_VALUE; i++) {
    currentRowContainer.push({
      content: `${i}`,
      type: ButtonType.NUMERIC,
    });

    if (i % calculatorViewConstants.NUMBERS_COLUMNS_AMOUNT === 0 && operatorIndex < basicOperators.length) {
      currentRowContainer.push({
        content: `${basicOperators[operatorIndex]}`,
        type: ButtonType.OPERATOR,
      });
      operatorIndex++;
      isRowCompleted = true;
    }

    if (isRowCompleted) {
      updatedRowArrayContainer.push([...currentRowContainer]); 
      currentRowContainer = [];
      isRowCompleted = false;
    }
  }

  return { operatorIndex, isRowCompleted, updatedRowArrayContainer };
};
