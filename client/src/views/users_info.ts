import {
	formatNumber,
	getRandomBetween,
	getRandomColor,
	getRandomLetters,
} from "../ts/utilities";
import type { user } from "./user";

let imgid = 0;

export const users_info: Array<user> = [
	{
		user_id: 100199001,
		user_profile: `https://api.dicebear.com/9.x/notionists/webp?scale=130&gestureProbability=50&backgroundType=gradientLinear,solid&backgroundColor=${getRandomColor()},${getRandomColor()}&seed=${getRandomLetters(9)}`,
		recent_post: {
			likes: formatNumber(getRandomBetween(100, 2000)),
			comments: getRandomBetween(100, 500),
			image: `https://picsum.photos/200/300?random=${imgid++}.webp`,
		},
	},
	{
		user_id: 100199002,
		user_profile: `https://api.dicebear.com/9.x/notionists/webp?scale=130&gestureProbability=50&backgroundType=gradientLinear,solid&backgroundColor=${getRandomColor()},${getRandomColor()}&seed=${getRandomLetters(9)}`,
		recent_post: {
			likes: formatNumber(getRandomBetween(100, 2000)),
			comments: getRandomBetween(100, 500),
			image: `https://picsum.photos/200/300?random=${imgid++}.webp`,
		},
	},
	{
		user_id: 100199003,
		user_profile: `https://api.dicebear.com/9.x/initials/webp?seed=${getRandomLetters(2)}`,
		recent_post: {
			likes: formatNumber(getRandomBetween(100, 2000)),
			comments: getRandomBetween(100, 500),
			image: `https://picsum.photos/200/300?random=${imgid++}.webp`,
		},
	},
	{
		user_id: 100199004,
		user_profile: `https://api.dicebear.com/9.x/initials/webp?seed=${getRandomLetters(2)}`,
		recent_post: {
			likes: formatNumber(getRandomBetween(100, 2000)),
			comments: getRandomBetween(100, 500),
			image: `https://picsum.photos/200/300?random=${imgid++}.webp`,
		},
	},
	{
		user_id: 100199005,
		user_profile: `https://api.dicebear.com/9.x/notionists/webp?scale=130&gestureProbability=50&backgroundType=gradientLinear,solid&backgroundColor=${getRandomColor()},${getRandomColor()}&seed=${getRandomLetters(9)}`,
		recent_post: {
			likes: formatNumber(getRandomBetween(100, 2000)),
			comments: getRandomBetween(100, 500),
			image: `https://picsum.photos/200/300?random=${imgid++}.webp`,
		},
	},
	{
		user_id: 100199006,
		user_profile: `https://api.dicebear.com/9.x/notionists/webp?scale=130&gestureProbability=50&backgroundType=gradientLinear,solid&backgroundColor=${getRandomColor()},${getRandomColor()}&seed=${getRandomLetters(9)}`,
		recent_post: {
			likes: formatNumber(getRandomBetween(100, 2000)),
			comments: getRandomBetween(100, 500),
			image: `https://picsum.photos/200/300?random=${imgid++}.webp`,
		},
	},
];
