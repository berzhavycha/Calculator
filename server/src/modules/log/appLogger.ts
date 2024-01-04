import { LoggerService } from "./loggerService"

export const appLogger = new LoggerService('app', './src/log/files/')
