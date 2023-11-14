import { MathOperators, IRegExOperatorProcessor } from '../index';
import config from '../../config/operations';

export class TrigonometryProcessor implements IRegExOperatorProcessor {
  process(matches: RegExpMatchArray): number {
    const operator = matches[1];
    const operand1 = parseFloat(matches[2]);

    return config.operations[operator as MathOperators].calculate(operand1);
  }
}
