import { MONGODB_TEST_URL } from '@global';
import mongoose, { ConnectOptions } from 'mongoose';
import { modelsOptions } from '../modelsOptions';
import { ASC } from '@modules/calculation/constants';
import { DataBases } from '@database';
import { Calculation } from './schemas/Calculation';

describe('mongoModel.int', () => {
    const mongoModel = modelsOptions[DataBases.MONGO_DB];
    const testEntry = { expression: '2222+1111', result: 3333, last_request_at: new Date() }

    beforeAll(async () => {
        await mongoose.connect(MONGODB_TEST_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);
    });

    afterEach(async () => {
        await Calculation.deleteMany({});
    })

    afterAll(async () => {
        await mongoose.disconnect();
    });

    describe('createAndSaveNewEntry method', () => {
        test('should create and save a new entry in the database', async () => {
            await mongoModel.createAndSaveNewEntry(testEntry.expression, testEntry.result);

            const expression = await mongoModel.findOne({ expression: testEntry.expression });
            expect(expression).toBeDefined();
            expect(expression?.result).toEqual(testEntry.result);
        });
    });

    describe('findOne method', () => {
        test('should find an existing entry in the database', async () => {
            await mongoModel.createAndSaveNewEntry(testEntry.expression, testEntry.result);

            const foundExpression = await mongoModel.findOne({ expression: testEntry.expression });
            expect(foundExpression).toBeDefined();
            expect(foundExpression?.result).toEqual(testEntry.result);
        });

        test('should return null if the entry does not exist', async () => {
            const nonExistentExpression = await mongoModel.findOne({ expression: '112414+21412421' });
            expect(nonExistentExpression).toBeNull();
        });
    });

    describe('updateEntry method', () => {
        test('should update an existing entry in the database', async () => {
            await mongoModel.createAndSaveNewEntry(testEntry.expression, testEntry.result);

            const newDate = new Date()
            await mongoModel.updateEntry({ expression: testEntry.expression }, { last_request_at: newDate });

            const updatedExpression = await mongoModel.findOne({ expression: testEntry.expression });
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
                mongoModel.createAndSaveNewEntry('4+4', 8),
                mongoModel.createAndSaveNewEntry('5+5', 10),
                mongoModel.createAndSaveNewEntry('3+3', 6),
            ]);

            const expressions = await mongoModel.findMany(2);
            expect(expressions.length).toEqual(2);
        });

        test('should handle cases when sortField or sortOrder is not provided', async () => {
            await Promise.all([
                mongoModel.createAndSaveNewEntry('1+1', 2),
                mongoModel.createAndSaveNewEntry('4+4', 8),
                mongoModel.createAndSaveNewEntry('5+5', 10),
                mongoModel.createAndSaveNewEntry('3+3', 6),
            ]);

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

            const expressions = await mongoModel.findMany(4, "last_request_at", ASC);
            console.log(expressions)
            expect(expressions[0].expression).toBe("1+1");
            expect(expressions[expressions.length - 1].expression).toBe("3+3");
        });
    });
});