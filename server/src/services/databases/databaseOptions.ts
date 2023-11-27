import { MongoDatabase } from './mongoDB/mongoDatabase';

export const databaseServices = Object.freeze({
    mongoDB: new MongoDatabase()
});
