<script setup lang="ts">
import { useCharactersStore } from '../store/characters'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const charactersStore = useCharactersStore()

const router = useRouter()

const query = ref('')
const submitQuery = (e: Event) => {
	e.preventDefault()
	charactersStore.searchCharacters(query.value)
	router.push({ name: 'Search', params: { query: query.value } })
}
</script>

<template>
  <div class="content">
    <div class="title">
      <a href="/" class="unformatted-link"><h1 class="lana-title"> Lana </h1></a>
    </div>
    <div class="search">
      <form @submit.prevent="submitQuery">
        <input type="text" class="search-bar" v-model="query">
        <button type="submit" class="search-btn">
          <fa :icon="['fas', 'magnifying-glass']" />
        </button>
      </form>
    </div>
    <div class="buttons">
      <a href="#" class="login link">Sign In</a><span> or </span>
      <button class="register-button"> Register </button> 
    </div>
  </div>
</template>

<style scoped>
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 -1px 8px 0 #000000;
    padding: 7px 0px;
    height: 43px;
    margin: 0;
  }

.title {
	margin-left: 19px;
	color: var(--secondary-color);
}

.search {
	flex: 1 1 content;
	max-width: 40%;
}

.search>form {
	display: flex;
	flex: 1 1 content;
	height: 27px;
	align-items: center;
	box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.5);
	border-radius: 24px;
	overflow: hidden;
}

.search-bar {
	flex: 1 1 auto;
	padding: 5px;
	border: none;
}

.search-bar:focus {
	outline: none;
}

.search-btn {
	flex: 0 1 auto;
	width: 35px;
	height: 100%;
	border: none;
}

.buttons {
	margin-right: 19px;
}

.register-button {
	width: 80px;
	height: 27px;
	border: none;
	border-radius: 24px;
	color: var(--alter-color-two);
	padding: 5px;
	background-color: var(--primary-color);
}

.register-button:hover {
	background-color: #614ae6;
	transition: 0.4s;
}

.register-button:not(:hover) {
	background-color: (--alter-color-two);
	transition: 0.4s;
}

.link {
	text-decoration: none;
}

.link:visited {
	text-decoration: none;
}

.link:hover {
	text-decoration: underline;
}

span,
.link {
	color: var(--secondary-color);
}

span {
	padding: 0px 4px;
}

.unformatted-link,
.unformatted-link:visited {
	text-decoration: none;
	color: initial;
}


</style>