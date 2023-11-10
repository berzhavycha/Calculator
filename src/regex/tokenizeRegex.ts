import config from "../config/operations";
import { SpecialOperators } from "../services/constants";

const escapedOperators = [...Object.keys(config.operations), ...Object.values(SpecialOperators)]
    .map((operator) => (operator !== '-' ? operator : '\\' + operator))
    .map((operator) => operator.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

const validOperatorsPattern = escapedOperators.join('|');
const invalidCharactersPattern = '[^\\d\\s' + validOperatorsPattern + ']';


// TOKENIZE_REGEX_PATTERN RegExp consist of 3 parts:
// - `\\d+(\\.\\d+)?`: Matches numbers
// - `${validOperatorsPattern}`: Matches valid operators.
// - `${invalidCharactersPattern}`: Matches invalid characters.
export const TOKENIZE_REGEX_PATTERN = new RegExp(
    `\\d+(\\.\\d+)?|${validOperatorsPattern}|${invalidCharactersPattern}`,
    'g'
);



