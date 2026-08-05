import { db } from '$lib/server/db';
import { posts } from '$lib/server/db/schema';

export async function GET() {
	let p = await db.select().from(posts).orderBy(posts.createdAt);
	return new Response(JSON.stringify(p));
}

export async function POST({ request }) {
	let post = await request.json();
	await db.insert(posts).values(post);

	return new Response();
}
