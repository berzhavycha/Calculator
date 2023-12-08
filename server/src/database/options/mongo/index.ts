import mongoose from "mongoose";
import { IDatabase } from "@database/interfaces";

export class MongoDatabase implements IDatabase {
  public connect(url: string) {
    return mongoose
      .connect(url)
      .then(() => {
        console.log("Connected to MongoDB!");
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }
}
