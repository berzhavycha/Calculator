import path from 'path'

export const generateLogFilePath = (logsDirectory: string, fileName: string) => path.join(__dirname, logsDirectory, fileName);
