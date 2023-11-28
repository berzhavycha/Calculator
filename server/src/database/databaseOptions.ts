import { MongoDatabase } from './services/mongo';
import config from '@config'

const databaseServices = Object.freeze({
    mongoDB: new MongoDatabase()
});

export const currentDatabaseService = databaseServices[config.database]