import { render } from '@testing-library/react';
import { ResultExpression } from '../index';

describe('ResultExpression component', () => {
  test('matches the snapshot', () => {
    const mockProps = {
      result: '14',
      errorMessage: 'Invalid expression',
    };

    const { container } = render(
      <ResultExpression
        result={mockProps.result}
        errorMessage={mockProps.errorMessage}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
