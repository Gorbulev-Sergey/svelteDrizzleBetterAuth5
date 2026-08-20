<script lang="ts">
	import { resolve } from '$app/paths';
	import favicon from '$lib/assets/favicon.svg';
	import { STORE } from '$lib/store.svelte.js';

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Drizzle BetterAuth проект</title>
</svelte:head>

<div class="sticky-top w-100 bg-light">
	<div class="d-flex align-items-center px-lg-3 py-2">
		<a class="btn btn-light bg-light text-dark border-0 text-uppercase" href="/">
			<b>Drizzle BetterAuth</b> проект
		</a>
		<div class="flex-grow-1 d-flex align-items-center justify-content-end gap-2">
			<svelte:component this={STORE.subtitle} />
			{#if STORE.snippet}
				{@render STORE.snippet()}
			{/if}
			{#if data.user?.role != 'admin'}
				<a class="btn btn-sm btn-light text-dark" href={resolve('/auth')}>Войти</a>
			{:else}
				<a class="btn btn-sm btn-light text-dark border-0" href={resolve('/cpanel')}>
					Панель управления
				</a>
			{/if}
		</div>
	</div>
</div>

<div class="container my-3">
	{@render children()}
</div>
