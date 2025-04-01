import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoAddForm } from './';

describe('TodoAddForm', () => {
  it('should show validation error', async () => {
    const mockAdd = vi.fn();
    render(<TodoAddForm onAddTodo={mockAdd} />);
    const input = screen.getByRole('textbox');
    const longText = 'd'.repeat(67);
    await userEvent.type(input, longText);

    await waitFor(
      () => {
        expect(screen.getByTestId('error-message')).toHaveTextContent(/must be less than/i);
      },
      { timeout: 2000 },
    );
  });

  it('should submit valid form', async () => {
    const mockAdd = vi.fn();
    render(<TodoAddForm onAddTodo={mockAdd} />);

    await userEvent.type(screen.getByRole('textbox'), 'New Task');
    await userEvent.click(screen.getByText('Add todo'));

    await waitFor(() => {
      expect(mockAdd).toHaveBeenCalledWith('New Task');
    });
  });
});
