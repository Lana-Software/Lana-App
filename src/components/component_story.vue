<script setup lang="ts">
    import { user } from '../views/user';
    const myElementById: HTMLElement | null = document.getElementById('img');
    myElementById?.addEventListener('click', () => {
        console.log("Si linea 5 component_story.vue");
    })

    const props = defineProps<{ userinfo: user }>()
    const userinfo = props.userinfo
</script>

<template>
    <div class="story-container">
        <div class="image">
            <img src="/dateunvlog.jpg" alt="">
        </div>
        <div class="elements">
            <div class="circle" id="circle">
                <div class="profile">
                    <img :src="userinfo.user_profile" alt="" id="img">
                </div>
            </div>
            <div class="username-container">
                <p class="username">@lana_latam</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .story-container {
        text-align: center;
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
        width: 100%;
        height: 100%;
        background-color: var(--alter-color-two);
        border-radius: 24px;
    }

    .image{
        height: 81.3%;
        background-color: var(--alter-color-two);
        border-radius: 24px;
    }

    .image > img {
        border-radius: 24px 24px 0 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .elements {
        display: flex;
        height: 19.7%;
        flex-direction: column;
        justify-content: center;
    }

    .profile>img{
        position: relative;
        display: none;
        border-radius: 50%;
    }

    .profile>img {
        object-fit: cover;
    }

    /* .circle {
        background-color: none;
        left: 40px;
        top: -32px;
        border: 2px solid var(--primary-color);
    } */

    .username-container {
        max-height: fit-content;
    }

    .username {
        height: 100%;
        font-size: 12px;
    }
</style>