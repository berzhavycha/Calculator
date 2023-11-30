import config from '@config'
import { MongoDatabase } from './databaseServices/mongoDatabase';

const databaseServices = Object.freeze({
    mongoDB: new MongoDatabase()
});

export const currentDatabase = databaseServices[config.database]