import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                contact: resolve(__dirname, 'contact.html'),
                api: resolve(__dirname, 'api.html'),
                insights: resolve(__dirname, 'insights.html'),
                post: resolve(__dirname, 'post.html'),
                careers: resolve(__dirname, 'careers.html'),
                '404': resolve(__dirname, '404.html'),
            }
        }
    }
})
