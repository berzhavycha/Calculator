import { Knex } from 'knex';
import dotenv from 'dotenv'
dotenv.config({ path: "../../../../.env" });
import { POSTGRES_DB, POSTGRES_KNEX_MAX_POOL, POSTGRES_HOST, POSTGRES_KNEX_MIN_POOL, POSTGRES_PASSWORD, POSTGRES_USER, POSTGRES_TEST_DB, POSTGRES_TEST_USER, POSTGRES_TEST_PASSWORD } from '@global';


const testConnection: Knex.ConnectionConfig = {
  host: POSTGRES_HOST,
  database: POSTGRES_TEST_DB,
  user: POSTGRES_TEST_USER,
  password: POSTGRES_TEST_PASSWORD,
}

const devConnection: Knex.ConnectionConfig = {
  host: POSTGRES_HOST,
  database: POSTGRES_DB,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
};

const config: Record<string, Knex.Config> = {
  test: {
    client: 'pg',
    connection: testConnection,
    pool: {
      min: +POSTGRES_KNEX_MIN_POOL,
      max: +POSTGRES_KNEX_MAX_POOL,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    }
  },
  development: {
    client: 'pg',
    connection: devConnection,
    pool: {
      min: +POSTGRES_KNEX_MIN_POOL,
      max: +POSTGRES_KNEX_MAX_POOL,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    }
  },
};

export default config