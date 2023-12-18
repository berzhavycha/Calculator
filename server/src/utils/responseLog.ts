import { Request, Response } from "express";
import { appLogger } from "src/server";

export const responseLog = (req: Request, res: Response) => {
    res.on('finish', () => {
        appLogger.http(`Outgoing Response - Method: ${req.method}, URL: ${req.url}, Status: ${res.statusCode}`);
    });
}