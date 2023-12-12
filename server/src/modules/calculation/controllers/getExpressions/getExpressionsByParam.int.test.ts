import request from 'supertest';
import { app } from '../../../../server';
import { ASC, DEFAULT_LIMIT_NUMBER } from '../../constants';

describe('getExpressionByParam.int controller', () => {
    test('should return expressions with limit and ascending order', async () => {
        const response = await request(app).get(`/calculations?limit=${DEFAULT_LIMIT_NUMBER}&order=${ASC}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(DEFAULT_LIMIT_NUMBER);
    });

    test('should return error for invalid limit parameter', async () => {
        const response = await request(app).get('/calculations?limit=f');

        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: "Invalid 'limit' parameter" });
    });

    test('should handle internal server error', async () => {
        const response = await request(app).get('/calculations?limit=5&order=f');

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ error: 'Internal server error' });
    });
});
