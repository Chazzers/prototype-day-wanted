import { redirect } from '@sveltejs/kit';
export const actions = {
	default: async ({ request, cookies, response }) => {
		const data = await request.formData();
		const questionsObject = {};
		for (const key of data.keys()) {
			questionsObject[key] = Number(data.get(key));
		}
		const questionValues = Object.values(questionsObject);
		const score = calcScore(questionValues);
		cookies.set('score', score);
		throw redirect(303, '/');
	}
};
function calcScore(scores) {
	const sumScores = scores.reduce((a, b) => a + b, 0);
	const maxScore = scores.length * 5;
	return (sumScores / maxScore) * 100;
}
