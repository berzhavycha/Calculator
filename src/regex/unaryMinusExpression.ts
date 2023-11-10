// UNARY_MINUS_EXPRESSION RegExp consist of 2 parts:
// - (([\\+\\-]?[\\d]+): Matches optional sign (+ or -) followed by one or more digits
// - ([\\+\\-\\*\\/]))*: Matches an operator (+, -, *, or /) and represents a binary operation
// - The whole regex can match a single unary minus, e.g -1, as well as unary minus in a binary operation, e.g 1*-2
export const UNARY_MINUS_EXPRESSION = new RegExp(`(([\\+\\-]?[\\d]+)([\\+\\-\\*\\/]))*([\\+\\-]?[\\d]+)`)