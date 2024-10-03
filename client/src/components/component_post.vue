<script setup lang="ts">
import type { user } from "../views/user";

const props = defineProps<{
	userinfo: user;
}>();

const userinfo = props.userinfo;
let postinfo = props.userinfo.recent_post;
</script>

<template>
	<div class="post-container">
        <div class="image">
            <img :src="postinfo.image" alt="post background image">
        </div>
        <div class="circle">
            <div class="profile">
                <img :src="userinfo.user_profile" alt="profile picture">
            </div>
        </div>
        <div class="icons">
            <div class="container-heart">
                <fa icon="fa-regular fa-heart" class="icon" style="color: #7661e8;" />
                <span class="likes">{{ postinfo.likes }}</span>
            </div>
            <div class="container-comment">
                <span class="comments">{{ postinfo.comments }}</span>
                <fa icon="fa-regular fa-comment" class="icon" style="color: #7661e8;" />
            </div>
        </div>
	</div>
</template>

<style scoped>
    .post-container, .image {
        width: 100%;
        height: 230px;
        background-color: var(--alter-color-two);
    }

    .post-container {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
        border-radius: 24px;
        position: relative;
    }
    
    .image > img {
        border-radius: 24px 24px 0 0;
        width: 100%;
        height: 78%;
        object-fit: cover;
    }

    .circle {
        border-radius: 50%;
        background-color: none;
        position: absolute;
        top: 150px;
        left: 44px;
        border: 2px solid var(--primary-color);
    }

    .profile, .circle {
        width: 62px;
        height: 62px;
    }

    .profile > img  {
        width: 100%;
        border-radius: 50%;
    }

    .icons {
        display: flex;
        justify-content: space-between;
        position: relative;
        top: -35px;
        font-size: 11px;
        padding: 3px;
    }

    .icon { padding: 0 4.5px; }
    
</style>