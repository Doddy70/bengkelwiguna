<template>
  <div class="bg-gray-50">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Shop by Category</h2>
        <a href="#" class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
          Browse all categories
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        <div class="group relative aspect-[2/1] overflow-hidden rounded-lg sm:row-span-2 sm:aspect-square">
          <img src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-featured-category.jpg" alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee." class="absolute size-full object-cover group-hover:opacity-75" />
          <div aria-hidden="true" class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
          <div class="absolute inset-0 flex items-end p-6">
            <div>
              <h3 class="font-semibold text-white">
                <a href="#">
                  <span class="absolute inset-0" />
                  New Arrivals
                </a>
              </h3>
              <p aria-hidden="true" class="mt-1 text-sm text-white">Shop now</p>
            </div>
          </div>
        </div>
        <div class="group relative aspect-[2/1] overflow-hidden rounded-lg sm:aspect-auto">
          <img src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-category-01.jpg" alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters." class="absolute size-full object-cover group-hover:opacity-75" />
          <div aria-hidden="true" class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
          <div class="absolute inset-0 flex items-end p-6">
            <div>
              <h3 class="font-semibold text-white">
                <a href="#">
                  <span class="absolute inset-0" />
                  Accessories
                </a>
              </h3>
              <p aria-hidden="true" class="mt-1 text-sm text-white">Shop now</p>
            </div>
          </div>
        </div>
        <div class="group relative aspect-[2/1] overflow-hidden rounded-lg sm:aspect-auto">
          <img src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-category-02.jpg" alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk." class="absolute size-full object-cover group-hover:opacity-75" />
          <div aria-hidden="true" class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
          <div class="absolute inset-0 flex items-end p-6">
            <div>
              <h3 class="font-semibold text-white">
                <a href="#">
                  <span class="absolute inset-0" />
                  Workspace
                </a>
              </h3>
              <p aria-hidden="true" class="mt-1 text-sm text-white">Shop now</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 sm:hidden">
        <a href="#" class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
          Browse all categories
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  </div>
</template>
