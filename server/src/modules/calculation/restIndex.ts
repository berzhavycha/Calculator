import { currentDatabase } from '@database';
import { Request, Response } from 'express';

export interface IMethod {
    route: string;
    controller: (req: Request, res: Response) => Promise<void>;
}

export interface IRestMethods {
    get?: IMethod[]
    post?: IMethod[];
}

export const calculationRestMethods: IRestMethods = {
    post: [
        { route: '/operations', controller: currentDatabase.postCalculation }
    ]
}
