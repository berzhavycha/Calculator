import { render } from '@testing-library/react';
import { ListItem } from '../index';
import { vi } from 'vitest'

describe('ListItem component', () => {
    test('matches the snapshot', () => {
        const mockProps = {
            content: 'Item content',
            onItemClick: vi.fn(),
        };

        const { container } = render(
            <ListItem
                content={mockProps.content}
                onItemClick={mockProps.onItemClick}
            />
        );

        expect(container).toMatchSnapshot();
    });
})