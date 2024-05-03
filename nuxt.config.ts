import TimeToRead from './modules/time-to-read/module'

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', TimeToRead, '@nuxt/content', 'shadcn-nuxt', '@nuxtjs/color-mode'],
    css: ['/assets/css/main.css'],
    ssr: true,
    experimental: {
        payloadExtraction: false
    },
    router: {
        options: {
            strict: false
        }
    },
    sourcemap: false,
    content: {
        // https://content.nuxtjs.org/api/configuration
        highlight: {
            theme: 'github-dark',
            preload: ['java', 'javascript']
        },
          experimental: {
            search: {
                indexed: true,
                options:
                {
                    fields: ['title', 'content', 'titles', 'level'],
                    storeFields: ['title', 'content'],
                    searchOptions: {
                        prefix: true,
                        fuzzy: 0.2,
                        boost: {
                            title: 4,
                            content: 2,
                            titles: 1
                        }
                    }
                }
            }
        }
    },
    shadcn: {
        prefix: '',
        componentDir: './components/ui'
    },
    colorMode: {
        classSuffix: ''
    }
});