export enum Operators {
    PLUS = '+',
    MINUS = '-',
    MULTIPLICATION = '*',
    DIVISION = '/',
    COS = 'cos',
    SIN = 'sin',
    TAN = 'tan',
    FACTORIAL = '!',
    LEFT_BRACKET = '(',
    RIGHT_BRACKET = ')',
    DOT = '.',
    CLEAR_ALL = 'C'
}

export enum MathOperationPriority {
    PLUS = 1,
    MINUS = 1,
    MULTIPLICATION = 2,
    DIVISION = 2,
}

export enum OperatorType {
    BINARY = 'binary',
    UNARY = 'unary'
}

export const TOKENIZE_REGEX_PATTERN = /\s*([-+*/%^()!]|cos|sin|tan)\s*|(\d+(?:\.\d*)?|\.\d+)|([^A-Za-z0-9\s])/g