import { MathOperators } from "../services/constants";

// FACTORIAL_EXPRESSION RegExp consist of 3 parts:
// - (\\d+\\.?\\d*): Matches a number,
// - \\s*: Matches optional whitespace
// - ${MathOperators.FACTORIAL}: Matches factorial operator
export const FACTORIAL_EXPRESSION = new RegExp(`(\\d+\\.?\\d*)\\s*${MathOperators.FACTORIAL}`)