<script>
	import { debounce } from '$lib/utils/debounce';
	import { onDestroy } from 'svelte';

	export let data;

	let name = data.name ?? '';
	let timeout;

	$: if (name !== data.name) {
		timeout = debounce(name, timeout);
	}

	onDestroy(() => clearTimeout(timeout));
</script>

<div>
	<input
		aria-label="Nome"
		type="text"
		placeholder="Insira seu nome..."
		bind:value={name}
		autocomplete="off"
	/>
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 3rem;
	}

	input {
		width: 80%;
		padding: 0.6rem 1rem;
		border: 1px solid #e4e4e4;
		border-radius: 8rem;
	}
</style>
