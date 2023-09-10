<script setup lang="ts">
import post from "../components/component_post.vue";
import { users_info } from "./users_info";

</script>

<template>
	<div>
		<h2 class="share-title">Share Your Moments!</h2>
	</div>
	<div class="posts-container">
		<div class="post-element" v-for="(user, i) in users_info" :id="'post'+i" :key="'post'+i">
			<post :usuario="user.user_id"/>
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
	padding: 5px 10px;
}
</style>