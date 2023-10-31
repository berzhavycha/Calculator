import { CalculatorController } from "./controller/calculatorController";
import { CalculatorModel } from "./model/calculatorModel";
import { CalculatorView } from "./view/calculatorView";

const app = new CalculatorController(new CalculatorModel(), new CalculatorView())