<script setup lang="ts">
import type { user } from "../views/user";

const props = defineProps<{
	userinfo: user;
}>();

const userinfo = props.userinfo;
const postinfo = props.userinfo.recent_post;
</script>

<template>
	<div class="post">
		<div id="image">
			<img :src="postinfo.image" alt="post background image">
		</div>
		<div id="bottom-bar">
			<div class="icon-container">
				<fa icon="fa-regular fa-heart" class="icon" style="color: #7661e8;" />
				<span class="likes">{{ postinfo.likes }}</span>
			</div>
			<div class="circle">
				<img :src="userinfo.user_profile" alt="profile picture">
			</div>
			<div class="icon-container">
				<span class="comments">{{ postinfo.comments }}</span>
				<fa icon="fa-regular fa-comment" class="icon" style="color: #7661e8;" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.post {
	max-width: 200px;
	min-width: 150px;
	flex: 1;
	height: 230px;
	box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
	border-radius: 24px;
}

#image {
	width: 100%;
  	height: 77%;
}

#image>img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
	border-radius: 24px 24px 0 0;
}

#bottom-bar {
	height: 23%;
	display: flex;
	font-size: 11px;
	justify-content: space-between;
	align-items: center;
	position: relative;
}

.circle {
	width: 35%;
	display: flex;
	aspect-ratio: 1 / 1;
	border-radius: 50%;
	background-color: none;
	position: absolute;
	bottom: 1.2em;
	left: 50%;
	transform: translateX(-50%);
	outline: 2px solid var(--primary-color);
}

.circle>img {
	width: 100%;
	border-radius: 50%;
}

.icon-container {
	padding: 0 .4em
}

.icon {
	padding: 0 4.5px;
}
</style>