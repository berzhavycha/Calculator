import { BaseKnexModel } from '../baseModel';
import { PoolClient } from 'pg';
import { mockPool } from '../../../constants';
import { POSTGRES_CALCULATION_COLLECTION } from '@global';

describe('BaseKnexModel', () => {
    let baseModel: BaseKnexModel;
    let client: PoolClient

    beforeAll(async () => {
        client = await mockPool.connect();
        baseModel = new BaseKnexModel(POSTGRES_CALCULATION_COLLECTION);
    });

    afterEach(async () => {
        try {
            await client.query(`TRUNCATE TABLE ${POSTGRES_CALCULATION_COLLECTION} RESTART IDENTITY;`);
        } catch (error) {
            console.error('Error truncating table:', error);
        }
    })

    afterAll(async () => {
        await baseModel.delete({});
    });

    describe('all', () => {
        it('should return data from the database', async () => {
            const dataToInsert = [
                { id: 1, expression: '1+2', result: 3, last_request_at: new Date() },
                { id: 2, expression: '3+4', result: 7, last_request_at: new Date() },
                { id: 3, expression: '3+8', result: 11, last_request_at: new Date() }
            ];

            dataToInsert.forEach(async (data) => {
                await baseModel.insert(data);
            })

            const allData = await baseModel.all();
            expect(allData).toEqual(dataToInsert);
        });

        it('should return empty array for all when no data is present', async () => {
            await baseModel.delete({});

            const allData = await baseModel.all();
            expect(allData).toHaveLength(0);
        });
    })

    describe('insert', () => {
        it('should insert data into the table', async () => {
            const dataToInsert = { expression: '1+2', result: 3, last_request_at: new Date() };
            const insertedData = await baseModel.insert(dataToInsert);
            expect(insertedData).toMatchObject(dataToInsert);
        });
    })

    describe('delete', () => {
        it('should delete data from the table', async () => {
            const dataToInsert = { expression: '1+2', result: 3, last_request_at: new Date() };
            await baseModel.insert(dataToInsert);

            await baseModel.delete({ expression: '1+2' });

            const deletedEntry = await baseModel.findBy({ expression: '1+2' });
            expect(deletedEntry).toBeUndefined();
        });
    })

    describe('update', () => {
        it('should update data in the table', async () => {
            const dataToInsert = { expression: '1+2', result: 3, last_request_at: new Date() };
            await baseModel.insert(dataToInsert);

            const updatedData = { last_request_at: new Date() }
            await baseModel.update({ expression: '1+2' }, updatedData);

            const foundEntry = await baseModel.findBy({ expression: '1+2' });
            expect(foundEntry).toMatchObject(updatedData);
        });

        it('shouldn`t update data in the table if it doesn`t exist', async () => {
            const updatedData = { last_request_at: new Date() }
            await baseModel.update({ expression: '1+2' }, updatedData);

            const foundEntry = await baseModel.findBy({ expression: '1+2' });
            expect(foundEntry).toBeUndefined();
        });
    })

    describe('findBy', () => {
        it('should find data in the table', async () => {
            const dataToInsert = { expression: '1+2', result: 3, last_request_at: new Date() };
            await baseModel.insert(dataToInsert);

            const foundEntry = await baseModel.findBy({ expression: '1+2' });
            expect(foundEntry).toMatchObject(dataToInsert);
        });

        it('should return undefined if data doesn`t exist in the table', async () => {
            const foundEntry = await baseModel.findBy({ expression: '1+2' });
            expect(foundEntry).toBeUndefined();
        });
    })
});
