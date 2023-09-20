<script>
	export let data;
	let score;
	if (data) {
		score = data.data;
	}
	const climateCriminals = [
		{
			img: '/images/claudia.png'
		}
	];
</script>

<section>
	<h1>CLIMATE CRIMINALS ON THE LOOSE CAUSE 100,000 HECTARES OF DEFORESTATION</h1>
	<div class="criminal-container">
		{#each climateCriminals as criminal}
			<div class="criminal">
				<img src={criminal.img} alt="" />
			</div>
		{/each}
	</div>

	{#if score}
		<h2>Your score is: {score}</h2>
	{/if}
</section>

<style>
	section {
		padding: 5rem;
	}
	section > div {
	}
</style>
