import { TodoItem } from '@/entities/todo/ui/todo-item';
import { Todo, TodoFilter } from '@/entities/todo/model/types';

interface TodoListProps {
  todos: Todo[];
  currentFilter: TodoFilter;
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

export const TodoList = ({ todos, currentFilter, onToggleTodo, onDeleteTodo }: TodoListProps) => {
  const filteredTodos = todos.filter((todo) => {
    if (currentFilter === 'active') return !todo.completed;
    if (currentFilter === 'completed') return todo.completed;
    return true;
  });

  return (
    <>
      {filteredTodos.length === 0 ? (
        <div className='p-4 text-center text-gray-500'>Нет задач</div>
      ) : (
        filteredTodos.map((todo) => (
          <TodoItem key={todo.id} {...todo} onToggle={onToggleTodo} onDelete={onDeleteTodo} />
        ))
      )}
    </>
  );
};
