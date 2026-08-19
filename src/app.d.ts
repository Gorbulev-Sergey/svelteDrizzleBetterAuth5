import type { User, Session } from 'better-auth';

declare global {
	namespace App {
		interface Locals {
			user?: {
				id: string;
				email?: string;
				name?: string;
				role?: string;
			};
			session?: Session;
		}
	}
}

export {};
