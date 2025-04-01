import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '@/entities/todo/model/slice';
import { TodoWidget } from './';
import userEvent from '@testing-library/user-event';

describe('TodoWidget', () => {
  const store = configureStore({ reducer: { todos: todoReducer } });

  it('should add and display todo', async () => {
    render(
      <Provider store={store}>
        <TodoWidget />
      </Provider>,
    );

    const input = screen.getByPlaceholderText('Add your todo...');
    const button = screen.getByText('Add todo');

    await userEvent.type(input, 'Integration Test');
    await userEvent.click(button);

    await waitFor(
      () => {
        expect(screen.getByText('Integration Test')).toBeInTheDocument();
      },
      { timeout: 2000 },
    );
  });
});
