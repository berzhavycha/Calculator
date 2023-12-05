import { useEffect, useState } from "react";
import { useOperations } from "@context";
import {
  generateNumericButtons,
  generateRemainingOperators,
  generateSpecialOperators,
  generateZeroAndOperators
} from '../utils'
import {
  SpecialOperators,
  BACKSPACE,
  ButtonType,
} from "@components";

export interface IButtonData {
  content: string;
  type: ButtonType;
  isLastButton?: boolean;
}

export const useGetButtonMatrix = (
  lastButtonRef: React.RefObject<HTMLButtonElement>,
  resizeCalculatorContainer: (increaseWidthBy: number) => void,
): IButtonData[][] => {
  const [buttonMatrix, setButtonMatrix] = useState<IButtonData[][]>([]);
  const fetchedOperations = useOperations();

  useEffect(() => {
    const generateCalculatorButtonsMatrix = (): IButtonData[][] => {
      let rowArrayContainer: IButtonData[][] = [];
      let currentRowContainer: IButtonData[] = [];
      const operations = Object.keys(fetchedOperations);
      const specialOperators = [...Object.values(SpecialOperators), BACKSPACE];

      rowArrayContainer = generateSpecialOperators(rowArrayContainer, currentRowContainer, specialOperators);
      currentRowContainer = [];

      const numericRes = generateNumericButtons(rowArrayContainer, operations);
      rowArrayContainer = numericRes.updatedRowArrayContainer
      currentRowContainer = generateZeroAndOperators(currentRowContainer, operations, numericRes.operatorIndex);

      rowArrayContainer.push(currentRowContainer);
      currentRowContainer = [];

      if (numericRes.isRowCompleted) {
        currentRowContainer = [];
        numericRes.isRowCompleted = false;
      }

      rowArrayContainer = generateRemainingOperators(rowArrayContainer, operations, lastButtonRef, resizeCalculatorContainer);

      return rowArrayContainer
    };

    setButtonMatrix(generateCalculatorButtonsMatrix());
  }, [fetchedOperations, lastButtonRef, resizeCalculatorContainer]);

  return buttonMatrix;
};
