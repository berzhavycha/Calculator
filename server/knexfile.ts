// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { POSTGRES_DB, POSTGRES_KNEX_MAX_POOL, POSTGRES_HOST, POSTGRES_KNEX_MIN_POOL, POSTGRES_PASSWORD, POSTGRES_USER } from '@global';
import type { Knex } from 'knex';

const environments: string[] = ['development', 'staging', 'production'];

const connection: Knex.ConnectionConfig = {
  host: POSTGRES_HOST,
  database: POSTGRES_DB,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
};

const commonConfig: Knex.Config = {
  client: 'pg',
  connection,
  pool: {
    min: +POSTGRES_KNEX_MIN_POOL,
    max: +POSTGRES_KNEX_MAX_POOL,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/modules/calculation/models/postgres/migrations'
  }
};

export default Object.fromEntries(environments.map((env: string) => [env, commonConfig]));