<script setup lang="ts">
    const myElementById: HTMLElement | null = document.getElementById('img');
    myElementById?.addEventListener('click', () => {
        console.log("Si");
    })
</script>

<template>
    <div class="history-container" id="history-container">
        <div class="image">
            <img src="porsche.jpg" alt="">
        </div>
        <div class="elements">
            <div class="circle" id="circle">
                <div class="profile">
                    <img src="profile.jpg" alt="" id="img">
                </div>
            </div>
            <div class="username-container">
                <p class="username">@lana_latam</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .history-container {
        text-align: center;
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
    }

    .image, .history-container {
        width: 113px;
        height: 197px;
        background-color: var(--alter-color-two);
        border-radius: 24px;
    }

    .image > img {
        border-radius: 24px 24px 0 0;
        width: 100%;
        height: 82%;
        object-fit: cover;
        border-radius: 24px 24px 0px 0px;
    }

    .profile > img, .circle {
        width: 25px;
        height: 25px;
        position: relative;
        display: none;
        border-radius: 50%;
    }

    .profile > img { object-fit: cover; }

    .circle {
        background-color: none;
        left: 40px;
        top: -32px;
        border: 2px solid var(--primary-color);
    }

    .username {
        position: relative;
        font-size: 12px;
        top: -28px;
    }
</style>