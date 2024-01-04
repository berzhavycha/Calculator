import { MathOperators } from "@modules/calculationHistory/calculatorMethods";

export const TWO_MINUSES_PATTERN = new RegExp(`${MathOperators.MINUS}${MathOperators.MINUS}`, "g");
