import { CalculationHistory } from "./schemas/Calculation";
import { IExpression, ICalculationHistoryModel, Sort } from "../interfaces";

type SortCriteria = { [key: string]: Sort };

export class MongoCalculationHistoryModel implements ICalculationHistoryModel {
  public async createAndSaveNewEntry(expression: string, result: number): Promise<void> {
    const newCalculationHistory = new CalculationHistory({ expression, result });
    await newCalculationHistory.save();
  }

  public async findOne(query: Partial<IExpression>): Promise<IExpression | null> {
    const cachedCalculationHistory: IExpression | null = await CalculationHistory.findOne(query);
    return cachedCalculationHistory;
  }

  public async updateEntry(query: Partial<IExpression>, update: Partial<IExpression>): Promise<void> {
    const cachedCalculationHistory = await CalculationHistory.findOne(query);

    if (cachedCalculationHistory) {
      Object.assign(cachedCalculationHistory, update);
      await cachedCalculationHistory.save();
    }
  }

  public async findMany(limit: number, sortField?: string, sortOrder?: Sort): Promise<IExpression[]> {
    let resultExpressions: IExpression[];

    const sortCriteria: SortCriteria = {};

    if (sortField && sortOrder) {
      sortCriteria[sortField] = sortOrder;

      resultExpressions = await CalculationHistory.find({})
        .select('expression result')
        .sort(sortCriteria)
        .limit(limit)
        .exec();
    } else {
      resultExpressions = await CalculationHistory.find({})
        .select('expression result')
        .limit(limit)
        .exec();
    }

    return resultExpressions;
  }

}
