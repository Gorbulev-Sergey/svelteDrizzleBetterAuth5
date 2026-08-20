<script lang="ts">
	import type { TPost } from '$lib';

	interface IProps {
		posts: TPost[];
	}
	let { posts }: IProps = $props();
</script>

{#snippet sPost1(post: TPost)}
	<div class="col">
		<div class=" border-light border rounded h-100">
			<div
				class="rounded position-relative"
				style="background-image: url({post.cover}); min-height: 11.5em; background-size:cover; background-position: center; background-repeat: no-repeat"
			>
				<div class="sticky-top w-100 px-2 py-1 bg-light bg-opacity-75">
					<b>{post.title}</b>
					<div>{post.description}</div>
					{#if post.user?.name}
						<small>автор: <b>{post.user.name}</b></small>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/snippet}

{#snippet sPost2(post: TPost)}
	<div class="col">
		<div class=" rounded h-100">
			<div class="d-flex align-items-start justify-content-start px-1 py-1">
				<small class="text-secondary"
					>{new Date(post.createdAt?.toString())
						.toLocaleDateString('ru-Ru', {
							weekday: 'short',
							day: 'numeric',
							month: 'long',
							year: 'numeric'
						})
						.replace(' г.', '')}</small
				>
				{#if post.user?.name}
					<small class=" text-secondary">, {post.user.name}</small>
				{/if}
			</div>
			<div
				class="rounded position-relative"
				style="background-image: url({post.cover}); min-height: 11.5em; background-size:cover; background-position: center; background-repeat: no-repeat"
			></div>
			<div class="d-flex flex-column px-1 py-1">
				<b class="text-uppercase">{post.title}</b>
				<small class="text-secondary" style="margin-top: -.2em;">{post.description}</small>
			</div>
			<div class="d-flex px-1 py-1" style="margin-top: -.2em;">
				<button
					class="btn btn-sm btn-light bg-secondary bg-opacity-10 border-0"
					style="padding: .25em .5em;">Подробнее...</button
				>
			</div>
		</div>
	</div>
{/snippet}

{#if posts.length > 0}
	<h4 class="px-1 mb-1">Публикации</h4>
	<div class="row w-100 row-cols-1 row-cols-xl-4 gx-2 gy-4">
		{#each posts as post}
			{@render sPost2?.(post)}
		{/each}
	</div>
{/if}
