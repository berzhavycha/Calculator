import { calculationLogger } from '@modules/calculationHistory/log/logger';
import { Request, Response } from "express";
import { findExpressions } from "../../services/findExpressions/findExpressionsEntry";
import { ASC } from "../../constants";
import { Sort } from "../../models";

export const getExpressionByParam = async (req: Request, res: Response): Promise<void> => {
  try {
    const limit = parseInt(req.query.limit as string);
    const sortOrder = req.query.order as Sort ?? ASC;

    if (isNaN(limit)) {
      const error = `Invalid or missing 'limit' parameter. Request: ${req.method} ${req.originalUrl}, Limit: ${limit}, Sort Order: ${sortOrder}`

      calculationLogger.error(error)
      res.status(400).json({ error });
      return;
    }

    const expressions = await findExpressions(limit, sortOrder);
    res.setHeader("Content-Type", "application/json").status(200).json(expressions);
  } catch (error) {
    calculationLogger.error('Error retrieving expressions by params:' + error);
    res.setHeader("Content-Type", "application/json").status(500).json({ error: "Internal server error" });
  }
};
