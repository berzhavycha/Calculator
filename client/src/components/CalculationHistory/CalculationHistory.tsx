import React from "react";
import { useCurrentExpression } from "@context";
import { useFetchExpressions } from "./hooks";

export const CalculationHistory: React.FC = () => {
  const { expression, setExpression } = useCurrentExpression();
  const expressions = useFetchExpressions();

  const handleExpressionClick = (
    event: React.MouseEvent<HTMLParagraphElement>,
  ): void => {
    const clickedExpression = event.currentTarget.innerText;
    setExpression(expression + clickedExpression);
  };

  return (
    <div className="bg-gray-100 mb-6 p-2 pb-0.5 rounded-md shadow-md">
      {expressions.length > 0 ? (
        <ul>
          {expressions.map((calculation, index) => (
            <li
              key={index}
              className="mb-2 p-1 pr-2 bg-white rounded-md shadow-md hover:bg-gray-100 text-xs cursor-pointer"
            >
              <p
                onClick={handleExpressionClick}
                className="text-blue-500 font-bold text-right"
              >
                {calculation.expression}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-right pr-2">No last calculations found</p>
      )}
    </div>
  );
};
