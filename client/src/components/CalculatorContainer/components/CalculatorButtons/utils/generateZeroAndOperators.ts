import { ButtonType, zeroAndOperatorsLine } from "@components";
import {IButtonData} from '../hooks'

export const generateZeroAndOperators = (
  operations: string[],
  operatorIndex: number,
): IButtonData[] => {
  const updatedCurrentRowContainer: IButtonData[] = [];

  const currentLine = [...zeroAndOperatorsLine, {
    content: `${operations[operatorIndex]}`,
    type: ButtonType.OPERATOR,
  }];

  currentLine.forEach(({ content, type }) => {
    updatedCurrentRowContainer.push({content, type});
  });

  return updatedCurrentRowContainer;
};
