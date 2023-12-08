import { tableName } from './migrations';
import { Knex } from 'knex';
import { ICalculationModel, IExpression, Sort } from '../mongo';

export class PostgresCalculationModel implements ICalculationModel {
    private knex: Knex;

    constructor(knex: Knex) {
        this.knex = knex;
    }

    public async createAndSaveNewEntry(expression: string, result: number): Promise<void> {
        await this.knex(tableName).insert({ expression, result, last_request_at: new Date() });
    }
    
    public async findOne(query: Partial<IExpression>): Promise<IExpression | null> {
        const result = await this.knex(tableName).where(query).first();

        if (result) {
            const expression: IExpression = {
                expression: result.expression,
                result: result.result,
                last_request_at: result.last_request_at,
            };
            return expression;
        }

        return null;
    }

    public async updateEntry(query: Partial<IExpression>, update: Partial<IExpression>): Promise<void> {
        await this.knex(tableName).where(query).update(update);
    }

    public async findMany(limit: number, sortField?: string, sortOrder?: Sort): Promise<IExpression[]> {
        let query = this.knex(tableName);

        if (sortField && sortOrder) {
            query = query.orderBy(sortField, sortOrder);
        }

        if (limit > 0) {
            query = query.limit(limit);
        }

        const results = await query;

        return results.map((row: IExpression) => ({
            expression: row.expression,
            result: row.result,
            last_request_at: row.last_request_at,
        }));
    }
}
