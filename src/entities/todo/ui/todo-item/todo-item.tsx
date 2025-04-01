import { memo } from 'react';
import { Button } from '@/shared/ui/button';
import { Checkbox } from '@/shared/ui/checkbox';
import { FaRegTrashCan } from 'react-icons/fa6';
interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = memo(({ id, text, completed, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div className='flex items-center justify-between p-4 border-b hover:bg-gray-50 dark:hover:bg-neutral-900 max-sm:text-xs'>
      <div className='flex items-center gap-3'>
        <Checkbox checked={completed} onCheckedChange={() => onToggle(id)} className='h-5 w-5' />
        <span className={`${completed ? 'line-through text-gray-400' : ''}`}>{text}</span>
      </div>
      <Button
        variant='ghost'
        onClick={() => onDelete(id)}
        className='text-red-500 hover:bg-red-50 max-sm:text-xs'
      >
        Удалить <FaRegTrashCan />
      </Button>
    </div>
  );
});
