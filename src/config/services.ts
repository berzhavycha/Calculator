import PolishNotation from "../modelServices/polishNotation/PolishNotation";
import { RegexCalculation } from "../modelServices/regexCalculation/RegexCalculation";
import { operations } from "./operations";

export const modelServices =  Object.freeze({
    polishNotation: new PolishNotation(operations),
    regexCalculation: new RegexCalculation(operations)
})