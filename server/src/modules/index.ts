import { operationsModule } from './operations';
import { calculationHistoryModule } from './calculationHistory';
import { Module, RestMethods } from './interfaces';

const modulesContainer: Module[] = [operationsModule, calculationHistoryModule];

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
