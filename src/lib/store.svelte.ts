import type { Component, Snippet } from 'svelte';
import Title from './components/Title.svelte';

interface IProps {
	title: null | string;
}

interface IStore {
	message: string;
	snippet: null | Snippet<[]>;
	subtitle: Component<IProps, {}, ''>;
}

export let STORE = $state<IStore>({
	message: 'Как дела',
	snippet: null,
	subtitle: Title
});
