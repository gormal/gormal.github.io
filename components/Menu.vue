<script setup lang="ts">
import { Toggle } from '@/components/ui/toggle'
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
  <nav>
    <Search></Search>
    <Toggle @update:pressed="toggleDark()" variant="outline" aria-label="Toggle italic"
      class="h-16 w-16 shadow-md rounded-full">
      <ColorScheme placeholder="..." tag="span">
        <Icon v-if="colorMode.value == 'light'" icon="radix-icons:moon"
          class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icon v-if="colorMode.value == 'dark'" icon="radix-icons:sun"
          class="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </ColorScheme>
    </Toggle>
    <NuxtLink to="/">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
      Home
    </NuxtLink>
    <NuxtLink to="/archive">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
      </svg>
      Archive
    </NuxtLink>
    <NuxtLink to="/about">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
      About
    </NuxtLink>
  </nav>
</template>