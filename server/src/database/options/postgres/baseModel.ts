import { database } from './knexDatabase'

export class BaseKnexModel {
    tableName: string;

    constructor(tableName: string) {
        this.tableName = tableName;
    }

    get table() {
        if (!this.tableName) {
            throw new Error('You must set a table name!');
        }
        return database(this.tableName);
    }

    async all<Result>(): Promise<Result[]> {
        return this.table;
    }

    async insert<Payload, Result>(data: Payload): Promise<Result> {
        const [result] = await this.table.insert(data).returning('*');
        return result;
    }

    async update<QueryType, Payload, Result>(query: QueryType, data: Payload): Promise<Result | null> {
        const [result] = await this.table.where(query as string).update(data).returning('*');
        return result;
    }

    async findBy<Payload, Result>(data: Payload): Promise<Result | null> {
        return this.table.where(data as string).first();
    }
}
