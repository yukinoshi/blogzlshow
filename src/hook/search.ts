import { computed, ref, unref, type Ref } from "vue";
import { getArticleApi } from "../api/article";
import type { articleData, diaryData, ResourceData } from "../utils/interface";
import { getDiaryApi } from "../api/diary";
import { getResourcePageApi } from "../api/resource";

type req = {
  nowPage?: number;
  pageSize?: number;
  serchTerm?: string | Ref<string>;
}

const ifError = (code: number) => {
  if (code !== 200) {
    console.warn('搜索失败');
    return true;
  }
  return false;
}

export const useSearch = (index: Ref<number> | number,data: req) => {
  const RenderArticle = ref<articleData[]>([]);
  const RenderGallery = ref<articleData[]>([]);
  const RenderDiary = ref<diaryData[]>([]);
  const RenderResource = ref<ResourceData[]>([]);
  const nowPage = ref<number>(data.nowPage || 1);

  const willComputed = computed(() => {
    const idx = unref(index);
    switch (idx) {
      case 0:
        return RenderArticle.value.length;
      case 1:
        return RenderGallery.value.length;
      case 2:
        return RenderDiary.value.length;
      case 3:
        return RenderResource.value.length;
    }
  });

  const allcount = ref<number>(0);

  const hasMore = computed(() => {
    return allcount.value > (willComputed.value || 0);
  })


  const articleSearch = async (includeCount: boolean,classify: number = 0) => {
    if (includeCount) {
      nowPage.value = 1;
    }
    const res = await getArticleApi({
      nowPage: nowPage.value,
      pageSize: data.pageSize || 9,
      classify: classify || 0,
      serchTerm: unref(data.serchTerm) || ''
    })
    if (ifError(res.code)) return;
    
    const list = res.data?.list || [];
    if (classify === 1) {
      if (includeCount) {
        RenderGallery.value = list;
      } else {
        RenderGallery.value = [...RenderGallery.value, ...list];
      }
    } else {
      if (includeCount) {
        RenderArticle.value = list;
      } else {
        RenderArticle.value = [...RenderArticle.value, ...list];
      }
    }

    if (includeCount) {
      allcount.value = res.data?.count || 0;
    }
  }

  const diarySearch = async (includeCount: boolean) => {
    if (includeCount) {
      nowPage.value = 1;
    }
    //调用diary搜索接口
    const res = await getDiaryApi({
      nowPage: nowPage.value,
      pageSize: data.pageSize || 4,
      serchTerm: unref(data.serchTerm) || ''
    })
    if (ifError(res.code)) return;
    
    const list = res.data?.list || [];
    if (includeCount) {
      RenderDiary.value = list;
    } else {
      RenderDiary.value = [...RenderDiary.value, ...list];
    }

    if (includeCount) {
      allcount.value = res.data?.count || 0;
    }
  }

  const resourceSearch = async (includeCount: boolean) => {
    if (includeCount) {
      nowPage.value = 1;
    }
    //调用resource搜索接口
    const res = await getResourcePageApi({
      nowPage: nowPage.value,
      pageSize: data.pageSize || 8,
      serchTerm: unref(data.serchTerm) || ''
    })
    if (ifError(res.code)) return;
    
    const list = res.data?.list || [];
    if (includeCount) {
      RenderResource.value = list;
    } else {
      RenderResource.value = [...RenderResource.value, ...list];
    }

    if (includeCount) {
      allcount.value = res.data?.count || 0;
    }
  }

  const loadMore = async (includeCount: boolean,index: number = 0) => {
    nowPage.value++;
    if (index === 0 || index === 1) {
      articleSearch(includeCount, index);
    } else if (index === 2) {
      diarySearch(includeCount);
    } else if (index === 3) {
      resourceSearch(includeCount);
    }
  }

  return {
    RenderArticle,
    RenderGallery,
    RenderDiary,
    RenderResource,
    hasMore,
    allcount,
    loadMore,
    articleSearch,
    diarySearch,
    resourceSearch,
  }
}