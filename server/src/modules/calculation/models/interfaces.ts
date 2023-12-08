import { ASC, DESC } from '../constants'

export interface IExpression {
    expression: string;
    result: number;
    last_request_at: Date;
}

export type Sort = typeof ASC | typeof DESC

export interface ICalculationModel {
    createAndSaveNewEntry(expression: string, result: number): Promise<void>;
    updateEntry(query: Partial<IExpression>, update: Partial<IExpression>): Promise<void>;
    findOne(query: Partial<IExpression>): Promise<IExpression | null>;
    findMany(limit: number, sortField?: string, sortOrder?: Sort): Promise<IExpression[]>;
}

