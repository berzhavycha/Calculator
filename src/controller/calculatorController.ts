import subject, { ObserverEvents } from '../Observer/index';

export class CalculatorController {
  constructor() {
    subject.subscribe(ObserverEvents.EVALUATE_BUTTON_CLICK, (expression: string) => {
      subject.notify(ObserverEvents.EVALUATE_EXPRESSION, expression);
    });
  }
}
