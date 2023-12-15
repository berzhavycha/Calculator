import winston from 'winston';

export interface ILoggerService {
    moduleName: string
    logger: winston.Logger
    info: (message: string) => void
    error: (message: string) => void
}