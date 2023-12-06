import React, { useState } from "react";
import { useCurrentExpression } from "@context";
import { ICalculation, useFetchExpressions } from "./hooks";
import { queryBuilder } from "@queryBuilder";

export const CalculationHistory: React.FC = () => {
  const { expression, setExpression, setResult } = useCurrentExpression();
  const [lastExpressions, setLastExpressions] = useState<ICalculation[]>([])
  const [isHistoryItemClicked, setIsHistoryItemClicked] = useState<boolean>(false)

  useFetchExpressions(setLastExpressions, isHistoryItemClicked);

  const handleExpressionClick = async (
    event: React.MouseEvent<HTMLParagraphElement>
  ): Promise<void> => {
    const clickedExpression = event.currentTarget.innerText;
    const expressionBeforeUpdate = expression
    const lastExpressionsBeforeUpdate = lastExpressions

    const cachedClickedExpressionIndex = lastExpressions.findIndex(item => item.expression === clickedExpression)

    if (cachedClickedExpressionIndex !== -1) {
      const { expression, result } = lastExpressions[cachedClickedExpressionIndex]

      setExpression(expression);
      setIsHistoryItemClicked(true)
      setResult(result)

      setLastExpressions((prevExpressions: ICalculation[]) => {
        const lastExpressionsCopy = [...prevExpressions]

        lastExpressionsCopy.splice(cachedClickedExpressionIndex, 1)
        lastExpressionsCopy.push({expression, result})

        return lastExpressionsCopy
      })
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

    setIsHistoryItemClicked(false)
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
