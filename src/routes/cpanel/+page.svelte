<script lang="ts">
	import type { TPost } from '$lib';
	import Block from '$lib/components/Block.svelte';
	import Column from '$lib/components/Column.svelte';
	import Posts from '$lib/components/Posts.svelte';
	import { getPosts } from '$lib/scripts/posts';
	import { STORE } from '$lib/store.svelte';
	import { onDestroy, onMount } from 'svelte';

	let posts = $state<TPost[]>([] as TPost[]);
	onMount(async () => {
		STORE.snippet = Snip;
		posts = await getPosts();
	});
	onDestroy(() => {
		STORE.snippet = null;
	});
</script>

{#snippet Snip()}
	<button class="btn btn-sm btn-light text-dark">{STORE.message}</button>
{/snippet}

<Column>
	<Block _class="px-4 py-2 bg-light">
		<Posts {posts} gap={3} columns={5} />
	</Block>
</Column>
