import config from '@config/operations';
import { PolishNotation } from '@services/polishNotation/PolishNotation';
import { RegexCalculation } from '@services/regexCalculation/RegexCalculation';

export const services = Object.freeze({
  polishNotation: new PolishNotation(config.operations),
  regexCalculation: new RegexCalculation(config.operations),
});
