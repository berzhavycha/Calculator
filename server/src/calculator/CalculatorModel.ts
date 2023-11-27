import { methodOptions } from '@services';
import config from '@config'

export interface ICalculatorModelService {
  evaluate(expression: string): number;
}

export class CalculatorModel {
  private calculationService: ICalculatorModelService;

  constructor(service: ICalculatorModelService) {
    this.calculationService = service;
  }

  public evaluate(expression: string): number {
    return this.calculationService.evaluate(expression);
  }
}

export const calculatorModel = new CalculatorModel(methodOptions[config.calculationMethod])