import { auth } from '$lib/server/auth';

export async function POST({ request }) {
	await auth.api.signOut({
		headers: request.headers
	});

	// Возвращаем простой JSON, редирект будет на клиенте
	return new Response(JSON.stringify({ success: true }));
}
