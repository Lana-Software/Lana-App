export function getRandomLetters(length: number) {
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	const characterslength = characters.length;
	let result = "";

	for (let i = 0; i < length; i++) {
		result += characters[Math.floor(Math.random() * characterslength)];
	}

	return result;
}

export function getRandomBetween(min: number, max: number) {
	return Math.floor(Math.random() * (max - min) + min);
}

export function formatNumber(num: number): string {
	if (num >= 1_000) return `${(num / 1_000).toFixed(1).replace(/\.0$/, "")}k`;
	return num.toString();
}

export function getRandomColor() {
	const letters = "56789ABCDEF";
	let color = "";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 11)];
	}
	return color;
}
