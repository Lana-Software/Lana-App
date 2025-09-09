<script setup lang="ts">
import index_footer from "./components/component_footer.vue";
import index_navbar from "./components/component_navbar.vue";
</script>

<template>
	<index_navbar />
	<router-view/>
	<index_footer/>
</template>

<style scoped></style>
