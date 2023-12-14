import { render } from '@testing-library/react';
import { List } from '../index';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('List component', () => {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  const contentKey = 'name';
  const onItemClick = vi.fn();

  test('should render a list with provided items', () => {
    const { getAllByRole } = render(
      <List items={items} contentKey={contentKey} onItemClick={onItemClick} />
    );

    const listItems = getAllByRole('listitem');
    expect(listItems.length).toBe(items.length);

    listItems.forEach((item, index) => {
      expect(item.textContent).toBe(items[index][contentKey]);
    });
  });

  test('should call onItemClick with the correct content when a list item is clicked', async () => {
    const { getAllByRole } = render(
      <List items={items} contentKey={contentKey} onItemClick={onItemClick} />
    );

    const listItems = getAllByRole('listitem');
    for (const [index, item] of listItems.entries()) {
      await userEvent.click(item);
      expect(onItemClick).toHaveBeenCalledWith(items[index][contentKey]);
    }
  });
});
