import { Request, Response } from "express";
import { findExpressions } from "../services/findExpressions";
import { DEFAULT_LIMIT_NUMBER, DEFAULT_SORT_ORDER } from "../constants";

export const getExpressionByParam = async (req: Request, res: Response): Promise<void> => {
  try {
    const limit = parseInt(req.query.limit as string) ?? DEFAULT_LIMIT_NUMBER;
    const sortOrder = parseInt(req.query.order as string) ?? DEFAULT_SORT_ORDER;

    if (!limit || isNaN(limit)) {
      res.status(400).json({ error: "Invalid or missing 'limit' parameter" });
      return;
    }

    const expressions = await findExpressions(limit, sortOrder);
    res.setHeader("Content-Type", "application/json").status(200).json(expressions);
  } catch (error) {
    res.setHeader("Content-Type", "application/json").status(500).json({ error: "Internal server error" });
  }
};
