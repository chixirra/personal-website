import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import { createHtmlPlugin } from 'vite-plugin-html' // Import the plugin
import config from './src/config' // Assuming your config is located here

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    vueDevTools(),
    createHtmlPlugin({
      inject: {
        data: {
          title: config.metadata.title,
          description: config.metadata.description,
          keywords: config.metadata.keywords,
          author: config.metadata.author,
          color: config.metadata.color,
          url: config.metadata.url,
          image: config.metadata.image,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
