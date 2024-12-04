import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            "Android 4.1",
            "iOS 7.1",
            "Chrome > 31",
            "ff > 31",
            "ie >= 8"
          ]
        })
      ]
    },
    preprocessorOptions: {
      less: {
        math: "always"
      }
    }
  },
  resolve: {
    alias: {
      // 使用 @ 替换src目录
      '@': resolve(__dirname, './src')
    }
  }

})
