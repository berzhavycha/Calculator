import { Request, Response } from "express";
import { createCalculation } from "@modules/calculation/services";
import { calculationLogger } from "@modules/calculation/log/logger";

export const postCalculationController = async (req: Request, res: Response): Promise<void> => {
  const { expression } = req.body;

  try {
    const result = await createCalculation(expression);
    res.setHeader("Content-Type", "application/json").status(200).json({ result });
  } catch (error) {
    if (error instanceof Error) {
      calculationLogger.error('Error creating new calculation:' + error);
      res.status(500).json({ message: error.message });
    }
  }
};
