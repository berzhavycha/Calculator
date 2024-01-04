import { Request, Response } from "express";
import { createCalculationHistory } from "@modules/calculationHistory/services";
import { calculationLogger } from "@modules/calculationHistory/log/logger";

export const postCalculationHistoryController = async (req: Request, res: Response): Promise<void> => {
  const { expression } = req.body;

  try {
    const result = await createCalculationHistory(expression);
    res.setHeader("Content-Type", "application/json").status(200).json({ result });
  } catch (error) {
    if (error instanceof Error) {
      calculationLogger.error('Error creating new calculation:' + error);
      res.status(500).json({ message: error.message });
    }
  }
};
