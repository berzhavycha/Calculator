import React, { useRef } from "react";
import { useOperations, useCurrentExpression } from "@context";
import { useGetButtonMatrix, IButtonData } from "./hooks";
import { BACKSPACE, buttonClasses, ButtonType } from "@components";

interface ICalculatorButtonsProps {
  // eslint-disable-next-line no-unused-vars
  adjustWidth: (increaseWidthBy: number) => void;
  getResult: () => void;
}

export const CalculatorButtons: React.FC<ICalculatorButtonsProps> = ({ adjustWidth, getResult }) => {
  const { expression, setExpression } = useCurrentExpression();
  const operations = useOperations();
  const lastButtonRef = useRef<HTMLButtonElement>(null);
  const buttonMatrix = useGetButtonMatrix(lastButtonRef, adjustWidth);

  const handleBackspaceButtonClick = (): void => {
    const inputValue = expression.trim();

    const operators = Object.keys(operations);

    let foundOperator = "";
    for (let i = 0; i < operators.length; i++) {
      const currentOperator = operators[i];
      if (inputValue.endsWith(currentOperator)) {
        foundOperator = currentOperator;
        break;
      }
    }

    if (foundOperator) {
      const operatorLength = foundOperator.length;
      setExpression(inputValue.slice(0, inputValue.length - operatorLength));
    } else {
      setExpression(inputValue.slice(0, -1));
    }
  };

  const handleClick = (button: IButtonData): void => {
    if (button.type === ButtonType.EVALUATE) {
      getResult();
    } else if (button.type === ButtonType.SPECIAL_OPERATOR && button.content === BACKSPACE) {
      handleBackspaceButtonClick();
    } else {
      setExpression(expression + button.content);
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
