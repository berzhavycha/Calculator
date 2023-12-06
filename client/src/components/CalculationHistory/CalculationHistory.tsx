import React, { useState } from "react";
import { useCurrentExpression } from "@context";
import { ICalculation, useFetchExpressions } from "./hooks";
import { queryBuilder } from "@queryBuilder";

export const CalculationHistory: React.FC = () => {
  const { expression, setExpression, setResult } = useCurrentExpression();
  const [lastExpressions, setLastExpressions] = useState<ICalculation[]>([])

  useFetchExpressions(setLastExpressions);

  const handleExpressionClick = async (
    event: React.MouseEvent<HTMLParagraphElement>
  ): Promise<void> => {
    const clickedExpression = event.currentTarget.innerText;
    const expressionBeforeUpdate = expression
    const lastExpressionsBeforeUpdate = lastExpressions
    
    const cachedClickedExpression = lastExpressions.find(item => item.expression === clickedExpression)

    if(cachedClickedExpression){
      setExpression(cachedClickedExpression.expression);
      setResult(cachedClickedExpression.result)
    }

    try {
      await queryBuilder.makeRequest("calculations", "POST", {
        expression: clickedExpression,
      });
    } catch (error) {
      setExpression(expressionBeforeUpdate);
      setLastExpressions(lastExpressionsBeforeUpdate)
      setResult('')
    }
  };

  return (
    <div className="bg-gray-100 mb-6 p-2 pb-0.5 rounded-md shadow-md">
      {lastExpressions.length > 0 ? (
        <ul>
          {lastExpressions.map((calculation, index) => (
            <li
              key={index}
              className="mb-2 p-1 pr-2 bg-white rounded-md shadow-md hover:bg-gray-100 text-xs cursor-pointer"
            >
              <p onClick={handleExpressionClick} className="text-blue-500 font-bold text-right">
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
