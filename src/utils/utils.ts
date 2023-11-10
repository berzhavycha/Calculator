import { MathOperators } from "../services/constants";
import config from "../config/operations";

export function factorial(num: number): number {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

export function isMathOperator(token: string): token is MathOperators {
  return token in config.operations;
}

export function reduceAllSpaces(expression: string): string {
  return expression.split('').reduce((acc, char) => {
    if (char !== ' ') {
      acc += char;
    }
    return acc;
  }, '');
}

export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function getTrigonometricExpressionRegex(operatorRegexPattern: string): RegExp {
  return new RegExp(`${operatorRegexPattern}\\s*(-?\\d+\\.?\\d*)`, 'i')
}

export function getRegularExpressionRegex(operatorRegexPattern: string): RegExp {
  return new RegExp(`(-?\\d+\\.?\\d*)\\s*${operatorRegexPattern}\\s*(-?\\d+\\.?\\d*)`)
}