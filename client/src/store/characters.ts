import { defineStore } from 'pinia'

//TODO: transform into users store
export const useCharactersStore = defineStore('characters', {
	state: () => ({
		characters: [{
			name: "John Doe",
			age: 2,
			img: "https://img.freepik.com/premium-photo/otter-suit-hyperrealistic-animal-portrait_1058532-1481.jpg",
		}],
	}),
	actions: {
		async searchCharacters(query: string) {
			const response = await fetch('/api/' + query)
			const data = await response.json()
			this.characters = data
		}
	}
})