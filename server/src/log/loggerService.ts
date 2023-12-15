import { LOG_LEVEL, PORT } from '@global';
import winston from 'winston';
import { LogLevels } from './constants';
import config from '@config'
import { ILoggerService } from './interfaces';
import path from 'path';

const { combine, timestamp, json } = winston.format;

export class LoggerService implements ILoggerService {
    public moduleName: string
    public logsDirectory: string;
    public logger: winston.Logger

    constructor(moduleName: string, logDirectory: string = 'files') {
        this.moduleName = moduleName;
        this.logsDirectory = path.join(process.cwd(), logDirectory); 

        this.logger = this.createLogger();
    }

    private createLogger(): winston.Logger {
        return winston.createLogger({
            defaultMeta: {
                database: config.database,
                PORT: PORT
            },
            level: LOG_LEVEL || LogLevels.INFO,
            format: combine(timestamp(), json()),
            transports: [
                new winston.transports.File({
                    filename: this.logFilePath(`${this.moduleName}-combined.log`),
                }),
                new winston.transports.File({
                    filename: this.logFilePath(`${this.moduleName}-error.log`),
                    level: LogLevels.ERROR,
                    format: combine(this.errorFilter(), timestamp(), json()),
                }),
                new winston.transports.File({
                    filename: this.logFilePath(`${this.moduleName}-info.log`),
                    level: LogLevels.INFO,
                    format: combine(this.infoFilter(), timestamp(), json()),
                }),
                new winston.transports.File({
                    filename: this.logFilePath(`${this.moduleName}-http.log`),
                    level: LogLevels.HTTP,
                    format: combine(this.httpFilter(), timestamp(), json()),
                }),
            ],
        });
    }

    private errorFilter = winston.format((error) => {
        return error.level === LogLevels.ERROR ? error : false;
    });

    private infoFilter = winston.format((info) => {
        return info.level === LogLevels.INFO ? info : false;
    });

    private httpFilter = winston.format((http) => {
        return http.level === LogLevels.HTTP ? http : false;
    });

    private logFilePath = (fileName: string): string => path.join(this.logsDirectory, fileName); 

    public info(message: string): void {
        this.logger.info(message);
    }

    public error(message: string): void {
        this.logger.error(message);
    }

    public http(message: string): void {
        this.logger.http(message);
    }
}
