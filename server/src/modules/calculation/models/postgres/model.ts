import { Knex } from 'knex';
import { IExpression, ICalculationModel, Sort } from '../mongo';
import { database } from '@database/options/postgres/db';

const tableName = 'calculations';

export class PostgresCalculationModel implements ICalculationModel {

    public async createAndSaveNewEntry(expression: string, result: number): Promise<void> {
        console.log(database)
        // await this.database(tableName).insert({ expression, result, last_request_at: new Date() });
    }

    public async findOne(query: Partial<IExpression>): Promise<IExpression | null> {
        // const result = await this.database(tableName).where(query).first();

        // if (result) {
        //     return {
        //         expression: result.expression,
        //         result: result.result,
        //         last_request_at: result.last_request_at,
        //     };
        // }

        // return null;

        return {
            expression: '1',
            result: 1,
            last_request_at: new Date()
        }
    }

    public async updateEntry(query: Partial<IExpression>, update: Partial<IExpression>): Promise<void> {
        // await this.database(tableName).where(query).update(update);
    }

    public async findMany(limit: number, sortField?: string, sortOrder?: Sort): Promise<IExpression[]> {
        // let query = this.database(tableName);

        // if (sortField && sortOrder) {
        //     query = query.orderBy(sortField, sortOrder);
        // }

        // if (limit > 0) {
        //     query = query.limit(limit);
        // }

        // const results = await query;

        // return results.map((row: IExpression) => ({
        //     expression: row.expression,
        //     result: row.result,
        //     last_request_at: row.last_request_at,
        // }));
        return [{
            expression: '1',
            result: 1,
            last_request_at: new Date()
        }]
    }
}
