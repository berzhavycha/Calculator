import mongoose from "mongoose";
import { IDatabase } from "@database/interfaces";
import { appLogger } from "../../../server";

export class MongoDatabase implements IDatabase {
  public connect(url: string) {
    return mongoose
      .connect(url)
      .then(() => {
        appLogger.info("Connected to MongoDB!")
      })
      .catch((error) => {
        appLogger.info(error)
        throw error;
      });
  }
}
