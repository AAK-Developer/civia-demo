import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
    base: './',
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.svg'],
            manifest: {
                name: 'CivIA Ciudadanía',
                short_name: 'CivIA',
                description: 'Plataforma inteligente de relación entre ayuntamiento y ciudadanía',
                theme_color: '#0b2b26',
                background_color: '#f6f8f7',
                display: 'standalone',
                start_url: './#/app',
                icons: [
                    { src: 'pwa-192.svg', sizes: '192x192', type: 'image/svg+xml' },
                    { src: 'pwa-512.svg', sizes: '512x512', type: 'image/svg+xml' }
                ]
            }
        })
    ]
});
