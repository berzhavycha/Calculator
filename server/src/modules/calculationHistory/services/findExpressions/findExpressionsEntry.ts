import { DEFAULT_SORT_FIELD } from '../../constants';
import { calculationHistoryModel } from "../../models/modelsOptions";
import { IExpression, Sort } from '../../models';


export const findExpressions = async (limit: number, sortOrder: Sort): Promise<IExpression[]> => {
  return calculationHistoryModel.findMany(limit, DEFAULT_SORT_FIELD, sortOrder);
};
