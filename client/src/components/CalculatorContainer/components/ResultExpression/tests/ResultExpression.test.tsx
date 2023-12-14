import { render } from '@testing-library/react';
import { ResultExpression } from '../index';

describe('ResultExpression component', () => {
    test('renders result when result prop is provided', () => {
        const {getByText, queryByText} = render(<ResultExpression result="42" errorMessage="Error message" />);

        const resultElement = getByText('42');
        const errorMessageElement = queryByText('Error message');

        expect(resultElement).toBeInTheDocument();
        expect(errorMessageElement).toBeNull();
    });

    test('renders error message when result prop is not provided', () => {
        const { getByText } = render(
            <ResultExpression result="" errorMessage="Error message" />
        );

        const errorMessageElement = getByText('Error message');

        expect(errorMessageElement).toBeInTheDocument();
    });

    test('renders "0" when result prop is empty', () => {
        const { getByText } = render(
            <ResultExpression result="" errorMessage="Error message" />
        );
        const zeroResultElement = getByText('0');
        expect(zeroResultElement).toBeInTheDocument();
    });
});
