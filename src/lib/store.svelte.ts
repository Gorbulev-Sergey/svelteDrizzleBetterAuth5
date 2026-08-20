import type { Component, Snippet } from 'svelte';

interface IStore {
	message: string;
	snippet: null | Snippet<[]>;
}

export let STORE = $state<IStore>({
	message: 'ПУБЛИКАЦИИ',
	snippet: null
});
