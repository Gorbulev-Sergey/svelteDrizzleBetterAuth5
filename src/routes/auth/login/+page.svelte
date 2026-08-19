<script lang="ts">
	import { enhance } from '$app/forms';
	import Block from '$lib/components/Block.svelte';
	import Column from '$lib/components/Column.svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
	let isLogin = $state(true);
	let loginSocial = $state({
		provider: '',
		callbackURL: '/'
	});
</script>

<Column>
	<Block>
		<div class="d-flex align-items-center justify-content-between">
			<p><b>{isLogin ? 'Воити' : 'Зарегистрироваться'}</b> через логин и пароль:</p>
			<div class="d-flex align-items-center">
				<button class="btn btn-sm bg-transparent text-dark border-0" style="cursor: text;">
					или
				</button>
				<button class="btn btn-sm bg-light text-dark" onclick={() => (isLogin = !isLogin)}>
					{!isLogin ? 'Воити' : 'Зарегистрироваться'}
				</button>
			</div>
		</div>

		<div class="d-flex flex-column gap-2">
			<form method="post" action="?/signInEmail" use:enhance>
				<div class="d-flex flex-column gap-2">
					{#if !isLogin}
						<div>
							<small>Имя:</small>
							<input class="form-control form-control-sm" name="name" />
						</div>
					{/if}
					<div class="d-flex gap-2">
						<div class="w-50">
							<small>Email:</small>
							<input class="form-control form-control-sm" type="email" name="email" />
						</div>
						<div class="w-50">
							<small>Пароль:</small>
							<input class="form-control form-control-sm" type="password" name="password" />
						</div>
						<input hidden name="redirectURL" value="/" />
					</div>
					<div>
						{#if isLogin}
							<button class="btn btn-sm btn-dark text-light">Войти</button>
						{:else}
							<button class="btn btn-sm btn-dark text-light" formaction="?/signUpEmail"
								>Зарегистрироваться</button
							>
						{/if}
					</div>
				</div>
			</form>
			{#if form?.message}
				<p style="color: red">{form?.message ?? ''}</p>
			{/if}
		</div>
	</Block>

	<Block _class="bg-info bg-opacity-10 p-3 rounded">
		<p><b>Воити</b> через соцсети и форму:</p>
		<form method="post" action="?/signInSocial" use:enhance>
			<input type="hidden" name="provider" bind:value={loginSocial.provider} />
			<input type="hidden" name="callbackURL" bind:value={loginSocial.callbackURL} />
			<button
				class="btn btn-sm btn-dark text-light"
				onclick={() => (loginSocial.provider = 'github')}>GitHub через форму</button
			>
			<button
				class="btn btn-sm btn-dark text-light"
				onclick={() => (loginSocial.provider = 'google')}>Google через форму</button
			>
		</form>
	</Block>
</Column>
