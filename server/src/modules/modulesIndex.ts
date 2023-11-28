import { operationsRestMethods } from './operations/restIndex';
import { calculationRestMethods, IMethod } from './calculation';

interface IModules {
    get: IMethod[];
    post: IMethod[];
}


export const modules: IModules = {
    get: [
        ...operationsRestMethods.get
    ],
    post: [
        ...calculationRestMethods.post
    ]
};
