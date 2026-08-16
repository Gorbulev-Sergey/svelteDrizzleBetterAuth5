import { auth } from '$lib/server/auth';

export async function POST({ request }) {
	const { provider, callbackURL } = await request.json();
	const result = await auth.api.signInSocial({
		body: {
			provider,
			callbackURL
		}
	});

	if (result.url) {
		// Возвращаем URL для редиректа на клиенте
		return new Response(JSON.stringify({ redirectUrl: result.url }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	return new Response(JSON.stringify({ error: 'Social sign-in failed' }), {
		status: 400,
		headers: { 'Content-Type': 'application/json' }
	});
}
