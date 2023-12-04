import { ButtonType, INITIAL_BUTTON_PER_ROW, IButtonData } from "@components";

export const generateSpecialOperators = (
  rowArrayContainer: IButtonData[][],
  currentRowContainer: IButtonData[],
  specialOperators: string[],
): void => {
  let buttonCounter = 1;

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
};
