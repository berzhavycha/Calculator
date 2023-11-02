import { ObserverEvents } from "../config/observerEvents"
import CalculatorModel from "../model/CalculatorModel";
import subject from "../Observer/Subject"

class CalculatorController {
    private model: CalculatorModel

    constructor(model: CalculatorModel) {
        this.model = model

        subject.subscribe(ObserverEvents.EVALUATE_BUTTON_CLICK, (expression: string) => {
            try {
                const calculationResult = this.model.evaluate(expression)
                subject.notify(ObserverEvents.CALCULATED, calculationResult)
            } catch (error) {
                if (error instanceof Error) {
                    subject.notify(ObserverEvents.SHOW_ERROR, error.message)
                }
            }
        });
    }

}

export default CalculatorController