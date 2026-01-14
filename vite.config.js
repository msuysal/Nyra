import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                contact: resolve(__dirname, 'contact.html'),
                insights: resolve(__dirname, 'insights.html'),
                post: resolve(__dirname, 'post.html'),
                careers: resolve(__dirname, 'careers.html'),
                privacy: resolve(__dirname, 'privacy.html'),
                '404': resolve(__dirname, '404.html'),
                terms: resolve(__dirname, 'terms.html'),
                faq: resolve(__dirname, 'faq.html'),
                about: resolve(__dirname, 'about.html'),
                'agency-collab': resolve(__dirname, 'agency-collab.html'),
            }
        }
    }
})
