import { PostgresDatabase } from '../index';

describe('PostgresDatabase', () => {
  let postgresDatabase: PostgresDatabase;

  beforeEach(() => {
    postgresDatabase = new PostgresDatabase();
  });

  afterEach(async () => {
    if (postgresDatabase['pool']) {
      await postgresDatabase['pool'].end();
    }
  });

  test('should connect to PostgreSQL successfully', async () => {
    await expect(postgresDatabase.connect()).resolves.toBeUndefined();
  });
});
