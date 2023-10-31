import { CalculatorModel } from "../model/calculatorModel"
import { CalculatorView } from "../view/calculatorView"


export class CalculatorController {
    private model: CalculatorModel
    private view: CalculatorView

    constructor(model: CalculatorModel, view: CalculatorView) {
        this.model = model
        this.view = view

        this.view.bindEvaluateButtonClick(this.handleEvaluateButtonClick.bind(this))
        this.model.subscribe(this.view)
    }

    handleEvaluateButtonClick(expression: string) {
        try {
            this.model.evaluate(expression)
        } catch (error) {
            if (error instanceof Error) {
                this.view.showError(error.message)
            }
        }
    }
}