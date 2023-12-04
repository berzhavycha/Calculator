import React from "react";
import { ENTER_CALCULATE_BUTTON } from "@components";

interface IInputExpressionProps {
  expression: string;
  onExpressionChange: (expression: string) => void;
  onEnter: () => void;
}

export const InputExpression: React.FC<IInputExpressionProps> = ({ expression, onExpressionChange, onEnter }) => {
  const onKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === ENTER_CALCULATE_BUTTON) {
      await onEnter();
    }
  };

  return (
    <input
      value={expression}
      onChange={(e) => onExpressionChange(e.target.value)}
      onKeyDown={onKeyDown}
      className="w-full p-2 border rounded outline-none text-right"
      type="text"
    />
  );
};
