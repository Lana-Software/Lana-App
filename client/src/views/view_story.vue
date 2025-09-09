<script setup lang="ts">
import { users_info } from "./users_info";
import component_history from "../components/component_story.vue";
</script>

<template>
    <h2 id="stories-title">Tell your story!</h2>
    <div class="stories-container">
        <div class="story-element" v-for="(user, i) in users_info" :id="'story'+i" :key="'story'+i" dir="ltr">
            <component_history :userinfo="user"/> 
        </div>
    </div>
</template>

<style scoped>
.stories-container {
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	overflow: auto;
	scroll-snap-type: x mandatory;
}

#stories-title {
	padding: 0 0 15px;
	text-align: center;
	color: var(--secondary-color);
}

.story-element {
	max-width: 225px;
	min-width: 200px;
	flex: 0 0 40vw;
	box-sizing: border-box;
	scroll-snap-align: center;
	margin: 0 auto;
	padding: 5px 10px;
}
</style>