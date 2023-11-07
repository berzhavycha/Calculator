import { IReplacer } from "./TrigonometryReplacer";
import { factorial } from "../../utils/utils";

export class FactorialReplacer implements IReplacer {
    // replaceFunction(...operands: number[]): string {
    //     if (operands.length !== 1) {
    //         throw new Error("Factorial operation expects exactly one operand.");
    //     }

    //     const num = operands[0];
    //     return factorial(num).toString();
    // }

    replaceFunction(sanitizedExpression: string): string {
        const factorialRegex = /(\d+)!/g;

        return sanitizedExpression.replace(factorialRegex, (_, num) => {
            return factorial(parseInt(num, 10)).toString();
        });
    }
}