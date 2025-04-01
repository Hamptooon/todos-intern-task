import { useDispatch, useSelector } from 'react-redux';
import { TodoList } from '@/entities/todo/ui/todo-list';
import { RootState } from '@/app/providers/store-provider';
import { toggleTodo, deleteTodo, addTodo } from '@/entities/todo/model/slice';
import { useState } from 'react';
import { TodoFilter, Todo } from '@/entities/todo/model/types';
import { TodoFilterType } from '@/features/todo-filters/ui/todo-filter-type';
import { TodoItemsLeftStat } from '@/features/todo-items-left-stat/ui/todo-items-left-stat';
import { TodoClearCompletedButton } from '@/features/todo-clear-completed/ui/todo-clear-completed';
import { TodoAddForm } from '@/features/todo-add/ui/todo-add-form';
export const TodoWidget = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.list);
  const [currentFilter, setCurrentFilter] = useState<TodoFilter>('all');
  const activeCount = todos.filter((todo: Todo) => !todo.completed).length;
  const completedTodos = todos.filter((todo: Todo) => todo.completed);
  const handleAddTodo = (text: string) => {
    dispatch(addTodo(text));
  };
  const handleClearCompleted = () => {
    completedTodos.forEach((todo: Todo) => dispatch(deleteTodo(todo.id)));
  };
  return (
    <>
      <h1 className='text-3xl mb-4 text-center text-gray-400'>Todosy</h1>
      <div className='max-w-3xl mx-auto border-1 rounded-lg '>
        <div className='p-4'>
          <TodoAddForm onAddTodo={(text) => handleAddTodo(text)} />
        </div>
        <div className='mb-4'>
          <TodoList
            todos={todos}
            currentFilter={currentFilter}
            onToggleTodo={(id) => dispatch(toggleTodo(id))}
            onDeleteTodo={(id) => dispatch(deleteTodo(id))}
          />
        </div>
        <div className='flex gap-7 justify-between items-baseline p-4'>
          <TodoItemsLeftStat count={activeCount} />
          <TodoFilterType
            currentFilter={currentFilter}
            onFilterChange={(filter) => setCurrentFilter(filter)}
          />
          <TodoClearCompletedButton onClearCompleted={() => handleClearCompleted()} />
        </div>
      </div>
    </>
  );
};
