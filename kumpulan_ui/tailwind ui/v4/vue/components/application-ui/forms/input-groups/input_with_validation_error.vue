<template>
  <div>
    <label for="email" class="block text-sm/6 font-medium text-gray-900">Email</label>
    <div class="mt-2 grid grid-cols-1">
      <input type="email" name="email" id="email" class="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-10 pl-3 text-base text-red-900 outline-1 -outline-offset-1 outline-red-300 placeholder:text-red-300 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 sm:pr-9 sm:text-sm/6" placeholder="you@example.com" value="adamwathan" aria-invalid="true" aria-describedby="email-error" />
      <ExclamationCircleIcon class="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-red-500 sm:size-4" aria-hidden="true" />
    </div>
    <p class="mt-2 text-sm text-red-600" id="email-error">Not a valid email address.</p>
  </div>
</template>

<script setup>
import { ExclamationCircleIcon } from '@heroicons/vue/16/solid'
</script>