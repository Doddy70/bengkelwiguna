<template>
  <div class="-space-y-px">
    <div class="rounded-t-md bg-white px-3 pt-2.5 pb-1.5 outline-1 -outline-offset-1 outline-gray-300 focus-within:relative focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
      <label for="name" class="block text-xs font-medium text-gray-900">Name</label>
      <input type="text" name="name" id="name" class="block w-full text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Jane Smith" />
    </div>
    <div class="rounded-b-md bg-white px-3 pt-2.5 pb-1.5 outline-1 -outline-offset-1 outline-gray-300 focus-within:relative focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
      <label for="job-title" class="block text-xs font-medium text-gray-900">Job title</label>
      <input type="text" name="job-title" id="job-title" class="block w-full text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Head of Tomfoolery" />
    </div>
  </div>
</template>
