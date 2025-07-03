<script>
	export let data;
</script>

{#if data.age}
	<p>{data.name} tem cerca de <strong>{data.age}</strong> anos.</p>
{/if}

<style>
	p {
		margin-top: 2rem;
		font-size: 1rem;
		text-align: center;
		color: #161616;
	}

	strong {
		color: #998b2c;
	}

	@media (max-width: 768px) {
		p {
			font-size: 0.9rem;
		}
	}
</style>
