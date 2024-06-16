<script setup lang="ts">
import { Icon } from '@iconify/vue'

const to = (url) => {
  window.open(url, '_blank');
}
</script>

<template>
  <nav class="inline-flex py-4 px-4 flex-row md:flex-col gap-4 items-center justify-between w-full h-full dark:bg-dark-secondary bg-light-secondary border-b-4 md:border-r-4 dark:border-gray-800/50 border-gray-200/50">
    <div class="hidden md:inline-flex md:flex-col gap-4 md:items-center md:text-center">
      <Avatar class="w-20 h-20">
        <AvatarImage src="https://github.com/gormal.png" alt="Jiri Kotasek profile picture" />
        <AvatarFallback>JK</AvatarFallback>
      </Avatar>
      <div>
        A passionate software engineer specializing in the .NET stack
      </div>
      <Separator class="dark:bg-gray-200/50" />
    </div>
    <div class="inline-flex flex-row md:flex-col gap-4 items-center md:justify-center w-full">
      <div>
        <MenuLink to="/"
          class="gap-2 rounded-md px-5 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-dark-secondary hover:text-gray-900  focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:text-gray-50 dark:text-gray-50">
          Home
        </MenuLink>
      </div>

      <!-- <NuxtLink to="/archive">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
      </svg>
      Archive
    </NuxtLink> -->
      <div>
        <MenuLink to="/about"
          class="gap-2 rounded-md px-5 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-dark-secondary hover:text-gray-900  focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:text-gray-50 dark:text-gray-50">
          About
        </MenuLink>
      </div>
    </div>

    <div class="inline-flex gap-0 sm:gap-2 md:gap-2 lg:gap-4 xl:gap-6 justify-end md:mt-auto md:mb-10 md:justify-center w-full">
      <Search></Search>
      <Separator orientation="vertical" class="dark:bg-gray-200/50" />
      <ThemeToggle></ThemeToggle>
      <Separator orientation="vertical" class="dark:bg-gray-200/50" />
      <Button variant="outline" @click="to('https://x.com/Kotas24')"
        class="h-9 w-9 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 rounded-full px-2 py-2 shadow-md focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:ring-gray-300 dark:hover:ring-gray-700 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 dark:text-dark-text-secondary hover:text-gray-700 dark:hover:text-gray-200 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400">
        <Icon icon="hugeicons:new-twitter" class="xl:text-xl md:text-lg" />
      </Button>
      <Separator orientation="vertical" class="dark:bg-gray-200/50" />
      <Button variant="outline" @click="to('https://github.com/gormal')"
        class="h-9 w-9 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 rounded-full px-2 py-2 shadow-md focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:ring-gray-300 dark:hover:ring-gray-700 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 dark:text-dark-text-secondary hover:text-gray-700 dark:hover:text-gray-200 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400">
        <Icon icon="bi:github" class="xl:text-xl md:text-lg" />
      </Button>
    </div>
  </nav>
</template>