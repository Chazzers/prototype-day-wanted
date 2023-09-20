<script>
	import QuestionsForm from '../../components/QuestionsForm.svelte';
	const questions = [
		{
			question: 'How many times a week do you eat meat?',
			questionUnderscore: 'eat_meat',
			options: [
				{ value: 'A: None', score: 5 },
				{ value: 'B: Once', score: 3 },
				{ value: 'C: Twice', score: 1 },
				{ value: 'D: More', score: 0 }
			]
		},
		{
			question: 'How many sweaters do you buy each year?',
			questionUnderscore: 'sweaters_bought',
			options: [
				{ value: 'A: I only buy second hand', score: 5 },
				{ value: 'B: 0-10', score: 3 },
				{ value: 'C: 20-30', score: 1 },
				{ value: 'D: >50', score: 0 }
			]
		},
		{
			question: 'How many cups of coffee do you drink in a week?',
			questionUnderscore: 'coffee_drunk',
			options: [
				{ value: 'A: Only certified sourced beans', score: 5 },
				{ value: 'B: 0-10', score: 3 },
				{ value: 'C: 20-30', score: 1 },
				{ value: 'D: >50', score: 0 }
			]
		}
	];
</script>

<div>
	<QuestionsForm {questions} />
</div>

<style>
	div {
		padding: 3rem;
	}
</style>
