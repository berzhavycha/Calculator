import CalculatorView from './view/calculatorView';
import CalculatorModel from './model/calculatorModel';
import CalculatorController from './controller/calculatorController';
import config from './config/operations';
import { services } from './services/servicesOptions';

new CalculatorView();
new CalculatorModel(services[config.calculationMethod]);
new CalculatorController();
