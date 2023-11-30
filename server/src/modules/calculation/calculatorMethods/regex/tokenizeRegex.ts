import { SpecialOperators } from "@modules/calculation/calculatorMethods";
import config from "@config";

const escapedOperators = [...Object.keys(config.operations), ...Object.values(SpecialOperators)]
  .map((operator) => operator.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
  .map((operator) => (operator === "-" ? `\\-` : operator));

export const validOperatorsPattern = escapedOperators.join("|");

// TOKENIZE_REGEX_PATTERN RegExp consist of 3 parts:
// - `\\d+(\\.\\d+)?`: Matches numbers
// - `${validOperatorsPattern}`: Matches valid operators.
export const TOKENIZE_REGEX_PATTERN = new RegExp(`\\d+(\\.\\d+)?|${validOperatorsPattern}`, "g");
