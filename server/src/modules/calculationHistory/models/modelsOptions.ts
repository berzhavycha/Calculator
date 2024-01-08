import { PostgresCalculationHistoryModel } from './postgres/model';
import { DataBases } from "@modules/database";
import { MongoCalculationHistoryModel } from "./mongo/model";
import config from '@config'

export const modelsOptions = {
    [DataBases.MONGO_DB]: new MongoCalculationHistoryModel(),
    [DataBases.POSTGRE_SQL]: new PostgresCalculationHistoryModel()
}

export const calculationHistoryModel = modelsOptions[config.database]
