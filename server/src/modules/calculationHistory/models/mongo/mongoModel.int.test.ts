import { MONGODB_TEST_URL } from '@global';
import mongoose, { ConnectOptions } from 'mongoose';
import { modelsOptions } from '../modelsOptions';
import { ASC, DEFAULT_SORT_FIELD, DESC } from '@modules/calculationHistory/constants';
import { DataBases } from '@database';
import { CalculationHistory } from './schemas/CalculationHistory';

describe('mongoModel.int', () => {
    const mongoModel = modelsOptions[DataBases.MONGO_DB];
    const testEntry = { expression: '2222+1111', result: 3333, lastRequestAt: new Date() }

    beforeAll(async () => {
        await mongoose.connect(MONGODB_TEST_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);
    });

    afterEach(async () => {
        await CalculationHistory.deleteMany({});
    })

    afterAll(async () => {
        await mongoose.disconnect();
    });

    describe('createAndSaveNewEntry method', () => {
        it('should create and save a new entry in the database', async () => {
            await mongoModel.createAndSaveNewEntry(testEntry.expression, testEntry.result);

            const expression = await mongoModel.findOne({ expression: testEntry.expression });
            expect(expression).toBeDefined();
            expect(expression?.result).toEqual(testEntry.result);
        });
    });

    describe('findOne method', () => {
        it('should find an existing entry in the database', async () => {
            await mongoModel.createAndSaveNewEntry(testEntry.expression, testEntry.result);

            const foundExpression = await mongoModel.findOne({ expression: testEntry.expression });
            expect(foundExpression).toBeDefined();
            expect(foundExpression?.result).toEqual(testEntry.result);
        });

        it('should return null if the entry does not exist', async () => {
            const nonExistentExpression = await mongoModel.findOne({ expression: '112414+21412421' });
            expect(nonExistentExpression).toBeNull();
        });
    });

    describe('updateEntry method', () => {
        it('should update an existing entry in the database', async () => {
            await mongoModel.createAndSaveNewEntry(testEntry.expression, testEntry.result);

            const newDate = new Date()
            await mongoModel.updateEntry({ expression: testEntry.expression }, { lastRequestAt: newDate });

            const updatedExpression = await mongoModel.findOne({ expression: testEntry.expression });
            expect(updatedExpression).toBeDefined();
            expect(updatedExpression?.lastRequestAt).toEqual(newDate);
        });

        it('should not update if the entry does not exist', async () => {
            await mongoModel.updateEntry({ expression: '3+3' }, { lastRequestAt: new Date() });

            const nonExistentExpression = await mongoModel.findOne({ expression: '3+3' });
            expect(nonExistentExpression).toBeNull();
        });
    });

    describe('findMany method', () => {
        it('should find multiple entries in the database', async () => {
            await Promise.all([
                mongoModel.createAndSaveNewEntry('1+1', 2),
                mongoModel.createAndSaveNewEntry('4+4', 8),
                mongoModel.createAndSaveNewEntry('5+5', 10),
                mongoModel.createAndSaveNewEntry('3+3', 6),
            ]);

            const expressions = await mongoModel.findMany(2);
            expect(expressions.length).toEqual(2);
        });

        it('should handle cases when sortField or sortOrder is not provided', async () => {
            await Promise.all([
                mongoModel.createAndSaveNewEntry('1+1', 2),
                mongoModel.createAndSaveNewEntry('4+4', 8),
                mongoModel.createAndSaveNewEntry('5+5', 10),
                mongoModel.createAndSaveNewEntry('3+3', 6),
            ]);

            const expressionsNoSort = await mongoModel.findMany(3);
            expect(expressionsNoSort.length).toBe(3);
        });

        it('should find limited entries sorted in asc', async () => {
            await mongoModel.createAndSaveNewEntry('1+1', 2)
            await mongoModel.createAndSaveNewEntry('4+4', 8)
            await mongoModel.createAndSaveNewEntry('5+5', 10)
            await mongoModel.createAndSaveNewEntry('3+3', 6)

            const expressions = await mongoModel.findMany(4, DEFAULT_SORT_FIELD, ASC);
            expect(expressions[0].expression).toBe("1+1");
            expect(expressions[expressions.length - 1].expression).toBe("3+3");
        });

        it('should find limited entries sorted in desc', async () => {
            await mongoModel.createAndSaveNewEntry('1+1', 2)
            await mongoModel.createAndSaveNewEntry('4+4', 8)
            await mongoModel.createAndSaveNewEntry('5+5', 10)
            await mongoModel.createAndSaveNewEntry('3+3', 6)

            const expressions = await mongoModel.findMany(4, DEFAULT_SORT_FIELD, DESC);
            expect(expressions[0].expression).toBe("3+3");
            expect(expressions[expressions.length - 1].expression).toBe("1+1");
        });
    });
});