<script lang="ts">
	import { enhance } from '$app/forms';
	import Block from '$lib/components/Block.svelte';
	import Column from '$lib/components/Column.svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
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
		<form method="post" action="?/signInSocial" use:enhance>
			<input type="hidden" name="provider" value="github" />
			<input type="hidden" name="callbackURL" value="/auth" />
			<button>Sign in with GitHub</button>
		</form>

		<form method="post" action="?/signInSocial" use:enhance>
			<input type="hidden" name="provider" value="google" />
			<input type="hidden" name="callbackURL" value="/auth" />
			<button>Sign in with Google</button>
		</form>
	</Block>
</Column>
