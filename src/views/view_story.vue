<script setup lang="ts">
import component_history from '../components/component_story.vue';
import { users_info } from "./users_info";
</script>

<template>
    <div>
        <h2 class="share-title">Tell your story!</h2>
    </div>
    <div class="stories_container">
        <component_history v-for="({user_id}, i) in users_info" :id="user_id" :alt="'storie #'+i"/>
    </div>
</template>

<style scoped>
</style>