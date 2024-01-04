import { getHistoryStatusController, postCalculationHistoryController, getExpressionByParam } from './controllers';
import config from '@config'
import { Module } from '@modules/interfaces';

const historyEnabled = config.modulesConnection.isHistoryEnabled;

export const calculationHistoryModule: Module = {
  endpoints: {
    get: [
      { route: '/calculations/status', controller: getHistoryStatusController },
      ...(historyEnabled ? [{ route: "/calculations", controller: getExpressionByParam }] : [])
    ],
    post: [{ route: "/calculations", controller: postCalculationHistoryController }],
  }
}

