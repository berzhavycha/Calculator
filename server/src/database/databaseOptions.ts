import { MongoDatabase } from "./options/mongo/mongo";
import config from "@config";
import { PostgresDatabase } from "./options/postgres/postgres";
import { DataBases } from "./constants";

const databaseServices = Object.freeze({
  [DataBases.MONGO_DB]: new MongoDatabase(),
  [DataBases.POSTGRE_SQL]: new PostgresDatabase()
});

export const currentDatabase = databaseServices[config.database];