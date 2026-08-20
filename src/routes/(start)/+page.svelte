<script lang="ts">
	import { onMount } from 'svelte';
	import Block from '$lib/components/Block.svelte';
	import Column from '$lib/components/Column.svelte';
	import Posts from '$lib/components/Posts.svelte';
	import { type TPost } from '$lib';
	import { getPosts } from '$lib/scripts/posts';

	let posts = $state<TPost[]>([] as TPost[]);
	onMount(async () => {
		posts = await getPosts();
	});
</script>

<Column>
	<Posts {posts} title="Публикации" />
</Column>
