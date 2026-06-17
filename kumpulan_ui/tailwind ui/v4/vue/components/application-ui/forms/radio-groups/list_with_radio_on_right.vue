<template>
  <fieldset>
    <legend class="text-sm/6 font-semibold text-gray-900">Transfer funds</legend>
    <p class="mt-1 text-sm/6 text-gray-600">Transfer your balance to your bank account.</p>
    <div class="mt-2.5 divide-y divide-gray-200">
      <div v-for="(account, accountIdx) in accounts" :key="accountIdx" class="relative flex items-start pt-3.5 pb-4">
        <div class="min-w-0 flex-1 text-sm/6">
          <label :for="`account-${account.id}`" class="font-medium text-gray-900">{{ account.name }}</label>
          <p :id="`account-${account.id}-description`" class="text-gray-500">{{ account.description }}</p>
        </div>
        <div class="ml-3 flex h-6 items-center">
          <input :id="`account-${account.id}`" :aria-describedby="`account-${account.id}-description`" name="account" type="radio" :checked="account.id === 'checking'" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
const accounts = [
  { id: 'checking', name: 'Checking', description: 'CIBC ••••6610' },
  { id: 'savings', name: 'Savings', description: 'Bank of America ••••0149' },
  { id: 'mastercard', name: 'Mastercard', description: 'Capital One ••••7877' },
]
</script>