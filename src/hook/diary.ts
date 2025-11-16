import { computed, ref } from "vue";
import { getDiaryApi, getDiaryByDateApi } from "../api/diary";
import type { diaryData, ReqDiary, ReqDiaryByDate } from "../utils/interface";

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
interface UseDiaryOptions {
  pageSize?: number;
  serchTerm?: string;
}

export const getDiaryByDate = async (data: ReqDiaryByDate) => {
  const res = await getDiaryByDateApi(data);
  if (res.code !== 200) {
    return { code: res.code, data: res.data || '获取日记失败' };
  }
  return { code: res.code, data: res.data };
}

export const getDiary = async (data: ReqDiary) => {
  const res = await getDiaryApi(data);
  if (res.code !== 200) {
    return { code: res.code, data: res.data || '获取日记失败' };
  }
  return { code: res.code, data: res.data };
}

export const useDiary = (options: UseDiaryOptions = {}) => {

  const diaryDates = ref<diaryData[]>([]);
  const pageSize = options.pageSize || 10;
  const nowPage = ref<number>(1);
  const totalCount = ref<number>(0);
  const RenderDiary = ref<diaryData>();
  const hasMore = computed(() => totalCount.value > diaryDates.value.length);

  const fetchDiary = async (fetchOptions: FetchOptions) => {
    const { includeCount, reset } = fetchOptions;
    const res = await getDiary({
      count: includeCount,
      nowPage: nowPage.value,
      pageSize,
      serchTerm: options.serchTerm || ''
    });
    if (res.code !== 200) {
      console.warn(res.data);
      return;
    } else {
      if (reset) {
        diaryDates.value = res.data.list || [];
      } else {
        diaryDates.value = diaryDates.value.concat(res.data.list || []);
      }
    }
    if (includeCount) {
      totalCount.value = res.data.count || 0;
      RenderDiary.value = diaryDates.value[0];
    }
  }

  const changeDiary = (diaryId: number) => {
    RenderDiary.value = diaryDates.value.find(diary => diary.id === diaryId);
  }

  const loadMore = async () => {
    if (!hasMore.value) return;
    nowPage.value += 1;
    await fetchDiary({ includeCount: false, reset: false });
  }

  return {
    diaryDates,
    hasMore,
    totalCount,
    RenderDiary,
    fetchDiary,
    loadMore,
    changeDiary,
  }
}