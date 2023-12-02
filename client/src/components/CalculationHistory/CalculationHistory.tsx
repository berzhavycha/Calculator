import React from "react";
import { List, useFetchExpressions } from "@components";

interface ICalculationHistoryProps {
  expression: string;
  result: string;
  contentKey: "expression";
  onChoosingListItem: (expression: string) => void;
}

export const CalculationHistory: React.FC<ICalculationHistoryProps> = ({
  expression,
  result,
  contentKey,
  onChoosingListItem,
}) => {
  const expressions = useFetchExpressions(expression, result);

  const handleExpressionClick = (content: string): void => {
    onChoosingListItem(content);
  };

  return (
    <div className="bg-gray-100 mb-6 p-2 pb-0.5 rounded-md shadow-md">
      {expressions.length > 0 ? (
        <List items={expressions} contentKey={contentKey} onItemClick={handleExpressionClick} />
      ) : (
        <p className="text-right pr-2">No last calculations found</p>
      )}
    </div>
  );
};
