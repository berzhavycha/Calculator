import { MathOperators } from '@services';
import { escapeRegExp } from '@utils';

export const OPERATIONS_WITH_MINUS_PATTERN = new RegExp(
  `(\\d+)(${escapeRegExp(MathOperators.PLUS)}|${escapeRegExp(MathOperators.MULTIPLICATION)}|${escapeRegExp(
    MathOperators.DIVISION
  )})-(\\d+)`,
  'g'
);
