import mongoose from 'mongoose';
import { MongoDatabase } from './index';

jest.mock('mongoose');
jest.mock('@global', () => ({
    MONGODB_URL: 'mocked_mongodb:/testdb',
}));

describe('MongoDatabase', () => {
    let mongoDatabase: MongoDatabase;

    beforeEach(() => {
        mongoDatabase = new MongoDatabase();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should connect to MongoDB successfully', async () => {
        (mongoose.connect as jest.Mock).mockResolvedValueOnce({
            connection: {
                on: jest.fn(),
            },
        });
        await expect(mongoDatabase.connect()).resolves.toBeUndefined();
        expect(mongoose.connect).toHaveBeenCalledWith('mocked_mongodb:/testdb');
    });

    test('should throw an error when MongoDB connection fails', async () => {
        const errorMessage = 'MongoDB connection failed';
        (mongoose.connect as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

        await expect(mongoDatabase.connect()).rejects.toThrow(errorMessage);
        expect(mongoose.connect).toHaveBeenCalledWith('mocked_mongodb:/testdb');
    });
});
