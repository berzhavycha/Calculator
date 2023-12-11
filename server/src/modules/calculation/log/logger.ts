import winston from 'winston';
import path from 'path';
import { LOG_LEVEL } from '@global';
import { LogLevels, errorFilter, infoFilter } from '@log';

const { combine, timestamp, json } = winston.format;

const logsDirectory = 'files'; 

const logFilePath = (fileName: string) => path.join(__dirname, logsDirectory, fileName);

winston.loggers.add('calculationLogger', {
  defaultMeta: {
    module: 'calculation',
  },
  level: LOG_LEVEL || LogLevels.INFO,
  format: combine(timestamp(), json()),
  transports: [
      new winston.transports.File({
          filename: logFilePath('combined.log'),
      }),
      new winston.transports.File({
          filename: logFilePath('calculation-error.log'),
          level: LogLevels.ERROR,
          format: combine(errorFilter(), timestamp(), json()),
      }),
      new winston.transports.File({
          filename: logFilePath('calculation-info.log'),
          level: LogLevels.INFO,
          format: combine(infoFilter(), timestamp(), json()),
      }),
  ],
});

export const calculationLogger = winston.loggers.get('calculationLogger');
