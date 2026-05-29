import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  // 👇 이 부분을 추가합니다. (양쪽 슬래시 / / 필수)
  base: '/gnaerocare-web/', // GitHub에 만든 저장소(Repository) 이름을 적어주세요.
  
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})