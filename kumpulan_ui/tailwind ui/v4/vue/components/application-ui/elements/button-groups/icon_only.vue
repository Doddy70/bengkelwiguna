<template>
  <span class="isolate inline-flex rounded-md shadow-xs">
    <button type="button" class="relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-10">
      <span class="sr-only">Previous</span>
      <ChevronLeftIcon class="size-5" aria-hidden="true" />
    </button>
    <button type="button" class="relative -ml-px inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-10">
      <span class="sr-only">Next</span>
      <ChevronRightIcon class="size-5" aria-hidden="true" />
    </button>
  </span>
</template>

<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'
</script>