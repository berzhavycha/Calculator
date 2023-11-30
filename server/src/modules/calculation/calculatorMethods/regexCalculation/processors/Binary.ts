import config from "@config";
import { MathOperators } from "../../constants";

export interface IRegExOperatorProcessor {
  process(matches: RegExpMatchArray): number;
}

export class BinaryProcessor implements IRegExOperatorProcessor {
  process(matches: RegExpMatchArray): number {
    const operator = matches[2];
    const operand1 = parseFloat(matches[1]);
    const operand2 = parseFloat(matches[3]);

    return config.operations[operator as MathOperators].calculate(operand1, operand2);
  }
}
