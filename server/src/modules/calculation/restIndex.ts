import { Request, Response } from 'express';
import { postCalculationController } from './controllers/postCalculation';
import { getExpressionByParam } from './controllers/getExpressionsByParam';

export interface IMethod {
    route: string;
    controller: (req: Request, res: Response) => Promise<void>;
}

export interface IRestMethods {
    get: IMethod[]
    post: IMethod[];
}

export const calculationRestMethods: IRestMethods = {
    get: [
        { route: '/calculations', controller: getExpressionByParam }
    ],
    post: [
        { route: '/calculations', controller: postCalculationController }
    ]
}
