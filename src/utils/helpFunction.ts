import { MathOperators, OperatorType } from '../services/constants';
import config, { OperationsType } from '../config/operations';

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
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export interface PriorityInfo {
  priority: number;
  operators: string[];
  type: OperatorType;
}

export function getPriorityInfoArray(operations: OperationsType): PriorityInfo[] {
  return Object.entries(operations)
    .reduce((priorityArr: PriorityInfo[], [operator, operatorInfo]) => {
      const existingIndex = priorityArr.findIndex((item) => item.priority === operatorInfo.priority);
      if (existingIndex !== -1) {
        priorityArr[existingIndex].operators.push(operator);
      } else {
        priorityArr.push({
          priority: operatorInfo.priority,
          operators: [operator],
          type: operatorInfo.type as OperatorType,
        });
      }
      return priorityArr;
    }, [])
    .sort((a, b) => b.priority - a.priority);
}
