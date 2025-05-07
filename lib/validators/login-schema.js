import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({
      message: 'Please email should be letters and special characters',
    })
    .email({ message: 'A valid email is required' })
    .min(1, { message: 'Please email is required' }),
  password: z.string().min(1, { message: 'Please password is required' }),
});
