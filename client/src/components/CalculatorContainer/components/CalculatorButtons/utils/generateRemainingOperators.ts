import { ButtonType, INITIAL_BUTTON_PER_ROW, calculatorViewConstants } from "@components";
import {IButtonData} from '../hooks'

export const generateRemainingOperators = (
  rowArrayContainer: IButtonData[][],
  operations: string[],
  lastButtonRef: React.RefObject<HTMLButtonElement>,
  resizeContainer: (increaseWidthBy: number) => void,
): IButtonData[][] => {

  const remainingOperators = operations.slice(4);
  let index = 0;
  const buttonCounter = 1;
  const updatedRowArrayContainer = [...rowArrayContainer]

  remainingOperators.forEach((operator, idx) => {
    updatedRowArrayContainer[index].unshift({
      content: `${operator}`,
      type: ButtonType.OPERATOR,
      isLastButton: idx === remainingOperators.length - 1,
    });
    index++;

    if (index >= updatedRowArrayContainer.length) {
      index = 0;
    } else {
      const isLastButton = operator === remainingOperators[remainingOperators.length - 1];
      const isRowIncomplete = buttonCounter % INITIAL_BUTTON_PER_ROW !== 0;

      if (isLastButton && isRowIncomplete && lastButtonRef.current) {
        const lastButtonCoords = lastButtonRef.current.getBoundingClientRect();
        console.log(lastButtonCoords);
        const amountOfRowsLeft = calculatorViewConstants.THRESHOLD_ROW_LEVEL - index + 3;
        const height =
          amountOfRowsLeft * lastButtonCoords.height + calculatorViewConstants.GAP + calculatorViewConstants.GAP / 2;

        lastButtonRef.current.style.position = "absolute";
        lastButtonRef.current.style.height = `${height}px`;
        lastButtonRef.current.style.top = `${lastButtonCoords.top}px`;
        lastButtonRef.current.style.left = `${lastButtonCoords.left}px`;
        lastButtonRef.current.style.width = `${lastButtonCoords.width}px`;

        if (index === 1) {
          resizeContainer(calculatorViewConstants.BUTTON_MIN_WIDTH + calculatorViewConstants.GAP * 2);
        }
      }
    }
  });

  return updatedRowArrayContainer
};
