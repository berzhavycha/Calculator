import { ButtonType, INITIAL_BUTTON_PER_ROW, IButtonData } from "@components";

export const generateSpecialOperators = (
  rowArrayContainer: IButtonData[][],
  currentRowContainer: IButtonData[],
  specialOperators: string[],
): IButtonData[][] => {
  let buttonCounter = 1;
  const updatedRowArrayContainer: IButtonData[][] = [...rowArrayContainer];
  let updatedCurrentRowContainer: IButtonData[] = [...currentRowContainer];
  const filteredSpecialOperators = specialOperators.filter((op) => op !== ".");

  for (let i = 0; i < filteredSpecialOperators.length; i++) {
    if (buttonCounter % INITIAL_BUTTON_PER_ROW === 0) {
      updatedRowArrayContainer.push(updatedCurrentRowContainer);
      updatedCurrentRowContainer = [];
      buttonCounter++;
    }

    updatedCurrentRowContainer.push({
      content: filteredSpecialOperators[i],
      type: ButtonType.SPECIAL_OPERATOR,
    });
  }

  updatedRowArrayContainer.push(updatedCurrentRowContainer);

  return updatedRowArrayContainer;
};
