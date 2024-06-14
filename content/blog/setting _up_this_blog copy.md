---
title: "How to asdad"
author: "John Doe"
date: "Jun 21, 2023"
description: "copy pasta."
---

# useDark
set-up a simple script that will run before the page is loaded. It's importat to apply the dark mode attribute/class to html as body is renderded by nuxt

```javascript
const colorScheme = localStorage.getItem('vueuse-color-scheme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); document.documentElement.setAttribute('theme', colorScheme)
```
# github workflow does not throw when
```bash
npx nuxt build --preset github_pages
```
fails

# how to pre-render all routes
