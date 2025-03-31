import { useSelector, useDispatch } from 'react-redux';
import { TodoList } from '@/entities/todo/ui/todo-list';
import { RootState } from '@/app/providers/store-provider';
import { toggleTodo, deleteTodo } from '@/entities/todo/model/slice';
import { useState } from 'react';
import { TodoFilter } from '@/entities/todo/model/types';
export const MainPage = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.list);
  const [currentFilter, setCurrentFilter] = useState<TodoFilter>('all');

  return (
    <div className='max-w-2xl mx-auto p-4'>
      <TodoList
        todos={todos}
        currentFilter={currentFilter}
        onToggleTodo={(id) => dispatch(toggleTodo(id))}
        onDeleteTodo={(id) => dispatch(deleteTodo(id))}
      />
    </div>
  );
};
