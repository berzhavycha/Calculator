import { useEffect, useState } from "react";
import { queryBuilder } from "@queryBuilder";
import { useCurrentExpression } from "@context";

export interface ICalculation {
  expression: string;
}

export const useFetchExpressions = (): ICalculation[] => {
  const [expressions, setExpressions] = useState<ICalculation[]>([]);
  const { result } = useCurrentExpression();

  useEffect(() => {
    const fetchOperations = async () => {
      try {
        const data = await queryBuilder.makeRequest(
          `calculations?limit=${import.meta.env.VITE_EXPRESSION_LIMIT}&order=${import.meta.env.VITE_EXPRESSION_ORDER}`,
          "GET",
        );
        setExpressions(data);
      } catch (error) {
        setExpressions([]);
      }
    };

    fetchOperations();
  }, [result]);

  return expressions;
};
