interface TodoItemsLeftStatProps {
  count: number;
}
export const TodoItemsLeftStat = ({ count }: TodoItemsLeftStatProps) => {
  return <div className='text-gray-500'>{count ? `${count} items left` : `No items left`}</div>;
};
