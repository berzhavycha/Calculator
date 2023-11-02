import CalculatorView from "./view/CalculatorView";
import CalculatorModel from "./model/CalculatorModel";
import CalculatorController from "./controller/CalculatorController";
import { operations } from "./config/operations";

const view = new CalculatorView();
const model = new CalculatorModel(operations);
const controller = new CalculatorController(model);
