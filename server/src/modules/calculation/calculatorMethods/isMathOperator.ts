import config from "@config";
import { MathOperators } from "./constants";

export function isMathOperator(token: string): token is MathOperators {
  return token in config.operations;
}
