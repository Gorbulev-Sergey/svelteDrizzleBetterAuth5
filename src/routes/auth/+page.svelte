<script lang="ts">
	import { enhance } from '$app/forms';
	import Block from '$lib/components/Block.svelte';
	import Column from '$lib/components/Column.svelte';
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();
</script>

<Column>
	<Block>
		<div class="d-flex flex-column gap-2">
			<h4>Привет, {data.user.name}!</h4>
			<div>Ваш ID: <b>{data.user.id}</b>.</div>
			<div>Ваша роль: <b>{data.user.role}</b>.</div>
			<div class="d-flex gap-2">
				<form method="post" action="?/signOut" use:enhance>
					<button class="btn btn-sm btn-dark text-light">Выйти через form</button>
				</form>
			</div>
		</div>
	</Block>
</Column>
