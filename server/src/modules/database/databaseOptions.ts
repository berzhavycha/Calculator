import { MongoDatabase, PostgresDatabase } from "./options";
import { DataBases } from "./constants";
import config from "@config";

const databaseServices = Object.freeze({
  [DataBases.MONGO_DB]: new MongoDatabase(),
  [DataBases.POSTGRE_SQL]: new PostgresDatabase()
});

export const currentDatabase = databaseServices[config.database];