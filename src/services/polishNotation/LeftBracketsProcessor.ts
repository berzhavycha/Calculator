import { IOperatorProcessor, MathOperators } from '../index';

export class LeftBracketProcessor implements IOperatorProcessor {
  process(expressionOperators: string[], _output: string[], token: MathOperators): void {
    expressionOperators.push(token);
  }
}
