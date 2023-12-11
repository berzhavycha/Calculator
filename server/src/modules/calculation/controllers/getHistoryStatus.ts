import { Request, Response } from "express";
import config from '@config'
import { calculationLogger } from "../log/logger";
import { buildRequestInfoLog } from "@utils";

export const getHistoryStatusController = async (req: Request, res: Response): Promise<void> => {
    try {
        const isEnabled = config.modulesConnection.isHistoryEnabled;
        res.json({ isEnabled });

        calculationLogger.info(`${buildRequestInfoLog(req, { historyStatus: `${isEnabled}` })}`);
    } catch (error) {
        calculationLogger.error('Error retrieving history status:', error);
        res.status(500).json({ error: "Internal server error" });
    }
}