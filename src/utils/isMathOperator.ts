import config from '@config/operations';
import { MathOperators } from '@services/index';

export function isMathOperator(token: string): token is MathOperators {
  return token in config.operations;
}
