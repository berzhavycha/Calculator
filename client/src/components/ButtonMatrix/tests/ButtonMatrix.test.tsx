import { render } from '@testing-library/react';
import { ButtonMatrix } from '../index';
import { vi } from 'vitest'
import { ButtonType } from '@components';

describe('ButtonMatrix component', () => {
    test('matches the snapshot', () => {
        const mockProps = {
            buttonMatrix: [
                [
                    { content: '1', type: ButtonType.NUMERIC, isLastButton: false },
                    { content: '+', type: ButtonType.OPERATOR, isLastButton: false },
                    { content: '=', type: ButtonType.EVALUATE, isLastButton: true },
                ],
            ],
            lastButtonRef: { current: null },
            onButtonClick: vi.fn(),
        };

        const { container } = render(
            <ButtonMatrix
                buttonMatrix={mockProps.buttonMatrix}
                lastButtonRef={mockProps.lastButtonRef}
                onButtonClick={mockProps.onButtonClick}
            />
        );

        expect(container).toMatchSnapshot();
    })
});
