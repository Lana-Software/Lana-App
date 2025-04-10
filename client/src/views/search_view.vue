<script setup lang="ts">
import { useCharactersStore } from '../store/characters'

const charactersStore = useCharactersStore()
</script>
<template>
	<div>
		<h2 class="title">Search</h2>
	</div>
	<div class="results-container">
		<div>
			{{ charactersStore.characters }}
		</div>
		<!-- <div class="post-element" v-for="(user, i) in users_info" :id="'post'+i" :key="'post'+i">
			<component_post :userinfo="user"/>
		</div> -->
	</div>
</template>

<style scoped>
</style>