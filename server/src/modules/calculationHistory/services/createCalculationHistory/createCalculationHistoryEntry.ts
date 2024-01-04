import { calculationHistoryModel } from "../../models";
import { calculationProcessor } from "../../calculatorMethods";

export const createCalculationHistoryEntry = async (expression: string): Promise<number> => {
  let result;
  const cachedCalculationHistoryEntry = await calculationHistoryModel.findOne({ expression });

  if (cachedCalculationHistoryEntry) {
    await calculationHistoryModel.updateEntry({ expression }, { lastRequestAt: new Date() })
    result = cachedCalculationHistoryEntry.result;
  } else {
    result = calculationProcessor.evaluate(expression);
    calculationHistoryModel.createAndSaveNewEntry(expression, result);
  }

  return result;
};
