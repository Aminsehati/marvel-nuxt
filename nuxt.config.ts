// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr:true,
    css: ['@/assets/css/main.scss'],
    runtimeConfig: {
        public: {
            baseAPI: process.env.BASE_API || 'https://gateway.marvel.com/v1/public/',
            publicKey: process.env.PUBLIC_KEY || '1df38ba604f84d68f7d485588ba7181c',
            privateKey: process.env.PRIVATE_KEY || '20e2bd040bd2a256d72b024d3a28c2065fa9efc6'
        }
    },
    plugins: [
        {
            src: "@/plugins/vue-awesome-paginate.client.ts",
        },
        {
            src: "@/plugins/utils.ts",
        }
    ],
    modules: ["@nuxtjs-alt/proxy"],
    proxy: {
        enableProxy: true,
        proxies: {
            "/site_url": {
                target: 'https://gateway.marvel.com/v1/public/',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/site_url/, ""),
            },
        },
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    build: {
        transpile: ['vue-awesome-paginate']
    },
})
