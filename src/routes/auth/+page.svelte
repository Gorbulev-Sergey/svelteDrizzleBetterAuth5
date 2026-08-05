<script lang="ts">
	import { enhance } from '$app/forms';
	import Block from '$lib/components/Block.svelte';
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();
</script>

<Block>
	<h4>Привет, {data.user.name}!</h4>
	<p>Ваш user ID is {data.user.id}.</p>
	<form method="post" action="?/signOut" use:enhance>
		<button>Sign out</button>
	</form>
</Block>
