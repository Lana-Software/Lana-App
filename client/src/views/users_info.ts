import { getRandomColor, getRandomInt, getRandomStr } from "../ts/utilities";
import type { user } from "./user";

export const users_info: Array<user> = (() => {
	const b: Array<user> = [];
	for (let index = 0; index < 6; index++) {
		const newUser: user = {
			user_id: 100199001 + index,
			user_profile: `https://api.dicebear.com/7.x/notionists/svg?scale=150&backgroundType=gradientLinear,solid&backgroundColor=${getRandomColor()},${getRandomColor()}&seed=${getRandomStr(9)}`,
			recent_post: {
				likes: getRandomInt(999),
				comments: getRandomInt(499.5),
				image: `https://picsum.photos/200/300?random=${index}.webp`,
			},
		};
		b.push(newUser);
	}
	return b;
})();
