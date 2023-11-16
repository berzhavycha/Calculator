import { CalculatorView } from '@view/index';
import { CalculatorModel } from '@model/index';
import { CalculatorController } from '@controller/index';
import config from '@config/operations';
import { services } from '@services/index';

new CalculatorView();
new CalculatorModel(services[config.CalculationMethod]);
new CalculatorController();
