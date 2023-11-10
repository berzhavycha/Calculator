import CalculatorView from './view/CalculatorView';
import CalculatorModel from './model/CalculatorModel';
import CalculatorController from './controller/CalculatorController';
import config from './config/operations';
import { services } from './services/servicesOptions';

new CalculatorView();
new CalculatorModel(services[config.calculationMethod]);
new CalculatorController();
