import React, { useRef } from "react";
import { useOperations } from "@context";
import { useGetButtonMatrix, IButtonData } from "./hooks";
import { BACKSPACE, buttonClasses, ButtonType } from "@components";

interface ICalculatorButtonsProps {
  expression: string;
  onButtonClick: (expression: string) => void;
  resizeContainer: (increaseWidthBy: number) => void;
  onEvaluate: () => void;
}

export const CalculatorButtons: React.FC<ICalculatorButtonsProps> = ({
  expression,
  onButtonClick,
  resizeContainer,
  onEvaluate,
}) => {
  const operations = useOperations();
  const lastButtonRef = useRef<HTMLButtonElement>(null);
  const buttonMatrix = useGetButtonMatrix(lastButtonRef, resizeContainer);

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

  return (
    <div className="button-container flex flex-col items-end">
      {buttonMatrix.map((row, idx) => {
        return (
          <div className="flex mb-4 gap-8" key={idx}>
            {row.map((button) => {
              const buttonStyles = Object.values(buttonClasses[button.type]).join(" ");

              return (
                <button
                  key={button.content}
                  ref={button.isLastButton ? lastButtonRef : null}
                  className={`${buttonStyles}`}
                  data-calc-btn={button.content}
                  onClick={() => handleClick(button)}
                >
                  {button.content}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
