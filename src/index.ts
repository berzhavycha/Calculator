import { CalculatorView } from '@view';
import { CalculatorModel } from '@model';
import { CalculatorController } from '@controller';
import config from '@config';
import { services } from '@services';

new CalculatorView();
new CalculatorModel(services[config.CalculationMethod]);
new CalculatorController();
