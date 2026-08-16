<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import Block from '$lib/components/Block.svelte';
	import Column from '$lib/components/Column.svelte';
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();
</script>

<Column>
	<Block>
		<h4>Привет, {data.user.name}!</h4>
		<p>Ваш user ID is {data.user.id}.</p>
		<form method="post" action="?/signOut" use:enhance>
			<button>Sign out</button>
		</form>
	</Block>
	<Block>
		<button
			class="btn btn-sm btn-dark text-light"
			onclick={async () => {
				await fetch('/api/auth1/signout', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					}
					// куки автоматически отправятся, если они HttpOnly и SameSite настроены правильно
				}).then((r) => {
					if (r.ok) goto('/auth/login');
				});
			}}>Выйти</button
		>
	</Block>
</Column>
