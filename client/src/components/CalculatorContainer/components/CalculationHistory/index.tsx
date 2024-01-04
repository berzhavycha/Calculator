import { Dispatch, SetStateAction, useState, FC, memo } from "react";
import { List } from "@components";
import { queryBuilder } from "@queryBuilder";
import { useFetchExpressions, ICalculation } from './hooks/useFetchExpressions';

interface ICalculationHistoryProps {
  expression: string;
  result: string;
  contentKey: "expression" | "result";
  setExpression: Dispatch<SetStateAction<string>>;
  setResult: Dispatch<SetStateAction<string>>;
}

export const CalculationHistory: FC<ICalculationHistoryProps> = memo(({
  expression,
  result,
  contentKey,
  setExpression,
  setResult
}) => {
  const [lastExpressions, setLastExpressions] = useState<ICalculation[]>([])
  const [isHistoryItemClicked, setIsHistoryItemClicked] = useState<boolean>(false)

  useFetchExpressions(setLastExpressions, isHistoryItemClicked, expression, result);

  const handleExpressionClick = async (
    content: string
  ): Promise<void> => {
    const expressionBeforeUpdate = expression
    const lastExpressionsBeforeUpdate = lastExpressions

    const cachedClickedExpressionIndex = lastExpressions.findIndex(item => item.expression === content)

    if (cachedClickedExpressionIndex !== -1) {
      const { expression, result } = lastExpressions[cachedClickedExpressionIndex]

      setExpression(expression);
      setIsHistoryItemClicked(true)
      setResult(result)

      setLastExpressions((prevExpressions: ICalculation[]) => {
        const lastExpressionsCopy = [...prevExpressions]

        lastExpressionsCopy.splice(cachedClickedExpressionIndex, 1)
        lastExpressionsCopy.push({ expression, result })

        return lastExpressionsCopy
      })
    }

    try {
      await queryBuilder.makeRequest("calculations", "POST", JSON.stringify({
        expression: content,
      }));
      console.log('Making an optimistic request because of clicking history item:', content);
    } catch (error) {
      setExpression(expressionBeforeUpdate);
      setLastExpressions(lastExpressionsBeforeUpdate)
      setResult('')
      console.error('Error occurred during optimistic update while clicking history item:', error);
    }

    setIsHistoryItemClicked(false)
  };

  return (
    <>
      {lastExpressions.length > 0 ? (
        <List items={lastExpressions} contentKey={contentKey} onItemClick={handleExpressionClick} />
      ) : (
        <p className="text-right pr-2 mb-4">No last calculations found</p>
      )}
    </>
  );
});
