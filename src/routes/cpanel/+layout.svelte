<script lang="ts">
	import Title from '$lib/components/Title.svelte';

	let height = '100dvh';
	let menuWidth = $state('auto');
	let title = Title;
</script>

<div class="d-flex" style="height:{height}">
	<div
		class="d-flex flex-column bg-secondary bg-opacity-10 gap-3 p-3"
		style="min-height:{height}; width:{menuWidth}"
	>
		<div class="d-flex align-items-center justify-content-between gap-2">
			<div class="text-uppercase text-nowrap">Панель <b>управления</b></div>
		</div>
		<div class="d-flex flex-column gap-1">
			{#each new Array(5) as _, i}
				<a
					class="btn btn-sm btn-light bg-light bg-opacity-50 border-0 text-dark w-100 text-start text-uppercase {i ==
					0
						? 'fw-bold'
						: ''}"
					href="/cpanel">Меню {i + 1}</a
				>
			{/each}
		</div>
	</div>
	<div class="flex-grow-1 d-flex flex-column" style="height:{height}">
		<div class="d-flex align-items-center gap-1 p-2 sticky-top">
			<button
				class="btn btn-sm btn-secondary bg-secondary bg-opacity-10 border-0 text-dark text-start px-2 py-1"
				title=""
				onclick={() => (menuWidth == 'auto' ? (menuWidth = '20%') : (menuWidth = 'auto'))}
			>
				{menuWidth == 'auto' ? '>' : '<'}
			</button>
			<div class="text-uppercase"><b>Подзаголовок</b></div>
		</div>
		<div class=" p-2" style="min-height: 200%;">Содержимое</div>
	</div>
</div>
