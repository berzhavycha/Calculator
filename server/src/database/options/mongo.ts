import mongoose, { SortOrder } from "mongoose";
import { Calculation } from "@modules";

interface IExpression {
  expression: string;
  result: number;
}

interface IDatabase {
  connect(url: string): void;
  createAndSaveNewEntry(expression: string, result: number): Promise<void>;
  findOne(expression: string): Promise<IExpression | null>;
  findSortedExpressions(limit: number, sortOrder: number): Promise<IExpression[]>;
}

export class MongoDatabase implements IDatabase {
  public connect(url: string) {
    return mongoose
      .connect(url)
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }

  public async createAndSaveNewEntry(expression: string, result: number): Promise<void> {
    const newCalculation = new Calculation({ expression, result });
    await newCalculation.save();
  }

  public async findOne(expression: string): Promise<IExpression | null> {
    const cachedCalculation: IExpression | null = await Calculation.findOne({ expression });
    return cachedCalculation;
  }

  public async findSortedExpressions(limit: number, sortOrder: number): Promise<IExpression[]> {
    const sortCriteria: Record<string, SortOrder> = { _id: sortOrder as SortOrder };
    const lastExpressions: IExpression[] = await Calculation.find().sort(sortCriteria).limit(limit);

    return lastExpressions;
  }
}
