<script setup lang="ts">
</script>

<template>
  <div class="content">
    <div class="list">
      <ul class="ul_item ulitem1">
        <li class="list_header"><span>Dev Team</span></li>
        <li><a href="https://github.com/JohnGolgota">JohnGolgota</a></li>
        <li><a href="https://github.com/DuvanArwenLazar">Dusvan</a></li>
        <li><a href="https://github.com/Kolozuz">Kolozuz</a></li>
      </ul>
      <ul class="ul_item">
        <li class="list_header"><span>More</span></li>
        <li><a href="https://github.com/Lana-Software/Lana-App/">Lana App's Github</a></li>
        <li><a href="https://instagram.com/lanaapp_/">@lanaapp_ on Instagram</a></li>
        <li><a href="#">nosequeponeraqui</a></li>
      </ul>
    </div>
    <div class="copyright_section">
      <div class="logo_container">
        <img src="https://avatars.githubusercontent.com/u/131730866?s=200&v=4" alt="logo_img">
      </div>
      <div class="copyright">
        <span>© 2023 Lana Software, Inc.</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .content {
    display: flex;
	  flex-wrap: wrap;
    justify-content: center;
    border-top: 1px solid gray;
    padding: 7px 7px;
    margin: 40px 0 0 0;
  }

  .list{
    position: relative;
    display: flex;
    margin: auto;
    min-height: 15vh;
    justify-content: center;
    align-items: center;
  }

  
  .ul_item{
    box-sizing: border-box;
    list-style: inside url('github_logo.svg');
    padding: 0 1em 1em 1em;
  }
  
  .ul_item > li{
    white-space:nowrap;
    padding: 2px;
  }
  
  /*-- Fix para longitud de bordes personalizada --*/
  .list::after {
    content: "";
    background: gray;
    position: absolute;
    align-self:flex-end;
    bottom: 0;
    height: .5px;
    width: 70%;
  }
  .ulitem1{
    position: relative;
  }

  .ulitem1::after {
    content: "";
    background: gray;
    position: absolute;
    /* align-self:center; */
    right: 0;
    bottom: 15%;
    height: 75%;
    width: .5px;
  }
  /* -- */
  
  li::marker{
    font-size: 1rem;
    color: var(--primary-color);
  }

  .list_header, span{
    list-style: none;
    font-weight: bold;
  }

  .copyright{
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    max-width: 50%;
  }

  .copyright_section{
    display: flex;
    flex: 1;
    min-height: 15vh;
    max-width: 100%;
  }

  .logo_container {
    margin: auto;
  }

  .logo_container > img {
    height: 120px;
    min-height: 50px;
    min-width: 50px;
    max-width: 150px;
    max-height: 150px;
  }

  @media (max-width: 500px) {
    .ul_item>li, .copyright_section{
      /* Minimum font size */
      font-size: 14px
    }
  }
  @media (max-width: 1200px) {
    .ul_item>li, .copyright_section{
      /* Maximum font size */
      font-size: 15px
    }
  }
</style>