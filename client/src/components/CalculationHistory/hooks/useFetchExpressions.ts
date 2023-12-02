import { useEffect, useState } from "react";
import { queryBuilder } from "@queryBuilder";

export interface ICalculation {
  expression: string;
}

interface IResponse {
  expression: string;
  result: string;
}

export const useFetchExpressions = (expression: string, result: string): ICalculation[] => {
  const [expressions, setExpressions] = useState<ICalculation[]>([]);

  useEffect(() => {
    const fetchOperations = async () => {
      try {
        const data = await queryBuilder.makeRequest<IResponse[]>(
          `calculations?limit=${import.meta.env.VITE_EXPRESSION_LIMIT}&order=${import.meta.env.VITE_EXPRESSION_ORDER}`,
          "GET",
        );

        const isCurrentExpressionInState =
          expressions.find((item) => item.expression === expression) ||
          data.find((item: ICalculation) => item.expression === expression);

        if (result && !isCurrentExpressionInState) {
          setExpressions((prev) => [...prev.slice(0, 4), { expression }].reverse());
        } else {
          setExpressions(data);
        }
      } catch (error) {
        setExpressions([]);
      }
    };
    fetchOperations();
  }, [result]);

  return expressions;
};
