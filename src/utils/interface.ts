export type Code = {
  code: number;
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