<template>
  <main class="flex max-w-screen-xl mx-auto px-4 sm:px-6 xl:px-10 py-5 xl:py-10 text-base text-black ">
    <div class="w-1/4">
      <Menu />
    </div>
    <div class="w-3/4">
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
