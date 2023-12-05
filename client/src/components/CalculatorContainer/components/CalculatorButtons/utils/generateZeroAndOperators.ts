import { ButtonType, zeroAndOperatorsLine } from "@components";
import {IButtonData} from '../hooks'

export const generateZeroAndOperators = (
  currentRowContainer: IButtonData[],
  operations: string[],
  operatorIndex: number,
): IButtonData[] => {
  const updatedCurrentRowContainer = [...currentRowContainer];

  const currentLine = [...zeroAndOperatorsLine, {
    content: `${operations[operatorIndex]}`,
    type: ButtonType.OPERATOR,
  }];

  currentLine.forEach(({ content, type }) => {
    updatedCurrentRowContainer.push({content, type});
  });

  return updatedCurrentRowContainer;
};
