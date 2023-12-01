import { Request, Response } from "express";
import { getExpressionByParamService } from "../services/getExpressionByParamService";

export const getExpressionByParam = async (req: Request, res: Response): Promise<void> => {
  try {
    const limit = parseInt(req.query.limit as string);
    const sortOrder = parseInt(req.query.order as string);

    if (!limit || isNaN(limit)) {
      res.status(400).json({ error: "Invalid or missing 'limit' parameter" });
      return;
    }

    const expressions = await getExpressionByParamService(limit, sortOrder);
    res.setHeader("Content-Type", "application/json").status(200).json(expressions);
  } catch (error) {
    res.setHeader("Content-Type", "application/json").status(500).json({ error: "Internal server error" });
  }
};
