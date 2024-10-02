<script setup lang="ts">
	// import run from '../db/mongo'
	// import { MongoClient, ServerApiVersion } from 'mongodb';
	// const uri = "mongodb+srv://juanmoralesc:Juan1094@cluster0.pjpbh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

	// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
	// try{
	// 	const client = new MongoClient(uri, {
	// 		serverApi: {
	// 			version: ServerApiVersion.v1,
	// 			strict: true,
	// 			deprecationErrors: true,
	// 	    }
	// 	});

	// 	async function run() {
	// 	try {
  //     // Connect the client to the server	(optional starting in v4.7)
  //     await client.connect();
  //     // Send a ping to confirm a successful connection
  //     await client.db("admin").command({ ping: 1 });
  //     console.log("Pinged your deployment. You successfully connected to MongoDB!");
  //   } finally {
  //     // Ensures that the client will close when you finish/error
  //     await client.close();
  //   }
	// }
	// } catch (err){
	// 	console.log(err)
	// }

	
	//run().catch(console.dir);
</script>

<template>
  <div class="content">
    <div class="title">
      <a href="/" class="unformatted-link"><h1 class="lana-title"> Lana </h1></a>
    </div>
    <div class="search">
      <form action="/search">
        <input type="text" class="search-bar" v-on:click="">
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

	.search{
		flex: 1 1 content;
		max-width: 40%;
	}

	.search>form{
		display: flex;
		flex: 1 1 content;
		height: 27px;
		align-items: center;
		/* border: solid black 1px; */
    box-shadow: 0 0 5px 0 #000000;
		border-radius: 24px;
		overflow: hidden;
	}

  .search-bar{
	flex: 1 1 auto;
    padding: 5px;
	border: none;
  }

  .search-bar:focus{
    outline: none;
  }

  .search-btn{
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
  }

  .register-button:hover {
    background-color: #614ae6;
    transition: 0.4s;
  }

  .register-button:not(:hover) {
    background-color: (--alter-color-two);
    transition: 0.4s;
  }

  .register-button { background-color: var(--primary-color); }
  .link { text-decoration: none; }
  .link:visited { text-decoration: none; }
  .link:hover { text-decoration: underline; }
  span, .link { color: var(--secondary-color); }
  span { padding: 0px 4px; }
  .unformatted-link, .unformatted-link:visited{text-decoration: none; color: initial;}
</style>