import { CalculationMethods } from '../constants';
import { methodOptions } from '../methodOptions';
import { RegexCalculation } from './RegexCalculation';

describe('RegexCalculation', () => {
    let regexCalculation: RegexCalculation

    beforeEach(() => {
        regexCalculation = methodOptions[CalculationMethods.REGEX_CALCULATION];
    });

    describe('Edge Cases and Limit Testing', () => {
        it('evaluate method should handle scenarios with floating-point precision', () => {
            const expression = '0.1+0.2';
            const expected = 0.3;
            const result = regexCalculation.evaluate(expression);
            expect(result).toBeCloseTo(expected);
        });
    });

    describe('findHighestPriorityOperatorResult Method', () => {
        it('should correctly find highest priority operator in expressions', () => {
            let expression = '2+3*4';
            const result = regexCalculation.findHighestPriorityOperatorResult(expression);
            expect(result).toEqual({ subExpressionResult: 12, subExpressionMatch: '3*4' });

            expression = '10-2/2';
            const newResult = regexCalculation.findHighestPriorityOperatorResult(expression);
            expect(newResult).toEqual({ subExpressionResult: -1, subExpressionMatch: '-2/2' });
        });

        it('should return null for expressions without operators', () => {
            const expression = '5';
            const result = regexCalculation.findHighestPriorityOperatorResult(expression);
            expect(result).toBeNull();
        });
    });

    describe('calculate method', () => {
        it('should correctly calculate expressions with basic operations', () => {
            let tokens = ['2', '+', '3', '*', '4'];
            const result = regexCalculation.calculate(tokens);
            expect(result).toBe(14);

            tokens = ['10', '/', '2', '+', '3'];
            const newResult = regexCalculation.calculate(tokens);
            expect(newResult).toBe(8);
        });

        it('should handle expressions with single numbers', () => {
            const tokens = ['5'];
            const result = regexCalculation.calculate(tokens);
            expect(result).toBe(5);
        });

        it('should throw error for invalid expressions', () => {
            const tokens = ['2', '+'];
            expect(() => regexCalculation.calculate(tokens)).toThrow();
        });
    });

    describe('Handling Unary Minus', () => {
        it('should handle unary minus in expressions correctly', () => {
            let expression = '-2*3';
            const result = regexCalculation.evaluate(expression);
            expect(result).toBe(-6);

            expression = '5-(-3)';
            const newResult = regexCalculation.evaluate(expression);
            expect(newResult).toBe(8);

            expression = '-(4+2)';
            const thirdResult = regexCalculation.evaluate(expression);
            expect(thirdResult).toBe(-6);
        });

        it('should handle multiple consecutive unary minuses', () => {
            const expression = '--2*3';
            expect(() => regexCalculation.evaluate(expression)).toThrow();
        });
    });


    describe('Error Handling', () => {
        it('evaluate method should throw error for expressions with invalid characters', () => {
            const invalidExpressions: string[] = [
                '3 @ 4',
                '2 # 5',
                '6 $ 9',
                '1 +_ 3',
            ];

            invalidExpressions.forEach((expression) => {
                expect(() => regexCalculation.evaluate(expression)).toThrow();
            });
        });

        it('evaluate method should throw error for expressions starting or ending with operators', () => {
            const invalidExpressions: string[] = [
                '+3',
                '4*',
                '/2-',
            ];

            invalidExpressions.forEach((expression) => {
                expect(() => regexCalculation.evaluate(expression)).toThrow();
            });
        });
    });

    describe('Evaluation', () => {
        describe('Trigonometric Function Tests', () => {
            it('evaluate method should correctly compute trigonometric functions with various angles', () => {
                const testCases: { expression: string; expected: number }[] = [
                    { expression: 'sin(0)', expected: Math.sin(0) },
                    { expression: 'cos(0.5)', expected: Math.cos(0.5) },
                    { expression: 'tan(1)', expected: Math.tan(1) },
                ];

                testCases.forEach(({ expression, expected }) => {
                    const result = regexCalculation.evaluate(expression);
                    expect(result).toBeCloseTo(expected);
                });
            });

            it('evaluate method should handle trigonometric functions with negative numbers as arguments', () => {
                const expression = 'sin(-1)+cos(-0.5)';
                const expected = Math.sin(-1) + Math.cos(-0.5);
                const result = regexCalculation.evaluate(expression);
                expect(result).toBeCloseTo(expected);
            });
        });


        describe('Parentheses Handling', () => {
            it('evaluate method should handle nested parentheses correctly', () => {
                const expression = '((3+4)*2)';
                const expected = 14;
                const result = regexCalculation.evaluate(expression);
                expect(result).toBe(expected);
            });

            it('evaluate method should throw error for mismatched parentheses', () => {
                const invalidExpressions: string[] = [
                    '(3+4',
                    '4*(2 + 3))',
                    '(((3+4)*2)',
                ];

                invalidExpressions.forEach((expression) => {
                    expect(() => regexCalculation.evaluate(expression)).toThrow();
                });
            });

            it('evaluate method should maintain correct order of operations within parentheses', () => {
                const expression = '(3+4)*2-(5/2)';
                const expected = 11.5;
                const result = regexCalculation.evaluate(expression);
                expect(result).toBe(expected);
            });
        });

        it('evaluate method should correctly compute mathematical expressions in regex calculation', () => {
            const testCases: { expression: string; expected: number }[] = [
                { expression: '3+4', expected: 7 },
                { expression: '5*2', expected: 10 },
                { expression: '10/3', expected: 3.3333333333333335 },
                { expression: '5-2+7', expected: 10 },
                { expression: '2-5+7', expected: 4 },
                { expression: '-2+(cos(1)+sin(1))+5!', expected: 119.38177329067604 },
            ];

            testCases.forEach(({ expression, expected }) => {
                const result = regexCalculation.evaluate(expression);
                expect(result).toBe(expected);
            });
        });

        it('evaluate method should return 0 on empty expression', () => {
            const expression = '';
            expect(regexCalculation.evaluate(expression)).toEqual(0);
        });
    });
});
