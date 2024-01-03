import { CalculationHistory } from "./schemas/Calculation";
import { IExpression, ICalculationModel, Sort } from "../interfaces";

type SortCriteria = { [key: string]: Sort };

export class MongoCalculationModel implements ICalculationModel {
  public async createAndSaveNewEntry(expression: string, result: number): Promise<void> {
    const newCalculation = new CalculationHistory({ expression, result });
    await newCalculation.save();
  }

  public async findOne(query: Partial<IExpression>): Promise<IExpression | null> {
    const cachedCalculation: IExpression | null = await CalculationHistory.findOne(query);
    return cachedCalculation;
  }

  public async updateEntry(query: Partial<IExpression>, update: Partial<IExpression>): Promise<void> {
    const cachedCalculation = await CalculationHistory.findOne(query);

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
