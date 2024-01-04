import { createCalculationHistoryEntry } from "./createCalculationHistoryEntry";
import { calculationHistoryModel } from "../../models";

describe('createCalculationEntry', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should calculate and save new result if expression is not cached', async () => {
        calculationHistoryModel.findOne = jest.fn().mockResolvedValue(null);
        calculationHistoryModel.createAndSaveNewEntry = jest.fn().mockResolvedValue(10);
        calculationHistoryModel.updateEntry = jest.fn()

        const result = await createCalculationHistoryEntry('5*2');

        expect(result).toEqual(10);
        expect(calculationHistoryModel.createAndSaveNewEntry).toHaveBeenCalledWith('5*2', 10);
        expect(calculationHistoryModel.updateEntry).not.toHaveBeenCalled();
    });

    it('should get the result from database and update the entry', async () => {
        calculationHistoryModel.findOne = jest.fn().mockResolvedValue({ expression: "5*2", result: 10, lastRequestAt: new Date() });
        calculationHistoryModel.createAndSaveNewEntry = jest.fn();
        calculationHistoryModel.updateEntry = jest.fn()

        const result = await createCalculationHistoryEntry('5*2');

        expect(result).toEqual(10);
        expect(calculationHistoryModel.createAndSaveNewEntry).not.toHaveBeenCalled();
        expect(calculationHistoryModel.updateEntry).toHaveBeenCalledWith({ expression: "5*2" }, { lastRequestAt: new Date() });
    });
});
