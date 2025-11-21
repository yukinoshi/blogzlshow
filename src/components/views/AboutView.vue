<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue';
import TopBar from '../bar/TopBar.vue';
const proxy: any = getCurrentInstance()?.proxy

// 模拟的技术栈数据，你可以换成图标组件
const techStacks = [
  { name: 'Vue 3', desc: '渐进式 JavaScript 框架', color: '#42b883' },
  { name: 'TypeScript', desc: 'JavaScript 的超集', color: '#3178c6' },
  { name: 'Node.js', desc: '后端服务运行时', color: '#339933' },
  { name: 'Vite', desc: '极速的前端构建工具', color: '#646cff' },
  { name: 'Less', desc: 'CSS 预处理语言', color: '#1d365d' },
  { name: 'MySQL', desc: '关系型数据库', color: '#4479a1' },
];

// 站点运行时间计算
const startTime = new Date('2025-09-11').getTime(); // 修改为你的开始时间
const runDays = ref(Math.floor((Date.now() - startTime) / (1000 * 60 * 60 * 24)));
//点击复制
const copyEmail = () => {
  const email = '2972854873@qq.com';
  navigator.clipboard.writeText(email).then(() => {
    proxy.$message.success('邮箱地址已复制到剪贴板！');
  });
}
</script>

<template>
  <top-bar></top-bar>
  <div class="about-container">
    <!-- 头部 Banner -->
    <div class="header-section">
      <h1 class="title">关于 BlogZL</h1>
      <p class="subtitle">探索 · 记录 · 分享</p>
    </div>

    <div class="content-wrapper">
      <!-- 1. 项目初衷 -->
      <section class="section-card intro">
        <h2>💡 设计初衷</h2>
        <p>
          在信息碎片化的时代，我希望构建一个属于自己的数字花园。
          BlogZL 诞生于我的大学毕业设计，它不仅是对我大学四年编程技术的总结，
          也是我探索全栈开发之路的一个里程碑。在这里，我记录技术难题的攻克过程，
          也分享生活中的美好瞬间。
        </p>
      </section>

      <!-- 2. 技术栈展示 -->
      <section class="section-card tech">
        <h2>🛠️ 技术栈</h2>
        <div class="tech-grid">
          <div class="tech-item" v-for="item in techStacks" :key="item.name">
            <span class="tech-name" :style="{ color: item.color }">{{ item.name }}</span>
            <span class="tech-desc">{{ item.desc }}</span>
          </div>
        </div>
      </section>

      <!-- 3. 统计与作者 -->
      <div class="split-section">
        <section class="section-card author">
          <h2>👨‍💻 关于作者</h2>
          <div class="avatar-box">
            <!-- <img src="@/assets/avatar.jpg" alt="avatar" /> -->
            <div class="placeholder-avatar">Me</div>
          </div>
          <p class="author-name">邹礼</p>
          <p class="author-bio">热爱代码，热爱生活。正在全栈之路上不断探索。</p>
          <div class="social-links">
            <a href="https://github.com/yukinoshi" target="_blank">GitHub</a>
            <span class="divider">|</span>
            <a @click="copyEmail" style="cursor: pointer;">Email</a>
          </div>
        </section>

        <section class="section-card status">
          <h2>📊 站点状态</h2>
          <div class="stat-item">
            <span class="label">已平稳运行</span>
            <span class="value">{{ runDays }} <small>天</small></span>
          </div>
          <div class="stat-item">
            <span class="label">当前版本</span>
            <span class="value">v1.0.0</span>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.about-container {
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg-color-primary); // 假设你有全局变量
  padding-bottom: 60px;
}

.header-section {
  text-align: center;
  padding: 80px 20px 60px;

  .title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 16px;
    color: var(--font-color-primary);
  }

  .subtitle {
    font-size: 1.2rem;
    color: var(--font-color-secondary);
    letter-spacing: 2px;
  }
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.section-card {
  background: @bg-color-m;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    position: relative;
    padding-left: 16px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 20px;
      background-color: @pcolor; // 主题色
      border-radius: 2px;
    }
  }

  p {
    line-height: 1.8;
    color: #555;
  }
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;

  .tech-item {
    background: @bg-color-l;
    padding: 16px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .tech-name {
      font-weight: bold;
      font-size: 1.1rem;
      margin-bottom: 4px;
    }

    .tech-desc {
      font-size: 0.85rem;
      color: @gray-8;
    }
  }
}

.split-section {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.author {
  text-align: center;

  .avatar-box {
    width: 80px;
    height: 80px;
    margin: 0 auto 16px;
    border-radius: 50%;
    overflow: hidden;
    background: @gray-5;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .author-name {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .social-links {
    margin-top: 16px;

    a {
      color: #2c68ff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .divider {
      margin: 0 10px;
      color: #ddd;
    }

    .author-bio {
      color: #666;
    }
  }
}

.status {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  .stat-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;

    &:last-child {
      border-bottom: none;
    }

    .label {
      color: @gray-8;
    }

    .value {
      font-weight: bold;
      font-size: 1.2rem;
      color: #333;
    }
  }
}
</style>