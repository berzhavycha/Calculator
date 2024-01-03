import mongoose from "mongoose";
import { IDatabase } from "@database/interfaces";
import { MONGODB_URL } from "@global";
import { appLogger } from "@log";

export class MongoDatabase implements IDatabase {
  public connect() {
    return mongoose
      .connect(MONGODB_URL)
      .then(() => {
        appLogger.info("Connected to MongoDB!")
      })
      .catch((error) => {
        appLogger.error(error)
        throw error;
      });
  }
}
