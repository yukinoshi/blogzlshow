import { defineStore } from 'pinia'
import type { articleData } from '../utils/interface'


export const usearticleStore = defineStore('articleStore', {
  state: () => ({
    count: 0,
    articleData: [] as articleData[],
  }),
  actions: {
    //判断新获取的文章是否已经在store列表中
    isInArticleList(target: articleData[]) {
      const knownIds = new Set(this.articleData.map((item) => item.id));
      target.forEach(element => {
        if (!knownIds.has(element.id)) {
          knownIds.add(element.id);
          this.articleData.push(element);
        }
      });
      return false;
    }
  },
  persist: true,
})
