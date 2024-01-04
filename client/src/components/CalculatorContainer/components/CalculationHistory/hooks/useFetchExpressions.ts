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
        );

        setLastExpressions([...data].reverse());
      } catch (error) {
        setLastExpressions([]);
      }
    };
    fetchOperations();
  }, [setLastExpressions]);

  useEffect(() => {
    if (result && !isHistoryItemClicked) {
      setLastExpressions((prevExpressions: ICalculation[]) => {
        if (prevExpressions.length < EXPRESSION_LIMIT) {
          return [
            ...prevExpressions,
            { expression, result },
          ];
        }

        return [
          ...prevExpressions.slice(1, EXPRESSION_LIMIT),
          { expression, result },
        ];
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

};
