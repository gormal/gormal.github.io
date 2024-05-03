<template>
     <PostTile v-for="article in articles" :article="article" />
</template>

<script setup lang="ts">
const articles : ArticleMetadata[] = await getNewestArticlesMetadata(2);
</script>