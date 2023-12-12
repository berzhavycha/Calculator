import { app } from '../../../../server';
import request from 'supertest';
import config from '@config';


describe('getHistoryStatusController.unit', () => {
    test('should return the correct history status', async () => {
        const response = await request(app).get('/calculations/status');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ isEnabled: config.modulesConnection.isHistoryEnabled });
    });
});
