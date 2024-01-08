import { POSTGRES_DB, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_USER } from '@global';
import { Pool, PoolClient } from 'pg';
import { IDatabase } from '../../interfaces';
import { appLogger } from '@modules/log';

export class PostgresDatabase implements IDatabase {
  private pool: Pool | null = null;

  constructor() {
    this.pool = new Pool({
      user: POSTGRES_USER,
      database: POSTGRES_DB,
      password: POSTGRES_PASSWORD,
      host: POSTGRES_HOST,
    });
  }

  public async connect(): Promise<void> {
    if (!this.pool) {
      const errorMessage = 'Postgres Connection Error: Database pool not initialized.'
      appLogger.error(errorMessage)
      throw new Error(errorMessage);
    }

    for (let nRetry = 1; ; nRetry++) {
      try {
        const client: PoolClient = await this.pool.connect();

        if (nRetry > 1) {
          appLogger.info('Connected to PostgreSQL!')
        }

        client.release();
        return;
      } catch (error) {
        if (error instanceof Error && error.toString().includes('ECONNREFUSED') && nRetry < 5) {
          appLogger.error(`ECONNREFUSED connecting to Postgres, maybe container is not ready yet, will retry ${nRetry}`);
          await new Promise(resolve => setTimeout(resolve, 1000));
        } else {
          throw error;
        }
      }
    }
  }
}
