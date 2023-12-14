import { render } from '@testing-library/react';
import { InputExpression } from '../index';
import {vi} from 'vitest'

describe('InputExpression component', () => {
    test('matches the snapshot', () => {
        const mockProps = {
            expression: '2 + 2',
            inputName: 'expression-input',
            onExpressionChange: vi.fn(),
            onEnter: vi.fn(),
        };

        const { container } = render(
            <InputExpression
                expression={mockProps.expression}
                inputName={mockProps.inputName}
                onExpressionChange={mockProps.onExpressionChange}
                onEnter={mockProps.onEnter}
            />
        );

        expect(container).toMatchSnapshot();
    });
})