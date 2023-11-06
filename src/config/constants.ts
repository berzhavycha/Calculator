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
  ADD_AND_SUB = 1,
  MULT_AND_DIVISION,
  EXPONENTIATION,
  PARENTHESES,
}

export enum OperatorType {
  BINARY = 'binary',
  UNARY = 'unary',
}
