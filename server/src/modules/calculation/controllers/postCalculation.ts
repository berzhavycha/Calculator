import { Request, Response } from "express";
import { createCalculation } from "../services/createCalculation";

export const postCalculationController = async (req: Request, res: Response): Promise<void> => {
  const { expression } = req.body;

  try {
    const result = await createCalculation(expression);
    res.setHeader("Content-Type", "application/json").status(200).json({ result });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};
