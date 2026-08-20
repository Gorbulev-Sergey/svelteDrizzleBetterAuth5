<script lang="ts">
	let height = '100dvh';
	let menuWidth = $state('auto');
	let { children, data } = $props();
</script>

<div class="d-flex" style="height:{height}">
	<div
		class="d-flex flex-column bg-secondary bg-opacity-10 gap-3 p-2"
		style="min-height:{height}; width:{menuWidth}"
	>
		<div class="d-flex align-items-center justify-content-between gap-2">
			<a
				class="btn btn-secondary bg-transparent text-dark border-0 text-uppercase text-nowrap px-2"
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
	<div class="flex-grow-1 d-flex flex-column" style="height:{height}; width:{menuWidth}">
		<div class="d-flex align-items-center gap-0 py-2 px-2 bg-ligth">
			<button
				class="btn btn-sm btn-secondary bg-secondary bg-opacity-10 border-0 text-dark text-start px-2 py-1"
				title=""
				onclick={() => (menuWidth == 'auto' ? (menuWidth = '20%') : (menuWidth = 'auto'))}
			>
				{menuWidth == 'auto' ? '>' : '<'}
			</button>
			<div class="d-flex align-items-center px-1 gap-1 w-100">
				<div class="btn btn-light bg-transparent border-0 text-dark text-uppercase px-1">
					<b>Публикации</b>
				</div>
				<div class="flex-grow-1 d-flex align-items-center justify-content-end gap-1">
					<a
						class="btn btn-sm btn-secondary bg-secondary bg-opacity-10 border-0 text-dark"
						href="/auth"
					>
						<b title={data.user?.name}
							>{data.user?.name
								?.split(' ')
								.map((v) => v[0])
								.join('')}
						</b>
					</a>
					<a
						class="btn btn-sm btn-secondary bg-secondary bg-opacity-10 border-0 text-dark"
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
