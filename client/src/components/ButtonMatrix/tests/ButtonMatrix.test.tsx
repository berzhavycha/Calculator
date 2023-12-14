import React from 'react';
import { render } from '@testing-library/react';
import { ButtonMatrix } from '../index';
import { vi } from 'vitest'
import { ButtonType } from '@components';
import userEvent from '@testing-library/user-event';

describe('ButtonMatrix component', () => {
    const buttonMatrix = [
        [
            { content: '1', type: ButtonType.NUMERIC, isLastButton: false },
            { content: '+', type: ButtonType.OPERATOR, isLastButton: false },
            { content: '=', type: ButtonType.EVALUATE, isLastButton: true },
        ],
    ];

    const lastButtonRef = React.createRef<HTMLButtonElement>();
    const onButtonClick = vi.fn();

    test('should render buttons based on the provided buttonMatrix', () => {
        const { getAllByRole } = render(
            <ButtonMatrix buttonMatrix={buttonMatrix} lastButtonRef={lastButtonRef} onButtonClick={onButtonClick} />
        );

        const buttons = getAllByRole('button');
        expect(buttons.length).toBe(buttonMatrix.flat().length);

        buttonMatrix.flat().forEach((button, index) => {
            expect(buttons[index]).toHaveTextContent(button.content);
        });
    });

    test('should call onButtonClick when a button is clicked', async () => {
        const { getByText } = render(
            <ButtonMatrix buttonMatrix={buttonMatrix} lastButtonRef={lastButtonRef} onButtonClick={onButtonClick} />
        );

        const buttonContent = '1';
        const button = getByText(buttonContent);

        await userEvent.click(button);

        expect(onButtonClick).toHaveBeenCalledWith(buttonMatrix[0][0]);
    });
});
