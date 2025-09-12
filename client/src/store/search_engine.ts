import { defineStore } from "pinia";
import type { Post } from "../types/post";
import type { User } from "../types/user";

export const useSearchEngineStore = defineStore("searchEngine", {
	state: () => ({
		results: {
			users: [] as User[],
			posts: [] as Post[],
		},
		previousQuery: "",
		success: false,
	}),
	getters: {
		getUsers: (state) => {
			return state.results.users;
		},
		getPosts: (state) => {
			return state.results.posts;
		},
	},
	actions: {
		async search(query: string) {
			try {
				const response = await fetch(`/api/${query}`);
				const data = await response.json();

				this.results = data;
			} catch (error) {
				console.log(`Error en la busqueda: ${error}`);
			}
			this.previousQuery = query;
			this.success = true;
		},
	},
});
