import { ToggleGroup, ToggleGroupItem } from '@/shared/ui/toggle-group/toggle-group';
import { TiThSmallOutline } from 'react-icons/ti';
import { FaRegSquareCheck } from 'react-icons/fa6';
import { IoWarningOutline } from 'react-icons/io5';
import { TodoFilter } from '@/entities/todo/model/types';
interface TodoFilterTypeProps {
  currentFilter: TodoFilter;
  onFilterChange: (filter: TodoFilter) => void;
}

export const TodoFilterType = ({ currentFilter, onFilterChange }: TodoFilterTypeProps) => {
  return (
    <div className='flex justify-center mb-4'>
      <ToggleGroup
        type='single'
        value={currentFilter}
        className='flex justify-center gap-3'
        onValueChange={(value) => onFilterChange(value as TodoFilter)}
      >
        <ToggleGroupItem
          value='all'
          className='py-2 px-7 rounded-lg border-2 border-dashed data-[state=on]:border-primary data-[state=off]:text-gray-500' // Добавьте отступы
        >
          All
          <TiThSmallOutline />
        </ToggleGroupItem>
        <ToggleGroupItem
          value='completed'
          className='py-2 px-7 rounded-lg border-2 border-dashed data-[state=on]:border-primary data-[state=off]:text-gray-500'
        >
          Completed <FaRegSquareCheck />
        </ToggleGroupItem>
        <ToggleGroupItem
          value='active' // Исправьте значение на 'active'
          className='py-2 px-7 rounded-lg border-2 border-dashed data-[state=on]:border-primary data-[state=off]:text-gray-500'
        >
          Active <IoWarningOutline />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};
