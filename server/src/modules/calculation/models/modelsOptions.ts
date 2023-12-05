import { MongoCalculationModel } from "./mongo";
import config from '@config'

export const modelsOptions = {
    mongoDB: new MongoCalculationModel()
}

export const calculationModel = modelsOptions[config.database]
