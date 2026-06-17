<template>
  <div>
    <fieldset>
      <legend class="block text-sm/6 font-medium text-gray-900">Card details</legend>
      <div class="mt-2 grid grid-cols-2">
        <div class="col-span-2">
          <input type="text" id="card-number" name="card-number" aria-label="Card number" class="block w-full rounded-t-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="Card number" />
        </div>
        <div class="-mt-px -mr-px">
          <input type="text" id="card-expiration-date" name="card-expiration-date" aria-label="Expiration date" class="block w-full rounded-bl-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="MM / YY" />
        </div>
        <div class="-mt-px">
          <input type="text" id="card-cvc" name="card-cvc" aria-label="CVC" class="block w-full rounded-br-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="CVC" />
        </div>
      </div>
    </fieldset>
    <fieldset class="mt-6">
      <legend class="block text-sm/6 font-medium text-gray-900">Billing address</legend>
      <div class="mt-2">
        <div class="grid grid-cols-1 focus-within:relative">
          <select id="country" name="country" autocomplete="country-name" aria-label="Country" class="col-start-1 row-start-1 w-full appearance-none rounded-t-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
          <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" aria-hidden="true" />
        </div>
        <div class="-mt-px">
          <input type="text" id="postal-code" name="postal-code" autocomplete="postal-code" aria-label="ZIP / Postal code" class="block w-full rounded-b-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="ZIP / Postal code" />
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script setup>
import { ChevronDownIcon } from '@heroicons/vue/16/solid'
</script>