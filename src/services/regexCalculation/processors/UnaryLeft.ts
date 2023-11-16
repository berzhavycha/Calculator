import { MathOperators } from '@services';
import config from '@config';
import { IRegExOperatorProcessor } from './Binary';

export class UnaryLeftProcessor implements IRegExOperatorProcessor {
  process(matches: RegExpMatchArray): number {
    const operand1 = parseFloat(matches[1]);

    return config.operations[MathOperators.FACTORIAL].calculate(operand1);
  }
}
