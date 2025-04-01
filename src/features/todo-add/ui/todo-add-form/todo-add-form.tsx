import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { addTodoFormValidationSchema } from '../../model/add-todo-validation-schema';
import { z } from 'zod';
import { Button } from '@/shared/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { RxPlusCircled } from 'react-icons/rx';
interface TodoAddFormProps {
  onAddTodo: (text: string) => void;
}
export const TodoAddForm = ({ onAddTodo }: TodoAddFormProps) => {
  const form = useForm<z.infer<typeof addTodoFormValidationSchema>>({
    resolver: zodResolver(addTodoFormValidationSchema),
    defaultValues: {
      text: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (values: z.infer<typeof addTodoFormValidationSchema>) => {
    onAddTodo(values.text);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex gap-2 w-full' role='form'>
        <FormField
          control={form.control}
          name='text'
          render={({ field }) => (
            <FormItem className='flex-1 mb-3'>
              <FormControl>
                <Input
                  {...field}
                  placeholder='Add your todo...'
                  className={`md:text-base p-5 ${
                    form.formState.errors.text ? 'border-destructive' : ''
                  }`}
                />
              </FormControl>
              <FormMessage data-testid='error-message' />
            </FormItem>
          )}
        />

        <Button type='submit' className='md:text-base p-5 gap-2' disabled={!form.formState.isValid}>
          Add todo
          <RxPlusCircled className='w-5 h-5' />
        </Button>
      </form>
    </Form>
  );
};
