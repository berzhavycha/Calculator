import { CalculationMethods, MathOperators } from '../constants';
import { methodOptions } from '../methodOptions';
import { PolishNotation } from './PolishNotation';

describe('PolishNotation', () => {
    let polishNotation: PolishNotation

    beforeEach(() => {
        polishNotation = methodOptions[CalculationMethods.POLISH_NOTATION];
    });

    describe('Tokenization', () => {
        it('tokenize method should correctly tokenize the expression', () => {
            const expression = '3+4*2/(1-5)';
            const tokens = polishNotation.tokenize(expression);
            const expectedTokens = ['3', '+', '4', '*', '2', '/', '(', '1', '-', '5', ')'];
            expect(tokens).toEqual(expectedTokens);
        });

        it('tokenize method should handle unary minus', () => {
            const expression = '-3+4*-2/(1-5)';
            const tokens = polishNotation.tokenize(expression);
            const expectedTokens = ['-3', '+', '4', '*', '-2', '/', '(', '1', '-', '5', ')'];
            expect(tokens).toEqual(expectedTokens);
        });

        it('tokenize method should handle invalid characters', () => {
            const expression = '3+@4';
            expect(() => polishNotation.tokenize(expression)).toThrow();
        });

        it('tokenize method should return 0 on empty expression', () => {
            const expression = '';
            expect(polishNotation.tokenize(expression)).toEqual(["0"]);
        });
    });

    describe('Infix to Postfix Conversion', () => {
        it('infixToPostfix method should convert infix expression to postfix', () => {
            const infixExpression = ['3', '+', '4', '*', '2', '/', '(', '1', '-', '5', ')'];
            const postfixExpression = polishNotation.infixToPostfix(infixExpression);
            const expectedPostfix = ['3', '4', '2', '*', '1', '5', '-', '/', '+'];
            expect(postfixExpression).toEqual(expectedPostfix);
        });
    });

    describe('Edge Cases and Limit Testing', () => {
        it('evaluate method should handle scenarios with floating-point precision', () => {
            const expression = '0.1+0.2';
            const expected = 0.3;
            const result = polishNotation.evaluate(expression);
            expect(result).toBeCloseTo(expected);
        });
    });

    describe('Operator Processors', () => {
        it('executeOperatorProcessor updates output correctly for valid operator', () => {
            const expressionOperators = ['+', '*', '-'];
            const output = ['2', '3', '4'];
            const token = MathOperators.PLUS;

            polishNotation.executeOperatorProcessor(expressionOperators, output, token);

            expect(output).toEqual(['2', '3', '4', '-', '*', '+']);
        });

        it('executeOperatorProcessor throws error for invalid operator', () => {
            const expressionOperators = ['+', '-'];
            const output = ['2', '3'];
            const token = '^' as MathOperators;

            expect(() => {
                polishNotation.executeOperatorProcessor(expressionOperators, output, token);
            }).toThrow('There is no processor for this token!');
        });
    });

    describe('Evaluation', () => {
        describe('Parentheses Handling', () => {
            it('evaluate method should handle nested parentheses correctly', () => {
                const expression = '((3+4)*2)';
                const expected = 14;
                const result = polishNotation.evaluate(expression);
                expect(result).toBe(expected);
            });

            it('evaluate method should throw error for mismatched parentheses', () => {
                const invalidExpressions: string[] = [
                    '(3+4',
                    '4*(2 + 3))',
                    '(((3+4)*2)',
                ];

                invalidExpressions.forEach((expression) => {
                    expect(() => polishNotation.evaluate(expression)).toThrow();
                });
            });

            it('evaluate method should maintain correct order of operations within parentheses', () => {
                const expression = '(3+4)*2-(5/2)';
                const expected = 11.5;
                const result = polishNotation.evaluate(expression);
                expect(result).toBe(expected);
            });
        });

        describe('Trigonometric Functions', () => {
            it('evaluate method should correctly compute trigonometric functions with various angles', () => {
                const testCases: { expression: string; expected: number }[] = [
                    { expression: 'sin(0)', expected: Math.sin(0) },
                    { expression: 'cos(0.5)', expected: Math.cos(0.5) },
                    { expression: 'tan(1)', expected: Math.tan(1) },
                ];
    
                testCases.forEach(({ expression, expected }) => {
                    const result = polishNotation.evaluate(expression);
                    expect(result).toBeCloseTo(expected);
                });
            });
    
            it('evaluate method should handle trigonometric functions with negative numbers as arguments', () => {
                const expression = 'sin(-1)+cos(-0.5)';
                const expected = Math.sin(-1) + Math.cos(-0.5);
                const result = polishNotation.evaluate(expression);
                expect(result).toBeCloseTo(expected);
            });
        });

        it('evaluate method should correctly compute mathematical expressions in Polish notation', () => {
            const testCases: { expression: string; expected: number }[] = [
                { expression: '3+4', expected: 7 },
                { expression: '5*2', expected: 10 },
                { expression: '10/3', expected: 3.3333333333333335 },
                { expression: '5-2+7', expected: 10 },
                { expression: '2-5+7', expected: 4 },
                { expression: '-2+(cos(1)+sin(1))+5!', expected: 119.38177329067604 },
            ];

            testCases.forEach(({ expression, expected }) => {
                const result = polishNotation.evaluate(expression);
                expect(result).toBe(expected);
            });
        });

        it('evaluate method should throw error for invalid expressions', () => {
            const invalidExpressions: string[] = [
                '3 +',
                '5x2',
                '4+s',
                '1-+2'
            ];

            invalidExpressions.forEach((expression) => {
                expect(() => polishNotation.evaluate(expression)).toThrow();
            });
        });
    });
});
