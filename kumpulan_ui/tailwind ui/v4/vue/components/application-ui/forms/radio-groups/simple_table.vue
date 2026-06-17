<template>
  <fieldset aria-label="Pricing plans" class="relative -space-y-px rounded-md bg-white">
    <label v-for="plan in plans" :key="plan.name" :aria-label="plan.name" :aria-description="`${plan.priceMonthly} per month, ${plan.priceYearly} per year, ${plan.limit}`" class="group flex cursor-pointer flex-col border border-gray-200 p-4 first:rounded-tl-md first:rounded-tr-md last:rounded-br-md last:rounded-bl-md focus:outline-hidden has-checked:relative has-checked:border-indigo-200 has-checked:bg-indigo-50 md:grid md:grid-cols-3 md:pr-6 md:pl-4">
      <span class="flex items-center gap-3 text-sm">
        <input name="pricing-plan" :value="plan.name" type="radio" :checked="plan.selected" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
        <span class="font-medium text-gray-900 group-has-checked:text-indigo-900">{{ plan.name }}</span>
      </span>
      <span class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
        <span class="font-medium text-gray-900 group-has-checked:text-indigo-900">{{ plan.priceMonthly }} / mo</span>
        {{ ' ' }}
        <span class="text-gray-500 group-has-checked:text-indigo-700">({{ plan.priceYearly }} / yr)</span>
      </span>
      <span class="ml-6 pl-1 text-sm text-gray-500 group-has-checked:text-indigo-700 md:ml-0 md:pl-0 md:text-right">{{ plan.limit }}</span>
    </label>
  </fieldset>
</template>

<script setup>
const plans = [
  { name: 'Startup', priceMonthly: '$29', priceYearly: '$290', limit: 'Up to 5 active job postings', selected: true },
  {
    name: 'Business',
    priceMonthly: '$99',
    priceYearly: '$990',
    limit: 'Up to 25 active job postings',
    selected: false,
  },
  {
    name: 'Enterprise',
    priceMonthly: '$249',
    priceYearly: '$2490',
    limit: 'Unlimited active job postings',
    selected: false,
  },
]
</script>