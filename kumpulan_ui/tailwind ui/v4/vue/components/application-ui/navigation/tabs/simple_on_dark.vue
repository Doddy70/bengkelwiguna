<template>
  <div class="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <div class="grid grid-cols-1 sm:hidden">
        <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
        <select aria-label="Select a tab" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-2 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500">
          <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
        </select>
        <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-400" aria-hidden="true" />
      </div>
      <div class="hidden sm:block">
        <nav class="flex border-b border-white/10 py-4">
          <ul role="list" class="flex min-w-full flex-none gap-x-8 px-2 text-sm/6 font-semibold text-gray-400">
            <li v-for="tab in tabs" :key="tab.name">
              <a :href="tab.href" :class="tab.current ? 'text-indigo-400' : ''">{{ tab.name }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronDownIcon } from '@heroicons/vue/16/solid'

const tabs = [
  { name: 'My Account', href: '#', current: false },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: true },
  { name: 'Billing', href: '#', current: false },
]
</script>