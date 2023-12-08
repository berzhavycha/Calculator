import { Knex } from 'knex';
import { POSTGRES_DB, POSTGRES_KNEX_MAX_POOL, POSTGRES_HOST, POSTGRES_KNEX_MIN_POOL, POSTGRES_PASSWORD, POSTGRES_USER } from '@global';

const connection: Knex.ConnectionConfig = {
  host: POSTGRES_HOST,
  database: POSTGRES_DB,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
};

const config: Record<string, Knex.Config> = {
  development: {
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
  },
};

export default config