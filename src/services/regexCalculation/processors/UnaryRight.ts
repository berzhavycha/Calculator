import { MathOperators } from '@services/index';
import config from '@config/operations';
import { IRegExOperatorProcessor } from './Binary';

export class UnaryRightProcessor implements IRegExOperatorProcessor {
  process(matches: RegExpMatchArray): number {
    const operator = matches[1];
    const operand1 = parseFloat(matches[2]);

    return config.operations[operator as MathOperators].calculate(operand1);
  }
}
