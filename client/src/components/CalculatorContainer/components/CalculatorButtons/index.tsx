import React, { useRef } from "react";
import { useOperations } from "@context";
import { useGetButtonMatrix, IButtonData } from "./hooks";
import { BACKSPACE, ButtonType, ButtonMatrix } from "@components";

interface ICalculatorButtonsProps {
  expression: string;
  onButtonClick: (expression: string) => void;
  resizeCalculatorContainer: (increaseWidthBy: number) => void;
  onEvaluate: () => void;
}

export const CalculatorButtons: React.FC<ICalculatorButtonsProps> = React.memo(({
  expression,
  onButtonClick,
  resizeCalculatorContainer,
  onEvaluate,
}) => {
  const operations = useOperations();
  const lastButtonRef = useRef<HTMLButtonElement>(null);
  const buttonMatrix = useGetButtonMatrix(lastButtonRef, resizeCalculatorContainer);

  const handleBackspaceButtonClick = (): void => {
    const inputValue = expression.trim();
    const operators = Object.keys(operations);

    const foundOperator = operators.find((currentOperator) => inputValue.endsWith(currentOperator));

    if (foundOperator) {
      const operatorLength = foundOperator.length;
      onButtonClick(inputValue.slice(0, inputValue.length - operatorLength));
    } else {
      onButtonClick(inputValue.slice(0, -1));
    }
  };

  const handleClick = (button: IButtonData): void => {
    if (button.type === ButtonType.EVALUATE) {
      onEvaluate();
    } else if (button.type === ButtonType.SPECIAL_OPERATOR && button.content === BACKSPACE) {
      handleBackspaceButtonClick();
    } else {
      onButtonClick(expression + button.content);
    }
  };

  return <ButtonMatrix buttonMatrix={buttonMatrix} lastButtonRef={lastButtonRef} onButtonClick={handleClick} />;
});
