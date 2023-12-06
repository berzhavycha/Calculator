import { useEffect, Dispatch, SetStateAction } from "react";
import { queryBuilder } from "@queryBuilder";
import { EXPRESSION_LIMIT, EXPRESSION_ORDER } from "@global";

export interface ICalculation {
  expression: string;
  result: string
}

interface IResponse {
  expression: string;
  result: string;
}

type SetLastExpressions = Dispatch<SetStateAction<ICalculation[]>>;

export const useFetchExpressions = (setLastExpressions: SetLastExpressions, isHistoryItemClicked: boolean, expression: string, result: string): void => {
  useEffect(() => {
    const fetchOperations = async () => {
      try {

        const data = await queryBuilder.makeRequest<IResponse[]>(
          `calculations?limit=${EXPRESSION_LIMIT}&order=${EXPRESSION_ORDER}`,
          "GET",
        );

        setLastExpressions([...data].reverse());
      } catch (error) {
        setLastExpressions([]);
      }
    };
    fetchOperations();
  }, []);

  useEffect(() => {
    if (result && !isHistoryItemClicked) {
      setLastExpressions((prevExpressions: ICalculation[]) => {
        const expressionIndex = prevExpressions.findIndex(item => item.expression === expression)

        if (expressionIndex !== -1) {

          const lastExpressionsCopy = [...prevExpressions]

          lastExpressionsCopy.splice(expressionIndex, 1)
          lastExpressionsCopy.push({ expression, result })

          return lastExpressionsCopy
        }

        const updatedExpressions: ICalculation[] = [
          ...prevExpressions.slice(1, import.meta.env.VITE_EXPRESSION_LIMIT),
          { expression, result },
        ];

        return updatedExpressions
      });
    }
  }, [result]);

};
