import { MathOperators } from '@modules/calculation';

export const TWO_MINUSES_PATTERN = new RegExp(`${MathOperators.MINUS}${MathOperators.MINUS}`, 'g');
