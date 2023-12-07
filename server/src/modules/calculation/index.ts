import { getHistoryStatusController } from './controllers/getHistoryStatus';
import { Request, Response } from "express";
import { postCalculationController } from "./controllers/postCalculation";
import { getExpressionByParam } from "./controllers/getExpressionsByParam";
import config from '@config'

export type Method = {
  route: string;
  controller: (req: Request, res: Response) => Promise<void>;
};

export type RestMethods = {
  get: Method[];
  post: Method[];
};

export type Module = {
  endpoints: RestMethods
}

const historyEnabled = config.modulesConnection.isHistoryEnabled;

export const calculationModule: Module = {
  endpoints: {
    get: [
      { route: '/calculations/status', controller: getHistoryStatusController },
      ...(historyEnabled ? [{ route: "/calculations", controller: getExpressionByParam }] : [])
    ],
    post: [{ route: "/calculations", controller: postCalculationController }],
  }
}

