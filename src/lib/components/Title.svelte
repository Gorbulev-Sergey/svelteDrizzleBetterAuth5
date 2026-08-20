<script lang="ts">
	interface IProps {
		title: null | string;
	}
	let { title = 'Заголовок' }: IProps = $props();
</script>

<div class="bg-info bg-opacity-25 text-dark px-2 py-1 rounded">
	<b class="text-uppercase">{title}</b>
</div>
