<script setup lang="ts">
import { useUsersStore } from "../store/users";

const usersStore = useUsersStore();
</script>

<template>
    <div class="content">
        <div>
            <h2 class="title">Search results</h2>
        </div>
        <div class="results-container">
            <div class="search_result_item" v-for="(user, i) in usersStore.getUsers" :key="'user_' + i">
                <div class="crop">
                    <img :src="user.profile_picture" alt="">
                </div>
                <div class="username">@{{ user.name }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.content {
  padding: 19px;
}

.results-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.search_result_item {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  height: 225px;
  background-color: var(--alter-color-two);
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 24px;
  padding: 10px;
  box-sizing: border-box;
}

.search_result_item>.crop {
  width: 100%;
  height: 85%;
}

.search_result_item>.crop>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 24px;
}

.search_result_item>.username {
  display: flex;
  font-size: 15px;
  color: var(--secondary-color);
  width: 100%;
  height: 15%;
  word-wrap: break-word;
  justify-content: center;
  align-items: end;
}
</style>