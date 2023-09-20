export const load = async ({ fetch, cookies }) => {
	const score = cookies.get('score');
	return { data: score };
};
