export const randomRoll = (min, max) => {
	return (Math.random() * (max - min) + min).toFixed(4);
};
