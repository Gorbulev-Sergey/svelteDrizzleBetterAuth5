<script lang="ts">
	import type { Snippet } from 'svelte';

	interface IProps {
		children?: Snippet<[]>;
		_class?: string;
		_style?: string;
	}

	let { children, _class = 'p-3 rounded bg-white text-dark', _style }: IProps = $props();
</script>

<div class={_class} style={_style}>
	{@render children?.()}
</div>
