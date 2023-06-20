<script setup lang="ts">
  
</script>

<template>
  <div class="content">
    <div class="title">
      <h1 class="lana-title"> Lana </h1>
    </div>
    <div class="buttons">
      <a href="#" class="login">Log in </a><span> or </span>
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
  }

  .title {
    margin-left: 19px;
    color: var(--secondary-color);
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
  }

  .register-button { background-color: var(--primary-color); }
  a { text-decoration: none; }
  a:visited { text-decoration: none; }
  span, a { color: var(--secondary-color); }
  span { padding: 0px 4px; }
</style>
