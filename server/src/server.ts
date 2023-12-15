import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import "module-alias/register";
import { PORT, MONGODB_URL } from "@global";
import { currentDatabase } from "@database";
import { modules } from "@modules";
import { LoggerService } from "@log";

const app = express();
export const appLogger = new LoggerService('app', './src/log/files/', true)

app.use(bodyParser.json());

app.use((_req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use((req: Request, _res: Response, next: NextFunction) => {
  appLogger.http(`Incoming Request - Method: ${req.method}, URL: ${req.url}`);
  next();
});

modules.get.forEach(({ route, controller }) => {
  app.get(route, (req: Request, res: Response) => {
    res.on('finish', () => {
      appLogger.http(`Outgoing Response - Method: ${req.method}, URL: ${req.url}, Status: ${res.statusCode}`);
    });
    controller(req, res);
  });
});

modules.post.forEach(({ route, controller }) => {
  app.post(route, (req: Request, res: Response) => {
    res.on('finish', () => {
      appLogger.http(`Outgoing Response - Method: ${req.method}, URL: ${req.url}, Status: ${res.statusCode}`);
    });
    controller(req, res);
  });
});

currentDatabase.connect(MONGODB_URL).then(() => {
  app.listen(PORT, () => {
    const logString = `Server running on port ${PORT}`
    appLogger.info(logString)
    console.log(logString)
  });
});
