import { SortOrder } from "mongoose";
import { Calculation } from "./schemas/Calculation";

interface IExpression {
  expression: string;
  result: number;
}

interface ICalculationModel {
  createAndSaveNewEntry(expression: string, result: number): Promise<void>;
  findOne(expression: string): Promise<IExpression | null>;
  findMany(limit: number, sortOrder?: number): Promise<IExpression[]>;
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

  public async updateLastRequestTime(expression: string): Promise<void> {
    const cachedCalculation = await Calculation.findOne({ expression });

    if (cachedCalculation) {
      cachedCalculation.last_request_at = new Date();
      await cachedCalculation.save();
    }
  }

  public async findMany(limit: number, sortOrder?: number): Promise<IExpression[]> {
    let resultExpressions: IExpression[]

    if (sortOrder) {
      const sortCriteria: SortOrder = sortOrder as SortOrder;
      resultExpressions = await Calculation.find({})
        .sort({ last_request_at: sortCriteria })
        .limit(limit)
        .exec();
    } else {
      resultExpressions = await Calculation.find().limit(limit);
    }

    return resultExpressions;
  }
}
