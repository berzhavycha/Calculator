import { MathOperators } from "@modules/calculation/calculatorMethods";

export const TWO_MINUSES_PATTERN = new RegExp(
  `${MathOperators.MINUS}${MathOperators.MINUS}`,
  "g",
);
