<script lang="ts">
	import { resolve } from '$app/paths';
	let { children } = $props();
</script>

<div class="sticky-top w-100 bg-light">
	<div class="d-flex align-items-center px-lg-3 py-2">
		<a class="btn btn-light bg-light text-dark border-0 text-uppercase" href="/">
			<b>Drizzle BetterAuth</b> проект
		</a>
		<div class="flex-grow-1 d-flex align-items-center justify-content-end gap-2">
			<a class="btn btn-sm btn-light text-dark" href={resolve('/auth')}>Auth</a>
		</div>
	</div>
</div>

<div class="container my-3">
	{@render children()}
</div>
