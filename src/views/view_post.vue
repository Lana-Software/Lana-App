<script setup lang="ts">
import post from "../components/component_post.vue";

interface user {user_id: number, user_profile: string, recent_post: {comments:number, likes:number, image:string}}
let users_info:Array<user> = [
	{
		user_id: 10010210201,
		user_profile: 'profile.jpg',
		recent_post: {
			comments: 18,
			likes: 69,
			image: 'porsche.jpg'
		}
	},
	{
		user_id: 5434343243,
		user_profile: 'profile.jpg',
		recent_post: {
			comments: 54,
			likes: 45,
			image: ''
		}
	},
	{
		user_id: 5434343243,
		user_profile: 'profile.jpg',
		recent_post: {
			comments: 2,
			likes: 180,
			image: 'profile.jpg'
		}
	},
	{
		user_id: 10010210201,
		user_profile: 'profile.jpg',
		recent_post: {
			comments: 19,
			likes: 670,
			image: 'porsche.jpg'
		}
	}
]
</script>

<template>
	<div>
		<h2 class="share-title">Share Your Moments!</h2>
	</div>
	<div class="elements-container">
		<div class="elements" v-for="user in users_info" :key="user.user_id">
			<post  :usuario="user"/>
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