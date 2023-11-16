import config from '@config';
import { PolishNotation } from './polishNotation/PolishNotation';
import { RegexCalculation } from './regexCalculation/RegexCalculation';

export const services = Object.freeze({
  polishNotation: new PolishNotation(config.operations),
  regexCalculation: new RegexCalculation(config.operations),
});
