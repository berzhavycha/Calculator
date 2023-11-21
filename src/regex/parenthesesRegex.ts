import { SpecialOperators } from '@services';

// PARENTHESES_EXPRESSION consists of 3 parts:
//   - \( : matches an open parenthesis
//   - [^()]* : matches any characters except for parentheses, allowing for nested parentheses
//   - \) : matches a closing parenthesis
// export const PARENTHESES_EXPRESSION = /(\([^()]*\))/g;
export const PARENTHESES_EXPRESSION = new RegExp(
  `${SpecialOperators.LEFT_BRACKET}\\([^()]*\\)${SpecialOperators.RIGHT_BRACKET}`,
  'g'
);
