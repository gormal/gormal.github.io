<template>
    <div>
        <CustomNuxtLink :to="prop.to"
            class="gap-2 rounded-md px-5 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-200/50 dark:hover:bg-gray-800/50">
            {{ prop.name }}
        </CustomNuxtLink>
    </div>
</template>

<script setup lang="ts">
const prop = defineProps<{ name: string, to: string }>()
</script>