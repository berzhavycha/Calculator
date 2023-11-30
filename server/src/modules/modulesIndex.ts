import { operationsRestMethods } from "./operations/restIndex";
import { calculationRestMethods, IMethod } from "./calculation";

type IModules = {
  get: IMethod[];
  post: IMethod[];
};

export const modules: IModules = {
  get: [...operationsRestMethods.get, ...calculationRestMethods.get],
  post: [...calculationRestMethods.post],
};
