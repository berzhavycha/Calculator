import { render } from '@testing-library/react';
import { CalculatorButtons } from '../index';
import { BACKSPACE, ButtonType, EVALUATE, SpecialOperators } from '@components';
import userEvent from '@testing-library/user-event';
import * as operationContext from '@context'
import * as buttonMatrix from '../hooks/useGetButtonsMatrix'
import { Mock } from 'vitest'

type MockProps = {
    expression: string;
    onButtonClick: Mock;
    resizeCalculatorContainer: Mock;
    onEvaluate: Mock;
    onClearAll: Mock;
};

describe('CalculatorButtons component', () => {
    let mockProps: MockProps, operations

    beforeEach(() => {
        mockProps = {
            expression: '5+3',
            onButtonClick: vi.fn(),
            resizeCalculatorContainer: vi.fn(),
            onEvaluate: vi.fn(),
            onClearAll: vi.fn(),
        };

        operations = {
            "+": {
                priority: 1,
                calculate: (a: number, b: number) => a + b,
                type: 'binary',
            },
            "/": {
                priority: 2,
                calculate: (a: number, b: number) => a / b,
                type: 'binary',
            },
        }

        vi.spyOn(operationContext, 'useOperations').mockReturnValue(operations)
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
        vi.clearAllMocks();
    });

    test('renders buttons and performs click actions', async () => {
        const { getByText } = render(<CalculatorButtons {...mockProps} />);

        await userEvent.click(getByText('1'));
        expect(mockProps.onButtonClick).toHaveBeenCalledWith('5+31');
    });

    test('handles clearAll functionality correctly', async () => {
        const { getByText } = render(<CalculatorButtons {...mockProps} />);

        await userEvent.click(getByText(SpecialOperators.CLEAR_ALL));
        expect(mockProps.onClearAll).toHaveBeenCalled();
    });

    test('handles evaluate functionality correctly', async () => {
        const { getByText } = render(<CalculatorButtons {...mockProps} />);

        await userEvent.click(getByText(EVALUATE));
        expect(mockProps.onEvaluate).toHaveBeenCalled();
    });

    test('handles backspace functionality correctly', async () => {
        const { getByText } = render(<CalculatorButtons {...mockProps} />);

        await userEvent.click(getByText(BACKSPACE));
        expect(mockProps.onButtonClick).toHaveBeenCalledWith('5+');
    });
});
