import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => {
    return {
      isDark: false,
    }
  },
  getters: {

  },
  actions: {

  },
  persist: true,
})