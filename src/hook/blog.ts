import { getArticle } from './article';
import { usearticleStore } from '../store/article';
import { computed, ref } from 'vue';
import type { articleData } from '../utils/interface';

// 获取所有分类时ID
const ALL_SUBSET_ID = -2;

/**
 * 文章数据是否合并和获取文章数量参数选项
 */
interface FetchOptions {
  /**
   * 是否需要获取文章数量
   */
  includeCount: boolean;
  /**
   * 是否重置文章列表
   */
  reset: boolean;
}

/**
 * 函数请求参数选项
 */
interface UseArticleListOptions {
  pageSize?: number;
  initialSubsetId?: number;
  classify?: number;
}
/**
 * 
 * @param options 
 * @returns 
 */
export const useArticleList = (options: UseArticleListOptions = {}) => {
  const pageSize = options.pageSize ?? 9;
  const classify = options.classify ?? 0;
  const subsetId = ref<number>(options.initialSubsetId ?? ALL_SUBSET_ID);
  const articleStore = usearticleStore();
  //返回全部文章数量
  const allcount = ref(0);

  const nowPage = ref<number>(1);
  const totalCount = ref<number>(articleStore.count || 0);
  const renderList = ref<articleData[]>([...articleStore.articleData]);
  const loading = ref<boolean>(false);

  const hasMore = computed(() => totalCount.value > renderList.value.length)

  /**
   * 取重合并文章列表
   */
  const debbugeMerge = (newArticles: articleData[]) => {
    articleStore.isInArticleList(newArticles);
    return articleStore.articleData;
  }
  /**
   * 获取文章列表方法
   * @param FetchOptions 请求选项
   */
  const runFetch = async ({ includeCount, reset }: FetchOptions) => {
    if (loading.value) return;//防抖
    loading.value = true;
    try {
      const res = await getArticle({
        count: includeCount,
        subsetId: subsetId.value,
        nowPage: nowPage.value,
        pageSize,
        classify,
      })
      if (res.code && res.code !== 200) {
        console.warn(res.error ?? '获取文章列表失败');
        return;
      }
      const { list = [], count } = res.data!;

      if (subsetId.value == ALL_SUBSET_ID) { //全部分组
        if (reset) { //重置列表
          articleStore.articleData = [...list];
        } else { //合并列表 有缓存或者点击了更多下一页
          articleStore.articleData = debbugeMerge(list);
        }
        renderList.value = [...articleStore.articleData];//更新渲染列表
        if (includeCount && typeof count === 'number') {
          articleStore.count = count;
          totalCount.value = count;
        } else {
          totalCount.value = articleStore.count;
        }
      } else {
        if (reset) { //重置列表
          renderList.value = [...list];
        } else { //合并列表 有缓存或者点击了更多下一页
          renderList.value = debbugeMerge(list);
        }
        if (includeCount && typeof count === 'number') {
          totalCount.value = count;
        }
      }
    } finally { //如果请求失败也要结束加载状态
      loading.value = false;
    }
  }

  /**
   * 切换文章图库分类
   * @param newSubsetId 点击的分类
   */
  const changeSubset = async (newSubsetId: number) => {
    subsetId.value = newSubsetId;
    nowPage.value = 1;
    if (subsetId.value == ALL_SUBSET_ID) { //切换到全部分类
      if (articleStore.articleData.length) { //有缓存数据则直接使用缓存数据
        renderList.value = [...articleStore.articleData];
        totalCount.value = articleStore.count;
        return;
      }
    }
    await runFetch({ includeCount: true, reset: true });
  }

  /**
   * 加载更多文章
   */
  const loadMore = async () => {
    if (!hasMore.value) return;
    nowPage.value += 1;
    await runFetch({ includeCount: false, reset: false });
  }

  /**
   * 第一次加载页面初始化文章图库页面
   */
  const initBlogList = async () => {
    // 如果有缓存数据则直接使用缓存数据
    if (subsetId.value == ALL_SUBSET_ID && articleStore.articleData.length) {
      renderList.value = [...articleStore.articleData];
      totalCount.value = articleStore.count;
      allcount.value = articleStore.count;
      return;
    }
    await runFetch({ includeCount: true, reset: true });
    allcount.value = articleStore.count;
  }

  /**
   * 清除文章图库缓存
   */
  const clearStore = () => {
    articleStore.$reset();
  }

  return {
    subsetId,
    nowPage,
    renderList,
    hasMore,
    loading,
    allcount,
    clearStore,
    changeSubset,
    loadMore,
    initBlogList,
  }

}