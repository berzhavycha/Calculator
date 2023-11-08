import { MathOperators, SpecialOperators } from "../config/constants";
import { operations } from "../config/operations";

export function factorial(num: number): number {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

export function isMathOperator(token: string): token is MathOperators {
  return token in operations;
}

export function reduceAllSpaces(expression: string): string {
  return expression.split('').reduce((acc, char) => {
    if (char !== ' ') {
      acc += char;
    }
    return acc;
  }, '');
}