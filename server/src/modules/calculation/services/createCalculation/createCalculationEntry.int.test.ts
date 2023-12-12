import { MONGODB_URL } from '@global';
import { createCalculation } from './createCalculationEntry';
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
    test('should calculate the result of the expressions if it is not cached', async () => {
        const result = await createCalculation("1111+2222")
        expect(result).toBe(3333);
    });

    test('should throw an error for an invalid expression', async () => {
        try {
            const result = await createCalculation("111s+2222");
            expect(result).toThrow();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });

});
