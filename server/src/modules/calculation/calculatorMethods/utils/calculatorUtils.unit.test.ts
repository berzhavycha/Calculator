import { OperatorType } from '../constants';
import { getPriorityInfoArray, PriorityInfo, factorial } from './index';

describe("Calculator utils", () => {
    describe('factorial function', () => {
        it('should return 1 for input 0', () => {
            expect(factorial(0)).toBe(1);
        });

        it('should return 1 for input 1', () => {
            expect(factorial(1)).toBe(1);
        });

        it('should calculate the factorial of a positive number', () => {
            expect(factorial(5)).toBe(120);
            expect(factorial(10)).toBe(3628800);
        });
    });


    describe('getPriorityInfoArray', () => {
        it('should return the correct PriorityInfo array sorted by priority', () => {
            const operations = {
                '+': { priority: 1, type: OperatorType.BINARY, calculate: (a: number, b: number) => a + b },
                '-': { priority: 1, type: OperatorType.BINARY, calculate: (a: number, b: number) => a - b },
                '*': { priority: 2, type: OperatorType.BINARY, calculate: (a: number, b: number)  => a * b },
                '/': { priority: 2, type: OperatorType.BINARY, calculate: (a: number, b: number)  => a / b },
            };


            const expected: PriorityInfo[] = [
                { priority: 2, operators: ['*', '/'], type: OperatorType.BINARY },
                { priority: 1, operators: ['+', '-'], type: OperatorType.BINARY },
            ];

            const result = getPriorityInfoArray(operations);
            expect(result).toEqual(expected);
        });

        it('should handle an empty operations object', () => {
            const emptyOperations = {};
            const result = getPriorityInfoArray(emptyOperations);
            expect(result).toEqual([]);
        });
    });

})

