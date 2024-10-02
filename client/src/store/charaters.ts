import { defineStore } from 'pinia'

export const useCharatersStore = defineStore('charaters', {
    state: () => ({
        charaters: null,
    }),
    actions: {
        async searchCharaters(charaterSearch: string) {
            const response = await fetch('/api/' + charaterSearch)
            const data = await response.json()
            this.charaters = data
        }
    }
})