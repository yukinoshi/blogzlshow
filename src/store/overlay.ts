import { defineStore } from 'pinia'

export const useOverlayStore = defineStore('articleOverlay', {
  state: () => ({
    open: false as boolean,
    articleId: null as number | null,
  }),
  actions: {
    show(id: number) {
      this.articleId = id
      this.open = true
    },
    hide() {
      this.open = false
      this.articleId = null
    }
  }
})
