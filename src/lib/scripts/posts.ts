import type { TPost } from '$lib';
import { redirect } from '@sveltejs/kit';

export async function getPosts() {
	let response = await fetch('/api/posts', {
		method: 'GET',
		headers: { 'content-type': 'application/json' }
	});
	return (await response.json()) as TPost[];
}

export async function createPost(post: TPost) {
	post.id = crypto.randomUUID();
	fetch('/api/posts', {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(post)
	});
}
