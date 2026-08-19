<script lang="ts">
	let height = '100dvh';
	let menuWidth = $state('auto');
</script>

<div class="d-flex" style="height:{height}">
	<div
		class="d-flex flex-column gap-3 bg-warning bg-opacity-25 p-2"
		style="min-height:{height}; width:{menuWidth}"
	>
		<div class="d-flex align-items-center justify-content-between gap-2">
			<button
				class="btn btn-sm btn-light text-dark text-start px-1 py-0"
				title=""
				onclick={() => (menuWidth == 'auto' ? (menuWidth = '20%') : (menuWidth = 'auto'))}
			>
				{menuWidth == 'auto' ? '>' : '<'}
			</button>
			<div class="text-uppercase text-nowrap"><b>Главное</b> меню</div>
		</div>
		<div class="d-flex flex-column gap-1">
			{#each new Array(5) as _, i}
				<a class="btn btn-sm btn-light text-dark w-100 text-end" href="/cpanel">Меню {i + 1}</a>
			{/each}
		</div>
	</div>
	<div class="flex-grow-1 d-flex flex-column" style="height:{height}">
		<div class="d-flex bg-primary bg-opacity-25 p-2 sticky-top">
			<div class="text-uppercase"><b>Подзаголовок</b></div>
		</div>
		<div class="bg-success bg-opacity-25 p-2" style="min-height: 200%;">Содержимое</div>
	</div>
</div>
