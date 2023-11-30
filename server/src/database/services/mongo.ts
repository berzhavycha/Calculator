import mongoose, { SortOrder } from "mongoose";
import { Calculation } from "@models";
import { calculationProcessor } from "@modules";

interface ExpressionResult {
  expression: string;
}

interface IDatabase {
  connect(url: string): void;
  postCalculation(expression: string): Promise<number | undefined>;
  getExpressionByParam(limit: number, sortOrder: SortOrder): Promise<ExpressionResult[]>;
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

  public async postCalculation(expression: string): Promise<number | undefined> {
    try {
      let result;
      const cachedCalculation = await Calculation.findOne({ expression });

      if (cachedCalculation) {
        result = cachedCalculation.result;
      } else {
        result = calculationProcessor.evaluate(expression);
        const newCalculation = new Calculation({ expression, result });
        await newCalculation.save();
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  public async getExpressionByParam(limit: number, sortOrder: SortOrder): Promise<ExpressionResult[]> {
    try {
      const sortCriteria: Record<string, SortOrder> = { _id: sortOrder };
      const lastExpressions = await Calculation.find().sort(sortCriteria).limit(limit);

      return lastExpressions.map((expression) => ({
        expression: expression.expression,
      }));
    } catch (error) {
      throw error;
    }
  }
}
