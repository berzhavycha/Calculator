import { render } from '@testing-library/react';
import { CalculatorButtons } from '../index';
import {vi} from 'vitest'

describe('CalculatorButtons component', () => {
  test('matches the snapshot', () => {
    const mockProps = {
      expression: '2 + 2',
      onButtonClick: vi.fn(),
      resizeCalculatorContainer: vi.fn(),
      onEvaluate: vi.fn(),
      onClearAll: vi.fn(),
    };

    const { container } = render(
      <CalculatorButtons
        expression={mockProps.expression}
        onButtonClick={mockProps.onButtonClick}
        resizeCalculatorContainer={mockProps.resizeCalculatorContainer}
        onEvaluate={mockProps.onEvaluate}
        onClearAll={mockProps.onClearAll}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
