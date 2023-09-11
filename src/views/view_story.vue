<script setup lang="ts">
import { users_info } from "./users_info";
import component_history from '../components/component_story.vue';
</script>

<template>
    <div>
        <h2 class="share-title">Tell your story!</h2>
    </div>
    <div class="stories-container">
        <div class="story-element" v-for="(user, i) in users_info" :id="'story'+i" :key="'story'+i">
            <component_history :userinfo="user"/> 
        </div>
    </div>
</template>

<style scoped>
.stories-container {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: center;
}

.story-element {
    margin: 0 auto;
	padding: 5px 10px;
}
</style>