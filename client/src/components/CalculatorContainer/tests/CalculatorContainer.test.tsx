import { render } from '@testing-library/react';
import { CalculatorContainer } from '../index';

describe('CalculatorContainer', () => {
  test('matches the snapshot', () => {
    const { container } = render(<CalculatorContainer />);
    expect(container).toMatchSnapshot();
  });
});
