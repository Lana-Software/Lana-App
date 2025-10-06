<script setup lang="ts">
import { useRoute } from "vue-router";
import component_post from "../components/component_post.vue";
import { SearchStatus, useSearchEngineStore } from "../store/search_engine";

const router = useRoute();
const searchEngineStore = useSearchEngineStore();

// Perform search every time this component is loaded unless the search is already being done
if (searchEngineStore.status === SearchStatus.IDLE) {
	searchEngineStore.search(router.query);
}
</script>

<template>
	<div class="content">
		<div>
			<h2 class="title">{{ searchEngineStore.status === SearchStatus.RUNNING ? 'Searching...' : 'Search results' }}</h2>
		</div>
		<div class="users-results-container">
			<div class="result-container" v-for="(user, i) in searchEngineStore.getUsers" :key="'user_' + i">
				<div class="result">
					<div class="crop">
						<img :src="user.profilePicture" alt="">
					</div>
					<div class="username">@{{ user.userName }}</div>
				</div>
			</div>
		</div>
		<div class="posts-results-container">
			<div class="result-container" v-for="(post, i) in searchEngineStore.getPosts" :key="'post_' + i">
				<component_post :userinfo="post"/> <!-- TODO: refactor component_post so that it receives and handles the a Post object and so that it can have different appeareance based on the truthness of a `placeholder` prop -->
			</div>
		</div>
	</div>
</template>

<style scoped>
.content {
  padding: 19px;
}

.users-results-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  justify-content: center;
}

.result-container {
	display: flex;
	justify-content: center;
}

.result {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  height: 225px;
  background-color: var(--alter-color-two);
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 24px;
  padding: 10px;
  box-sizing: border-box;
}

.result>.crop {
  width: 100%;
  height: 85%;
}

.result>.crop>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 24px;
}

.result>.username {
  display: flex;
  font-size: 15px;
  color: var(--secondary-color);
  width: 100%;
  height: 15%;
  word-wrap: break-word;
  justify-content: center;
  align-items: end;
}
</style>