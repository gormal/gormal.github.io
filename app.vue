<template>
  <main class="flex flex-col md:flex-row text-base text-light-text-primary dark:text-dark-text-primary h-screen">
    <div class="md:w-1/4">
      <Menu />
    </div>
    <div class="md:w-3/4 overflow-y-auto scrollbar px-6 md:px-16 py-6">
      <NuxtPage />
    </div>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'No edge',
  meta: [
    { name: 'description', content: 'Personal blog site.' }
  ],
  htmlAttrs: { lang: "en-gb"}
})
</script>
