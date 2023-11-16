import config from '@config';
import { MathOperators } from '@services';

export function isMathOperator(token: string): token is MathOperators {
  return token in config.operations;
}
