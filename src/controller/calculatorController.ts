import { observerEvents } from "../config/observerEvents"
import calculatorModel from "../model/CalculatorModel"
import subject from "../Observer/Subject"

class CalculatorController {
    constructor() { }

    handleEvaluateButtonClick(expression: string) {
        try {
            const calculationResult = calculatorModel.evaluate(expression)
            subject.notify(observerEvents.CALCULATE, calculationResult)
        } catch (error) {
            if (error instanceof Error) {
                subject.notify(observerEvents.SHOW_ERROR, error.message)
            }
        }
    }
}

export default new CalculatorController()