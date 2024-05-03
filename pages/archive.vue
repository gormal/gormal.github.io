<template>
    <PostTile v-for="article in articles" :article="article" />
</template>

<script setup lang="ts">
    const articles = await getAllArticlesMetadata()
</script>