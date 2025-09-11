import { defineStore } from "pinia";
import {
	formatNumber,
	getRandomBetween,
	getRandomColor,
	getRandomLetters,
} from "../ts/utilities";
import type { Post } from "./post";

const imgid = 0;

export const useSearchEngineStore = defineStore("searchEngine", {
	state: () => ({
		results: {
			users: [] as User[],
			posts: [] as Post[],
		},
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
			console.log("Buscando...");
			const response = await fetch(`/api/${query}`);
			const data = await response.json();
			this.results.users = data; // TODO: make response be an object including both users and posts and assign that to state.results -> `this.results = data` where `data == { users: ..., posts: ... }`
		},
	},
});
