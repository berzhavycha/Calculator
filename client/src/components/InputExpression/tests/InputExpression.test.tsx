import { fireEvent, render, waitFor } from '@testing-library/react';
import { InputExpression } from '../index';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('InputExpression component', () => {
    const mockOnExpressionChange = vi.fn();
    const mockOnEnter = vi.fn();

    test('triggers onEnter function when Enter key is pressed', async () => {
        const { getByRole } = render(
            <InputExpression
                expression=""
                inputName={"input-expression"}
                onExpressionChange={mockOnExpressionChange}
                onEnter={mockOnEnter}
            />
        );

        const inputElement = getByRole('textbox');
        const inputExpression = '2+2'

        fireEvent.change(inputElement, { target: { value: inputExpression } });
        await userEvent.type(inputElement, '{enter}');

        await waitFor(() => {
            expect(mockOnExpressionChange).toHaveBeenCalledWith(inputExpression);
            expect(mockOnEnter).toHaveBeenCalled();
        });
    });

    test('should render with the provided expression value', () => {
        const expression = '2+2';

        const { getByDisplayValue } = render(
            <InputExpression
                expression={expression}
                inputName={"input-expression"}
                onExpressionChange={mockOnExpressionChange}
                onEnter={mockOnEnter}
            />
        );

        const inputElement = getByDisplayValue(expression);
        expect(inputElement).toBeInTheDocument();
    });

    test('should call onExpressionChange when input value changes', () => {
        const { getByRole } = render(
            <InputExpression
                expression=""
                inputName={"input-expression"}
                onExpressionChange={mockOnExpressionChange}
                onEnter={mockOnEnter}
            />
        );

        const inputElement = getByRole('textbox');
        const newExpression = '5 * 5';
        fireEvent.change(inputElement, { target: { value: newExpression } });

        expect(mockOnExpressionChange).toHaveBeenCalledWith(newExpression);
    });
});
