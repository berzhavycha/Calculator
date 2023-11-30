import { useEffect, useState } from "react";
import { useOperations } from "@context";
import {
  SpecialOperators,
  INITIAL_BUTTON_PER_ROW,
  calculatorViewConstants,
  BACKSPACE,
  EVALUATE,
  ButtonType,
} from "@components";

export interface IButtonData {
  content: string;
  type: ButtonType;
  isLastButton?: boolean;
}

export const useGetButtonMatrix = (
  lastButtonRef: React.RefObject<HTMLButtonElement>,
  adjustWidth: (increaseWidthBy: number) => void,
): IButtonData[][] => {
  const [specialOperators] = useState([...Object.values(SpecialOperators), BACKSPACE]);
  const [buttonMatrix, setButtonMatrix] = useState<IButtonData[][]>([]);
  const [operationsLoaded, setOperationsLoaded] = useState(false);
  const operations = useOperations();
  const [operators, setOperators] = useState<string[]>([]);

  useEffect(() => {
    if (Object.keys(operations).length > 0) {
      setOperators(Object.keys(operations));
      setOperationsLoaded(true);
    }
  }, [operations]);

  useEffect(() => {
    if (operationsLoaded) {
      const rowArrayContainer: IButtonData[][] = [];
      let currentRowContainer: IButtonData[] = [];
      let buttonCounter = 1;
      let operatorIndex = 0;
      let isRowCompleted = false;

      const generateSpecialOperators = () => {
        const filteredSpecialOperators = specialOperators.filter((op) => op !== ".");
        for (let i = 0; i < filteredSpecialOperators.length; i++) {
          if (buttonCounter % INITIAL_BUTTON_PER_ROW === 0) {
            rowArrayContainer.push(currentRowContainer);
            currentRowContainer = [];
            buttonCounter++;
          }

          currentRowContainer.push({
            content: filteredSpecialOperators[i],
            type: ButtonType.SPECIAL_OPERATOR,
          });
        }

        rowArrayContainer.push(currentRowContainer);
        currentRowContainer = [];
        buttonCounter = 0;
      };

      const generateNumericButtons = () => {
        const basicOperators = operators.slice(0, 4);

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
            rowArrayContainer.push(currentRowContainer);
            currentRowContainer = [];
            isRowCompleted = false;
            buttonCounter = 0;
          }
        }
      };

      const generateZeroAndOperators = () => {
        currentRowContainer.push({
          content: `${SpecialOperators.DOT}`,
          type: ButtonType.NUMERIC,
        });
        buttonCounter = 1;

        currentRowContainer.push({ content: `${0}`, type: ButtonType.NUMERIC });
        currentRowContainer.push({
          content: `${EVALUATE}`,
          type: ButtonType.EVALUATE,
        });

        currentRowContainer.push({
          content: `${operators[operatorIndex]}`,
          type: ButtonType.OPERATOR,
        });
        operatorIndex++;
      };

      const generateRemainingOperators = () => {
        const remainingOperators = operators.slice(4);
        let index = 0;

        remainingOperators.forEach((operator, idx) => {
          rowArrayContainer[index].unshift({
            content: `${operator}`,
            type: ButtonType.OPERATOR,
            isLastButton: idx === remainingOperators.length - 1,
          });
          index++;

          if (index >= rowArrayContainer.length) {
            index = 0;
          } else {
            const isLastButton = operator === remainingOperators[remainingOperators.length - 1];
            const isRowIncomplete = buttonCounter % INITIAL_BUTTON_PER_ROW !== 0;

            if (isLastButton && isRowIncomplete && lastButtonRef.current) {
              const lastButtonCoords = lastButtonRef.current.getBoundingClientRect();
              console.log(lastButtonCoords);
              const amountOfRowsLeft = calculatorViewConstants.THRESHOLD_ROW_LEVEL - index + 3;
              const height =
                amountOfRowsLeft * lastButtonCoords.height +
                calculatorViewConstants.GAP +
                calculatorViewConstants.GAP / 2;

              lastButtonRef.current.style.position = "absolute";
              lastButtonRef.current.style.height = `${height}px`;
              lastButtonRef.current.style.top = `${lastButtonCoords.top}px`;
              lastButtonRef.current.style.left = `${lastButtonCoords.left}px`;
              lastButtonRef.current.style.width = `${lastButtonCoords.width}px`;

              if (index === 1) {
                adjustWidth(calculatorViewConstants.BUTTON_MIN_WIDTH + calculatorViewConstants.GAP * 2);
              }
            }
          }
        });
      };

      const generateCalculatorButtonsMatrix = (): void => {
        generateSpecialOperators();
        generateNumericButtons();
        generateZeroAndOperators();
        rowArrayContainer.push(currentRowContainer);
        currentRowContainer = [];

        if (isRowCompleted) {
          currentRowContainer = [];
          isRowCompleted = false;
        }

        generateRemainingOperators();
      };

      setButtonMatrix(rowArrayContainer);
      generateCalculatorButtonsMatrix();
    }
  }, [operationsLoaded]);

  return buttonMatrix;
};
