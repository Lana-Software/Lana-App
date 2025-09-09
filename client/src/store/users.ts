import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
	state: () => ({
		users: [
			{
				name: "john_doe",
				email: "jdtegoat@hipnet.es",
				profile_picture:
					"https://img.freepik.com/premium-photo/otter-suit-hyperrealistic-animal-portrait_1058532-1481.jpg",
			},
		],
	}),
	getters: {
		getUsers: (state) => {
			return state.users;
		},
	},
	actions: {
		async searchUsers(query: string) {
			const response = await fetch(`/api/${query}`);
			const data = await response.json();
			this.users = data;
		},
	},
});
