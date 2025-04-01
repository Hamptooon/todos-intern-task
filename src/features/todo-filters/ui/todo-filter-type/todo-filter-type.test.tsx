import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoFilterType } from './';

describe('TodoFilterType', () => {
  it('should change filter', () => {
    const mockChange = vi.fn();
    render(<TodoFilterType currentFilter='all' onFilterChange={mockChange} />);

    fireEvent.click(screen.getByText('Active'));
    expect(mockChange).toHaveBeenCalledWith('active');
  });
});
