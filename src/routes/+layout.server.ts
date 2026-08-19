export async function load({ locals }) {
	return {
		user: locals.session ? locals.user : null
	};
}
