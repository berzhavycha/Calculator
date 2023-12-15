import { POSTGRES_DB, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_USER } from '@global';
import { Pool, PoolClient } from 'pg';
import { IDatabase } from '@database/interfaces';
import { appLogger } from '../../../server';

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async connect(_url: string): Promise<void> {
    if (!this.pool) {
      appLogger.error('Postgres Connection Error: Database pool not initialized.')
      throw new Error('Database pool not initialized.');
    }

    const client: PoolClient = await this.pool.connect();
    appLogger.info('Connected to PostgreSQL!')

    client.release(); 
  }
}
