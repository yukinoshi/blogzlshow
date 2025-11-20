import { computed, ref } from "vue";
import { addResourceDownloadNumApi, getResourcePageApi } from "../api/resource";
import type { ResourceData } from "../utils/interface";

type UseArticleListOptions = {
  pageSize?: number;
  initialSubsetId?: number;
}

type FetchOptions = {
  includeCount: boolean;
  reset: boolean;
}



export const useResourceList = (options: UseArticleListOptions = {}) => {
  const pageSize = options.pageSize ?? 8;
  const subsetId = ref<number>(options.initialSubsetId ?? -2);
  const nowPage = ref<number>(1);
  const allcount = ref<number>(0);
  const totalCount = ref<number>(0);
  const RenderResource = ref<ResourceData[]>([] as ResourceData[]);
  const hasMore = computed(() => totalCount.value > RenderResource.value.length);

  const fetchResourceList = async (options: FetchOptions) => {
    const { code, data } = await getResourcePageApi({
      nowPage: nowPage.value,
      pageSize: pageSize,
      subsetId: subsetId.value
    });
    if (code !== 200) {
      console.warn('获取资源列表失败');
      return;
    }
    const { count, list } = data!;
    if (options.reset) {
      RenderResource.value = list;
    } else {
      RenderResource.value = RenderResource.value.concat(list || []);
    }
    if (options.includeCount) {
      allcount.value = count;
    }
    totalCount.value = count;
  }

  const changeSubset = async (id: number) => {
    subsetId.value = id;
    nowPage.value = 1;
    await fetchResourceList({ includeCount: false, reset: true });
  }

  const loadMore = async () => {
    if (!hasMore.value) return;
    nowPage.value += 1;
    await fetchResourceList({ includeCount: false, reset: false });
  }

  const addResourceDownloadNum = async (id: number) => {
    await addResourceDownloadNumApi(id);
  }

  const goToDownload = async (resource: ResourceData) => {
    await addResourceDownloadNum(resource.id);
    window.open(resource.url, '_blank');
  }

  return {
    hasMore,
    pageSize,
    subsetId,
    allcount,
    RenderResource,
    fetchResourceList,
    goToDownload,
    changeSubset,
    loadMore,
  }
}