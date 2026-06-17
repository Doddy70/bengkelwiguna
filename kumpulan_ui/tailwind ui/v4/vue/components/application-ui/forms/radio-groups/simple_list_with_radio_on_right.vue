<template>
  <fieldset>
    <legend class="text-sm/6 font-semibold text-gray-900">Select a side</legend>
    <div class="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
      <div v-for="(side, sideIdx) in sides" :key="sideIdx" class="relative flex items-start py-4">
        <div class="min-w-0 flex-1 text-sm/6">
          <label :for="`side-${side.id}`" class="font-medium text-gray-900 select-none">{{ side.name }}</label>
        </div>
        <div class="ml-3 flex h-6 items-center">
          <input :id="`side-${side.id}`" name="plan" type="radio" :checked="side.id === null" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
const sides = [
  { id: null, name: 'None' },
  { id: 1, name: 'Baked beans' },
  { id: 2, name: 'Coleslaw' },
  { id: 3, name: 'French fries' },
  { id: 4, name: 'Garden salad' },
  { id: 5, name: 'Mashed potatoes' },
]
</script>