<script setup lang="ts">
import { Icon } from '@iconify/vue'
const colorMode = useColorMode()
const toggleDark = () => {
  if (colorMode.preference == 'dark') {
    colorMode.preference = 'light'
  }
  else {
    colorMode.preference = 'dark'
  }
}
</script>
<template>
  <Button @click="toggleDark()" variant="outline" class="h-9 w-9 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 rounded-full px-2 py-2 shadow-md focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:ring-gray-300 dark:hover:ring-gray-700 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 dark:text-dark-text-secondary hover:text-gray-700 dark:hover:text-gray-200 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400">
    <ColorScheme placeholder="..." tag="span">
      <Icon v-if="colorMode.value == 'light'" icon="radix-icons:moon" class="xl:text-xl md:text-lg" />
      <Icon v-if="colorMode.value == 'dark'" icon="radix-icons:sun" class="xl:text-xl md:text-lg" />
    </ColorScheme>
  </Button>
</template>
