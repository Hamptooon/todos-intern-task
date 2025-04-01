import { z } from 'zod';
export const addTodoFormValidationSchema = z.object({
  text: z.string().min(1, 'Todo cannot be empty').max(65, 'Todo must be less than 65 characters'),
});
