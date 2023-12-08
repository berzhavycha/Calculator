import { MongoDatabase, PostgresDatabase } from "./options";
import config from "@config";
import { DataBases } from "./constants";

const databaseServices = Object.freeze({
  [DataBases.MONGO_DB]: new MongoDatabase(),
  [DataBases.POSTGRE_SQL]: new PostgresDatabase()
});

export const currentDatabase = databaseServices[config.database];