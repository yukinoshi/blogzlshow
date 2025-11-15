import { defineStore } from 'pinia'
import type { SubsetData } from '../utils/interface'


export const usesubsetStore = defineStore('subsetStore', {
  state: () => ({
    subsetList: [] as SubsetData[],
  }),
  actions: {
  },
  persist: true,
})
