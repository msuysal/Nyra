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
                'awareness-reach': resolve(__dirname, 'solutions/awareness-reach.html'),
                'product-review': resolve(__dirname, 'solutions/product-review.html'),
                'sales-partnership': resolve(__dirname, 'solutions/sales-partnership.html'),
                'thought-leadership': resolve(__dirname, 'solutions/thought-leadership.html'),
                'technical-trust': resolve(__dirname, 'solutions/technical-trust.html'),
                'market-education': resolve(__dirname, 'solutions/market-education.html'),
                'whitepaper-collab': resolve(__dirname, 'solutions/whitepaper-collab.html'),
                'reputation-trust': resolve(__dirname, 'solutions/reputation-trust.html'),
                'brand-affinity': resolve(__dirname, 'solutions/brand-affinity.html'),
                'event-amplification': resolve(__dirname, 'solutions/event-amplification.html'),
                '404': resolve(__dirname, '404.html'),
            }
        }
    }
})
