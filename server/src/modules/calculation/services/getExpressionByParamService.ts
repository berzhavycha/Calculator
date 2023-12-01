import { currentDatabase } from "@database";

export const getExpressionByParamService = async (limit: number, sortOrder: number) => {
  const lastExpressions = await currentDatabase.findSortedExpressions(limit, sortOrder);

  return lastExpressions.map((expression) => ({
    expression: expression.expression,
  }));
};
