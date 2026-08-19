import { db } from '$lib/server/db';
import { posts } from '$lib/server/db/schema';
import { json } from '@sveltejs/kit';
import { asc, desc } from 'drizzle-orm';

export async function GET({ locals }) {
	// if (locals.user?.role != 'admin') {
	// 	return new Response(JSON.stringify({ error: 'Доступ ограничен!' }), {
	// 		status: 401,
	// 		headers: { 'Content-Type': 'application/json' }
	// 	});
	// }

	let p = await db.query.posts.findMany({
		with: {
			user: {
				columns: {
					id: true,
					name: true
				}
			}
		},
		orderBy: asc(posts.createdAt)
	});
	return json(p);
}

export async function POST({ request }) {
	let post = await request.json();
	await db.insert(posts).values(post);

	return new Response();
}
