<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()
let variable:number = 0
let variable2:any = ref(0)

while (variable <= 100){
  variable++
  variable2.value++
}

const count = ref(0)
</script>

<template>
  <div>
    <h1>{{ variable }}</h1>
    <button @click="variable++"> Hola </button> 
  </div>
  <div>
    <h1>{{ variable2 }}</h1>
    <button @click="variable2++"> Hola 2 </button> 
  </div>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
