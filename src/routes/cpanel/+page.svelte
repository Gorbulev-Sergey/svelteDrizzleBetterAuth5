<script lang="ts">
	import Block from '$lib/components/Block.svelte';
	import Column from '$lib/components/Column.svelte';
	import Subtitle from '$lib/components/Subtitle.svelte';
	import { STORE } from '$lib/store.svelte';
	import { onDestroy, onMount } from 'svelte';

	onMount(() => {
		STORE.snippet = Snip;
		STORE.subtitle = Subtitle;
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
