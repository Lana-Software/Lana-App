<script setup lang="ts">
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faGithub } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faGithub)

</script>

<template>
  <div class="content">
    <div class="list">
      <ul class="ul_item">
        <li class="list_header"><b>Dev Team</b></li>
        <li><font-awesome-icon icon="fa-brands fa-github" /><a href="#">dusvan</a></li>
        <li><font-awesome-icon icon="fa-brands fa-github" /><a href="#">JohnGolgota</a></li>
        <li><font-awesome-icon icon="fa-brands fa-github" /><a href="#">Kolozuz</a></li>
      </ul>
    </div>
    <div class="list">
      <ul class="ul_item">
        <li class="list_header"><b>Dev Team</b></li>
        <li><font-awesome-icon icon="fa-brands fa-github" /><a href="#">dusvan</a></li>
        <li><font-awesome-icon icon="fa-brands fa-github" /><a href="#">JohnGolgota</a></li>
        <li><font-awesome-icon icon="fa-brands fa-github" /><a href="#">Kolozuz</a></li>
      </ul>
    </div>
    <div class="copyright">
        <span>© 2023 Lana Software, Inc.</span>
    </div>
    <div class="logo_container">
        <img src="https://avatars.githubusercontent.com/u/131730866?s=200&v=4" alt="logo_img">
    </div>
  </div>
</template>

<style scoped>
  .content {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    border-top: 1px solid gray;
    padding: 7px 7px;
    /* height: 43px; */
    margin: 40px 0 0 0;
  }

  .list{
    margin: auto;
    /* padding: 10px 20px; */
  }

  .ul_item{
    list-style: inside;
    margin-right: 0px;
  }
  
  .ul_item > li{
    padding: 2px;
  }
  
  li::marker{
    font-size: 1rem;
    color: var(--primary-color);
  }

  .list_header{
    list-style: none;
  }

.copyright{
  margin: auto;
}

  .logo_container {
    margin: auto;
  }

  .logo_container > img {
    height: 150px;
  }
/* 
  .ul_item{
    position: absolute;
  } */

</style>