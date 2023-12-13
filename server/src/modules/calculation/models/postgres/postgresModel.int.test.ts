import { modelsOptions } from '../modelsOptions';
import { ASC, DEFAULT_SORT_FIELD, DESC } from '@modules/calculation/constants';
import { Pool, PoolClient } from 'pg';
import { DataBases } from '@database';
import { POSTGRES_TEST_DB, POSTGRES_HOST, POSTGRES_TEST_USER, POSTGRES_TEST_PASSWORD, POSTGRES_CALCULATION_COLLECTION } from '@global';

describe('postgresModel.int', () => {
    const postgresModel = modelsOptions[DataBases.POSTGRE_SQL];
    const testEntry = { expression: '2222+1111', result: 3333, last_request_at: new Date() }

    const mockPool = new Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_TEST_DB,
        user: POSTGRES_TEST_USER,
        password: POSTGRES_TEST_PASSWORD,
    });

    let client: PoolClient

    beforeAll(async () => {
        client = await mockPool.connect();
    });

    afterEach(async () => {
        try {
            await client.query(`TRUNCATE TABLE ${POSTGRES_CALCULATION_COLLECTION} RESTART IDENTITY;`);
        } catch (error) {
            console.error('Error truncating table:', error);
        }
    })

    afterAll(async () => {
        await client.release()
    });

    describe('createAndSaveNewEntry method', () => {
        test('should create and save a new entry in the database', async () => {
            await postgresModel.createAndSaveNewEntry(testEntry.expression, testEntry.result);

            const expression = await postgresModel.findOne({ expression: testEntry.expression });
            expect(expression).toBeDefined();
            expect(expression?.result).toEqual(testEntry.result);
        });
    });

    describe('findOne method', () => {
        test('should find an existing entry in the database', async () => {
            await postgresModel.createAndSaveNewEntry(testEntry.expression, testEntry.result);

            const foundExpression = await postgresModel.findOne({ expression: testEntry.expression });
            expect(foundExpression).toBeDefined();
            expect(foundExpression?.result).toEqual(testEntry.result);
        });

        test('should return undefined if the entry does not exist', async () => {
            const nonExistentExpression = await postgresModel.findOne({ expression: '112414+21412421' });
            expect(nonExistentExpression).toBeUndefined();
        });
    });

    describe('updateEntry method', () => {
        test('should update an existing entry in the database', async () => {
            await postgresModel.createAndSaveNewEntry(testEntry.expression, testEntry.result);

            const newDate = new Date()
            await postgresModel.updateEntry({ expression: testEntry.expression }, { last_request_at: newDate });

            const updatedExpression = await postgresModel.findOne({ expression: testEntry.expression });
            expect(updatedExpression).toBeDefined();
            expect(updatedExpression?.last_request_at).toEqual(newDate);
        });

        test('should not update if the entry does not exist', async () => {
            await postgresModel.updateEntry({ expression: '123+123' }, { last_request_at: new Date() });

            const nonExistentExpression = await postgresModel.findOne({ expression: '123+123' });
            expect(nonExistentExpression).toBeUndefined();
        });
    });

    describe('findMany method', () => {
        test('should find multiple entries in the database', async () => {
            await Promise.all([
                postgresModel.createAndSaveNewEntry('1+1', 2),
                postgresModel.createAndSaveNewEntry('4+4', 8),
                postgresModel.createAndSaveNewEntry('5+5', 10),
                postgresModel.createAndSaveNewEntry('3+3', 6),
            ]);

            const expressions = await postgresModel.findMany(2);
            expect(expressions.length).toEqual(2);
        });

        test('should handle cases when sortField or sortOrder is not provided', async () => {
            await Promise.all([
                postgresModel.createAndSaveNewEntry('1+1', 2),
                postgresModel.createAndSaveNewEntry('4+4', 8),
                postgresModel.createAndSaveNewEntry('5+5', 10),
                postgresModel.createAndSaveNewEntry('3+3', 6),
            ]);

            const expressionsNoSort = await postgresModel.findMany(3);
            expect(expressionsNoSort.length).toBe(3);
        });

        test('should find limited entries sorted in asc', async () => {
            await postgresModel.createAndSaveNewEntry('1+1', 2)
            await postgresModel.createAndSaveNewEntry('4+4', 8)
            await postgresModel.createAndSaveNewEntry('5+5', 10)
            await postgresModel.createAndSaveNewEntry('3+3', 6)

            const expressions = await postgresModel.findMany(20, DEFAULT_SORT_FIELD, ASC);
            expect(expressions[0].expression).toBe("1+1");
            expect(expressions[expressions.length - 1].expression).toBe("3+3");
        });


        test('should find limited entries sorted in desc', async () => {
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