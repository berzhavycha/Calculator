import React from "react";
import { useCurrentExpression } from "@context";
import { ENTER_CALCULATE_BUTTON } from "@components";

interface IInputExpressionProps {
  getResult: () => void;
}

export const InputExpression: React.FC<IInputExpressionProps> = ({ getResult }) => {
  const { expression, setExpression } = useCurrentExpression();

  const onKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === ENTER_CALCULATE_BUTTON) {
      getResult();
    }
  };

  return (
    <input
      value={expression}
      onChange={(e) => setExpression(e.target.value)}
      onKeyDown={onKeyDown}
      className="w-full p-2 border rounded outline-none text-right"
      type="text"
    />
  );
};
