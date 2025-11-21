const bilibiliLink = 'https://space.bilibili.com/33738955';
const githubLink = 'https://github.com/yukinoshi';

export const goToBilibili = () => {
  window.open(bilibiliLink, '_blank');
}

export const goToGithub = () => {
  window.open(githubLink, '_blank');
}

export const goToSearch = (keyword: string) => {
  //当前页面打开搜索结果
  if (keyword.trim() === '') return;
  window.open(`/search?data=${encodeURIComponent(keyword)}`, '_self');
}