export enum CalculationMethods {
  POLISH_NOTATION = 'polishNotation',
  REGEX_CALCULATION = 'regexCalculation',
}

export enum MathOperators {
  PLUS = '+',
  MINUS = '-',
  MULTIPLICATION = '*',
  DIVISION = '/',
  COS = 'cos',
  SIN = 'sin',
  TAN = 'tan',
  FACTORIAL = '!',
}

export enum Errors {
  INVALID_SYMBOL = 'Invalid symbols in the input expression.',
  INVALID_EXPRESSION = 'Invalid math expression',
  UNMATCHED_PARENTHESES = 'Unmatched parentheses',
}

export enum SpecialOperators {
  LEFT_BRACKET = '(',
  RIGHT_BRACKET = ')',
  DOT = '.',
  CLEAR_ALL = 'C',
}

export enum Associativity {
  LEFT = 'left',
  RIGHT = 'right',
}

export enum MathOperationPriority {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
  CRITICAL = 4,
  TOP = 5,
  MAXIMUM = 6,
}
export enum OperatorType {
  BINARY = 'binary',
  UNARY_LEFT = 'unaryLeft',
  UNARY_RIGHT = 'unaryRight',
}
