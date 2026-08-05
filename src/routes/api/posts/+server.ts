import { auth } from '$lib/server/auth.js';
import { db } from '$lib/server/db';
import { posts } from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';

export async function GET({ locals }) {
	if (!locals.user) {
		return new Response(JSON.stringify({ error: 'Вы не авторизованы!' }), {
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
