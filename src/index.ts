import CalculatorView from './view/CalculatorView';
import CalculatorModel from './model/CalculatorModel';
import CalculatorController from './controller/CalculatorController';
import { modelServices } from './config/services';

new CalculatorView();
new CalculatorModel(modelServices.regexCalculation);
new CalculatorController();
