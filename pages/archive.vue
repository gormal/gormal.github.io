<template>
    <div class="p-6 sm:p-10">
        <div
            class="after:absolute after:inset-y-0 after:w-px after:bg-gray-500/20 relative pl-6 after:left-0 grid gap-10 dark:after:bg-gray-400/20">
            <div class="grid gap-6">
                <div v-for="year in years" class="grid gap-1 text-sm relative">
                    <div
                        class="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50">
                    </div>
                    <div class="font-medium">{{ year }}</div>
                    <a :href="article.path" v-for="article in articlesByYear[year]" class="grid gap-1 p-2 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 dark:text-blue-500 text-blue-400">
                        <div
                            class="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50">
                        </div>
                        <div class="font-medium " :href="article.path">
                            {{ getDate(article.date) }} - {{ article.title }}
                        </div>
                        <div class="text-gray-500 dark:text-gray-400">{{ article.description }}</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!-- <PostTile v-for="article in articles" :article="article" /> -->
</template>

<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'

const getYear = (date: Date) => useDateFormat(date, 'YYYY').value
const getDate = (date: Date) => useDateFormat(date, 'MMM DD').value

const groupArticlesByYear = (articles: ArticleMetadata[]): Record<string, ArticleMetadata[]> => {
  const groupedArticles: Record<string, ArticleMetadata[]> = {};

  articles.forEach((article) => {
    const year = getYear(article.date);

    if (!groupedArticles[year]) {
      groupedArticles[year] = [];
    }

    groupedArticles[year].push(article);
  });

  return groupedArticles;
}

const articles = await getAllArticlesMetadata();
const articlesByYear = groupArticlesByYear(articles)
const years = Object.keys(articlesByYear).sort().reverse()
</script>