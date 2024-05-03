<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icon } from '@iconify/vue'


const searchString = ref('')
const results = ref([])
const searching = ref(false)

const search = async () => {
  searching.value = true
  const res = await searchContent(searchString.value, {})
  results.value = res.value // res is a computed so we pluck out the .value and just add it to our ref
  searching.value = false
  console.log(results.value)
}
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline">
        <Icon icon="icons8:search"
          class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        Search
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px] max-h-[700px] min-h-[700px]">
      <DialogHeader>
        <DialogTitle>Search</DialogTitle>
        <DialogDescription>
          What are you searching for?.
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="name" class="text-right">
            Name
          </Label>
          <Input id="name" class="col-span-3" v-model="searchString" @update:modelValue="search" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          {{ results }}
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>