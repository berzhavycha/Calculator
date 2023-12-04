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
  const calculations = useFetchExpressions(expression, result);

  const handleExpressionClick = (content: string): void => {
    onChoosingListItem(content);
  };

  return (
    <>
      {calculations.length > 0 ? (
        <List items={calculations} contentKey={contentKey} onItemClick={handleExpressionClick} />
      ) : (
        <p className="text-right pr-2 mb-4">No last calculations found</p>
      )}
    </>
  );
};
