import { DEFAULT_SORT_FIELD } from './../constants';
import { calculationModel } from "../models";
import { Sort } from '../models/mongo';


export const findExpressions = async (limit: number, sortOrder: Sort) => {
  const lastExpressions = await calculationModel.findMany(limit, DEFAULT_SORT_FIELD, sortOrder);

  return lastExpressions.map((expression) => ({
    expression: expression.expression,
  })).reverse();
};
