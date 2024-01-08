import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import { PORT } from "@global";
import { currentDatabase } from "@modules/database";
import { modules } from "@modules";
import { appLogger, responseLog } from "@modules/log";

export const app = express();

app.use(bodyParser.json());

app.use((_req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use((req: Request, _res: Response, next: NextFunction) => {
  appLogger.http(`Incoming Request - Method: ${req.method}, URL: ${req.url} ${req.body ? `BODY: ${JSON.stringify(req.body)}` : ''}`);
  next();
});

modules.get?.forEach(({ route, controller }) => {
  app.get(route, (req: Request, res: Response) => {
    responseLog(req, res)
    controller(req, res);
  });
});

modules.post?.forEach(({ route, controller }) => {
  app.post(route, (req: Request, res: Response) => {
    responseLog(req, res)
    controller(req, res);
  });
});

currentDatabase.connect().then(() => {
  app.listen(PORT, () => {
    const logString = `Server running on port ${PORT}`
    appLogger.info(logString)
    console.log(logString)
  });
})