import TimeToRead from './modules/time-to-read/module'
import { promises as fs } from 'fs'
import path from 'path'
import slugify from 'slugify'

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', TimeToRead, '@nuxt/content', 'shadcn-nuxt', '@nuxtjs/color-mode'],
    css: ['/assets/css/main.css'],
    ssr: true,
    experimental: {
        payloadExtraction: false
    },
    router: {
        options: {
            strict: true
        }
    },
    features: {
        inlineStyles: false,
    },
    sourcemap: false,
    content: {
        highlight: {
            theme: {
                default: 'light-plus',
                dark: 'dark-plus',
            },
            preload: ['csharp', 'javascript', 'diff']
        },
        experimental: {
            search: {
                indexed: true,
                options:
                {
                    fields: ['title', 'content', 'titles', 'level'],
                    storeFields: ['title', 'titles', 'level'],
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
    },
    hooks: {
        'prerender:routes': async function (ctx) {
            const blogDir = path.resolve(__dirname, 'content/blog')
            const files = await fs.readdir(blogDir)
            
            const blogRoutes = files
                .filter(file => file.endsWith('.md'))
                .map(file => {
                    const routeName = slugify(path.basename(file, '.md'), { lower: true})
                    return `/blog/${routeName}`
                })
            blogRoutes.forEach(route => ctx.routes.add(route))
        }
    }
});