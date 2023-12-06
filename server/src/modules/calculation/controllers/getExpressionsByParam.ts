import { Request, Response } from "express";
import { findExpressions } from "../services/findExpressions";
import { DEFAULT_LIMIT_NUMBER, ASC} from "../constants";
import { Sort } from "../models/mongo";

export const getExpressionByParam = async (req: Request, res: Response): Promise<void> => {
  try {
    const limit = parseInt(req.query.limit as string) ?? DEFAULT_LIMIT_NUMBER;
    const sortOrder = req.query.order as Sort ?? ASC;

    if (isNaN(limit)) {
      res.status(400).json({ error: "Invalid or missing 'limit' parameter" });
      return;
    }

    const expressions = await findExpressions(limit, sortOrder);
    res.setHeader("Content-Type", "application/json").status(200).json(expressions);
  } catch (error) {
    res.setHeader("Content-Type", "application/json").status(500).json({ error: "Internal server error" });
  }
};
