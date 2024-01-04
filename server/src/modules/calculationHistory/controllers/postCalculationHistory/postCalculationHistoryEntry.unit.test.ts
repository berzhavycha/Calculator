import request from 'supertest';
import { app } from '../../../../server';
import { createCalculationHistory } from '../../services/createCalculationHistory/createCalculationHistoryEntry';

jest.mock('../../services/createCalculationHistory/createCalculationHistoryEntry.ts');

describe('postCalculationController', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should create calculation and return result', async () => {
        const mockResult = 42;
        (createCalculationHistory as jest.Mock).mockResolvedValue(mockResult);

        const response = await request(app)
            .post('/calculations')
            .send({ expression: '2 + 40' })
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ result: mockResult });
        expect(createCalculationHistory).toHaveBeenCalledWith('2 + 40');
    });

    it('should handle service error and return 500 status', async () => {
        const errorMessage = 'Invalid Expression';
        (createCalculationHistory as jest.Mock).mockRejectedValue(new Error(errorMessage));

        const response = await request(app)
            .post('/calculations')
            .send({ expression: 'invalid expression' })
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: errorMessage });
        expect(createCalculationHistory).toHaveBeenCalledWith('invalid expression');
    });
});
