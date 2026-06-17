import { Carousel, Dropdown, TextInput, theme } from "flowbite-react";
import {
  ArrowLeft,
  ArrowRight,
  Book,
  Cash,
  ComputerSpeaker,
  Dna,
  SalePercent,
  Search,
  ShoppingBag,
  Store,
  Truck,
} from "flowbite-react-icons/outline";
import { twMerge } from "tailwind-merge";

export default function StorefrontHeroSectionWithCarouselAndSearch() {
  return (
    <section className="bg-white antialiased dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 xl:px-0">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-24">
          <div className="lg:max-w-2xl xl:shrink-0">
            <div>
              <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                Don’t miss out on exclusive deals made for you.
              </h1>
              <p className="mb-6 flex items-center text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                <Truck className="me-2 h-6 w-6 text-gray-500 dark:text-gray-400" />
                Free US delivery for orders over $200
              </p>
              <form className="w-full">
                <div className="flex -space-x-0.5">
                  <label htmlFor="search-dropdown" className="sr-only">
                    Search
                  </label>
                  <Dropdown
                    color="gray"
                    label="All categories"
                    theme={{
                      floating: {
                        target: twMerge(
                          theme.dropdown.floating.target,
                          "hidden shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 text-center font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:inline-flex sm:rounded-r-none md:flex [&>span]:items-center [&>span]:text-base",
                        ),
                      },
                    }}
                  >
                    <div className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                      <Dropdown.Item
                        href="#"
                        className="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      >
                        <ComputerSpeaker className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                        Electronics
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#"
                        className="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      >
                        <svg
                          className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                          aria-hidden
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M20 16v-4a8 8 0 1 0-16 0v4m16 0v2a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2ZM4 16v2a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z"
                          />
                        </svg>
                        Sports &amp; Outdoors
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#"
                        className="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      >
                        <ShoppingBag className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                        Fashion
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#"
                        className="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      >
                        <Store className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                        Food &amp; Grocery
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#"
                        className="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      >
                        <Dna className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                        Health &amp; Beauty
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#"
                        className="group flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      >
                        <Book className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                        Books &amp; School
                      </Dropdown.Item>
                    </div>
                  </Dropdown>
                  <div className="relative w-full">
                    <TextInput
                      id="search-dropdown"
                      name="search-dropdown"
                      placeholder="Search entire store here"
                      required
                      type="search"
                      className="[&_input]:p-5 [&_input]:text-base sm:[&_input]:rounded-l-none"
                    />
                    <button
                      type="submit"
                      className="absolute end-0 top-0 h-full rounded-e-lg border border-primary-700 bg-primary-700 p-4 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      <Search className="h-5 w-5" />
                      <span className="sr-only">Search</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 dark:border-gray-700 sm:mt-8 sm:border-t sm:border-gray-200 sm:pt-8 lg:gap-8">
              <div>
                <Cash className="mb-2 h-8 w-8 text-primary-700 dark:text-primary-500" />
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  Moneyback
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Did you change your mind? You can return the product within 14
                  days.
                </p>
              </div>
              <div>
                <SalePercent className="mb-2 h-8 w-8 text-primary-700 dark:text-primary-500" />
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  Weekly Promotions
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Explore our exclusive weekly promotions for special discounts.
                </p>
              </div>
            </div>
          </div>
          <Carousel
            leftControl={<ArrowLeft className="h-8 w-8" />}
            rightControl={<ArrowRight className="h-8 w-8" />}
            theme={{
              root: {
                leftControl:
                  "absolute -bottom-16 right-1/2 pr-3 [&_svg]:text-gray-500 [&_svg]:hover:text-gray-900 [&_svg]:dark:hover:text-white",
                rightControl:
                  "absolute -bottom-16 left-1/2 [&_svg]:text-gray-500 [&_svg]:hover:text-gray-900 [&_svg]:dark:hover:text-white",
              },
            }}
            className="h-[460px] w-full"
          >
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <a href="#">
                <img
                  className="mx-auto mb-4 h-60 dark:hidden md:mb-6"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back.svg"
                  alt="keyboard"
                />
                <img
                  className="mx-auto mb-4 hidden h-60 dark:block md:mb-6"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back-dark.svg"
                  alt="keyboard"
                />
              </a>
              <span className="me-2 inline-flex items-center rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                <SalePercent className="me-1.5 h-3 w-3" />
                Up to 25% off today
              </span>
              <a
                href="#"
                className="mt-4 block font-medium text-gray-900 hover:underline dark:text-white"
              >
                Find great deals on PC games, and desktops, accessories and more
                from top brands.
              </a>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1.5 font-medium text-primary-700 hover:text-primary-600 hover:underline dark:text-primary-500 dark:hover:text-primary-400"
              >
                See more electronics deals
                <svg
                  className="h-5 w-5"
                  aria-hidden
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </a>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <a href="#">
                <img
                  className="mx-auto mb-4 h-60 dark:hidden md:mb-6"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-controller.svg"
                  alt="controller"
                />
                <img
                  className="mx-auto mb-4 hidden h-60 dark:block md:mb-6"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-controller-dark.svg"
                  alt="controller"
                />
              </a>
              <span className="me-2 inline-flex items-center rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                <SalePercent className="me-1.5 h-3 w-3" />
                Up to 25% off today
              </span>
              <a
                href="#"
                className="mt-4 block font-medium text-gray-900 hover:underline dark:text-white"
              >
                Find great deals on the most popular video games and gaming
                consoles
              </a>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1.5 font-medium text-primary-700 hover:text-primary-600 hover:underline dark:text-primary-500 dark:hover:text-primary-400"
              >
                See more gaming deals
                <svg
                  className="h-5 w-5"
                  aria-hidden
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </a>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <a href="#">
                <img
                  className="mx-auto mb-4 h-60 dark:hidden md:mb-6"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg"
                  alt="laptop"
                />
                <img
                  className="mx-auto mb-4 hidden h-60 dark:block md:mb-6"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg"
                  alt="laptop"
                />
              </a>
              <span className="me-2 inline-flex items-center rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                <SalePercent className="me-1.5 h-3 w-3" />
                Up to 50% off today
              </span>
              <a
                href="#"
                className="mt-4 block font-medium text-gray-900 hover:underline dark:text-white"
              >
                MacBook Pro Accessories, from Apple, Belkin, Logitech, Anker,
                and more
              </a>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1.5 font-medium text-primary-700 hover:text-primary-600 hover:underline dark:text-primary-500 dark:hover:text-primary-400"
              >
                See more laptop deals
                <svg
                  className="h-5 w-5"
                  aria-hidden
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </a>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <a href="#">
                <img
                  className="mx-auto mb-4 h-60 dark:hidden md:mb-6"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-keyboard.svg"
                  alt="keyboard"
                />
                <img
                  className="mx-auto mb-4 hidden h-60 dark:block md:mb-6"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-keyboard-dark.svg"
                  alt="keyboard"
                />
              </a>
              <span className="me-2 inline-flex items-center rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                <SalePercent className="me-1.5 h-3 w-3" />
                Up to 25% off today
              </span>
              <a
                href="#"
                className="mt-4 block font-medium text-gray-900 hover:underline dark:text-white"
              >
                Find great deals on PC games, and desktops, accessories and more
                from top brands.
              </a>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1.5 font-medium text-primary-700 hover:text-primary-600 hover:underline dark:text-primary-500 dark:hover:text-primary-400"
              >
                See more electronics deals
                <svg
                  className="h-5 w-5"
                  aria-hidden
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </a>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
