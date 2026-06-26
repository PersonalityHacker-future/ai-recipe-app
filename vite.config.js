import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175,
    proxy: {
      '/recipe-api/deepseek': {
        target: 'https://api.deepseek.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/recipe-api\/deepseek/, '/v1'),
      },
      '/recipe-api/dashscope': {
        target: 'https://dashscope.aliyuncs.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/recipe-api\/dashscope/, '/compatible-mode/v1'),
      },
      '/recipe-api/zhipu': {
        target: 'https://open.bigmodel.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/recipe-api\/zhipu/, '/api/paas/v4'),
      },
      '/recipe-api/moonshot': {
        target: 'https://api.moonshot.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/recipe-api\/moonshot/, '/v1'),
      },
    },
  },
})
