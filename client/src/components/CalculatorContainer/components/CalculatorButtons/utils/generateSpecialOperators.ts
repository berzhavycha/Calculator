import { ButtonType, INITIAL_BUTTON_PER_ROW, SpecialOperators} from "@components";
import { IButtonData } from "../hooks";

export const generateSpecialOperators = (
  specialOperators: string[],
): IButtonData[][] => {
  let buttonCounter = 1;
  const updatedRowArrayContainer: IButtonData[][] = [];
  let updatedCurrentRowContainer: IButtonData[] = [];
  const filteredSpecialOperators = specialOperators.filter((op) => op !== SpecialOperators.DOT);

  for(const operator of filteredSpecialOperators){
    if (buttonCounter % INITIAL_BUTTON_PER_ROW === 0) {
      updatedRowArrayContainer.push(updatedCurrentRowContainer);
      updatedCurrentRowContainer = [];
      buttonCounter++;
    }

    updatedCurrentRowContainer.push({
      content: operator,
      type: ButtonType.SPECIAL_OPERATOR,
    });
  }


  updatedRowArrayContainer.push(updatedCurrentRowContainer);

  return updatedRowArrayContainer;
};
