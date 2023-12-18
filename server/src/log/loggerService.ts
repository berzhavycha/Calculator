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

    private enableHttpLogging: boolean;

    constructor(moduleName: string, logDirectory: string = 'files', enableHttpLogging: boolean = false) {
        this.moduleName = moduleName;
        this.logsDirectory = path.join(process.cwd(), logDirectory);
        this.enableHttpLogging = enableHttpLogging;

        this.logger = this.createLogger();
    }

    private createLogger(): winston.Logger {
        const transports: winston.transport[] = [
            new winston.transports.File({
                filename: this.logFilePath(`${this.moduleName}-warns.log`),
                level: LogLevels.ERROR,
                format: combine(timestamp(), json()),
            }),
            new winston.transports.File({
                filename: this.logFilePath(`${this.moduleName}-debug.log`),
                level: LogLevels.DEBUG,
                format: combine(timestamp(), json()),
            })
        ];

        if (this.enableHttpLogging) {
            transports.push(
                new winston.transports.File({
                    filename: this.logFilePath(`${this.moduleName}-http.log`),
                    level: LogLevels.HTTP,
                    format: combine(timestamp(), json()),
                })
            );
        }

        return winston.createLogger({
            defaultMeta: {
                database: config.database,
                PORT: PORT
            },
            level: LOG_LEVEL || LogLevels.INFO,
            format: combine(timestamp(), json()),
            transports: transports,
        });
    }
    private logFilePath = (fileName: string): string => path.join(this.logsDirectory, fileName);

    public info(message: string): void {
        this.logger.info(message);
    }

    public error(message: string): void {
        this.logger.error(message);
    }

    public http(message: string): void {
        this.logger.log({
            level: LogLevels.HTTP,
            message: message
        });
    }
}
