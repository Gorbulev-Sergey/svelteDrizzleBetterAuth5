<script lang="ts">
	import { enhance } from '$app/forms';
	import Block from '$lib/components/Block.svelte';
	import Column from '$lib/components/Column.svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
	let name = $state('');
	let loginSocial = $state({
		provider: '',
		callbackURL: '/'
	});
</script>

<Column>
	<Block>
		<p><b>Воити</b> (Зарегистрироваться) через логин и пароль:</p>
		<div class="d-flex flex-column gap-2">
			<form method="post" action="?/signInEmail" use:enhance>
				<div>
					<small>Email:</small>
					<input class="form-control form-control-sm" type="email" name="email" />
				</div>
				<div>
					<small>Пароль:</small>
					<input class="form-control form-control-sm" type="password" name="password" />
				</div>
				<hr />
				<div>
					<small>Имя (для регистрации):</small>
					<input class="form-control form-control-sm" name="name" bind:value={name} />
				</div>
			</form>
			<div>
				{#if name.trim() == ''}
					<button class="btn btn-sm btn-dark text-light">Войти</button>
				{:else}
					<button class="btn btn-sm btn-dark text-light" formaction="?/signUpEmail"
						>Зарегистрироваться</button
					>
				{/if}
			</div>
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
