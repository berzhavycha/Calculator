// Import the necessary dependencies and the class to test
import { PostgresDatabase } from '../index';
import { Pool } from 'pg';

jest.mock('@global', () => ({
    POSTGRES_DB: 'test_db',
    POSTGRES_HOST: 'localhost',
    POSTGRES_PASSWORD: 'password',
    POSTGRES_USER: 'test_user',
    POSTGRES_KNEX_MIN_POOL: 2,
    POSTGRES_KNEX_MAX_POOL: 10
}));

describe('PostgresDatabase', () => {
    let mockPoolConnect: jest.Mock;
    let mockClientRelease: jest.Mock;

    beforeEach(() => {
        mockClientRelease = jest.fn();
        mockPoolConnect = jest.fn().mockResolvedValue({
            release: mockClientRelease,
        });

        jest.spyOn(Pool.prototype, 'connect').mockImplementation(mockPoolConnect);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should connect to PostgreSQL and release the client', async () => {
        const postgresDB = new PostgresDatabase();

        await postgresDB.connect();

        expect(mockPoolConnect).toHaveBeenCalled();
        expect(mockClientRelease).toHaveBeenCalled();
    });

    it('should throw an error if pool is not initialized', async () => {
        const postgresDB = new PostgresDatabase();
        postgresDB['pool'] = null;

        await expect(postgresDB.connect()).rejects.toThrow('Database pool not initialized.');
    });
});
