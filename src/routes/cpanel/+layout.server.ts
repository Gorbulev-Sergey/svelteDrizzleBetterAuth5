import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	if (locals.user?.role == 'user') redirect(307, '/');

	return {};
}
