<script setup lang="ts">
import component_post from "../components/component_post.vue";
import { users_info } from "./users_info";
</script>

<template>
	<div>
		<h2 class="share-title">Share Your Moments!</h2>
	</div>
	<div class="posts-container">
		<div class="post-element" v-for="(user, i) in users_info" :id="'post'+i" :key="'post'+i">
			<component_post :userinfo="user"/>
		</div>
	</div>
</template>

<style scoped>
.posts-container {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: center;
}

.post-element {
	max-width: 160px;
	min-width: 150px;
	flex: 0 0 40vw;
	padding: 5px 10px;
}
</style>