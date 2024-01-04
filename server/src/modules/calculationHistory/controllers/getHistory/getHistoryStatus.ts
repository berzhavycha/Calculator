import { Request, Response } from "express";
import config from '@config'
import { calculationLogger } from "@modules/calculationHistory/log/logger";

export const getHistoryStatusController = async (req: Request, res: Response): Promise<void> => {
    try {
        const isEnabled = config.modulesConnection.isHistoryEnabled;
        res.json({ isEnabled });
    } catch (error) {
        calculationLogger.error('Error retrieving history status:' + error);
        res.status(500).json({ error: "Internal server error" });
    }

}