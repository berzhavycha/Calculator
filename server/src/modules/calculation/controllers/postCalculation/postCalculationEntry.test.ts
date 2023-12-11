import request from 'supertest';
import { app } from '../../../../server';
import { createCalculation } from '../../services/createCalculation/createCalculationEntry';

jest.mock('../../services/createCalculation', () => ({
    createCalculation: jest.fn(),
}));

describe('postCalculationController', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should create calculation and return result', async () => {
        const mockResult = 42;
        (createCalculation as jest.Mock).mockResolvedValue(mockResult);

        const response = await request(app)
            .post('/calculations')
            .send({ expression: '2 + 40' })
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ result: mockResult });
        expect(createCalculation).toHaveBeenCalledWith('2 + 40');
    });

    test('should handle service error and return 500 status', async () => {
        const errorMessage = 'Invalid Expression';
        (createCalculation as jest.Mock).mockRejectedValue(new Error(errorMessage));

        const response = await request(app)
            .post('/calculations')
            .send({ expression: 'invalid expression' })
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: errorMessage });
        expect(createCalculation).toHaveBeenCalledWith('invalid expression');
    });
});
