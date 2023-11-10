import { SpecialOperators } from "../services/constants";
import { escapeRegExp } from "../utils/utils";

// PARENTHESES_EXPRESSION consist of 3 parts:
// - escapeRegExp(SpecialOperators.LEFT_BRACKET): ensures that we start matching from an open parenthesis
// - [^${escapeRegExp(SpecialOperators.RIGHT_BRACKET)}]*: matches any sequence of characters that do not include a closing parenthesis
// - ${escapeRegExp(SpecialOperators.RIGHT_BRACKET)}:  ensures that the closing parenthesis is found after the sequence of characters inside the parentheses
export const PARENTHESES_EXPRESSION =  new RegExp(`${escapeRegExp(SpecialOperators.LEFT_BRACKET)}[^${escapeRegExp(SpecialOperators.RIGHT_BRACKET)}]*${escapeRegExp(SpecialOperators.RIGHT_BRACKET)}`, 'g');