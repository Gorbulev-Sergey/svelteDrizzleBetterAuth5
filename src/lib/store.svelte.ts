import type { Snippet } from 'svelte';

interface IStore {
	message: string;
	snippet: null | Snippet<[]>;
}

export let STORE = $state<IStore>({
	message: 'Как дела',
	snippet: null
});
