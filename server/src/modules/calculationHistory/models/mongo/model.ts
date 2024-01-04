import { CalculationHistory } from "./schemas/CalculationHistory";
import { IExpression, ICalculationHistoryModel, Sort } from "../interfaces";

type SortCriteria = { [key: string]: Sort };

export class MongoCalculationHistoryModel implements ICalculationHistoryModel {
  public async createAndSaveNewEntry(expression: string, result: number): Promise<void> {
    const newCalculationHistoryEntry = new CalculationHistory({ expression, result });
    await newCalculationHistoryEntry.save();
  }

  public async findOne(query: Partial<IExpression>): Promise<IExpression | null> {
    return CalculationHistory.findOne(query);
  }

  public async updateEntry(query: Partial<IExpression>, update: Partial<IExpression>): Promise<void> {
    const cachedCalculationHistoryEntry = await CalculationHistory.findOne(query);

    if (cachedCalculationHistoryEntry) {
      Object.assign(cachedCalculationHistoryEntry, update);
      await cachedCalculationHistoryEntry.save();
    }
  }

  public async findMany(limit: number, sortField?: string, sortOrder?: Sort): Promise<IExpression[]> {
    let resultExpressions: IExpression[];

    const sortCriteria: SortCriteria = {};

    if (sortField && sortOrder) {
      sortCriteria[sortField] = sortOrder;

      resultExpressions = await CalculationHistory.find({})
        .select('expression result lastRequestAt')
        .sort(sortCriteria)
        .limit(limit)
        .exec();
    } else {
      resultExpressions = await CalculationHistory.find({})
        .select('expression result lastRequestAt')
        .limit(limit)
        .exec();
    }

    return resultExpressions;
  }

}
