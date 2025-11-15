import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5174,
    proxy: {
      '/api': {
        // 使用 127.0.0.1 避免在某些环境下 localhost 解析为 ::1 导致的连接拒绝
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        // 如需调试，可短期改回 localhost 或使用 devtools 网络面板查看
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/components/yike-design-ui/components/styles/basis.less";',
      },
    },
  },
})
