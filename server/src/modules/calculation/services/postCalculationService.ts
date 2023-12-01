import { currentDatabase } from "@database";
import { calculationProcessor } from "../calculatorMethods";

export const postCalculationService = async (expression: string) => {
  let result;
  const cachedCalculation = await currentDatabase.findOne(expression);

  if (cachedCalculation) {
    result = cachedCalculation.result;
  } else {
    result = calculationProcessor.evaluate(expression);
    currentDatabase.createAndSaveNewEntry(expression, result);
  }

  return result;
};
