<template>
  <div class="relative">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t border-gray-300" />
    </div>
    <div class="relative flex justify-center">
      <span class="isolate inline-flex -space-x-px rounded-md shadow-xs">
        <button type="button" class="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-10">
          <span class="sr-only">Edit</span>
          <PencilIcon class="size-5" aria-hidden="true" />
        </button>
        <button type="button" class="relative inline-flex items-center bg-white px-3 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-10">
          <span class="sr-only">Attachment</span>
          <PaperClipIcon class="size-5" aria-hidden="true" />
        </button>
        <button type="button" class="relative inline-flex items-center bg-white px-3 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-10">
          <span class="sr-only">Annotate</span>
          <ChatBubbleBottomCenterTextIcon class="size-5" aria-hidden="true" />
        </button>
        <button type="button" class="relative inline-flex items-center rounded-r-md bg-white px-3 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-10">
          <span class="sr-only">Delete</span>
          <TrashIcon class="size-5" aria-hidden="true" />
        </button>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ChatBubbleBottomCenterTextIcon, PaperClipIcon, PencilIcon, TrashIcon } from '@heroicons/vue/20/solid'
</script>