import { useEffect } from "react";
import { queryBuilder } from "@queryBuilder";
import { useCurrentExpression } from "@context";
import { Dispatch, SetStateAction } from "react";

export interface ICalculation {
  expression: string;
}

type SetLastExpressions = Dispatch<SetStateAction<ICalculation[]>>;

export const useFetchExpressions = (setLastExpressions: SetLastExpressions): void => {
  const { expression, result } = useCurrentExpression();

  useEffect(() => {
    const fetchOperations = async () => {
      try {
        const data: ICalculation[] = await queryBuilder.makeRequest(
          `calculations?limit=${import.meta.env.VITE_EXPRESSION_LIMIT}&order=${import.meta.env.VITE_EXPRESSION_ORDER}`,
          "GET"
        );

        setLastExpressions([...data].reverse());
      } catch (error) {
        setLastExpressions([]);
      }
    };
    fetchOperations();
  }, []);

  useEffect(() => {
    if (result) {
      setLastExpressions((prevExpressions: ICalculation[]) => {
        const updatedExpressions: ICalculation[] = [
          ...prevExpressions.slice(1, import.meta.env.VITE_EXPRESSION_LIMIT),
          { expression },
        ];
        return updatedExpressions;
      });
    }
  }, [result]);
  
};
