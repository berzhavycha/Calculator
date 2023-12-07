import { PostgresCalculationModel } from './postgres/model';
import { DataBases, currentDatabase } from "@database";
import { MongoCalculationModel } from "./mongo";
import config from '@config'
import { Pool } from 'pg';

export const modelsOptions = {
    [DataBases.MONGO_DB]: new MongoCalculationModel(),
    [DataBases.POSTGRE_SQL]: new PostgresCalculationModel(currentDatabase.getPool() as Pool)
}

export const calculationModel = modelsOptions[config.database]
