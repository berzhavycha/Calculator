import { FC } from "react";
import { buttonClasses } from "@components";
import { IButtonData } from "@components/CalculatorContainer/components/CalculatorButtons/hooks";

interface IButtonMatrixProps {
  buttonMatrix: IButtonData[][];
  lastButtonRef: React.RefObject<HTMLButtonElement>;
  onButtonClick: (button: IButtonData) => void;
}

export const ButtonMatrix: FC<IButtonMatrixProps> = ({ buttonMatrix, lastButtonRef, onButtonClick }) => {
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
                  onClick={() => onButtonClick(button)}
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
