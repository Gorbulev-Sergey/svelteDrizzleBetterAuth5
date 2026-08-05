<script lang="ts">
	import type { TPost } from '$lib';

	interface IProps {
		posts: TPost[];
	}
	let { posts }: IProps = $props();
</script>

{#if posts.length > 0}
	<h4 class="px-1 mb-1">Публикации</h4>
	<div class="row w-100 row-cols-1 row-cols-xl-4 g-2">
		{#each posts as post}
			<div class="col">
				<div class=" border-light border rounded h-100">
					<div
						class="rounded position-relative"
						style="background-image: url({post.cover}); min-height: 11.5em; background-size:cover; background-position: center; background-repeat: no-repeat"
					>
						<div class="sticky-top w-100 px-2 py-1 bg-light bg-opacity-75">
							<b>{post.title}</b>
							<div>{post.description}</div>
							<small><b>{post.userId}</b></small>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
{/if}
