import { z } from 'zod';
import * as yup from 'yup';

export const zodLoginSchema = z.object({
    username: z.string().min(3, 'Username must be at least 3 characters'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const yupLoginSchema = yup.object({
    username: yup.string().min(3, 'Username must be at least 3 characters').required('Username is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export type LoginFormData = z.infer<typeof zodLoginSchema>;