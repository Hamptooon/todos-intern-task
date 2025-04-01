import { useDispatch, useSelector } from 'react-redux';
import { TodoList } from '@/entities/todo/ui/todo-list';
import { RootState } from '@/app/providers/store-provider/store-provider';
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
    <div className='mx-auto max-w-5xl px-4 lg:px-8'>
      <h1 className='mb-6 text-center text-2xl font-semibold text-gray-400 max-sm:text-xl'>
        Todosy
      </h1>
      <div className='rounded-lg border shadow-lg flex-col justify-center items-center'>
        <div className='p-4 max-sm:p-6'>
          <TodoAddForm onAddTodo={handleAddTodo} />
        </div>
        <div className='mb-4 h-[400px] max-sm:h-[500px]'>
          <TodoList
            todos={todos}
            currentFilter={currentFilter}
            onToggleTodo={(id) => dispatch(toggleTodo(id))}
            onDeleteTodo={(id) => dispatch(deleteTodo(id))}
          />
        </div>
        <div className='flex gap-4 justify-between items-baseline p-4 max-sm:flex-col max-sm:gap-4 max-sm:items-center'>
          <TodoItemsLeftStat count={activeCount} />
          <TodoFilterType currentFilter={currentFilter} onFilterChange={setCurrentFilter} />
          <TodoClearCompletedButton onClearCompleted={handleClearCompleted} />
        </div>
      </div>
    </div>
  );
};
