import { getHistoryStatusController } from './controllers/getHistoryStatus';
import { Request, Response } from "express";
import { postCalculationController } from "./controllers/postCalculation";
import { getExpressionByParam } from "./controllers/getExpressionsByParam";

export type IMethod = {
  route: string;
  controller: (req: Request, res: Response) => Promise<void>;
};

export type IRestMethods = {
  get: IMethod[];
  post: IMethod[];
};

export const calculationRestMethods: IRestMethods = {
  get: [
    { route: "/calculations", controller: getExpressionByParam },
    { route: '/calculations/status', controller: getHistoryStatusController }
  ],
  post: [{ route: "/calculations", controller: postCalculationController }],
};
