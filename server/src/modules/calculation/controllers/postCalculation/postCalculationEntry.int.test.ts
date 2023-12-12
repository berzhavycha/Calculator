import request from 'supertest';
import { app } from '../../../../server';

describe('postCalculationController', () => {
    test('should create calculation and return result', async () => {
        const response = await request(app)
            .post('/calculations')
            .send({ expression: '2 + 40' })
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ result: 42 });
    });

    test('should handle service error and return 500 status', async () => {
        const response = await request(app)
            .post('/calculations')
            .send({ expression: 'inv' })
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ message: 'Invalid symbols: i,n,v'});
    });
});
