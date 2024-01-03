import { Knex } from 'knex';
import dotenv from 'dotenv';
import { POSTGRES_DB, POSTGRES_KNEX_MAX_POOL, POSTGRES_HOST, POSTGRES_KNEX_MIN_POOL, POSTGRES_PASSWORD, POSTGRES_USER, POSTGRES_TEST_DB, POSTGRES_TEST_USER, POSTGRES_TEST_PASSWORD } from '@global';

dotenv.config({ path: "../../../../.env" });

const getConnectionConfig = (database: string, user: string, password: string): Knex.ConnectionConfig => {
  return {
    host: POSTGRES_HOST,
    database,
    user,
    password,
  };
};

const getKnexConfig = (connection: Knex.ConnectionConfig): Knex.Config => {
  return {
    client: 'pg',
    connection,
    pool: {
      min: +POSTGRES_KNEX_MIN_POOL,
      max: +POSTGRES_KNEX_MAX_POOL,
    },
    migrations: {
      directory: './migrations'
    }
  };
};

const testConnection = getConnectionConfig(POSTGRES_TEST_DB, POSTGRES_TEST_USER, POSTGRES_TEST_PASSWORD);
const devConnection = getConnectionConfig(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD);

const config: Record<string, Knex.Config> = {
  test: getKnexConfig(testConnection),
  development: getKnexConfig(devConnection),
};

export default config;
