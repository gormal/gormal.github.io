<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Icon } from '@iconify/vue'

type SearchResults = {
  id: String,
  title: String,
  score: Number
  article_title: String
}

const searchInput = ref<HTMLInputElement | null>(null);
const searchString = ref('')
const results = ref<SearchResults[]>([])
const searching = ref(false)
const isDialogOpen = ref(false);

const closeDialog = () => {
  isDialogOpen.value = false;
}

const getAnchorFromUrl = (url: String): String => {
  const parts = url.split('#');
  return parts.length > 1 ? parts[1] : '';
}

const keyDownHandler = (event: KeyboardEvent) => {
  if (event.ctrlKey && event.key === "k") {
    isDialogOpen.value = true;
    event.preventDefault()
  }
};

const focusSearchInput = () => {
  nextTick(() => {
    if (searchInput.value) {
      searchInput.value.focus();
    }
  });
}

watchEffect(() => {
  isDialogOpen.value === true ?
    focusSearchInput() :
    searchString.value = "";
    results.value = [];
})

const search = async () => {
  searching.value = true
  const res = await searchContent(searchString.value, {})
  results.value = res.value.map((result: any) => {
    return {
      id: result.id,
      title: result.title,
      score: result.score,
      article_title: result.titles[0] ?? getAnchorFromUrl(result.id)
    }
  }).sort((result: SearchResults) => result.score)
  searching.value = false
}
onBeforeMount(() => {
  window.addEventListener("keydown", keyDownHandler)
});
</script>

<template>
  <Dialog v-model:open="isDialogOpen">
    <DialogTrigger as-child>
      <Button variant="outline"
        class="h-9 w-9 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 rounded-full px-2 py-2 shadow-md focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:ring-gray-300 dark:hover:ring-gray-700 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 dark:text-dark-text-secondary hover:text-gray-700 dark:hover:text-gray-200 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400">
        <Icon icon="icons8:search" class="xl:text-xl md:text-lg" />
      </Button>
    </DialogTrigger>
    <DialogContent class="focus:outline-none focus-visible:outline-none focus:right-0 focus-visible:ring-0 max-w-xs sm:max-w-md md:max-w-2xl xl:min-w-[786px] text-light-text-primary dark:text-dark-text-primary p-0">
      <Input ref="searchInput" placeholder="Search..."
        class="rounded-b-none focus-visible:ring-0 focus-visible:ring-zinc-950 focus-visible:ring-offset-0 focus-visible:outline-none border-0 border-b-2 w-full h-12"
        v-model="searchString" @update:modelValue="search" />
      <div class="overflow-y-auto scrollbar h-96">
        <div v-if="results.length > 0" v-for="result in results" class="flex items-center p-2 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 ">
          <div class="pr-1">
            <Icon icon="icons8:document" class="xl:text-xl md:text-lg" />
          </div>
          <div>
            <a @click="closeDialog()" :href="result.id.toString()" class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-semibold">
              {{ result.article_title }} > {{ result.title }}
            </a>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>