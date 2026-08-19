<script lang="ts">
	import Block from '$lib/components/Block.svelte';
	import Column from '$lib/components/Column.svelte';
	import { STORE } from '$lib/store.svelte';
	import { onDestroy, onMount, type Snippet } from 'svelte';

	onMount(() => {
		STORE.snippet = Snip;
	});
	onDestroy(() => {
		STORE.snippet = null;
	});
</script>

{#snippet Snip()}
	<button class="btn btn-sm btn-light text-dark">{STORE.message}</button>
{/snippet}

<Column>
	<Block>
		<h4>Панель управления</h4>
		<div>
			<input class="form-control form-control-sm" bind:value={STORE.message} />
		</div>
	</Block>
</Column>
