import mongoose, { ConnectOptions } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { modelsOptions } from '../modelsOptions';
import { DataBases } from '@database';
import { ASC } from '@modules/calculation/constants';


describe('mongoModel.unit', () => {
    let mongoServer: MongoMemoryServer;
    const mongoModel = modelsOptions[DataBases.MONGO_DB];
    const mockEntry = { expression: '2222+1111', result: 3333, last_request_at: new Date() }


    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        const mongoUri = mongoServer.getUri();
        await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions);
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
    });

    test('should connect to MongoDB memory server', async () => {
        expect(mongoose.connection.readyState).toEqual(1);
    });

    describe('createAndSaveNewEntry method', () => {
        test('should create and save a new entry in the database', async () => {
            await mongoModel.createAndSaveNewEntry(mockEntry.expression, mockEntry.result);

            const expression = await mongoModel.findOne({ expression: mockEntry.expression });
            expect(expression).toBeDefined();
            expect(expression?.result).toEqual(mockEntry.result);
        });
    });

    describe('findOne method', () => {
        test('should find an existing entry in the database', async () => {
            const foundExpression = await mongoModel.findOne({ expression: mockEntry.expression });
            expect(foundExpression).toBeDefined();
            expect(foundExpression?.result).toEqual(mockEntry.result);
        });

        test('should return null if the entry does not exist', async () => {
            const nonExistentExpression = await mongoModel.findOne({ expression: '3+3' });
            expect(nonExistentExpression).toBeNull();
        });
    });

    describe('updateEntry method', () => {
        test('should update an existing entry in the database', async () => {
            const newDate = new Date()
            await mongoModel.updateEntry({ expression: mockEntry.expression }, { last_request_at: newDate });

            const updatedExpression = await mongoModel.findOne({ expression: mockEntry.expression });
            expect(updatedExpression).toBeDefined();
            expect(updatedExpression?.last_request_at).toEqual(newDate);
        });

        test('should not update if the entry does not exist', async () => {
            await mongoModel.updateEntry({ expression: '3+3' }, { last_request_at: new Date() });

            const nonExistentExpression = await mongoModel.findOne({ expression: '3+3' });
            expect(nonExistentExpression).toBeNull();
        });
    });

    describe('findMany method', () => {
        test('should find multiple entries in the database', async () => {
            await Promise.all([
                mongoModel.createAndSaveNewEntry('1+1', 2),
                mongoModel.createAndSaveNewEntry('3+3', 6),
                mongoModel.createAndSaveNewEntry('4+4', 8),
            ]);

            const expressions = await mongoModel.findMany(2);
            expect(expressions.length).toEqual(2);
        });

        test('should handle cases when sortField or sortOrder is not provided', async () => {
            const expressionsNoSort = await mongoModel.findMany(3);
            expect(expressionsNoSort.length).toBe(3);
        });

        test('should find limited entries sorted in asc', async () => {
            await Promise.all([
                mongoModel.createAndSaveNewEntry('1+1', 2),
                mongoModel.createAndSaveNewEntry('4+4', 8),
                mongoModel.createAndSaveNewEntry('5+5', 10),
                mongoModel.createAndSaveNewEntry('3+3', 6),
            ]);

            const expressions = await mongoModel.findMany(3, "last_request_at", ASC);
            expect(expressions[0].expression).toBe(mockEntry.expression);
            expect(expressions[expressions.length - 1].expression).toBe("3+3");
        });
    });
});
