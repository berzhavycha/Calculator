import { Request, Response } from "express";
import config from "@config";

export const getOperationsController = async (
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  res.setHeader("Content-Type", "application/json").status(200).json(config.operations);
};
