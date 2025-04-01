import todoReducer, { addTodo, toggleTodo, deleteTodo, clearCompleted } from './slice';

describe('Todo Slice', () => {
  const mockTodo = { id: '1', text: 'Test', completed: false };
  const mockClearCompletedTodos = [
    { id: '1', text: 'Test', completed: true },
    { id: '2', text: 'Test2', completed: true },
  ];

  it('should add new todo', () => {
    const action = addTodo('New Todo');
    const state = todoReducer(undefined, action);
    expect(state.list[0].text).toBe('New Todo');
  });

  it('should toggle todo status', () => {
    const initialState = { list: [mockTodo] };
    const state = todoReducer(initialState, toggleTodo('1'));
    expect(state.list[0].completed).toBe(true);
  });

  it('should delete todo', () => {
    const initialState = { list: [mockTodo] };
    const state = todoReducer(initialState, deleteTodo('1'));
    expect(state.list.length).toBe(0);
  });
  it('should clear completed todo', () => {
    const initialState = { list: [...mockClearCompletedTodos] };
    const state = todoReducer(initialState, clearCompleted());
    expect(state.list.length).toBe(0);
  });
});
