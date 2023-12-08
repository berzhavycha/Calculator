import mongoose from "mongoose";

export interface IDatabase {
  connect(url: string): void;
}

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
