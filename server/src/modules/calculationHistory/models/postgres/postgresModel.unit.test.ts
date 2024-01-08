import { PostgresCalculationHistoryModel } from './model';
import { BaseKnexModel } from '@modules/database';


describe('PostgresModel.unit', () => {
    let postgresModel: PostgresCalculationHistoryModel;

    beforeEach(() => {
        postgresModel = new PostgresCalculationHistoryModel();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('createAndSaveNewEntry method', () => {
        it('should create and save a new entry', async () => {
            const expression = '2+2';
            const result = 4;

            jest.spyOn(BaseKnexModel.prototype, 'insert')

            await postgresModel.createAndSaveNewEntry(expression, result);

            expect(postgresModel.insert).toHaveBeenCalledWith({
                expression,
                result,
                lastRequestAt: expect.any(Date),
            });
        });
    })

    describe('findOne method', () => {
        it('should find an existing entry in the database', async () => {
            const query = { expression: '2+2' };
            const mockedResult = { expression: '2+2', result: 4, lastRequestAt: new Date() }

            jest.spyOn(BaseKnexModel.prototype, 'findBy').mockResolvedValue(mockedResult)

            const result = await postgresModel.findOne(query);

            expect(postgresModel.findBy).toHaveBeenCalledWith(query);
            expect(result).toEqual(mockedResult)
        });

        it('should return null if the entry does not exist', async () => {
            const query = { expression: '2+2' };

            jest.spyOn(BaseKnexModel.prototype, 'findBy').mockResolvedValue(null)

            const result = await postgresModel.findOne(query);

            expect(postgresModel.findBy).toHaveBeenCalledWith(query);
            expect(result).toEqual(null)
        });
    })

    describe('updateEntry', () => {
        it('should update an existing entry in the database', async () => {
            const query = { expression: '2+2' };
            const update = { lastRequestAt: new Date() };

            jest.spyOn(BaseKnexModel.prototype, 'update')

            await postgresModel.updateEntry(query, update);

            expect(postgresModel.update).toHaveBeenCalledWith(query, update);
        });

        it('should not update if the entry does not exist', async () => {
            const query = { expression: '111+222' };
            const update = { lastRequestAt: new Date() };

            jest.spyOn(BaseKnexModel.prototype, 'update').mockResolvedValue(null)

            await postgresModel.updateEntry(query, update);
            expect(postgresModel.update).toHaveBeenCalledWith(query, update);
        });
    })
});
