import { defineConfig } from 'vite'
import path from 'path'
import vitePluginImp from 'vite-plugin-imp'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`
        }
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve('src'),
      components: path.resolve('src/components'),
      views: path.resolve('src/views'),
      apis: path.resolve('src/apis'),
      styles: path.resolve('src/styles'),
      utils: path.resolve('src/utils'),
      plugins: path.resolve('src/plugins')
    }
  }
})
