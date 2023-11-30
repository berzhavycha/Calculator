import { calculationRestMethods, IMethod } from './calculation';
import { operationsRestMethods } from './operations/restIndex';

interface IModules {
    get: IMethod[];
    post: IMethod[];
}

const getMethods: IMethod[] = operationsRestMethods.get || [];
const postMethods: IMethod[] = calculationRestMethods.post || [];

export const modules: IModules = {
    get: [
        ...getMethods
    ],
    post: [
        ...postMethods
    ]
};
