import { operationsModule } from './operations';
import { calculationHistoryModule } from './calculationHistory';
import { Module, RestMethods } from './interfaces';
import { logModule } from './log';
import { databaseModule } from './database';

const modulesContainer: Module[] = [operationsModule, calculationHistoryModule, logModule, databaseModule];

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
