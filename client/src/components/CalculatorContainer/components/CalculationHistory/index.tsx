import React from "react";
import { useFetchExpressions } from './hooks/useFetchExpressions';
import { List } from "@components";

interface ICalculationHistoryProps {
  expression: string;
  result: string;
  contentKey: "expression";
  onChoosingListItem: (expression: string) => void;
}

export const CalculationHistory: React.FC<ICalculationHistoryProps> = React.memo(({
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
});
