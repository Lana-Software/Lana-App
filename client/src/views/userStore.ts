import { defineStore } from "pinia";
import { users_info } from "./users_info"; // users array

export const useUserStore = defineStore("user", {
	state: () => {
		return {
			userarray: users_info,
		};
	},
	actions: {
		getuser() {
			return this.userarray;
		},

		getUserRecentPost() {
			const user = this.userarray[0];
			const recentpost = user.recent_post;
			return recentpost;
		},

		getUserRecentPostLikes() {
			const recen = this.getUserRecentPost();
			return recen?.likes;
		},

		getUserRecentPostComments() {
			const recen = this.getUserRecentPost();
			return recen?.comments;
		},

		getUserPfp() {
			const recen = this.getUserRecentPost();
			return recen?.image.toString();
		},
	},
});
