import subject, { ObserverEvents } from '../Observer/index';

export interface ICalculatorModelService {
  evaluate(expression: string): number;
}

export class CalculatorModel {
  private calculationService: ICalculatorModelService;

  constructor(service: ICalculatorModelService) {
    this.calculationService = service;
    subject.subscribe(ObserverEvents.EVALUATE_EXPRESSION, this.handleEvaluateExpression.bind(this));
  }

  private handleEvaluateExpression(expression: string): void {
    try {
      const result = this.evaluate(expression);
      subject.notify(ObserverEvents.CALCULATED, result);
    } catch (error) {
      if (error instanceof Error) {
        subject.notify(ObserverEvents.SHOW_ERROR, error.message);
      }
    }
  }

  public evaluate(expression: string): number {
    return this.calculationService.evaluate(expression);
  }
}
