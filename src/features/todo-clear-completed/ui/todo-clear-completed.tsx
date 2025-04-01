import { Button } from '@/shared/ui/button';
import { FaRegTrashCan } from 'react-icons/fa6';
interface TodoClearCompletedButtonProps {
  onClearCompleted: () => void;
}
export const TodoClearCompletedButton = ({ onClearCompleted }: TodoClearCompletedButtonProps) => {
  return (
    <Button onClick={onClearCompleted}>
      Clear Completed <FaRegTrashCan />
    </Button>
  );
};
