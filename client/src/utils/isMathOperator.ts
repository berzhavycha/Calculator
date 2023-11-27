import { MathOperators } from "@components";

export const isMathOperator = (token: string): token is MathOperators => {
    return token in Object.values(MathOperators);
}