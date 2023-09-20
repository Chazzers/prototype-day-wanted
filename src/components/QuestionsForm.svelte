<script>
	import { onMount } from 'svelte';

	export let questions;
	let questionCounter = 0;
	const show = (event) => {
		event.preventDefault();
		questionCounter++;
	};
</script>

<form action="/questions" method="post">
	<h1>FIND OUT YOUR <br />IMPACT ON THE FOREST</h1>
	<div>
		{#each questions as question, index}
			<section class={questionCounter === index ? 'show' : ''}>
				<h2>{question.question}</h2>
				<div>
					{#each question.options as option}
						<label>
							{option.value}
							<input name={question.questionUnderscore} type="radio" value={option.score} />
						</label>
					{/each}
				</div>
				<button
					class={questionCounter < questions.length - 1 ? 'show' : ''}
					type="button"
					on:click={show}
				>
					Next question
				</button>
				<button class={questionCounter === questions.length - 1 ? 'show' : ''} type="submit"
					>Submit</button
				>
			</section>
		{/each}
	</div>
</form>

<style>
	form h1 {
		text-align: center;
	}
	form {
		padding: 2rem;
	}
	.show {
		display: block;
	}
	form > div > section {
		display: none;
		border: 2px solid black;
		transform: translate(-10px, -10px);
		background-color: #f1eee9;
		padding: 1rem;
	}
	form > div {
		border: 2px solid black;
	}

	form > div > section > button {
		display: none;
		margin-top: 2rem;
		border: solid 2px black;
		padding: 1rem;
		font-size: 1em;
		background-color: #f1eee9;
	}
	form input[type='radio'] {
		display: none;
	}
	form label {
		padding: 2rem;
		border: solid 2px black;
		flex: calc(50% - 4rem);
	}
	form label:nth-of-type(even) {
		margin-left: 1rem;
	}
	form label:nth-of-type(odd) {
		margin-right: 1rem;
	}
	form label:nth-of-type(1),
	form label:nth-of-type(2) {
		margin-bottom: 2rem;
	}
	form label:has(input:checked) {
		background-color: black;
		color: white;
	}
	form > div > section > div {
		display: flex;
		flex-wrap: wrap;
	}
</style>
