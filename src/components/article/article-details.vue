<script setup lang="ts">
import { getCurrentInstance, ref, watch } from 'vue';
import commentItem from '../comment/comment-item.vue';

const proxy: any = getCurrentInstance()?.proxy

const isSubmit = ref(false);

const username = ref<string>('访客');

const comment_content = ref<string>('');

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

watch(comment_content, (newVal) => {
  if (newVal && newVal.length > 0) {
    isSubmit.value = false;
  } else {
    isSubmit.value = true;
  }
}, { immediate: true });
</script>

<template>
  <div class="model-mask" @mouseenter="maindown" @mouseleave="mainup"></div>
  <div class="model-main" style="height: 908px;">
    <div class="model-close">
      <IconCircleCrossOutline />
    </div>
    <yk-scrollbar ref="scrollbar">
      <div class="model-content">
        <div class="article-view">
          <div class="article">
            <p class="article-title">文章标题</p>
            <div class="article-labels">
              <yk-space size="s">
                <yk-text type="secondary">分类 / 标签</yk-text>
                <yk-text>2024-06-01</yk-text>
              </yk-space>
              <yk-space size="s">
                <yk-text type="third">
                  <IconLikeOutline />
                  45
                </yk-text>
                <yk-text type="third">
                  <IconEyeOutline />
                  123
                </yk-text>
                <yk-text type="third">
                  <IconCommentOutline />
                  45
                </yk-text>
              </yk-space>
            </div>
            <div class="article-introduce">
              <p>这是介绍</p>
            </div>
            <div class="article-content">
              <div class="article-content-article" style="width: 800px;">
                <p style="text-align: start;">在日常的前端开发中，我们已经习惯了将一系列独立的工具拼凑在一起来构建项目：用 Webpack 或 Rollup 打包，用 Jest 测试，用
                  ESLint 检查代码，再用 Prettier 格式化。这种“胶水式”的工具链虽然灵活，但也带来了配置复杂、工具间兼容性差以及性能瓶颈等问题，这便是许多开发者面临的“工具链梦魇”。</p>
                <p style="text-align: start;">Vite+ 的出现，正是为了解决这一痛点。它并非简单的 Vite 版本升级，而是一个由 Rust
                  驱动的统一化工具链，旨在重塑我们的开发工作流。本文将对它的核心技术进行一个整体介绍，看看 Vite+ 是如何实现其高性能和统一体验的。</p>
                <h2 style="text-align: start;">Rolldown：统一开发与生产的打包器</h2>
                <p style="text-align: start;">要理解 Vite+ 的革新，首先需要回顾当前 Vite 的架构。</p>
                <p style="text-align: start;">在开发环境，Vite 使用 <strong>esbuild</strong> 进行依赖预构建，利用其 Go
                  语言编写带来的原生速度优势，实现了极速的冷启动。然而，在生产环境，Vite 则切换到 <strong>Rollup</strong> 进行打包，以获得更优化的代码和更好的插件生态兼容性。</p>
                <p style="text-align: start;">这种“双打包器”架构存在一个核心问题：<strong>开发与生产环境的不一致性</strong>。这可能导致一些 Bug
                  仅在生产构建后才出现，增加了调试难度。同时，数据在 JavaScript (Rollup) 和原生环境 (esbuild) 之间的传递也限制了性能的进一步提升。</p>
                <p style="text-align: start;"><img src="http://127.0.0.1:3000/files/1762497439944.png"
                    alt="1762497439944.png" data-href="/files/1762497439944.png" style=""></p>
                <p style="text-align: start;"><strong>Rolldown</strong> 正是为解决此问题而生。它是一个完全由 Rust 编写的高性能打包器，其核心目标是在 Vite
                  内部同时取代 esbuild 和 Rollup。</p>
                <ul>
                  <li style="text-align: start;"><strong>统一流水线</strong>：通过使用 Rolldown，Vite+
                    实现了开发和生产环境的打包逻辑统一，从根本上消除了环境不一致的问题。</li>
                  <li style="text-align: start;"><strong>Rollup 兼容 API</strong>：为了保证现有生态的平滑过渡，Rolldown 设计了与 Rollup 兼容的
                    API 和插件接口，使得大量现存的 Rollup 插件可以继续在 Vite+ 中使用。</li>
                  <li style="text-align: start;"><strong>性能飞跃</strong>：基于 Rust 的原生性能，Rolldown
                    带来了显著的速度提升。早期采用者的数据显示，其构建速度获得了数量级的改进：</li>
                </ul>
                <p style="text-align: start;">通过引入 Rolldown，Vite+ 不仅解决了长期存在的环境一致性问题，还将打包性能推向了新的高度。</p>
                <p style="text-align: start;"><img src="http://127.0.0.1:3000/files/1762497417438.png"
                    alt="1762497417438.png" data-href="/files/1762497417438.png" style=""></p>
                <h2 style="text-align: start;">Oxc：共享 AST 的 JavaScript 工具集合</h2>
                <p style="text-align: start;">如果说 Rolldown 是 Vite+ 的引擎，那么 <strong>Oxc (The Oxidation Compiler)</strong>
                  就是构建这个引擎的基石。Oxc 是一个用 Rust 编写的、全面的 JavaScript 工具集合，它包含了 Linter、转换器、压缩器等多个组件。</p>
                <p style="text-align: start;">传统工具链中，各个工具是独立工作的。例如，ESLint 会先解析一次代码生成抽象语法树 (AST)，然后 Babel
                  为了转换代码，会再次进行解析。这种重复的解析工作是巨大的性能浪费。</p>
                <p style="text-align: start;">Oxc 的核心架构创新在于其<strong>高性能的共享解析器</strong>。</p>
                <p style="text-align: start;">它只将源代码解析一次，生成一份 AST，随后 Oxc 生态中的所有工具（Linter、Transformer 等）都在这同一个 AST
                  上进行操作。这彻底消除了重复解析带来的性能开销。</p>
                <p style="text-align: start;">Oxc 的各个组件都展现了惊人的性能：</p>
                <p style="text-align: start;">| Oxc 组件 | 对比工具 | 性能提升 | | :--- | :--- | :--- | | <strong>解析器
                    (Parser)</strong> | SWC | 快 3 倍 | | <strong>Linter (Oxlint)</strong> | ESLint | 快 50-100 倍 | |
                  <strong>转换器 (Transformer)</strong> | Babel | 快 40 倍 | | <strong>解析器 (Resolver)</strong> |
                  enhanced-resolve | 快 28 倍 |
                </p>
                <p style="text-align: start;">转向 Rust 并采用共享 AST 架构，是 Vite+ 克服当前 JavaScript 工具链瓶颈的战略选择。它消除了 JS
                  与原生代码边界的性能损耗，并解锁了下一个数量级的性能提升。</p>
                <h2 style="text-align: start;">统一化的命令行体验</h2>
                <p style="text-align: start;">基于 Rolldown 和 Oxc 的强大基础，Vite+ 将过去分散的工具整合为一套统一的命令行界面，极大地简化了开发者的日常工作。</p>
                <p style="text-align: start;">除了我们熟悉的 <span
                    style="color: rgb(39, 39, 42); background-color: rgb(244, 244, 245);"><code>vite dev</code></span> 和
                  <span
                    style="color: rgb(39, 39, 42); background-color: rgb(244, 244, 245);"><code>vite build</code></span>，Vite+
                  还引入了：
                </p>
                <ul>
                  <li style="text-align: start;"><span
                      style="color: rgb(39, 39, 42); background-color: rgb(244, 244, 245);"><code>vite test</code></span>：由
                    <strong>Vitest</strong> 驱动，复用应用配置，提供与 Jest 兼容的 API，实现了测试环境与开发环境的无缝统一。
                  </li>
                  <li style="text-align: start;"><span
                      style="color: rgb(39, 39, 42); background-color: rgb(244, 244, 245);"><code>vite lint</code></span>：集成基于
                    Oxc 的 <strong>Oxlint</strong>，带来比 ESLint 快 100 倍的代码检查速度，并内置 600+ 规则。</li>
                  <li style="text-align: start;"><span
                      style="color: rgb(39, 39, 42); background-color: rgb(244, 244, 245);"><code>vite fmt</code></span>：使用
                    Oxc 中的 <strong>Oxfmt</strong> 作为格式化引擎，目标是与 Prettier 99% 兼容，同时提供更高的灵活性。</li>
                  <li style="text-align: start;"><span
                      style="color: rgb(39, 39, 42); background-color: rgb(244, 244, 245);"><code>vite run</code></span>：一个内置缓存功能的
                    Monorepo 任务运行器，通过“智能输入推断”技术，大多数任务无需手动配置即可被缓存，极大地简化了大型代码库的管理。</li>
                </ul>
                <p style="text-align: start;">这些命令并非简单的工具封装，它们共享底层的 Oxc 解析器，确保了配置的一致性和极致的运行效率。</p>
                <h2 style="text-align: start;">总结</h2>
                <p style="text-align: start;">最后总结一下，Vite+ 的技术革新主要源于两大核心：</p>
                <ol>
                  <li style="text-align: start;"><strong>转向 Rust 语言</strong>：通过使用 Rust 重写整个工具链，从根本上解决了 JavaScript
                    作为解释型语言的性能天花板问题。</li>
                  <li style="text-align: start;"><strong>统一化架构</strong>：</li>
                </ol>
                <p style="text-align: start;">Vite+ 不仅仅是让我们的 <span
                    style="color: rgb(39, 39, 42); background-color: rgb(244, 244, 245);"><code>dev</code></span> 和
                  <span style="color: rgb(39, 39, 42); background-color: rgb(244, 244, 245);"><code>build</code></span>
                  命令变得更快，它更是对前端开发工作流的一次系统性重构，旨在用一个统一、高效的工具链，终结困扰我们已久的“JavaScript 疲劳”。
                </p>
                <p style="text-align: start;"><img src="http://127.0.0.1:3000/files/1762497462287.png"
                    alt="1762497462287.png" data-href="/files/1762497462287.png" style=""></p>
              </div>
            </div>
            <div class="article-tool">
              <div class="article-tool-share" @click="shareLink">
                <IconShareOutline />
              </div>
            </div>
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
                    <yk-button type="primary" :disabled="isSubmit" size="m">评论</yk-button>
                  </div>
                </yk-space>
              </div>
              <p class="comment-list-title">
                评论 3
              </p>
              <yk-space size="m" dir="vertical">
                <commentItem v-for="item in 3" :key="item" />
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
.model-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
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
  z-index: 999;
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

      /* 图片等媒体等比缩放并居中 */
      .article-content-article img {
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
      .article-content-article iframe,
      .article-content-article video {
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
</style>