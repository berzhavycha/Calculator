import { SpecialOperators, ButtonType, IButtonData, EVALUATE } from "@components";

export const generateZeroAndOperators = (
  currentRowContainer: IButtonData[],
  operations: string[],
  operatorIndex: number,
): void => {
  currentRowContainer.push({
    content: `${SpecialOperators.DOT}`,
    type: ButtonType.NUMERIC,
  });

  currentRowContainer.push({ content: `${0}`, type: ButtonType.NUMERIC });
  currentRowContainer.push({
    content: `${EVALUATE}`,
    type: ButtonType.EVALUATE,
  });

  currentRowContainer.push({
    content: `${operations[operatorIndex]}`,
    type: ButtonType.OPERATOR,
  });
};
