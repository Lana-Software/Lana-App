// Router import
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/home_view.vue";
import Search from "./views/search_view.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/search",
		name: "Search",
		component: Search,
	},
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
