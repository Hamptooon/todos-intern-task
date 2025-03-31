import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodosState {
  list: Todo[];
}

const initialState: TodosState = {
  list: [
    {
      id: '1',
      text: 'Learn TypeScript',
      completed: false,
    },
    {
      id: '2',
      text: 'Build a Redux app',
      completed: false,
    },
    {
      id: '3',
      text: 'Deploy to production',
      completed: false,
    },
    {
      id: '4',
      text: 'Write tests',
      completed: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.list.push({
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.list.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((t) => t.id !== action.payload);
    },
    clearCompleted: (state) => {
      state.list = state.list.filter((t) => !t.completed);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, clearCompleted } = todoSlice.actions;
export default todoSlice.reducer;
