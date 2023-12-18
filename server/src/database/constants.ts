import { POSTGRES_TEST_DB, POSTGRES_HOST, POSTGRES_TEST_USER, POSTGRES_TEST_PASSWORD} from '@global';
import { Pool } from 'pg';

export const mockPool = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_TEST_DB,
    user: POSTGRES_TEST_USER,
    password: POSTGRES_TEST_PASSWORD,
});

export enum DataBases {
  MONGO_DB = "mongoDB",
  POSTGRE_SQL = "postgreSQL"
}
