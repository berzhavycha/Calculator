import { ICalculatorModelService } from "../../model/CalculatorModel";
import { TOKENIZE_REGEX_PATTERN, OperationsType } from "../../config/operations";
import { Errors, MathOperators, SpecialOperators } from "../../config/constants";
import { IReplacer, TrigonometryReplacer } from "./TrigonometryReplacer";
import { FactorialReplacer } from "./FactorialReplacer";
import { isMathOperator } from "../../utils/utils";

type ReplacerContainer = Record<MathOperators, IReplacer>

export class RegexCalculation implements ICalculatorModelService {
    private availableOperators: OperationsType
    private operatorReplacers: ReplacerContainer

    constructor(operations: OperationsType) {
        this.availableOperators = operations
        this.operatorReplacers = this.initializeOperatorProcessor(operations)
    }

    private initializeOperatorProcessor(operators: OperationsType): ReplacerContainer {
        const mathOperators = [...Object.keys(operators), SpecialOperators.CLEAR_ALL, SpecialOperators.DOT];
        return {
            ...mathOperators.reduce((obj, key) => {
                if (isMathOperator(key) && this.availableOperators[key].isReplaceable) {
                    obj[key] = new TrigonometryReplacer(key);
                }
                return obj;
            }, {} as ReplacerContainer),
            [MathOperators.FACTORIAL]: new FactorialReplacer(),
        };
    }

    private isValidExpression(expression: string) {
        return TOKENIZE_REGEX_PATTERN.test(expression);
    }

    public evaluate(expression: string): number {
        if (!this.isValidExpression(expression)) {
            throw new Error(Errors.INVALID_SYMBOL);
        }

        const extendedPattern = new RegExp(`[^${TOKENIZE_REGEX_PATTERN.source}]`, 'g');

        try {
            let sanitizedExpression = expression.replace(extendedPattern, '');

            Object.keys(this.operatorReplacers).forEach(operator => {
                if (isMathOperator(operator) && this.availableOperators[operator].isReplaceable) {
                    const replacer = this.operatorReplacers[operator];

                    if (operator === MathOperators.FACTORIAL && replacer && replacer.replaceFunction) {
                        sanitizedExpression = replacer.replaceFunction(sanitizedExpression)
                    } else if (replacer && replacer.replaceFunction) {
                        sanitizedExpression = sanitizedExpression.replace(new RegExp(operator, 'g'), replacer.replaceFunction());
                    }
                }
            })

            return eval(sanitizedExpression);
        } catch (error) {
            throw new Error(Errors.INVALID_EXPRESSION);
        }
    }
}
