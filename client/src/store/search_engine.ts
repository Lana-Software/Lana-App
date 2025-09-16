import { defineStore } from "pinia";
import type { Post } from "../types/post";
import type { User } from "../types/user";

export enum SearchStatus {
	IDLE = 0,
	RUNNING = 1,
}

export const useSearchEngineStore = defineStore("searchEngine", {
	state: () => ({
		results: {
			users: [] as User[],
			posts: [] as Post[],
		},
		status: SearchStatus.IDLE,
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
				this.status = SearchStatus.RUNNING;

				const response = await fetch(`/api/${query}`);
				const data = await response.json();

				this.results = data;
			} catch (error) {
				console.log(`Error en la busqueda: ${error}`);
			}
			this.status = SearchStatus.IDLE;
		},
	},
});
