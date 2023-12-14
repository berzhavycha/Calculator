import { render, fireEvent } from '@testing-library/react';
import { List } from '../index';
import { vi } from 'vitest'

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

  test('should call onItemClick with the correct content when a list item is clicked', () => {
    const items = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ];

    const { getAllByRole } = render(
      <List items={items} contentKey={contentKey} onItemClick={onItemClick} />
    );

    const listItems = getAllByRole('listitem');
    listItems.forEach((item, index) => {
      fireEvent.click(item);
      expect(onItemClick).toHaveBeenCalledWith(items[index][contentKey]);
    });
  });
});
