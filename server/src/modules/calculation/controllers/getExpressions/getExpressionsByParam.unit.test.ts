import request from 'supertest';
import { app } from '../../../../server'; 
import { findExpressions } from '../../services/findExpressions/findExpressionsEntry';
import { ASC, DEFAULT_LIMIT_NUMBER, DESC } from '../../constants';

jest.mock('../../services/findExpressions/findExpressionsEntry.ts');

describe('getExpressionByParam.unit controller', () => {
 
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should return expressions with limit and ascending order', async () => {
    const mockExpressions = [{ expression: '1+2', result: 3 }, {expression: '2*2', result: 4}];

    (findExpressions as jest.Mock).mockResolvedValue(mockExpressions);

    const response = await request(app).get(`/calculations?limit=${DEFAULT_LIMIT_NUMBER}&order=${ASC}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockExpressions);
    expect(findExpressions).toHaveBeenCalledWith(DEFAULT_LIMIT_NUMBER, ASC);
  });

  test('should return expressions with limit and descending order', async () => {
    const mockExpressions = [{ expression: '1+2', result: 3 }, {expression: '2*2', result: 4}];

    (findExpressions as jest.Mock).mockResolvedValue(mockExpressions);

    const response = await request(app).get(`/calculations?limit=${DEFAULT_LIMIT_NUMBER}&order=${DESC}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockExpressions);
    expect(findExpressions).toHaveBeenCalledWith(DEFAULT_LIMIT_NUMBER, DESC);
  });

  test('should return error for invalid limit parameter', async () => {
    const response = await request(app).get('/calculations?limit=f');

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Invalid 'limit' parameter" });
    expect(findExpressions).not.toHaveBeenCalled();
  });

  test('should handle internal server error', async () => {
    (findExpressions as jest.Mock).mockRejectedValue(new Error('Some internal error'));

    const response = await request(app).get('/calculations?limit=-1');

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: 'Internal server error' });
    expect(findExpressions).toHaveBeenCalled();
  });
});
