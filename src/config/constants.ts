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
  INVALID_EXPRESSION = 'Invalid math expression'
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
  MULT_AND_DIVISION = 2,
  FACTORIAL = 3,
  TRIGONOMETRIC = 4, 
  EXPONENTIATION = 5,
  PARENTHESES = 6,
}

export enum OperatorType {
  BINARY = 'binary',
  UNARY = 'unary',
}
