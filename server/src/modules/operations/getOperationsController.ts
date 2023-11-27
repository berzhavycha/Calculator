import { Request, Response } from "express"
import config from '@config'

export const getOperationsController = (_req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json').status(200).json(config.operations)
}
