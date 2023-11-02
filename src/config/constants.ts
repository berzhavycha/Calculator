export enum MathOperators {
  PLUS = "+",
  MINUS = "-",
  MULTIPLICATION = "*",
  DIVISION = "/",
}

export enum SpecialOperators {
  LEFT_BRACKET = "(",
  RIGHT_BRACKET = ")",
  DOT = ".",
  CLEAR_ALL = "C",
}

export enum MathOperationPriority {
  ADD_AND_SUB,
  MULT_AND_DIVISION,
  EXPONENTIATION,
  PARENTHESES,
}

export enum OperatorType {
  BINARY = "binary",
  UNARY = "unary",
}
