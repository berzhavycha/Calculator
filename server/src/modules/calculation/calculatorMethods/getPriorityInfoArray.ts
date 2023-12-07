import { OperatorType } from "@modules/calculation/calculatorMethods";
import { OperationsType } from "@config";

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
