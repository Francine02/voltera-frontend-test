<script>
	import Input from '$lib/components/Input.svelte';
	import Result from '$lib/components/Result.svelte';
	import Title from '$lib/components/Title.svelte';

	export let data;
</script>

<main>
	<div>
		<Title />

		<Input {data} />
		<Result {data} />
	</div>
</main>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		border: 0;
		vertical-align: baseline;
		font-family: monospace;
	}
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #f3f2f2;
		height: 100vh;
		text-align: start;
	}

	div {
		max-width: 37rem;
	}

	@media (max-width: 768px) {
		div {
			max-width: 25rem;
		}
	}
</style>
