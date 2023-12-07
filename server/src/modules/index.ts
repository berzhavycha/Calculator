import { operationsModule} from "./operations";
import { calculationModule, Method, Module  } from "./calculation";

type Modules = {
  get: Method[];
  post: Method[];
};

const modulesContainer = [
  operationsModule,
  calculationModule
]

const createModules = (modules: Module[]): Modules => {
  const result: Modules = {
    get: [],
    post: [],
  };

  modules.forEach((mod) => {
    result.get.push(...mod.endpoints.get);
    result.post.push(...mod.endpoints.post);
  });

  return result;
};

export const modules = createModules(modulesContainer);