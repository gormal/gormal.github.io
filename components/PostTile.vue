<template>
    <div>
        <a :href="article.path">
            <div class="space-y-4 p-6 hover:bg-gray-200/50 dark:hover:bg-gray-800/50">
                <h3 class="text-xl font-semibold">{{
                    article.title }}</h3>
                <p class="text-gray-500 dark:text-gray-400">{{ article.description }}</p>
                <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-500 dark:text-gray-400">{{ article.date }}</span>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{{ article.timeToRead }}</span>
                </div>
            </div>
        </a>
    </div>
</template>

<script setup lang="ts">
    defineProps<{ article: ArticleMetadata }>()
</script>