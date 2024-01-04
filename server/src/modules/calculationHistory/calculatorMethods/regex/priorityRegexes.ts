import { OperatorType, PriorityInfo } from "@modules/calculationHistory/calculatorMethods";
import { escapeRegExp } from "@utils";

interface PriorityRegex {
  type: OperatorType;
  regExp: RegExp;
}

export function getPrioritizedRegexes(regexArr: PriorityInfo[]): PriorityRegex[] {
  return regexArr.map((item) => {
    if (item.type === OperatorType.UNARY_LEFT) {
      return {
        type: item.type,
        regExp: new RegExp(`(\\d+\\.?\\d*)\\s*(${item.operators.map(escapeRegExp).join("|")})`),
      };
    } else if (item.type === OperatorType.UNARY_RIGHT) {
      return {
        type: item.type,
        regExp: new RegExp(`(${item.operators.map(escapeRegExp).join("|")})\\s*(-?\\d+\\.?\\d*)`, "i"),
      };
    } else {
      return {
        type: item.type,
        regExp: new RegExp(
          `(-?\\d+\\.?\\d*)\\s*(${item.operators.map(escapeRegExp).join("|")})\\s*(-?\\d+\\.?\\d*)`,
          "i",
        ),
      };
    }
  });
}
