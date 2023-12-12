import { ASC, DEFAULT_SORT_FIELD } from "@modules/calculation/constants";
import { calculationModel } from "../../models";
import { findExpressions } from "./findExpressionsEntry";

describe('createCalculationEntry', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should return limited amount of entries sorted in ascending order by last_request_at', async () => {
        const mockResult = [
            { expression: '5*2', result: 10 },
            { expression: '5*3', result: 15 },
            { expression: '5*4', result: 20 },
            { expression: '5*5', result: 25 },
            { expression: '5*6', result: 30 },
        ];

        calculationModel.findMany = jest.fn().mockResolvedValue(mockResult);
        const result = await findExpressions(5, ASC);

        expect(result).toEqual(mockResult);
        expect(calculationModel.findMany).toHaveBeenCalledWith(5, DEFAULT_SORT_FIELD, ASC);
    });
});
