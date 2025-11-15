import { computed, ref } from 'vue';
import type { articleData } from '../utils/interface';
import { getArticle } from './article';
import { usearticleStore } from '../store/article';

const ALL_SUBSET_ID = -2;

interface FetchOptions {
  includeCount: boolean;
  reset: boolean;
}

interface UseArticleListOptions {
  pageSize?: number;
  initialSubsetId?: number;
  classify?: number;
}

export const useArticleList = (options: UseArticleListOptions = {}) => {
  const pageSize = options.pageSize ?? 9;
  const subsetDefault = options.initialSubsetId ?? ALL_SUBSET_ID;
  const classify = options.classify ?? 0;

  const articleStore = usearticleStore();

  const subsetId = ref<number>(subsetDefault);
  const nowPage = ref<number>(1);
  const totalCount = ref<number>(articleStore.count || 0);
  const renderList = ref<articleData[]>([...articleStore.articleData]);
  const loading = ref<boolean>(false);

  const hasMore = computed(() => totalCount.value > renderList.value.length);

  const dedupeMerge = (target: articleData[], incoming: articleData[]) => {
    const knownIds = new Set(target.map((item) => item.id));
    incoming.forEach((item) => {
      if (!knownIds.has(item.id)) {
        knownIds.add(item.id);
        target.push(item);
      }
    });
    return target;
  };

  const runFetch = async ({ includeCount, reset }: FetchOptions) => {
    if (loading.value) return;
    loading.value = true;
    try {
      const res = await getArticle({
        count: includeCount,
        subsetId: subsetId.value,
        nowPage: nowPage.value,
        pageSize,
        classify,
      });

      if (!('data' in res) || !res.data) {
        console.warn(res.error ?? '获取文章列表失败');
        return;
      }

      const { list = [], count } = res.data;

      if (subsetId.value === ALL_SUBSET_ID) {
        if (reset) {
          articleStore.articleData = [...list];
        } else {
          articleStore.articleData = dedupeMerge([...articleStore.articleData], list);
        }
        renderList.value = [...articleStore.articleData];
        if (includeCount && typeof count === 'number') {
          articleStore.count = count;
          totalCount.value = count;
        } else {
          totalCount.value = articleStore.count;
        }
      } else {
        if (reset) {
          renderList.value = [...list];
        } else {
          renderList.value = dedupeMerge([...renderList.value], list);
        }
        if (includeCount && typeof count === 'number') {
          totalCount.value = count;
        }
      }
    } finally {
      loading.value = false;
    }
  };

  const refresh = async (includeCount = true) => {
    nowPage.value = 1;
    await runFetch({ includeCount, reset: true });
  };

  const changeSubset = async (value: number) => {
    subsetId.value = value;
    nowPage.value = 1;
    if (value === ALL_SUBSET_ID) {
      if (articleStore.articleData.length) {
        renderList.value = [...articleStore.articleData];
        totalCount.value = articleStore.count;
        return;
      }
    }
    await runFetch({ includeCount: true, reset: true });
  };

  const loadMore = async () => {
    if (!hasMore.value) return;
    nowPage.value += 1;
    await runFetch({ includeCount: false, reset: false });
  };

  const initialise = async () => {
    if (subsetId.value === ALL_SUBSET_ID && articleStore.articleData.length) {
      renderList.value = [...articleStore.articleData];
      totalCount.value = articleStore.count;
      return;
    }
    await runFetch({ includeCount: true, reset: true });
  };

  return {
    subsetId,
    nowPage,
    renderList,
    totalCount,
    hasMore,
    loading,
    refresh,
    changeSubset,
    loadMore,
    initialise,
  };
};

export type UseArticleListReturn = ReturnType<typeof useArticleList>;
