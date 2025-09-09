<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUsersStore } from "../store/users";

const usersStore = useUsersStore();

const router = useRouter();

const query = ref("");
const dialog = ref<HTMLDialogElement | null>(null);

const submitQuery = (e: Event) => {
	e.preventDefault();
	usersStore.searchUsers(query.value);
	router.push({ name: "Search", query: { q: query.value } });

	// Close the dialog manually since we're preventing the default form submission
	dialog.value?.close();
};

const openSearchModal = () => {
	dialog.value?.showModal();
};
</script>

<template>
	<div class="content">
		<div class="title">
			<a href="/" class="unformatted-link">
				<h1 class="lana-title">Lana</h1>
			</a>
		</div>
		<div class="search" id="search_big_screen">
			<form @submit.prevent="submitQuery">
				<input type="text" class="search-bar" v-model="query" aria-label="Search">
				<button type="submit" class="search-btn" aria-label="Search">
					<fa :icon="['fas', 'magnifying-glass']" />
				</button>
			</form>
		</div>
		<div class="buttons">
			<a href="#" class="login link">Sign In</a><span> or </span>
			<button class="register-button"> Register </button>
		</div>
		<div class="small-screen-buttons" hidden>

			<button id="mini-search-btn" @click="openSearchModal()" aria-label="Search">
				<fa :icon="['fas', 'magnifying-glass']" />
			</button>

			<dialog ref="dialog" id="search-dialog" closedby="any" openedby="mini-search-btn">
				<div class="search" id="search_small_screen">
					<form method="dialog" @submit.prevent="submitQuery">
						<input type="text" class="search-bar" v-model="query" aria-label="Search">
						<button type="submit" class="search-btn" aria-label="Search">
							<fa :icon="['fas', 'magnifying-glass']" />
						</button>
					</form>
				</div>
			</dialog>
			<div class="burger-menu">
				<button type="button" class="burger-button" @click="$emit('toggle-menu')">
					<fa :icon="['fas', 'bars']" />
				</button>
			</div>
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

#search-dialog {
	justify-self: center;
	align-self: center;
	border-radius: 24px;
}

.search {
	flex: 1 1 content;
}

#search_big_screen {
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
	border-radius: 24px;
}

.buttons,
.small-screen-buttons {
	margin-right: 19px;
}

.register-button,
#mini-search-btn,
.burger-button {
	width: 80px;
	height: 27px;
	border: none;
	border-radius: 24px;
	color: var(--alter-color-two);
	padding: 5px;
	background-color: var(--primary-color);
	cursor: pointer;
	transition: 0.4s;

}

.register-button:hover,
#mini-search-btn:hover,
.burger-button:hover {
	background-color: #614ae6;
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

@media (max-width: 600px) {
	#search_big_screen {
		display: none;
	}

	.buttons {
		display: none;
	}

	.small-screen-buttons {
		display: flex;
		gap: 10px;
	}
}
</style>