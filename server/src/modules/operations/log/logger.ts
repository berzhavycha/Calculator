import winston from 'winston';
import { LOG_LEVEL } from '@global';
import { LogLevels, errorFilter, infoFilter } from '@log';
import path from 'path'

const { combine, timestamp, json } = winston.format;

const logsDirectory = 'files'; 

const logFilePath = (fileName: string) => path.join(__dirname, logsDirectory, fileName);

winston.loggers.add('operationsLogger', {
  defaultMeta: {
    module: 'operations',
  },
  level: LOG_LEVEL || LogLevels.INFO,
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({
      filename: logFilePath('combined.log'),
    }),
    new winston.transports.File({
      filename: logFilePath('operations-error.log'),
      level: LogLevels.ERROR,
      format: combine(errorFilter(), timestamp(), json()),
    }),
    new winston.transports.File({
      filename: logFilePath('operations-info.log'),
      level: LogLevels.INFO,
      format: combine(infoFilter(), timestamp(), json()),
    }),
  ],
})



export const operationsLogger = winston.loggers.get('operationsLogger')
