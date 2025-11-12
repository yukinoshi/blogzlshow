<script setup lang="ts">
import { getCurrentInstance, onMounted, ref, watch, shallowRef, computed } from 'vue';
import { onBeforeUnmount } from 'vue';
import commentItem from '../comment/comment-item.vue';
import { useRoute } from 'vue-router';
import { getArticleById } from '../../hook/article';
import type { articleData, commentData } from '../../utils/interface';
import { labelString } from '../../hook/labelString';
import { subsetString } from '../../hook/subsetString';
import { addComment, getCommentData } from '../../hook/comment';
import { momentm } from '../../utils/moment';
import { addPraise, addPraiseComment, deletePraise, deletePraiseComment } from '../../hook/praise';
import TopBar from '../bar/TopBar.vue';
import { spellImage } from '../../hook/spelimg';

const proxy: any = getCurrentInstance()?.proxy

const isSubmit = ref(false);

const username = ref<string>('访客');

const comment_content = ref<string>('');

const route = useRoute();

const article = ref<articleData>({} as articleData);

const subsetName = ref<string>('');

const contentHtml = ref<string>('')

const comments = ref<commentData[]>([])

const isPraise = ref<boolean>(false);

const props = defineProps<{ articleId?: number; overlay?: boolean }>()
const isOverlay = ref<boolean>(false);

const scrollbar = shallowRef()

const top = ref<number>(0);

const maindown = () => {
  const modelMain = document.querySelector<HTMLElement>('.model-main');
  if (modelMain) {
    modelMain.style.bottom = '-16px';
  }
}

const mainup = () => {
  const modelMain = document.querySelector<HTMLElement>('.model-main');
  if (modelMain) {
    modelMain.style.bottom = '0';
  }
}
//复制当前页面链接
const shareLink = () => {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    proxy.$message({ type: 'success', message: '链接已复制到剪贴板' })
  });
}

//获取文章详情数据
const effectiveId = computed(() => props.articleId ?? Number(route.query.id))

const getDetailarticle = async () => {
  contentHtml.value = '';
  const articleId = effectiveId.value;
  const res = await getArticleById(Number(articleId));
  if (res.data) {
    article.value = res.data
  }
  const subsetId = article.value.subset_id;
  if (typeof subsetId === 'number') {
    subsetName.value = await subsetString({ value: [{ id: subsetId || 0 }] });
  }
  // 判断内容是图库还是文章
  if (res.data?.classify) {//是图库
    JSON.parse(article.value.content as string)
      .map((item: any) => item.url)
      .forEach((url: string) => {
        contentHtml.value += `<div style="text-align: center; margin-bottom: 16px;"><img src="${spellImage(url)}" style="max-width: 100%;"/></div>`;
      });
  } else {//是文章
    // 把字符串转化为 html（已由后端或编辑器生成），使用 v-html 渲染并保证已清洗
    contentHtml.value = String(res.data?.content || '')
  }
  isPraise.value = res.data?.isPraise || false;
  const comment = await getCommentData(Number(articleId));
  comments.value = comment.data || [];
  //评论根据点赞数排序
  comments.value.sort((a, b) => b.praise - a.praise);
}

const submitComment = async () => {
  const res = await addComment({
    articleId: Number(effectiveId.value),
    userName: username.value,
    content: comment_content.value,
    moment: momentm(new Date())
  })
  comments.value.push({
    id: res.data!, // 使用后端返回的评论 ID
    article_id: Number(effectiveId.value),
    user_name: username.value,
    content: comment_content.value,
    moment: momentm(new Date()),
    praise: 0,
    isPraise: false,
    user_id: '-1',
    complaint: 0,
    isread: 0
  });
  comment_content.value = '';
}

const changelike = async () => {
  if (isPraise.value) { //取消点赞
    const res = await deletePraise({
      articleId: Number(effectiveId.value)
    })
    if (res.code !== 200) {
      proxy.$message({ type: 'warning', message: '取消点赞失败' })
      return
    }
    isPraise.value = false;
    proxy.$message({ type: 'success', message: '取消点赞成功' })
  } else { //点赞文章
    const res = await addPraise({
      articleId: Number(effectiveId.value)
    })
    if (res.code !== 200) {
      proxy.$message({ type: 'warning', message: '点赞失败' })
      return
    }
    isPraise.value = true;
    proxy.$message({ type: 'success', message: '点赞成功' })
  }
}

const changeComment = async (newState: any) => {
  const commentId = Number(newState.id);
  if (newState.is) { //取消点赞
    const res = await deletePraiseComment({
      commentId
    })
    if (res.code !== 200) {
      proxy.$message({ type: 'warning', message: '取消点赞失败' })
      return
    }
    const comment = comments.value.find(c => Number(c.id) === commentId);
    if (comment) {
      comment.isPraise = false;
      if (typeof comment.praise === 'number') {
        comment.praise = Math.max(0, comment.praise - 1);
      }
    }
    proxy.$message({ type: 'success', message: '取消点赞成功' })
  } else { //点赞文章
    const res = await addPraiseComment({
      commentId
    })
    if (res.code !== 200) {
      proxy.$message({ type: 'warning', message: '点赞失败' })
      return
    }
    const comment = comments.value.find(c => Number(c.id) === commentId);
    if (comment) {
      comment.isPraise = true;
      if (typeof comment.praise === 'number') {
        comment.praise = comment.praise + 1;
      }
    }
    proxy.$message({ type: 'success', message: '点赞成功' })
  }
}

const backTo = () => {
  //返回上一页
  window.history.back();
}

watch(comment_content, (newVal) => {
  if (newVal && newVal.length > 0) {
    isSubmit.value = false;
  } else {
    isSubmit.value = true;
  }
}, { immediate: true });

const handleScroll = (e: any) => {
  top.value = e.target.scrollTop;
}

onMounted(() => {
  getDetailarticle()
  // 根据是否存在 fromHome 标记或 route.query.overlay 来判定覆盖模式
  if (props.overlay === true || route.query.overlay === '1' || sessionStorage.getItem('fromHome') === 'true') {
    isOverlay.value = true
    sessionStorage.removeItem('fromHome')
  } else {
    isOverlay.value = false
  }
})

// 覆盖层打开时隐藏页面原生滚动条，关闭时恢复
watch(isOverlay, (val) => {
  if (val) {
    try {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    } catch { }
  } else {
    try {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    } catch { }
  }
}, { immediate: true })

onBeforeUnmount(() => {
  try {
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
  } catch { }
})
</script>

<template>
  <div class="model-mask" v-if="isOverlay" @click="backTo" @mouseenter="maindown" @mouseleave="mainup"></div>
  <TopBar v-else :scrollTop="top" />
  <div class="model-main" style="height: 97vh;" :style="!isOverlay ? { height: '100%' } : {}">
    <div class="model-close" v-if="isOverlay">
      <IconCircleCrossOutline @click="backTo" />
    </div>
    <yk-scrollbar ref="scrollbar" @scroll="handleScroll">
      <div class="model-content">
        <div class="article-view">
          <div class="article">
            <p class="article-title">{{ article.title }}</p>
            <div class="article-labels">
              <yk-space size="s">
                <yk-text type="secondary">{{ subsetName }} / {{ labelString(article.label) }}</yk-text>
                <yk-text>{{ article.moment }}</yk-text>
              </yk-space>
              <yk-space size="s">
                <yk-text type="third">
                  <IconLikeOutline />
                  {{ article.praise }}
                </yk-text>
                <yk-text type="third">
                  <IconEyeOutline />
                  {{ article.views }}
                </yk-text>
                <yk-text type="third">
                  <IconCommentOutline />
                  {{ article.comment }}
                </yk-text>
              </yk-space>
            </div>
            <div class="article-introduce">
              <p>{{ article.introduce }}</p>
            </div>
            <div class="article-content">
              <div class="article-content-article" style="width: 800px;" v-html="contentHtml">
              </div>
            </div>
            <yk-space class="article-tool" size="m" dir="vertical">
              <div class="article-tool-like" :class="{ isLike: isPraise }" @click="changelike">
                <IconLikeOutline />
              </div>
              <div class="article-tool-share" @click="shareLink">
                <IconShareOutline />
              </div>
            </yk-space>
          </div>
          <div class="comment-list">
            <div class="comment-list-main">
              <div class="feedback">
                <yk-space dir="vertical" size="m">
                  <yk-text-area v-model="comment_content" placeholder="说点什么..." :auto-size="{
                    minRows: 4,
                    maxRows: 10,
                  }" style="width: 736px;"></yk-text-area>
                  <div class="feedback-submit">
                    <yk-space align="center" size="s">
                      <yk-input v-model="username" placeholder="用户名" style="width: 160px;"></yk-input>
                      <yk-avatar img-url="https://huohuo90.com/images/avatar.png"></yk-avatar>
                    </yk-space>
                    <yk-button type="primary" :disabled="isSubmit" size="m" @click="submitComment">评论</yk-button>
                  </div>
                </yk-space>
              </div>
              <p class="comment-list-title">
                评论 {{ article.comment }}
              </p>
              <yk-space size="m" dir="vertical">
                <commentItem @changeComment="changeComment" v-for="item in comments" :key="item.id" :data="item" />
              </yk-space>
              <div class="comment-list-more">
                <yk-text type="third">已经到底了</yk-text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </yk-scrollbar>
  </div>
</template>

<style lang="less" scoped>
.overlay-bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1; // 低于遮罩和主容器（99），仅作为视觉背景
  overflow: auto;
  pointer-events: none; // 禁止背景接收事件，所有交互都在覆盖层
  /* 隐藏背景层的原生滚动条（仍可滚动） */
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE 10+ */
}

.overlay-bg::-webkit-scrollbar {
  /* Chrome/Safari/Edge(Chromium) */
  width: 0;
  height: 0;
}

.model-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  margin: auto;
  width: 100%;
  height: 100%;
  transition: background .2s;
  background-color: #000c;

  &:hover {
    background-color: #0009;
  }
}

.model-main {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  margin: auto;
  width: 100%;
  border-radius: 24px 24px 0 0;
  overflow: hidden;
  background-color: @bg-color-m;
  transition: all .2s;

  .model-close {
    cursor: pointer;
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 10;

    .yk-icon {
      width: 24px;
      height: 24px;
      color: rgba(11, 25, 38, .72);
    }
  }

  .article {
    max-width: 1264px;
    min-width: 1040px;
    margin: 0 auto;
    padding: 60px 120px 60px;

    &-title {
      font-size: 32px;
      line-height: 1.34;
      font-weight: 600;
    }

    &-labels {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 0 40px;
    }

    &-introduce {
      padding: 32px;
      display: flex;
      justify-content: center;
      border-radius: 8px;
      background: @bg-color-s;

      p {
        max-width: 800px;
        text-align: left;
        font-size: 16px;
        line-height: 2;
      }
    }

    &-content {
      padding-top: 40px;
      display: flex;
      justify-content: center;

      /* 文章内容容器：限制最大宽度并自适应 */
      .article-content-article {
        width: 100%;
        max-width: 800px;
        /* 与模板中原来固定宽一致，可按需调整 */
      }

      /* 图片等媒体等比缩放并居中 -- 使用深度选择器以匹配通过 v-html 注入的内容 */
      .article-content-article ::v-deep img {
        display: block;
        max-width: 100% !important;
        /* 覆盖行内宽度 */
        height: auto !important;
        /* 保持宽高比 */
        margin: 16px auto;
        /* 垂直间距并水平居中 */
        object-fit: contain;
        border-radius: 6px;
      }

      /* iframe / video 也做响应处理 */
      .article-content-article ::v-deep iframe,
      .article-content-article ::v-deep video {
        display: block;
        width: 100% !important;
        max-width: 100%;
        height: auto !important;
        margin: 12px auto;
      }
    }

    &-tool {
      position: fixed;
      right: 64px;
      bottom: 40px;

      .isLike {
        background-color: black;
        color: @white;

        //清除&-likehover效果
        &:hover {
          background-color: black;
        }
      }

      &-like {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 68px;
        height: 68px;
        background-color: @bg-color-s;
        border-radius: 800px;
        transition: all .2s;
        cursor: pointer;

        .yk-icon {
          width: 22px;
          height: 22px;
        }

        &:hover {
          background-color: @bg-color-l;
        }
      }

      &-share {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 68px;
        height: 68px;
        background-color: @bg-color-s;
        border-radius: 800px;
        transition: all .2s;
        cursor: pointer;

        .yk-icon {
          width: 22px;
          height: 22px;
        }

        &:hover {
          background-color: @bg-color-l;
        }
      }
    }
  }

  .comment-list {
    background-color: @bg-color-l;
    display: flex;
    justify-content: center;
    padding: 64px 0 120px;

    &-main {
      width: 800px;
      border-radius: 8px;
      background-color: @bg-color-m;
      padding: 32px;

      .feedback {
        width: 100%;
        display: flex;
        justify-content: center;

        .yk-text-area:hover,
        .yk-text-area--focus {
          border-color: @gray-8
        }

        .yk-text-area--focus {
          background-color: @bg-color-m;
        }

        &-submit {
          width: 100%;
          display: flex;
          justify-content: space-between;

          .yk-button {
            background-color: @lcolor-light;
          }

          .yk-button:hover {
            background-color: @gray-9;
          }
        }
      }
    }

    &-title {
      font-size: 16px;
      line-height: 1.5;
      font-weight: 600;
      margin: 40px 0 24px;
    }

    &-more {
      margin-top: 24px;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
}

/* 隐藏 yk-scrollbar 内部可滚动容器的原生滚动条（仍可滚动） */
/* 深度选择器匹配到组件内部生成的 wrap 元素 */
::v-deep(.yk-scrollbar__wrap) {
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE 10+ */
}

::v-deep(.yk-scrollbar__wrap::-webkit-scrollbar) {
  /* Chrome/Safari/Edge(Chromium) */
  width: 0;
  height: 0;
}
</style>