import { PostgresCalculationModel } from './postgres/model';
import { DataBases } from "@database";
import { MongoCalculationModel } from "./mongo/model";
import config from '@config'

export const modelsOptions = {
    [DataBases.MONGO_DB]: new MongoCalculationModel(),
    [DataBases.POSTGRE_SQL]: new PostgresCalculationModel()
}

export const calculationModel = modelsOptions[config.database]
