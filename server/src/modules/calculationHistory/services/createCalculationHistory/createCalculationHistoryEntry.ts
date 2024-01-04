import { calculationHistoryModel } from "../../models";
import { calculationProcessor } from "../../calculatorMethods";

export const createCalculationHistory = async (expression: string): Promise<number> => {
  let result;
  const cachedCalculationHistory = await calculationHistoryModel.findOne({ expression });

  if (cachedCalculationHistory) {
    await calculationHistoryModel.updateEntry({ expression }, { lastRequestAt: new Date() })
    result = cachedCalculationHistory.result;
  } else {
    result = calculationProcessor.evaluate(expression);
    calculationHistoryModel.createAndSaveNewEntry(expression, result);
  }

  return result;
};
