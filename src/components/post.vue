<script setup lang="ts">
    let total_likes:number = 44
    let total_comments:number = 12
</script>

<template>
	<div class="background">
        <div class="image">
            <img src="porsche.jpg" alt="">
        </div>
        <div class="circle">
            <div class="profile">
                <img src="profile.jpg" alt="">
            </div>
        </div>
        <div class="icons">
            <div class="container-heart">
                <i class="heart"></i>
                <span class="likes">{{ total_likes }}</span>
            </div>
            <div class="container-comment">
                <span class="comments">{{ total_comments }}</span>
                <i class="comments-icon"></i>
            </div>
        </div>
	</div>
</template>

<style scoped>
    .background, .image {
        width: 150px;
        height: 230px;
        background-color: var(--alter-color-two);
    }

    .background {
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
        height: 100%;
        border-radius: 50%;
    }
</style>