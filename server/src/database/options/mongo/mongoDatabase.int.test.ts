import { MongoDatabase } from './index';

describe('MongoDatabase', () => {
    let mongoDatabase: MongoDatabase;

    beforeEach(() => {
        mongoDatabase = new MongoDatabase();
    });

    test('should connect to MongoDB successfully', async () => {
        await expect(mongoDatabase.connect()).resolves.toBeUndefined();
    });
});
