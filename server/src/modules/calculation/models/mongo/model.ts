import { Calculation } from "./schemas/Calculation";
import { ASC, DESC } from '../../constants'

export interface IExpression {
  expression: string;
  result: number;
  last_request_at: Date;
}

export type Sort = typeof ASC | typeof DESC
type SortCriteria = { [key: string]: Sort };


interface ICalculationModel {
  createAndSaveNewEntry(expression: string, result: number): Promise<void>;
  updateEntry(query: Partial<IExpression>, update: Partial<IExpression>): Promise<void>;
  findOne(query: Partial<IExpression>): Promise<IExpression | null>;
  findMany(limit: number, sortField?: string, sortOrder?: Sort): Promise<IExpression[]>;
}

export class MongoCalculationModel implements ICalculationModel {
  public async createAndSaveNewEntry(expression: string, result: number): Promise<void> {
    const newCalculation = new Calculation({ expression, result });
    await newCalculation.save();
  }

  public async findOne(query: Partial<IExpression>): Promise<IExpression | null> {
    const cachedCalculation: IExpression | null = await Calculation.findOne(query);
    return cachedCalculation;
  }

  public async updateEntry(query: Partial<IExpression>, update: Partial<IExpression>): Promise<void> {
    const cachedCalculation = await Calculation.findOne(query);

    if (cachedCalculation) {
      Object.assign(cachedCalculation, update);
      await cachedCalculation.save();
    }
  }

  public async findMany(limit: number, sortField?: string, sortOrder?: Sort): Promise<IExpression[]> {
    let resultExpressions: IExpression[];

    const sortCriteria: SortCriteria = {};

    if (sortField && sortOrder) {
      sortCriteria[sortField] = sortOrder;

      resultExpressions = await Calculation.find({})
        .sort(sortCriteria)
        .limit(limit)
        .exec();
    } else {
      resultExpressions = await Calculation.find({})
        .limit(limit)
        .exec();
    }

    return resultExpressions;
  }

}
