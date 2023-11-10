import { IOperatorProcessor } from '../polishNotation/OperatorProcessor';
import { MathOperators } from '../constants';

export class LeftBracketProcessor implements IOperatorProcessor {
  process(expressionOperators: string[], _output: string[], token: MathOperators): void {
    expressionOperators.push(token);
  }
}
