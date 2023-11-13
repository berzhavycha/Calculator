import { MathOperators } from "../constants";
import { IRegExOperatorProcessor } from "./RegularProcessor"
import config from '../../config/operations'

export class FactorialProcessor implements IRegExOperatorProcessor {
  process(matches: RegExpMatchArray): number {
    const operand1 = parseFloat(matches[1]);

    return config.operations[MathOperators.FACTORIAL].calculate(operand1)
  }
}
