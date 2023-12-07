import { Request, Response } from "express";
import config from '@config'

export const getHistoryStatusController = async (req: Request, res: Response): Promise<void> => {
    res.json({ isEnabled: config.modulesConnection.isHistoryEnabled })
}