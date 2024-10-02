<script setup lang="ts">
import { ref } from 'vue'
import { useCharatersStore } from '../store/charaters'

const charatersStore = useCharatersStore()

const props = defineProps({
    query: String
})

</script>
<template>
	<div>
		<h2 class="title">Search</h2>
	</div>
	<div class="results-container">
		<div>
			{{ charatersStore.charaters }}
		</div>
		<!-- <div class="post-element" v-for="(user, i) in users_info" :id="'post'+i" :key="'post'+i">
			<component_post :userinfo="user"/>
		</div> -->
	</div>
</template>

<style scoped>
</style>