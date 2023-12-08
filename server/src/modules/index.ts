import { operationsModule } from './operations';
import { calculationModule } from './calculation';
import { Module, RestMethods } from './interfaces';

const modulesContainer: Module[] = [operationsModule, calculationModule];

const createModules = (modules: Module[]): RestMethods => {
  const result: RestMethods = {
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
