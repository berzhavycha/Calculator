// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
require('ts-node/register');
import type { Knex } from 'knex';

const environments: string[] = ['development', 'staging', 'production'];

const connection: Knex.ConnectionConfig = {
  host: process.env.POSTGRES_HOST as string,
  database: process.env.POSTGRES_DB as string,
  user: process.env.POSTGRES_USER as string,
  password: process.env.POSTGRES_PASSWORD as string,
};

const commonConfig: Knex.Config = {
  client: 'pg',
  connection,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'calculation',
    directory: './src/database/options/postgres/db/migrations'
  }
};

export default Object.fromEntries(environments.map((env: string) => [env, commonConfig]));