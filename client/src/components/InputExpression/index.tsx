import {FC, memo} from "react";
import { ENTER_CALCULATE_BUTTON } from "@components";

interface IInputExpressionProps {
  expression: string;
  inputName: string;
  onExpressionChange: (expression: string) => void;
  onEnter: () => void;
}

export const InputExpression: FC<IInputExpressionProps> = memo(({ expression, inputName, onExpressionChange, onEnter }) => {
  const onKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === ENTER_CALCULATE_BUTTON) {
      onEnter();
    }
  };

  return (
    <input
      value={expression}
      aria-label={inputName}
      onChange={(e) => onExpressionChange(e.target.value)}
      onKeyDown={onKeyDown}
      className="w-full p-2 border rounded outline-none text-right"
      type="text"
    />
  );
});
