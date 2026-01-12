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
                privacy: resolve(__dirname, 'privacy.html'),
                'use-cases': resolve(__dirname, 'use-cases.html'),
                'b2b-authority': resolve(__dirname, 'solutions/b2b-authority.html'),
                'reach-awareness': resolve(__dirname, 'solutions/reach-awareness.html'),
                'social-proof': resolve(__dirname, 'solutions/social-proof.html'),
                'performance-conversion': resolve(__dirname, 'solutions/performance-conversion.html'),
                '404': resolve(__dirname, '404.html'),
            }
        }
    }
})
