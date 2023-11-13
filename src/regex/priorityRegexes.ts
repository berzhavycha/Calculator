import { MathOperators, OperatorType } from "../services/constants"

export const priorityRegexes = [
    { type: OperatorType.UNARY, regExp: new RegExp(`(\\d+\\.?\\d*)\\s*(${MathOperators.FACTORIAL})`) },
    { type: OperatorType.TRIGONOMETRIC, regExp: new RegExp(`(${MathOperators.COS}|${MathOperators.SIN}|${MathOperators.TAN})\\s*(-?\\d+\\.?\\d*)`, 'i') },
    { type: OperatorType.BINARY, regExp: new RegExp(`(-?\\d+\\.?\\d*)\\s*(${MathOperators.DIVISION}|\\${MathOperators.MULTIPLICATION})\\s*(-?\\d+\\.?\\d*)`, 'i') },
    { type: OperatorType.BINARY, regExp: new RegExp(`(-?\\d+\\.?\\d*)\\s*(\\+|\\-)\\s*(-?\\d+\\.?\\d*)`) },
]
