import z from 'zod';
import { ru } from 'zod/locales';

z.config(ru());

export const registerSchema = z.object({
	email: z.email(),
	password: z.string().min(8),
	name: z.string().optional()
});

export const loginSchema = z.object({
	email: z.email(),
	password: z.string().min(8)
});
