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

  it('should connect to PostgreSQL successfully', async () => {
    await expect(postgresDatabase.connect()).resolves.toBeUndefined();
  });
});
