import { MONGODB_URL } from '@global';
import { createCalculationHistory } from './createCalculationHistoryEntry';
import mongoose, { ConnectOptions } from 'mongoose';

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
    it('should calculate the result of the expressions if it is not cached', async () => {
        const result = await createCalculationHistory("1111+2222")
        expect(result).toBe(3333);
    });

    it('should throw an error for an invalid expression', async () => {
        try {
            const result = await createCalculationHistory("111s+2222");
            expect(result).toThrow();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });
});
