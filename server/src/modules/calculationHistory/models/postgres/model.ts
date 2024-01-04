import { IExpression, ICalculationHistoryModel, Sort } from "../interfaces";
import { BaseKnexModel } from '@database';
import { POSTGRES_CALCULATION_COLLECTION } from '@global';

export class PostgresCalculationHistoryModel extends BaseKnexModel implements ICalculationHistoryModel {
    constructor() {
        super(POSTGRES_CALCULATION_COLLECTION);
    }

    public async createAndSaveNewEntry(expression: string, result: number): Promise<void> {
        await this.insert<IExpression, void>({ expression, result, lastRequestAt: new Date() });
    }

    public async findOne(query: Partial<IExpression>): Promise<IExpression | null> {
        return this.findBy<Partial<IExpression>, IExpression>(query);
    }

    public async updateEntry(query: Partial<IExpression>, update: Partial<IExpression>): Promise<void> {
        await this.update<Partial<IExpression>, Partial<IExpression>, void>(query, update);
    }

    public async findMany(limit: number, sortField?: string, sortOrder?: Sort): Promise<IExpression[]> {
        let query = this.table;

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
            lastRequestAt: row.lastRequestAt,
        }));
    }
}
