<template>
  <fieldset>
    <legend class="text-sm/6 font-semibold text-gray-900">Select a mailing list</legend>
    <RadioGroup v-model="selectedMailingLists" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
      <RadioGroupOption as="template" v-for="mailingList in mailingLists" :key="mailingList.id" :value="mailingList" :aria-label="mailingList.title" :aria-description="`${mailingList.description} to ${mailingList.users}`" v-slot="{ active, checked }">
        <div :class="[active ? 'border-indigo-600 ring-2 ring-indigo-600' : 'border-gray-300', 'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-xs focus:outline-hidden']">
          <span class="flex flex-1">
            <span class="flex flex-col">
              <span class="block text-sm font-medium text-gray-900">{{ mailingList.title }}</span>
              <span class="mt-1 flex items-center text-sm text-gray-500">{{ mailingList.description }}</span>
              <span class="mt-6 text-sm font-medium text-gray-900">{{ mailingList.users }}</span>
            </span>
          </span>
          <CheckCircleIcon :class="[!checked ? 'invisible' : '', 'size-5 text-indigo-600']" aria-hidden="true" />
          <span :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-600' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-lg']" aria-hidden="true" />
        </div>
      </RadioGroupOption>
    </RadioGroup>
  </fieldset>
</template>

<script setup>
import { ref } from 'vue'
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

const mailingLists = [
  { id: 1, title: 'Newsletter', description: 'Last message sent an hour ago', users: '621 users' },
  { id: 2, title: 'Existing customers', description: 'Last message sent 2 weeks ago', users: '1200 users' },
  { id: 3, title: 'Trial users', description: 'Last message sent 4 days ago', users: '2740 users' },
]

const selectedMailingLists = ref(mailingLists[0])
</script>