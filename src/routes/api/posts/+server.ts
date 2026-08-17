import { db } from '$lib/server/db';
import { posts } from '$lib/server/db/schema';

export async function GET({ locals }) {
	if (locals.user?.role != 'admin') {
		return new Response(JSON.stringify({ error: 'Доступ ограничен!' }), {
			status: 401,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	let p = await db.select().from(posts).orderBy(posts.createdAt);
	return new Response(JSON.stringify(p));
}

export async function POST({ request }) {
	let post = await request.json();
	await db.insert(posts).values(post);

	return new Response();
}
