<script lang="ts">
	let height = '100dvh';
	let menuWidth = $state('auto');
	let { children } = $props();
</script>

<div class="d-flex" style="height:{height}">
	<div
		class="d-flex flex-column bg-secondary bg-opacity-10 gap-3 p-2"
		style="min-height:{height}; width:{menuWidth}"
	>
		<div class="d-flex align-items-center justify-content-between gap-2">
			<a
				class="btn btn-secondary bg-transparent text-dark border-0 text-uppercase text-nowrap"
				href="/cpanel">Панель <b>управления</b></a
			>
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
		<div class="d-flex align-items-center gap-1 p-2 bg-ligth">
			<button
				class="btn btn-sm btn-secondary bg-secondary bg-opacity-10 border-0 text-dark text-start px-2 py-1"
				title=""
				onclick={() => (menuWidth == 'auto' ? (menuWidth = '20%') : (menuWidth = 'auto'))}
			>
				{menuWidth == 'auto' ? '>' : '<'}
			</button>
			<div class="d-flex align-items-center gap-3 w-100">
				<div class="btn btn-light bg-transparent border-0 text-dark text-uppercase">
					<b>Публикации</b>
				</div>
				<div class="flex-grow-1 d-flex align-items-center justify-content-end">
					<a
						class="btn btn-sm btn-secondary bg-secondary bg-opacity-10 border-0 text-dark text-start"
						title=""
						href="/"
					>
						Вернуться на сайт
					</a>
				</div>
			</div>
		</div>
		<!-- <div class="px-3" style="min-height: 200%;">Содержимое</div> -->
		{@render children?.()}
	</div>
</div>
