---
title: "How to Build asdsd"
author: "John Doe"
date: "Jun 21, 2023"
description: "set it up."
---

# How to Build asdsd
### useDark
set-up a simple script that will run before the page is loaded. It's importat to apply the dark mode attribute/class to html as body is renderded by nuxt


const colorScheme = localStorage.getItem('vueuse-color-scheme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); document.documentElement.setAttribute('theme', colorScheme)

### github workflow does not fail when npx nuxt build --preset github_pages fails

### archive page needs to list all articles in order for nuxt preprender them 
could be fix with prerender:routes?
[x] done
### each md file needs to have a title to be included in the index
https://github.com/nuxt/content/blob/main/src/runtime/server/search.ts#L29

### timeline
https://codepen.io/k950212/pen/JjejegX
just testing color scheme
