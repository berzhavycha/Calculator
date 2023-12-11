import { LOG_LEVEL, PORT } from '@global';
import winston from 'winston';
import { LogLevels } from './constants';
import path from 'path'
import config from '@config'

const { combine, timestamp, json } = winston.format;

export const errorFilter = winston.format((info) => {
    return info.level === 'error' ? info : false;
});

export const infoFilter = winston.format((info) => {
    return info.level === 'info' ? info : false;
});

const logsDirectory = 'files';

const logFilePath = (fileName: string) => path.join(__dirname, logsDirectory, fileName);

winston.loggers.add('appLogger', {
    defaultMeta: {
        database: config.database,
        PORT: PORT
    },
    level: LOG_LEVEL || LogLevels.INFO,
    format: combine(timestamp(), json()),
    transports: [
        new winston.transports.File({
            filename: logFilePath('combined.log'),
        }),
        new winston.transports.File({
            filename: logFilePath('app-error.log'),
            level: LogLevels.ERROR,
            format: combine(errorFilter(), timestamp(), json()),
        }),
        new winston.transports.File({
            filename: logFilePath('app-info.log'),
            level: LogLevels.INFO,
            format: combine(infoFilter(), timestamp(), json()),
        }),
    ],
});

export const appLogger = winston.loggers.get('appLogger');

