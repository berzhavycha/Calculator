import { IRestMethods } from '../calculation';
import { getOperationsController } from './controllers/getOperationsController';

export const operationsRestMethods: IRestMethods = {
    get: [
        { route: '/operations', controller: getOperationsController }
    ],
    post: []
};
