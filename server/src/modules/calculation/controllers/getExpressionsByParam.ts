import { currentDatabaseService } from "@database";
import { Request, Response } from "express";
import { SortOrder } from "mongoose";

export const getExpressionByParam = async (req: Request, res: Response): Promise<void> => {
  try {
    const limit: number = parseInt(req.query.limit as string);
    const sortOrder: SortOrder = parseInt(req.query.order as string) as SortOrder;

    if (!limit || isNaN(limit)) {
      res.status(400).json({ error: "Invalid or missing 'limit' parameter" });
      return;
    }

    const expressions = await currentDatabaseService.getExpressionByParam(limit, sortOrder);
    res.setHeader("Content-Type", "application/json").status(200).json(expressions);
  } catch (error) {
    res.setHeader("Content-Type", "application/json").status(500).json({ error: "Internal server error" });
  }
};
