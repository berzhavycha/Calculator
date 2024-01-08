import { mockPool,DataBases } from '@modules/database';
import { modelsOptions } from '../modelsOptions';
import { ASC, DEFAULT_SORT_FIELD, DESC } from '@modules/calculationHistory/constants';
import { PoolClient } from 'pg';
import { POSTGRES_CALCULATION_HISTORY_COLLECTION  } from '@global';

describe('postgresModel.int', () => {
    const postgresModel = modelsOptions[DataBases.POSTGRE_SQL];
    const testEntry = { expression: '2222+1111', result: 3333, lastRequestAt: new Date() }

    let client: PoolClient

    beforeAll(async () => {
        client = await mockPool.connect();
    });

    afterEach(async () => {
        try {
            await client.query(`TRUNCATE TABLE ${POSTGRES_CALCULATION_HISTORY_COLLECTION} RESTART IDENTITY;`);
        } catch (error) {
            console.error('Error truncating table:', error);
        }
    })

    afterAll(async () => {
        await client.release()
    });

    describe('createAndSaveNewEntry method', () => {
        it('should create and save a new entry in the database', async () => {
            await postgresModel.createAndSaveNewEntry(testEntry.expression, testEntry.result);

            const expression = await postgresModel.findOne({ expression: testEntry.expression });
            expect(expression).toBeDefined();
            expect(expression?.result).toEqual(testEntry.result);
        });
    });

    describe('findOne method', () => {
        it('should find an existing entry in the database', async () => {
            await postgresModel.createAndSaveNewEntry(testEntry.expression, testEntry.result);

            const foundExpression = await postgresModel.findOne({ expression: testEntry.expression });
            expect(foundExpression).toBeDefined();
            expect(foundExpression?.result).toEqual(testEntry.result);
        });

        it('should return undefined if the entry does not exist', async () => {
            const nonExistentExpression = await postgresModel.findOne({ expression: '112414+21412421' });
            expect(nonExistentExpression).toBeUndefined();
        });
    });

    describe('updateEntry method', () => {
        it('should update an existing entry in the database', async () => {
            await postgresModel.createAndSaveNewEntry(testEntry.expression, testEntry.result);

            const newDate = new Date()
            await postgresModel.updateEntry({ expression: testEntry.expression }, { lastRequestAt: newDate });

            const updatedExpression = await postgresModel.findOne({ expression: testEntry.expression });
            expect(updatedExpression).toBeDefined();
            expect(updatedExpression?.lastRequestAt).toEqual(newDate);
        });

        it('should not update if the entry does not exist', async () => {
            await postgresModel.updateEntry({ expression: '123+123' }, { lastRequestAt: new Date() });

            const nonExistentExpression = await postgresModel.findOne({ expression: '123+123' });
            expect(nonExistentExpression).toBeUndefined();
        });
    });

    describe('findMany method', () => {
        it('should find multiple entries in the database', async () => {
            await Promise.all([
                postgresModel.createAndSaveNewEntry('1+1', 2),
                postgresModel.createAndSaveNewEntry('4+4', 8),
                postgresModel.createAndSaveNewEntry('5+5', 10),
                postgresModel.createAndSaveNewEntry('3+3', 6),
            ]);

            const expressions = await postgresModel.findMany(2);
            expect(expressions.length).toEqual(2);
        });

        it('should handle cases when sortField or sortOrder is not provided', async () => {
            await Promise.all([
                postgresModel.createAndSaveNewEntry('1+1', 2),
                postgresModel.createAndSaveNewEntry('4+4', 8),
                postgresModel.createAndSaveNewEntry('5+5', 10),
                postgresModel.createAndSaveNewEntry('3+3', 6),
            ]);

            const expressionsNoSort = await postgresModel.findMany(3);
            expect(expressionsNoSort.length).toBe(3);
        });

        it('should find limited entries sorted in asc', async () => {
            await postgresModel.createAndSaveNewEntry('1+1', 2)
            await postgresModel.createAndSaveNewEntry('4+4', 8)
            await postgresModel.createAndSaveNewEntry('5+5', 10)
            await postgresModel.createAndSaveNewEntry('3+3', 6)

            const expressions = await postgresModel.findMany(20, DEFAULT_SORT_FIELD, ASC);
            expect(expressions[0].expression).toBe("1+1");
            expect(expressions[expressions.length - 1].expression).toBe("3+3");
        });


        it('should find limited entries sorted in desc', async () => {
            await postgresModel.createAndSaveNewEntry('1+1', 2)
            await postgresModel.createAndSaveNewEntry('4+4', 8)
            await postgresModel.createAndSaveNewEntry('5+5', 10)
            await postgresModel.createAndSaveNewEntry('3+3', 6)

            const expressions = await postgresModel.findMany(20, DEFAULT_SORT_FIELD, DESC);
            expect(expressions[0].expression).toBe("3+3");
            expect(expressions[expressions.length - 1].expression).toBe("1+1");
        });
    });
});