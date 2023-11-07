import { IReplacer } from "./TrigonometryReplacer";
import { factorial } from "../../utils/utils";

export class FactorialReplacer implements IReplacer {
    replaceFunction(sanitizedExpression: string): string {
        const factorialRegex = /(\d+)!/g;

        return sanitizedExpression.replace(factorialRegex, (_, num) => {
            return factorial(parseInt(num, 10)).toString();
        });
    }
}