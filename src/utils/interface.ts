export type Code = {
  code: number;
}

export type PageType = {
  pageSize: number;//单页条数；
  nowPage: number;//当前页
  count?: boolean;//是否返回总条数
}

export type VisitsData = Code & {
  data: {
    count: number;
    today: number;
  }
}

export type BannerImage = {
  id: number;
  cover: string;
  title: string;
  introduce: string;
  link: string;
}

export type BannerImageRes = Code & {
  data: BannerImage[]
}

export interface Photo {
  id: number;
  url: string;
}

export type ReqGetArticle = PageType & {
  state?: number;//状态
  subsetId?: number;//分组
  serchTerm?: string | number;//搜索词条
  classify: number;//类别
}

export type articleData = {
  id: number;
  title: string;
  subset_id?: number;
  moment: string;//时间
  label?: string[];
  introduce?: string;//简介 
  cover?: string;//封面地址
  views: number;//查看次数
  state: number;//状态0未发布、1已发布
  comment: number;//评论数
  praise: number;//点赞次数
  content?: string | string[] | undefined | Photo[];//内容
}

export type ResArticleData = Code & {
  data: {
    count: number;
    countUnpublish: number;
    list: articleData[];
  };
}

export type SubsetData = {
  id: 1;
  subset_name: string;
  classify: number;
  moment: string;
}

export type ReqGetSubsetById = {
  value: [
    {
      id: number;//分类id
    }
  ];
}

export type ResSubsetData = Code & {
  data: {
    count: number;
    list: SubsetData[];
  };
}