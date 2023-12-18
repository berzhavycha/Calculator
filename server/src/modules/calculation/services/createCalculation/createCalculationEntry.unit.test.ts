import { createCalculation } from "./createCalculationEntry";
import { calculationModel } from "../../models";

describe('createCalculationEntry', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    
    it('should calculate and save new result if expression is not cached', async () => {
        calculationModel.findOne = jest.fn().mockResolvedValue(null);
        calculationModel.createAndSaveNewEntry = jest.fn().mockResolvedValue(10);
        calculationModel.updateEntry = jest.fn()

        const result = await createCalculation('5*2');

        expect(result).toEqual(10);
        expect(calculationModel.createAndSaveNewEntry).toHaveBeenCalledWith('5*2', 10);
        expect(calculationModel.updateEntry).not.toHaveBeenCalled();
    });

    it('should get the result from database and update the entry', async () => {
        calculationModel.findOne = jest.fn().mockResolvedValue({ expression: "5*2", result: 10, last_request_at: new Date() });
        calculationModel.createAndSaveNewEntry = jest.fn();
        calculationModel.updateEntry = jest.fn()

        const result = await createCalculation('5*2');

        expect(result).toEqual(10);
        expect(calculationModel.createAndSaveNewEntry).not.toHaveBeenCalled();
        expect(calculationModel.updateEntry).toHaveBeenCalledWith({ expression: "5*2" }, { last_request_at: new Date() });
    });
});
