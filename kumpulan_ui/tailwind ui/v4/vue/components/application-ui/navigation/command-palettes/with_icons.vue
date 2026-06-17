<template>
  <TransitionRoot :show="open" as="template" @after-leave="query = ''" appear>
    <Dialog class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500/25 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="ease-in duration-200" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
          <DialogPanel class="mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white ring-1 shadow-2xl ring-black/5 transition-all">
            <Combobox @update:modelValue="onSelect">
              <div class="grid grid-cols-1">
                <ComboboxInput class="col-start-1 row-start-1 h-12 w-full pr-4 pl-11 text-base text-gray-900 outline-hidden placeholder:text-gray-400 sm:text-sm" placeholder="Search..." @change="query = $event.target.value" @blur="query = ''" />
                <MagnifyingGlassIcon class="pointer-events-none col-start-1 row-start-1 ml-4 size-5 self-center text-gray-400" aria-hidden="true" />
              </div>

              <ComboboxOptions v-if="query === '' || filteredProjects.length > 0" static as="ul" class="max-h-80 scroll-py-2 divide-y divide-gray-100 overflow-y-auto">
                <li class="p-2">
                  <h2 v-if="query === ''" class="mt-4 mb-2 px-3 text-xs font-semibold text-gray-500">Recent searches</h2>
                  <ul class="text-sm text-gray-700">
                    <ComboboxOption v-for="project in query === '' ? recent : filteredProjects" :key="project.id" :value="project" as="template" v-slot="{ active }">
                      <li :class="['flex cursor-default items-center rounded-md px-3 py-2 select-none', active && 'bg-indigo-600 text-white outline-hidden']">
                        <FolderIcon :class="['size-6 flex-none', active ? 'text-white forced-colors:text-[Highlight]' : 'text-gray-400']" aria-hidden="true" />
                        <span class="ml-3 flex-auto truncate">{{ project.name }}</span>
                        <span v-if="active" class="ml-3 flex-none text-indigo-100">Jump to...</span>
                      </li>
                    </ComboboxOption>
                  </ul>
                </li>
                <li v-if="query === ''" class="p-2">
                  <h2 class="sr-only">Quick actions</h2>
                  <ul class="text-sm text-gray-700">
                    <ComboboxOption v-for="action in quickActions" :key="action.shortcut" :value="action" as="template" v-slot="{ active }">
                      <li :class="['flex cursor-default items-center rounded-md px-3 py-2 select-none', active && 'bg-indigo-600 text-white outline-hidden']">
                        <component :is="action.icon" :class="['size-6 flex-none', active ? 'text-white forced-colors:text-[Highlight]' : 'text-gray-400']" aria-hidden="true" />
                        <span class="ml-3 flex-auto truncate">{{ action.name }}</span>
                        <span :class="['ml-3 flex-none text-xs font-semibold', active ? 'text-indigo-100' : 'text-gray-400']">
                          <kbd class="font-sans">⌘</kbd>
                          <kbd class="font-sans">{{ action.shortcut }}</kbd>
                        </span>
                      </li>
                    </ComboboxOption>
                  </ul>
                </li>
              </ComboboxOptions>

              <div v-if="query !== '' && filteredProjects.length === 0" class="px-6 py-14 text-center sm:px-14">
                <FolderIcon class="mx-auto size-6 text-gray-400" aria-hidden="true" />
                <p class="mt-4 text-sm text-gray-900">We couldn't find any projects with that term. Please try again.</p>
              </div>
            </Combobox>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { computed, ref } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { DocumentPlusIcon, FolderIcon, FolderPlusIcon, HashtagIcon, TagIcon } from '@heroicons/vue/24/outline'
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

const projects = [
  { id: 1, name: 'Workflow Inc. / Website Redesign', url: '#' },
  // More projects...
]
const recent = [projects[0]]
const quickActions = [
  { name: 'Add new file...', icon: DocumentPlusIcon, shortcut: 'N', url: '#' },
  { name: 'Add new folder...', icon: FolderPlusIcon, shortcut: 'F', url: '#' },
  { name: 'Add hashtag...', icon: HashtagIcon, shortcut: 'H', url: '#' },
  { name: 'Add label...', icon: TagIcon, shortcut: 'L', url: '#' },
]

const open = ref(true)
const query = ref('')
const filteredProjects = computed(() =>
  query.value === ''
    ? []
    : projects.filter((project) => {
        return project.name.toLowerCase().includes(query.value.toLowerCase())
      }),
)

function onSelect(item) {
  if (item) {
    window.location = item.url
  }
}
</script>