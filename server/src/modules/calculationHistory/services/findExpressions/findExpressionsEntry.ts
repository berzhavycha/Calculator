import { DEFAULT_SORT_FIELD } from '../../constants';
import { calculationHistoryModel } from "../../models/modelsOptions";
import { Sort } from '../../models';


export const findExpressions = async (limit: number, sortOrder: Sort) => {
  const lastExpressions = await calculationHistoryModel.findMany(limit, DEFAULT_SORT_FIELD, sortOrder);
  return lastExpressions
};
