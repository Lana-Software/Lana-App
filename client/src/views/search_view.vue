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
			<div class="result-container" v-for="(user, i) in usersStore.getUsers" :key="'user_' + i">
				<div class="result">
					<div class="crop">
						<img :src="user.profile_picture" alt="">
					</div>
					<div class="username">@{{ user.name }}</div>
				</div>
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
  justify-content: center;
}

.result-container {
	display: flex;
	justify-content: center;
}

.result {
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

.result>.crop {
  width: 100%;
  height: 85%;
}

.result>.crop>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 24px;
}

.result>.username {
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