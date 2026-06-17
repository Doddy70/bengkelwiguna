<template>
  <div>
    <div class="flex justify-between">
      <label for="email" class="block text-sm/6 font-medium text-gray-900">Email</label>
      <span class="text-sm/6 text-gray-500" id="email-optional">Optional</span>
    </div>
    <div class="mt-2">
      <input type="email" name="email" id="email" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="you@example.com" aria-describedby="email-optional" />
    </div>
  </div>
</template>
