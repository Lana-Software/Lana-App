import {
	formatNumber,
	getRandomBetween,
	getRandomColor,
	getRandomLetters,
} from "./utilities";

let imgid = 0;

export const postsPlaceholders: Array = [
	{
		user_profile: `https://api.dicebear.com/9.x/notionists/webp?scale=130&gestureProbability=50&backgroundType=gradientLinear,solid&backgroundColor=${getRandomColor()},${getRandomColor()}&seed=${getRandomLetters(9)}`,
		recent_post: {
			likes: formatNumber(getRandomBetween(100, 2000)),
			comments: getRandomBetween(100, 500),
			image: `https://picsum.photos/200/300?random=${imgid++}.webp`,
		},
	},
	{
		user_profile: `https://api.dicebear.com/9.x/notionists/webp?scale=130&gestureProbability=50&backgroundType=gradientLinear,solid&backgroundColor=${getRandomColor()},${getRandomColor()}&seed=${getRandomLetters(9)}`,
		recent_post: {
			likes: formatNumber(getRandomBetween(100, 2000)),
			comments: getRandomBetween(100, 500),
			image: `https://picsum.photos/200/300?random=${imgid++}.webp`,
		},
	},
	{
		user_profile: `https://api.dicebear.com/9.x/initials/webp?seed=${getRandomLetters(2)}`,
		recent_post: {
			likes: formatNumber(getRandomBetween(100, 2000)),
			comments: getRandomBetween(100, 500),
			image: `https://picsum.photos/200/300?random=${imgid++}.webp`,
		},
	},
	{
		user_profile: `https://api.dicebear.com/9.x/initials/webp?seed=${getRandomLetters(2)}`,
		recent_post: {
			likes: formatNumber(getRandomBetween(100, 2000)),
			comments: getRandomBetween(100, 500),
			image: `https://picsum.photos/200/300?random=${imgid++}.webp`,
		},
	},
	{
		user_profile: `https://api.dicebear.com/9.x/notionists/webp?scale=130&gestureProbability=50&backgroundType=gradientLinear,solid&backgroundColor=${getRandomColor()},${getRandomColor()}&seed=${getRandomLetters(9)}`,
		recent_post: {
			likes: formatNumber(getRandomBetween(100, 2000)),
			comments: getRandomBetween(100, 500),
			image: `https://picsum.photos/200/300?random=${imgid++}.webp`,
		},
	},
	{
		user_profile: `https://api.dicebear.com/9.x/notionists/webp?scale=130&gestureProbability=50&backgroundType=gradientLinear,solid&backgroundColor=${getRandomColor()},${getRandomColor()}&seed=${getRandomLetters(9)}`,
		recent_post: {
			likes: formatNumber(getRandomBetween(100, 2000)),
			comments: getRandomBetween(100, 500),
			image: `https://picsum.photos/200/300?random=${imgid++}.webp`,
		},
	},
];
