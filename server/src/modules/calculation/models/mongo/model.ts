import { DEFAULT_SORT_FIELD } from './../../constants';
import { SortOrder } from "mongoose";
import { Calculation } from "./schemas/Calculation";
import { DEFAULT_SORT_ORDER } from "@modules/calculation/constants";

interface IExpression {
  expression: string;
  result: number;
  last_request_at: Date;
}

interface ICalculationModel {
  createAndSaveNewEntry(expression: string, result: number): Promise<void>;
  updateEntry(query: Partial<IExpression>, update: Partial<IExpression>): Promise<void>;
  findOne(expression: string): Promise<IExpression | null>;
  findMany(limit: number, sortField?: string, sortOrder?: number): Promise<IExpression[]>;
}

export class MongoCalculationModel implements ICalculationModel {
  public async createAndSaveNewEntry(expression: string, result: number): Promise<void> {
    const newCalculation = new Calculation({ expression, result });
    await newCalculation.save();
  }

  public async findOne(expression: string): Promise<IExpression | null> {
    const cachedCalculation: IExpression | null = await Calculation.findOne({ expression });
    return cachedCalculation;
  }

  public async updateEntry(query: Partial<IExpression>, update: Partial<IExpression>): Promise<void> {
    const cachedCalculation = await Calculation.findOne(query);
  
    if (cachedCalculation) {
      Object.assign(cachedCalculation, update);
      await cachedCalculation.save();
    }
  }
  public async findMany(limit: number, sortField?: string, sortOrder?: number): Promise<IExpression[]> {
    const sortCriteria: { [key: string]: SortOrder } = {};
  
    if (sortField && sortOrder) {
      sortCriteria[sortField] = sortOrder as SortOrder;
    } else {
      sortCriteria[DEFAULT_SORT_FIELD] = DEFAULT_SORT_ORDER; 
    }
  
    const resultExpressions = await Calculation.find({})
        .sort(sortCriteria)
        .limit(limit)
        .exec();
  
    return resultExpressions;
  }
}
