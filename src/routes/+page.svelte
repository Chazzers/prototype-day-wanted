<script>
	export let data;
	let score;
	if (data) {
		score = data.data;
	}

	let show = 0;
	const climateCriminals = [
		{
			img: '/images/trump.gif',
			kills: '1 Billion',
			name: 'Donald Trump'
		},
		{
			img: '/images/aureljia.gif',
			kills: '22',
			name: 'Aurelija Mockevičiūtė'
		},
		{
			img: '/images/geert-wilders.gif',
			kills: '500k',
			name: 'Geert Wilders'
		},
		{
			img: '/images/bas.gif',
			kills: '300',
			name: 'Bas van der Burgh'
		},
		{
			img: '/images/julka.gif',
			kills: '1',
			name: 'Julia Hendriks'
		},
		{
			img: '/images/joost.gif',
			kills: '300',
			name: 'Joost Mommers'
		},
		{
			img: 'images/james.gif',
			kills: '55',
			name: 'James Farrely'
		}
	];
	$: currentCriminal = undefined;
</script>

<section>
	<h1>CLIMATE CRIMINALS ON THE LOOSE CAUSE 100,000 HECTARES OF DEFORESTATION</h1>
	<div class="criminal-container">
		{#each climateCriminals as criminal, index}
			<div class="criminal">
				<div class="img-container">
					<img src={criminal.img} alt="" />
				</div>
				<p>{criminal.name}</p>
				<div class="criminal-content">
					<p>Killed {criminal.kills}</p>
					<img class="tree" src="/images/tree.png" alt="" />
				</div>
				<button
					value={index}
					on:click={(event) => {
						show = event.target.value;
						currentCriminal = criminal;
					}}>View</button
				>
			</div>
		{/each}
	</div>
	{#if score}
		<h2>Your score is: {score}</h2>
	{/if}
</section>
{#if currentCriminal}
	<div class="highlighted-criminal">
		<div class="criminal">
			<div class="img-container">
				<img src={currentCriminal.img} alt="" />
			</div>
			<div class="criminal-content">
				<div>
					<p>{currentCriminal.name} is killing {currentCriminal.kills} Trees</p>
				</div>
			</div>
			<button
				on:click={() => {
					currentCriminal = undefined;
				}}>close</button
			>
		</div>
	</div>
{/if}

<style>
	section {
		padding: 5rem;
	}
	section > div {
	}

	.criminal > p {
		text-align: center;
		font-size: 28px;
		font-family: 'cheltenham';
		margin: 0;
	}
	section .criminal-container {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.criminal {
		width: calc(20vw - 4rem);
		padding: 1rem;
		border: solid 2px black;
		margin: 1rem;
		height: 100%;
		min-height: 450px;
	}
	.criminal-container > .criminal > .img-container > img {
		width: 100%;
		height: 100%;
	}
	.criminal-container > .criminal > .img-container {
		width: 100%;
		height: 100%;
	}

	.criminal-content {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.criminal-content div {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.criminal-content > div img {
		height: 28px;
		width: 28px;
	}
	.criminal-content > div > p {
		margin-right: 2rem;
	}

	.highlighted-criminal p {
		font-size: 3rem;
	}
	.criminal-content > p {
		margin-right: 8px;
	}
	.tree {
		width: 15px;
		height: 15px;
	}
	.highlighted-criminal {
		position: fixed;
		width: 40vw;
		height: 95vh;
		padding: 1rem;
		left: 30vw;
		top: 2.5vh;
		background-color: #f1eee9;
		border: solid black 2px;
	}
	.highlighted-criminal .criminal {
		border: none;
	}
	.highlighted-criminal p {
		margin: 16px 0;
	}
	.highlighted-criminal > .criminal > .img-container > img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	.highlighted-criminal > .criminal > .img-container {
		width: 100%;
		height: 60vh;
	}
	.highlighted-criminal > .criminal {
		width: 100%;
		height: 100%;
	}

	.highlighted-criminal .criminal-content {
		font-size: 3em;
	}
	button {
		border: none;
		background-color: transparent;
		text-align: center;
		padding: 0;
		font-size: 16px;
		display: block;
		width: 100%;
	}
</style>
