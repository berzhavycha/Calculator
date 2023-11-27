import { MathOperators } from '@services/calculationMethods';

export const TWO_MINUSES_PATTERN = new RegExp(`${MathOperators.MINUS}${MathOperators.MINUS}`, 'g');
