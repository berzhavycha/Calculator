import { Request } from "express"

export const buildRequestInfoLog = (req: Request, attributes?: Record<string, string>): string => {
  const requestInfo = `Request: ${req.method} ${req.originalUrl}`;

  if (attributes) {
    const logAttributes = Object.entries(attributes)
      .map(([key, value]) => `${key}: ${value}`)
      .join(', ');

    return `Request handled successfully. ${requestInfo}, ${logAttributes}`;
  }

  return `Request handled successfully. ${requestInfo}.`;
};