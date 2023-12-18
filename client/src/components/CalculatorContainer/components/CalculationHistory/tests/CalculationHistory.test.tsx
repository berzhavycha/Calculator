import { render } from '@testing-library/react';
import { vi } from 'vitest'
import { CalculationHistory } from '../index';

describe('CalculationHistory component', () => {
  test('matches the snapshot', () => {
    const mockProps = {
      expression: '2 + 2',
      result: '4',
      setExpression: vi.fn(),
      setResult: vi.fn(),
    };

    const { container } = render(
      <CalculationHistory
        expression={mockProps.expression}
        result={mockProps.result}
        contentKey={"expression"}
        setExpression={mockProps.setExpression}
        setResult={mockProps.setResult}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
