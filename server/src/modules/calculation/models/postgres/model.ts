import { POSTGRES_CALCULATION_COLLECTION } from '@global';
import { Pool, QueryResult } from 'pg';
import { Sort, IExpression } from '../mongo';

interface ICalculationModel {
    createAndSaveNewEntry(expression: string, result: number): Promise<void>;
    updateEntry(query: Partial<IExpression>, update: Partial<IExpression>): Promise<void>;
    findOne(query: Partial<IExpression>): Promise<IExpression | null>;
    findMany(limit: number, sortField?: string, sortOrder?: Sort): Promise<IExpression[]>;
}

export class PostgresCalculationModel implements ICalculationModel {
    private pool: Pool;

    constructor(pool: Pool) {
        this.pool = pool;
    }

    public async createAndSaveNewEntry(expression: string, result: number): Promise<void> {
        const client = await this.pool.connect();
        try {
            const query = `INSERT INTO ${POSTGRES_CALCULATION_COLLECTION} (expression, result) VALUES ($1, $2)`;
            await client.query(query, [expression, result]);
        } finally {
            client.release();
        }
    }

    public async findOne(query: Partial<IExpression>): Promise<IExpression | null> {
        const client = await this.pool.connect();
        try {
            const keys = Object.keys(query);
            const values = Object.values(query);
            let whereClause = '';

            if (keys.length > 0) {
                whereClause = `WHERE ${keys.map((key, index) => `${key} = $${index + 1}`).join(' AND ')}`;
            }

            const queryString = `SELECT * FROM ${POSTGRES_CALCULATION_COLLECTION} ${whereClause}`;

            const result: QueryResult = await client.query(queryString, values);

            if (result.rowCount && result.rowCount > 0) {
                const firstRow = result.rows[0];
                const expression: IExpression = {
                    expression: firstRow.expression,
                    result: firstRow.result,
                    last_request_at: firstRow.last_request_at,
                };

                return expression;
            }

            return null;
        } finally {
            client.release();
        }
    }

    public async updateEntry(query: Partial<IExpression>, update: Partial<IExpression>): Promise<void> {
        const client = await this.pool.connect();
        try {
            const updateKeys = Object.keys(update);
            const updateValues = Object.values(update);
            const queryKeys = Object.keys(query);
            const queryValues = Object.values(query);

            const updateSetClause = updateKeys.map((key, index) => `${key} = $${index + 1}`).join(', ');
            const whereClause = queryKeys.map((key, index) => `${key} = $${updateKeys.length + index + 1}`).join(' AND ');

            const queryString = `UPDATE ${POSTGRES_CALCULATION_COLLECTION} SET ${updateSetClause} WHERE ${whereClause}`;

            const values = [...updateValues, ...queryValues];

            await client.query(queryString, values);
        } finally {
            client.release();
        }
    }

    public async findMany(limit: number, sortField?: string, sortOrder?: Sort): Promise<IExpression[]> {
        const client = await this.pool.connect();
        try {
            let queryString = `SELECT * FROM ${POSTGRES_CALCULATION_COLLECTION}`;

            if (sortField && sortOrder) {
                const order = sortOrder;
                queryString += ` ORDER BY ${sortField} ${order}`;
            }

            if (limit > 0) {
                queryString += ` LIMIT ${limit}`;
            }

            const result = await client.query(queryString);

            return result.rows.map((row) => ({
                expression: row.expression,
                result: row.result,
                last_request_at: row.last_request_at,
            }));
        } finally {
            client.release();
        }
    }
}
