import { ObserverEvents } from '../Observer/observerEvents';
import subject from '../Observer/Subject';

class CalculatorController {
  constructor() {
    subject.subscribe(ObserverEvents.EVALUATE_BUTTON_CLICK, (expression: string) => {
      subject.notify(ObserverEvents.EVALUATE_EXPRESSION, expression);
    });
  }
}

export default CalculatorController;
