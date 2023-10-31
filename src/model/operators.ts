interface IOperator {
    readonly priority: number
    calculate: (...operands: number[]) => number
}

export interface IOperatorsObject {
    [key: string]: BinaryOperator | UnaryOperator
}

export class BinaryOperator implements IOperator {
    constructor(private symbol: string, public priority: number) { }

    calculate(a: number, b: number): number {
        switch (this.symbol) {
            case '+':
                return a + b
            case '-':
                return a - b
            case '*':
                return a * b
            case '/':
                return a / b
            case '^':
                return a ** b
            default:
                throw new Error("Invalid operator: " + this.symbol)
        }
    }
}

export class UnaryOperator implements IOperator {
    constructor(private symbol: string, public priority: number) { }

    factorial(n: number): number {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * this.factorial(n - 1);
        }
    }

    calculate(a: number): number {
        switch (this.symbol) {
            case '!':
                return this.factorial(a)
            default:
                throw new Error("Invalid operator: " + this.symbol)
        }
    }
}

export class OperatorRegistry {
    private operators: IOperatorsObject = {};

    getOperators() {
        return this.operators
    }

    registerOperator(symbol: string, operator: BinaryOperator | UnaryOperator): void {
        this.operators[symbol] = operator;
    }
}