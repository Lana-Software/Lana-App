<script setup lang="ts">
import { users_info } from "./users_info";
import component_history from '../components/component_story.vue';
</script>

<template>
    <div>
        <h2 class="share-title">Tell your story!</h2>
    </div>
    <div class="stories-container">
        <div class="story-element" v-for="(user, i) in users_info" :id="'story'+i" :key="'story'+i" dir="ltr">
            <component_history :userinfo="user"/> 
        </div>
    </div>
</template>

<style scoped>
    .stories-container {
        /* max-height: 100%; */
        display: flex;
        flex-flow: row nowrap;
        /* width: 100%; */
        justify-content: space-between;
        overflow: auto;
        /* scroll-behavior: smooth; */
        scroll-snap-type: x mandatory;
        
    }

    .story-element {
        flex: 0 0 280px;
        box-sizing: border-box;
        scroll-snap-align: center;
        margin: 0 auto;
        padding: 5px 10px;
    }
</style>