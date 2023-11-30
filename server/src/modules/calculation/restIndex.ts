import { Request, Response } from 'express';
import { postCalculationController } from './controllers/postCalculation';

export interface IMethod {
    route: string;
    controller: (req: Request, res: Response) => Promise<void>;
}

export interface IRestMethods {
    get: IMethod[]
    post: IMethod[];
}

export const calculationRestMethods: IRestMethods = {
    get: [],
    post: [
        { route: '/calculations', controller: postCalculationController }
    ]
}
