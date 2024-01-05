import { LoggerService } from "./loggerService"

export const appLogger = new LoggerService('app', './src/modules/log/files/')
