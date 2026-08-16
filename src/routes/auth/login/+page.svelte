<script lang="ts">
	import { enhance } from '$app/forms';
	import Block from '$lib/components/Block.svelte';
	import Column from '$lib/components/Column.svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
	let loginSocial = $state({
		provider: '',
		callbackURL: '/'
	});
</script>

<Column>
	<Block>
		<h4>Login</h4>
		<form method="post" action="?/signInEmail" use:enhance>
			<label>
				Email
				<input type="email" name="email" />
			</label>
			<label>
				Password
				<input type="password" name="password" />
			</label>
			<label>
				Name (for registration)
				<input name="name" />
			</label>
			<button>Login</button>
			<button formaction="?/signUpEmail">Register</button>
		</form>
		<p style="color: red">{form?.message ?? ''}</p>
	</Block>

	<Block>
		<p>Воити через api:</p>
		<button
			class="btn btn-sm btn-dark text-light"
			onclick={async () => {
				await fetch('/api/auth1/signInSocial', {
					method: 'POST',
					headers: {
						'content-type': 'application/json'
					},
					body: JSON.stringify({ provider: 'google', callbackURL: '/' })
				}).then(async (r) => {
					if (r.ok) {
						const data = await r.json();
						if (data.redirectUrl) {
							window.location.href = data.redirectUrl;
							return;
						}
					}
				});
			}}>Google через api</button
		>
	</Block>

	<Block _class="bg-info bg-opacity-10 p-3 rounded">
		<p>Воити через форму:</p>
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
