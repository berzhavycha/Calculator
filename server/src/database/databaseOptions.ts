import { MongoDatabase } from "./options/mongo";
import config from "@config";

const databaseServices = Object.freeze({
  mongoDB: new MongoDatabase(),
});

export const currentDatabase = databaseServices[config.database];
