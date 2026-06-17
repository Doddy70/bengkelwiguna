<template>
  <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl sm:text-center">
      <h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact sales</h2>
      <p class="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
    </div>
    <div class="mx-auto mt-20 max-w-lg space-y-16">
      <div class="flex gap-x-6">
        <div class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
          <ChatBubbleLeftRightIcon class="size-6 text-white" aria-hidden="true" />
        </div>
        <div>
          <h3 class="text-base/7 font-semibold text-gray-900">Sales support</h3>
          <p class="mt-2 text-base/7 text-gray-600">Ut cursus est ut amet. Lobortis eget egestas leo vitae eget porttitor risus blandit. Nunc a in lorem vel iaculis porttitor.</p>
          <p class="mt-4 text-sm/6 font-semibold">
            <a href="#" class="text-indigo-600">Contact us <span aria-hidden="true">&rarr;</span></a>
          </p>
        </div>
      </div>
      <div class="flex gap-x-6">
        <div class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
          <BugAntIcon class="size-6 text-white" aria-hidden="true" />
        </div>
        <div>
          <h3 class="text-base/7 font-semibold text-gray-900">Bug reports</h3>
          <p class="mt-2 text-base/7 text-gray-600">Expedita qui non ut quia ipsum voluptatum ipsam pariatur. Culpa vitae ipsum minus eius vero quo quibusdam.</p>
          <p class="mt-4 text-sm/6 font-semibold">
            <a href="#" class="text-indigo-600">Report a bug <span aria-hidden="true">&rarr;</span></a>
          </p>
        </div>
      </div>
      <div class="flex gap-x-6">
        <div class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
          <ComputerDesktopIcon class="size-6 text-white" aria-hidden="true" />
        </div>
        <div>
          <h3 class="text-base/7 font-semibold text-gray-900">Technical support</h3>
          <p class="mt-2 text-base/7 text-gray-600">Sint aut modi porro consequatur architecto commodi qui consequatur. Dignissimos adipisci minima.</p>
          <p class="mt-4 text-sm/6 font-semibold">
            <a href="#" class="text-indigo-600">Join our Discord <span aria-hidden="true">&rarr;</span></a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BugAntIcon, ChatBubbleLeftRightIcon, ComputerDesktopIcon } from '@heroicons/vue/24/outline'
</script>