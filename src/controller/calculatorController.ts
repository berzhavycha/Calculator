import subject, { ObserverEvents } from '@observer';

export class CalculatorController {
  constructor() {
    subject.subscribe(ObserverEvents.EVALUATE_BUTTON_CLICK, (expression: string) => {
      subject.notify(ObserverEvents.EVALUATE_EXPRESSION, expression);
    });
  }
}
