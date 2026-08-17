import type { Handle } from '@sveltejs/kit';
import { building } from '$app/environment';
import { auth } from '$lib/server/auth';
import { svelteKitHandler } from 'better-auth/svelte-kit';
import { db } from '$lib/server/db';
import { eq } from 'drizzle-orm';
import { user } from '$lib/server/db/auth.schema';

const handleBetterAuth: Handle = async ({ event, resolve }) => {
	const session = await auth.api.getSession({ headers: event.request.headers });

	// if (session) {
	// 	event.locals.session = session.session;
	// 	event.locals.user = session.user;
	// }

	if (session?.session && session.user) {
		// Подгружаем роль пользователя по userId
		const result = await db.query.user.findFirst({
			where: eq(user.id, session.user.id),
			with: {
				role: true // если настроено отношение one-to-one в relations
			}
		});

		if (result) {
			event.locals.session = session.session;
			event.locals.user = {
				...session.user,
				role: result.role.name // теперь у user есть поле role
			};
		} else {
			// Пользователь есть в сессии, но нет в таблице users — можно либо очистить сессию, либо просто не добавлять role
			event.locals.session = session.session;
			event.locals.user = session.user;
		}
	}

	return svelteKitHandler({ event, resolve, auth, building });
};

export const handle: Handle = handleBetterAuth;
