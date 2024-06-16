<template>
     <PostTile v-for="article in articles" :article="article" class="first:pt-0 p-6 last:pb-0" />
</template>

<script setup lang="ts">
const articles : ArticleMetadata[] = await getNewestArticlesMetadata(-1);
</script>