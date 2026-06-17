<template>
  <div class="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
    <h3 class="text-base font-semibold text-gray-900">Job Postings</h3>
    <div class="mt-3 flex sm:mt-0 sm:ml-4">
      <div class="-mr-px grid grow grid-cols-1 focus-within:relative">
        <input type="text" name="query" id="query" aria-label="Search candidates" class="col-start-1 row-start-1 block w-full rounded-l-md bg-white py-1.5 pr-3 pl-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6" placeholder="Search candidates" />
        <MagnifyingGlassIcon class="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4" aria-hidden="true" />
      </div>
      <button type="button" class="flex shrink-0 items-center gap-x-1.5 rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 outline-1 -outline-offset-1 outline-gray-300 hover:bg-gray-50 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
        <BarsArrowUpIcon class="-ml-0.5 size-4 text-gray-400" aria-hidden="true" />
        Sort
      </button>
    </div>
  </div>
</template>

<script setup>
import { BarsArrowUpIcon, MagnifyingGlassIcon } from '@heroicons/vue/16/solid'
</script>