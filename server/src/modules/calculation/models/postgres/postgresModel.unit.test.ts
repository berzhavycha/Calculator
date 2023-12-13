import { PostgresCalculationModel } from './model';
import { BaseKnexModel } from '@database';


describe('PostgresCalculationModel', () => {
    let postgresModel: PostgresCalculationModel;

    beforeEach(() => {
        postgresModel = new PostgresCalculationModel();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('createAndSaveNewEntry method', () => {
        test('should create and save a new entry', async () => {
            const expression = '2+2';
            const result = 4;

            jest.spyOn(BaseKnexModel.prototype, 'insert')

            await postgresModel.createAndSaveNewEntry(expression, result);

            expect(postgresModel.insert).toHaveBeenCalledWith({
                expression,
                result,
                last_request_at: expect.any(Date),
            });
        });
    })

    describe('findOne method', () => {
        test('should find an existing entry in the database', async () => {
            const query = { expression: '2+2' };
            const mockedResult = { expression: '2+2', result: 4, last_request_at: new Date() }

            jest.spyOn(BaseKnexModel.prototype, 'findBy').mockResolvedValue(mockedResult)

            const result = await postgresModel.findOne(query);

            expect(postgresModel.findBy).toHaveBeenCalledWith(query);
            expect(result).toEqual(mockedResult)
        });

        test('should return null if the entry does not exist', async () => {
            const query = { expression: '2+2' };

            jest.spyOn(BaseKnexModel.prototype, 'findBy').mockResolvedValue(null)

            const result = await postgresModel.findOne(query);

            expect(postgresModel.findBy).toHaveBeenCalledWith(query);
            expect(result).toEqual(null)
        });
    })

    describe('updateEntry', () => {
        test('should update an existing entry in the database', async () => {
            const query = { expression: '2+2' };
            const update = { last_request_at: new Date() };

            jest.spyOn(BaseKnexModel.prototype, 'update')

            await postgresModel.updateEntry(query, update);

            expect(postgresModel.update).toHaveBeenCalledWith(query, update);
        });

        test('should not update if the entry does not exist', async () => {
            const query = { expression: '111+222' };
            const update = { last_request_at: new Date() };

            jest.spyOn(BaseKnexModel.prototype, 'update').mockResolvedValue(null)

            await postgresModel.updateEntry(query, update);
            expect(postgresModel.update).toHaveBeenCalledWith(query, update);
        });
    })
});
