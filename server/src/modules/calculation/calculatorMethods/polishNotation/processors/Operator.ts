import { OperationsType } from "@config";
import {
  MathOperators,
  SpecialOperators,
  Associativity,
} from "../../constants";

export interface IOperatorProcessor {
  process(
    expressionOperators: string[],
    output: string[],
    token: MathOperators | SpecialOperators,
  ): void;
}

export class OperatorProcessor implements IOperatorProcessor {
  constructor(private availableOperators: OperationsType) {}

  process(
    expressionOperators: string[],
    output: string[],
    token: MathOperators,
  ): void {
    while (
      expressionOperators.length &&
      expressionOperators[expressionOperators.length - 1] !==
        SpecialOperators.LEFT_BRACKET &&
      (this.availableOperators[
        expressionOperators[expressionOperators.length - 1] as MathOperators
      ].priority > this.availableOperators[token].priority ||
        (this.availableOperators[
          expressionOperators[expressionOperators.length - 1] as MathOperators
        ].priority === this.availableOperators[token].priority &&
          this.availableOperators[token].associativity === Associativity.LEFT))
    ) {
      output.push(expressionOperators.pop() as string);
    }

    expressionOperators.push(token);
  }
}
