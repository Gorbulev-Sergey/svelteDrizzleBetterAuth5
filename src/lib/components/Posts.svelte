<script lang="ts">
	import type { TPost } from '$lib';

	interface IProps {
		title?: string;
		columns?: number;
		gap?: number;
		posts: TPost[];
	}
	let { title, gap = 4, columns = 4, posts }: IProps = $props();
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
		<div class="rounded h-100">
			<div class="d-flex align-items-center px-1 py-1 position-relative">
				<div class="d-flex align-items-center">
					<small class="text-secondary"
						>{new Date(post.createdAt ?? '')
							.toLocaleDateString('ru-Ru', {
								weekday: 'short',
								day: 'numeric',
								month: 'long',
								year: 'numeric'
							})
							.replace(' г.', '')}</small
					>
					{#if post.user?.name}
						<small class=" text-secondary">, <i>{post.user.name}</i></small>
					{/if}
				</div>

				<div class="d-flex text-nowrap">
					{#each new Array(3) as _, i}
						<button
							class="btn btn-sm btn-light bg-light text-secondary py-0 position-absolute border-secondary border-opacity-10"
							style="right: {i / 5}em; top:.25em; bottom:.25em"
						>
							Тег {i + 1}
						</button>
					{/each}
				</div>
			</div>
			{#if post.cover}
				<div
					class="rounded position-relative pb-1"
					style="background-image: url({post.cover}); min-height: 11.5em; background-size:cover; background-position: center; background-repeat: no-repeat"
				></div>
			{/if}
			<div class="d-flex flex-column px-1">
				<b class="text-uppercase">{post.title}</b>
				<small class="text-secondary" style="margin-top: -.15em;">{post.description}</small>
			</div>
			<div class="d-flex align-items-center gap-1 px-1 py-1" style="margin-top: -.05em;">
				<button
					class="btn btn-sm btn-light bg-secondary bg-opacity-10 border-0"
					style="padding: .25em .5em;">Подробнее...</button
				>
			</div>
		</div>
	</div>
{/snippet}

{#if posts.length > 0}
	{#if title != undefined}
		<h4 class="px-1 mb-0" style="font-size: 1.5em;">{title}</h4>
	{/if}
	<div class="row w-100 row-cols-1 row-cols-xl-{columns} gx-2 gy-{gap}">
		{#each posts as post}
			{@render sPost2?.(post)}
		{/each}
	</div>
{/if}
