export const slashRemover = str => {
	const slash = str.indexOf("/");
	const length = str.length;
	const output = str.slice(0, slash) + str.slice(slash + 1, length);
	return output;
};
