import { calculationModel } from "../models";
import { calculationProcessor } from "../calculatorMethods";

export const createCalculation = async (expression: string) => {
  let result;
  const cachedCalculation = await calculationModel.findOne(expression);

  if (cachedCalculation) {
    result = cachedCalculation.result;
  } else {
    result = calculationProcessor.evaluate(expression);
    calculationModel.createAndSaveNewEntry(expression, result);
  }

  return result;
};
