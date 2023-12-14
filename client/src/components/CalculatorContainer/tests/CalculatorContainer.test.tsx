import { render, screen, fireEvent } from '@testing-library/react';
import { CalculatorContainer } from '../index';
import userEvent from '@testing-library/user-event';
import { EVALUATE, SpecialOperators, ButtonType, BACKSPACE } from '@components';
import { vi } from 'vitest'
import * as fetchModuleStatus from '@hooks'
import * as fetchLastExpressions from '../components/CalculationHistory/hooks/useFetchExpressions'
import * as buttonMatrix from '../components/CalculatorButtons/hooks/useGetButtonsMatrix'


describe('CalculatorContainer component ', () => {
    const inputContent = '2+2'
    const inputResult = 4

    beforeEach(() => {
        vi.spyOn(buttonMatrix, 'useGetButtonMatrix').mockReturnValue([
            [{
                content: '+',
                type: ButtonType.OPERATOR,
                isLastButton: false,
            },
            {
                content: '/',
                type: ButtonType.OPERATOR,
                isLastButton: false,
            },
            {
                content: '1',
                type: ButtonType.NUMERIC,
                isLastButton: false,
            }],
            [{
                content: SpecialOperators.CLEAR_ALL,
                type: ButtonType.CLEAR_ALL,
                isLastButton: false,
            },
            {
                content: BACKSPACE,
                type: ButtonType.SPECIAL_OPERATOR,
                isLastButton: false,
            },
            {
                content: EVALUATE,
                type: ButtonType.EVALUATE,
                isLastButton: true,
            }],
        ])
    })

    afterEach(() => {
        vi.clearAllMocks()
    })

    const getInputExpression = () => screen.getByRole('textbox', { name: /input-expression/i });
    const getEvaluateButton = () => screen.getByRole('button', { name: EVALUATE });

    const typeInputExpression = async (input: string) => {
        const inputExpression = getInputExpression();
        await userEvent.type(inputExpression, input);
        expect(inputExpression).toHaveValue(input);
    };

    const clickEvaluateButton = async () => {
        const evaluateButton = getEvaluateButton();
        await userEvent.click(evaluateButton);
    };

    const expectResultExpression = async (expectedResult: number) => {
        const resultExpression = screen.getByRole('generic', { name: /result-expression/i });
        expect(resultExpression).toHaveTextContent(expectedResult.toString());
    };

    const expectErrorExpression = async (errorMessage: string, invalidExpression: string) => {
        const inputExpression = getInputExpression();
        await userEvent.type(inputExpression, invalidExpression);
        expect(inputExpression).toHaveValue(invalidExpression);

        await clickEvaluateButton();

        const errorExpression = screen.getByRole('generic', { name: /error-expression/i });
        expect(errorExpression).toHaveTextContent(errorMessage);
    };

    test('should allow typing expressions', async () => {
        render(<CalculatorContainer />);
        await typeInputExpression(inputContent);
    });

    test('should allow adding values to expression on button clicking', async () => {
        const { getByText } = render(<CalculatorContainer />);
        await userEvent.click(getByText('1'));
        await userEvent.click(getByText('+'));
        await userEvent.click(getByText('1'));
        expect(getInputExpression()).toHaveValue('1+1');
    });

    test('should display result and handle evaluation correctly', async () => {
        vi.spyOn(global, 'fetch').mockResolvedValue({
            json: vi.fn().mockResolvedValue({ result: inputResult }),
            ok: true,
            status: 200,
        } as unknown as Response);

        render(<CalculatorContainer />);
        
        const inputExpression = getInputExpression();

        fireEvent.change(inputExpression, { target: { value: inputContent } });
        await clickEvaluateButton();
        expectResultExpression(inputResult);
    });

    test('should clear all inputs and results', async () => {
        render(<CalculatorContainer />);
        const inputExpression = getInputExpression();

        await typeInputExpression(inputContent);
        await clickEvaluateButton();

        const clearButton = screen.getByRole('button', { name: SpecialOperators.CLEAR_ALL });
        await userEvent.click(clearButton);

        expect(inputExpression).toHaveValue('');
        expectResultExpression(0);
    });

    test('should display CalculationHistory when module status is set to true', async () => {
        vi.spyOn(fetchModuleStatus, 'useFetchModuleStatus').mockReturnValue(true);
        const fetchLastExpressionsSpy = vi.spyOn(fetchLastExpressions, 'useFetchExpressions');
        render(<CalculatorContainer />);
        expect(fetchLastExpressionsSpy).toHaveBeenCalled();
    });

    test('shouldn`t display CalculationHistory when module status is set to false', async () => {
        vi.spyOn(fetchModuleStatus, 'useFetchModuleStatus').mockReturnValue(false);
        const fetchLastExpressionsSpy = vi.spyOn(fetchLastExpressions, 'useFetchExpressions');
        render(<CalculatorContainer />);
        expect(fetchLastExpressionsSpy).not.toHaveBeenCalled();
    });

    test('should display error on mistakes', async () => {
        const errorMessage = "Invalid Expression";
        const invalidExpression = '1+s';

        vi.spyOn(global, 'fetch').mockResolvedValue({
            json: vi.fn().mockImplementation(() => {
                throw new Error(errorMessage);
            }),
            ok: true,
            status: 500,
        } as unknown as Response);

        render(<CalculatorContainer />);
        await expectErrorExpression(errorMessage, invalidExpression);
    });
});
