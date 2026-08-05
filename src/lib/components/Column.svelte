<script lang="ts">
	import type { Snippet } from 'svelte';

	interface IProps {
		children?: Snippet<[]>;
		_class?: string;
		_style?: string;
	}

	let { children, _class = 'gap-3', _style }: IProps = $props();
</script>

<div class="d-flex flex-column {_class}" style={_style}>
	{@render children?.()}
</div>
