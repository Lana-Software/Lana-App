<script setup lang="ts">
import component_post from "../components/component_post.vue";
import { users_info } from "./users_info";
</script>

<template>
	<div class="content">
		<h2 id="share-title">Share Your Moments!</h2>
		<div class="posts-container">
			<div class="post-element" v-for="(user, i) in users_info" :id="'post'+i" :key="'post'+i">
				<component_post :userinfo="user"/>
			</div>
		</div>
	</div>
</template>

<style scoped>
.content {
  padding: 15px;
}

#share-title {
    padding: 0 0 15px;
    text-align: center;
    color: var(--secondary-color);
}

.posts-container {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	gap: 15px;
	justify-content: center;
}

</style>