<template>
  <fieldset>
    <legend class="text-base font-semibold text-gray-900">Members</legend>
    <div class="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
      <div v-for="(person, personIdx) in people" :key="personIdx" class="relative flex gap-3 py-4">
        <div class="min-w-0 flex-1 text-sm/6">
          <label :for="`person-${person.id}`" class="font-medium text-gray-900 select-none">{{ person.name }}</label>
        </div>
        <div class="flex h-6 shrink-0 items-center">
          <div class="group grid size-4 grid-cols-1">
            <input :id="`person-${person.id}`" :name="`person-${person.id}`" type="checkbox" :checked="person.selected" class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
            <svg class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
              <path class="opacity-0 group-has-checked:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path class="opacity-0 group-has-indeterminate:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
const people = [
  { id: 1, name: 'Annette Black', selected: true },
  { id: 2, name: 'Cody Fisher', selected: true },
  { id: 3, name: 'Courtney Henry', selected: false },
  { id: 4, name: 'Kathryn Murphy', selected: false },
  { id: 5, name: 'Theresa Webb', selected: false },
]
</script>