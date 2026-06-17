<template>
  <div>
    <label for="account-number" class="block text-sm/6 font-medium text-gray-900">Account number</label>
    <div class="mt-2 grid grid-cols-1">
      <input type="text" name="account-number" id="account-number" class="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-10 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pr-9 sm:text-sm/6" placeholder="000-00-0000" />
      <QuestionMarkCircleIcon class="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-gray-400 sm:size-4" aria-hidden="true" />
    </div>
  </div>
</template>

<script setup>
import { QuestionMarkCircleIcon } from '@heroicons/vue/16/solid'
</script>