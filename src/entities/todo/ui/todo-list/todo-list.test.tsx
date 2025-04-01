import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TodoList } from './';

const mockTodos = [
  { id: '1', text: 'Task 1', completed: false },
  { id: '2', text: 'Task 2', completed: true },
];

describe('TodoList', () => {
  it('should filter active todos', () => {
    render(
      <TodoList
        todos={mockTodos}
        currentFilter='active'
        onToggleTodo={vi.fn()}
        onDeleteTodo={vi.fn()}
      />,
    );

    expect(screen.getAllByRole('checkbox')[0]).not.toBeChecked();
  });

  it('should show empty state', () => {
    render(
      <TodoList todos={[]} currentFilter='all' onToggleTodo={vi.fn()} onDeleteTodo={vi.fn()} />,
    );

    expect(screen.getByText(/нет задач/i)).toBeInTheDocument();
  });
});
