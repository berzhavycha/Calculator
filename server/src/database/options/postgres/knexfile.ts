import dotenv from 'dotenv';
dotenv.config({ path: "../../../../.env" });
import { Knex } from 'knex';
import { POSTGRES_DB, POSTGRES_KNEX_MAX_POOL, POSTGRES_HOST, POSTGRES_KNEX_MIN_POOL, POSTGRES_PASSWORD, POSTGRES_USER, POSTGRES_TEST_DB, POSTGRES_TEST_USER, POSTGRES_TEST_PASSWORD, POSTGRES_TEST_HOST } from '@global';


const getConnectionConfig = (host: string, database: string, user: string, password: string): Knex.ConnectionConfig => {
  return {
    host,
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

const testConnection = getConnectionConfig(POSTGRES_TEST_HOST, POSTGRES_TEST_DB, POSTGRES_TEST_USER, POSTGRES_TEST_PASSWORD);
const devConnection = getConnectionConfig(POSTGRES_HOST, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD);

const config: Record<string, Knex.Config> = {
  test: getKnexConfig(testConnection),
  development: getKnexConfig(devConnection),
};

export default config;
