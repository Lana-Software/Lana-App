<script setup lang="ts">
import post from "../components/component_post.vue";
import { users_info } from "./users_info";

</script>

<template>
	<div>
		<h2 class="share-title">Share Your Moments!</h2>
	</div>
	<div class="elements-container">
		<div class="elements" v-for="{user_id} in users_info" :key="user_id">
			<post :usuario="user_id"/>
		</div>
	</div>
</template>

<style scoped>
.elements-container {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: center;
}

.elements {
	padding: 5px 10px;
}
</style>