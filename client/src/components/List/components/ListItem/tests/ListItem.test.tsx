import { render, fireEvent } from '@testing-library/react';
import { ListItem } from '../index';
import { vi } from 'vitest'

describe('ListItem component', () => {
    const content = 'Example Content';
    const onItemClick = vi.fn();

    test('should render the provided content', () => {

        const { getByText } = render(<ListItem content={content} onItemClick={onItemClick} />);

        const renderedContent = getByText(content);
        expect(renderedContent).toBeInTheDocument();
    });

    test('should call onItemClick when the list item is clicked', () => {
        const { getByRole } = render(<ListItem content={content} onItemClick={onItemClick} />);

        const listItem = getByRole('listitem');
        fireEvent.click(listItem);

        expect(onItemClick).toHaveBeenCalledWith(content);
    });
});
