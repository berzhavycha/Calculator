import CalculatorView from './view/CalculatorView'
import CalculatorModel from './model/CalculatorModel'
import CalculatorController from './controller/CalculatorController'
import { operations } from './config/operations'

new CalculatorView()
new CalculatorModel(operations)
new CalculatorController()
