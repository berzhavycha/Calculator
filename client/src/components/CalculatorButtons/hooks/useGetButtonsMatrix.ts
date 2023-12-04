import { useEffect, useState } from "react";
import { useOperations } from "@context";
import {
  generateNumericButtons,
  generateRemainingOperators,
  generateSpecialOperators,
  generateZeroAndOperators,
} from "@components";
import { SpecialOperators, BACKSPACE, ButtonType } from "@components";

export interface IButtonData {
  content: string;
  type: ButtonType;
  isLastButton?: boolean;
}

export const useGetButtonMatrix = (
  lastButtonRef: React.RefObject<HTMLButtonElement>,
  resizeContainer: (increaseWidthBy: number) => void,
): IButtonData[][] => {
  const [buttonMatrix, setButtonMatrix] = useState<IButtonData[][]>([]);
  const fetchedOperations = useOperations();

  useEffect(() => {
    const rowArrayContainer: IButtonData[][] = [];
    let currentRowContainer: IButtonData[] = [];
    const operations = Object.keys(fetchedOperations);
    const specialOperators = [...Object.values(SpecialOperators), BACKSPACE];

    const generateCalculatorButtonsMatrix = (): void => {
      generateSpecialOperators(rowArrayContainer, currentRowContainer, specialOperators);
      currentRowContainer = [];

      const numericRes = generateNumericButtons(rowArrayContainer, operations);
      generateZeroAndOperators(currentRowContainer, operations, numericRes.operatorIndex);

      rowArrayContainer.push(currentRowContainer);
      currentRowContainer = [];

      if (numericRes.isRowCompleted) {
        currentRowContainer = [];
        numericRes.isRowCompleted = false;
      }

      generateRemainingOperators(rowArrayContainer, operations, lastButtonRef, resizeContainer);
    };

    setButtonMatrix(rowArrayContainer);
    generateCalculatorButtonsMatrix();
    
  }, [fetchedOperations, lastButtonRef, resizeContainer]);

  return buttonMatrix;
};
