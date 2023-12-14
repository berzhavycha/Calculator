import { render } from '@testing-library/react';
import { List } from '../index';
import {vi} from 'vitest'

describe('List component', () => {
  test('matches the snapshot', () => {
    const mockProps = {
      items: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }],
      onItemClick: vi.fn(),
    };

    const { container } = render(
      <List
        items={mockProps.items}
        contentKey={"name"}
        onItemClick={mockProps.onItemClick}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
