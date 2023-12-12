import { MONGODB_URL } from '@global';
import { findExpressions } from './findExpressionsEntry';
import mongoose, { ConnectOptions } from 'mongoose';
import { ASC, DEFAULT_LIMIT_NUMBER } from '@modules/calculation/constants';

beforeAll(async () => {
    await mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as ConnectOptions);
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('findExpressions', () => {
    test('should retrieve last expressions with specified limit and sortOrder', async () => {
        const expressions = await findExpressions(DEFAULT_LIMIT_NUMBER, ASC);

        expect(expressions).toBeDefined();
        expect(Array.isArray(expressions)).toBe(true);
        expect(expressions.length).toBeLessThanOrEqual(DEFAULT_LIMIT_NUMBER);
    });
});
