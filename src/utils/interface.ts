export type Code = {
  code: number;
}

export type Res = Code & {
  data: number;//插入返回的id
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
  isPraise: boolean;//是否点赞
  classify?: number;//类别
}

export type ResArticleData = Code & {
  data: {
    count: number;
    countUnpublish: number;
    list: articleData[];
  };
}

export type ReqLikeArticle = {
  articleId: number;
  userId: string;
  moment: string;
}

export type ReqNoLikeArticle = {
  articleId: number;
  userId: string;
}

export type ReqLikeArticleFront = {
  articleId: number;
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

export type ReqAddComment = {
  userId?: number;
  userName: string;
  articleId: number;
  content: string;
  moment: string;
}

export type commentData = {
  id: number;
  user_id: string;
  user_name: string;
  article_id: number;
  moment: string;
  content: string;
  complaint: number;
  isread: number;
  praise: number;
  isPraise: boolean;
}

export type RescommentData = Code & {
  data: commentData[];
}

export type ReqLikeComment = {
  commentId: number;
  userId: string;
  moment: string;
}

export type ReqLikeCommentFront = {
  commentId: number;
}

export type ReqNoLikeComment = {
  commentId: number;
  userId: string;
}

export type ReqDiary = PageType & {
  serchTerm?: string | number;//搜索词条
}

export type ReqDiaryByDate = {
  year: string | number;
  month: string | number;
  day?: string | number;
}

export type diaryData = {
  id: number;
  title: string;
  content: string;
  picture: string;
  weather_id: number;
  moment: string;
}

export type ResDiaryData = Code & {
  data: diaryData[];
}

export type ReqsendMessage = {
  userName: string;
  userId: number;
  content: string;
  moment: string;
  userType: number;
}

export type ReqsendMessageFront = {
  content: string;
  userName: string;
}