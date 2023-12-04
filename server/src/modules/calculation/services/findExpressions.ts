import { calculationModel } from "../models";

export const findExpressions = async (limit: number, sortOrder: number) => {
  const lastExpressions = await calculationModel.findMany(limit, sortOrder);

  return lastExpressions.map((expression) => ({
    expression: expression.expression,
  }));
};
