import { IRestMethods } from '../calculation';
import { Request, Response } from 'express';
import config from '@config';

const getOperationsController = async (_req: Request, res: Response): Promise<void> => {
    res.setHeader('Content-Type', 'application/json').status(200).json(config.operations);
};

export const operationsRestMethods: IRestMethods = {
    get: [
        { route: '/operations', controller: getOperationsController }
    ]
};
