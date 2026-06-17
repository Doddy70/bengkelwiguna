import { Card } from "flowbite-react";

export default function StorefrontHeroSectionCategoriesGridView() {
  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
      <div className="mx-auto grid max-w-screen-xl gap-4 px-4 md:grid-cols-2 lg:grid-cols-4 lg:px-0">
        <Card className="shadow-none">
          <a href="#">
            <img
              className="mx-auto mb-4 h-44 dark:hidden md:mb-6"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back.svg"
              alt="imac"
            />
            <img
              className="mx-auto mb-4 hidden h-44 dark:block md:mb-6"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back-dark.svg"
              alt="imac dark"
            />
          </a>
          <h2 className="mt-2 text-center text-xl font-bold leading-tight text-gray-900 hover:underline dark:text-white lg:mt-0 lg:text-left lg:text-2xl">
            <a href="#">Enhance your study habits with iMac</a>
          </h2>
        </Card>
        <Card className="shadow-none">
          <a href="#">
            <img
              className="mx-auto mb-4 h-44 dark:hidden md:mb-6"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-controller.svg"
              alt="xbox controller"
            />
            <img
              className="mx-auto mb-4 hidden h-44 dark:block md:mb-6"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-controller-dark.svg"
              alt="xbox controller dark"
            />
          </a>
          <h2 className="mt-2 text-center text-xl font-bold leading-tight text-gray-900 hover:underline dark:text-white lg:mt-0 lg:text-left lg:text-2xl">
            <a href="#">Mind-blowing savings on gaming</a>
          </h2>
        </Card>
        <Card className="shadow-none">
          <a href="#">
            <img
              className="mx-auto mb-4 h-44 dark:hidden md:mb-6"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components.svg"
              alt="pc components"
            />
            <img
              className="mx-auto mb-4 hidden h-44 dark:block md:mb-6"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components-dark.svg"
              alt="pc components dark"
            />
          </a>
          <h2 className="mt-2 text-center text-xl font-bold leading-tight text-gray-900 hover:underline dark:text-white lg:mt-0 lg:text-left lg:text-2xl">
            <a href="#">Computer Peripherals for your upgrade</a>
          </h2>
        </Card>
        <Card className="shadow-none">
          <a href="#">
            <img
              className="mx-auto mb-4 h-44 dark:hidden md:mb-6"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-keyboard.svg"
              alt="ipad"
            />
            <img
              className="mx-auto mb-4 hidden h-44 dark:block md:mb-6"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-keyboard-dark.svg"
              alt="ipad dark"
            />
          </a>
          <h2 className="mt-2 text-center text-xl font-bold leading-tight text-gray-900 hover:underline dark:text-white lg:mt-0 lg:text-left lg:text-2xl">
            <a href="#">Discover the best Echo devices</a>
          </h2>
        </Card>
        <Card className="shadow-none lg:col-span-2 [&>div]:items-center [&>div]:gap-8 lg:[&>div]:flex-row">
          <a className="w-full" href="#">
            <img
              className="mx-auto h-56 dark:hidden lg:mt-0"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg"
              alt="iphone"
            />
            <img
              className="mx-auto mt-6 hidden h-56 dark:block lg:mt-0"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg"
              alt="iphone dark"
            />
          </a>
          <div className="w-full text-center lg:text-left">
            <h2 className="text-center text-xl font-bold leading-tight text-gray-900 hover:underline dark:text-white lg:mt-0 lg:text-left lg:text-2xl">
              <a href="#">Trending gadgets to make it feel like home</a>
            </h2>
            <a
              href="#"
              type="button"
              className="mt-4 inline-block rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              See more gaming
            </a>
          </div>
        </Card>
        <Card className="shadow-none lg:col-span-2 [&>div]:items-center [&>div]:gap-8 lg:[&>div]:flex-row">
          <div className="order-2 w-full text-center lg:order-1 lg:text-left">
            <h2 className="text-center text-xl font-bold leading-tight text-gray-900 hover:underline dark:text-white lg:mt-0 lg:text-left lg:text-2xl">
              <a href="#">Browse our Consoles range for best deals</a>
            </h2>
            <a
              href="#"
              type="button"
              className="mt-4 inline-block rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Shop gadgets
            </a>
          </div>
          <a className="order-1 w-full lg:order-2" href="#">
            <img
              className="mx-auto h-56 dark:hidden lg:mb-0"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-side.svg"
              alt="ps5 console"
            />
            <img
              className="mx-auto mb-6 hidden h-56 dark:block lg:mb-0"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-side-dark.svg"
              alt="ps5 console dark"
            />
          </a>
        </Card>
        <Card className="shadow-none lg:col-span-2 [&>div]:items-center [&>div]:gap-8 lg:[&>div]:flex-row">
          <a className="w-full" href="#">
            <img
              className="mx-auto h-56 dark:hidden lg:mb-0"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg"
              alt="watch"
            />
            <img
              className="mx-auto mb-6 hidden h-56 dark:block lg:mb-0"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg"
              alt="watch dark"
            />
          </a>
          <div className="w-full text-center lg:text-left">
            <h2 className="text-center text-xl font-bold leading-tight text-gray-900 hover:underline dark:text-white lg:mt-0 lg:text-left lg:text-2xl">
              <a href="#">Watches you've never seen before</a>
            </h2>
            <a
              href="#"
              type="button"
              className="mt-4 inline-block rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              See more watches
            </a>
          </div>
        </Card>
        <Card className="shadow-none lg:col-span-2 [&>div]:items-center [&>div]:gap-8 lg:[&>div]:flex-row">
          <div className="order-2 w-full text-center lg:order-1 lg:text-left">
            <h2 className="text-center text-xl font-bold leading-tight text-gray-900 hover:underline dark:text-white lg:mt-0 lg:text-left lg:text-2xl">
              <a href="#">
                <a
                  href="#"
                  className="block text-xl font-bold text-gray-900 hover:underline dark:text-white lg:text-2xl"
                >
                  Your guide to the top tablets on the market
                </a>
              </a>
            </h2>
            <a
              href="#"
              type="button"
              className="mt-4 inline-block rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              See tablets deals
            </a>
          </div>
          <a className="order-1 w-full lg:order-2" href="#">
            <img
              className="mx-auto h-56 dark:hidden lg:mt-0"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg"
              alt="ipad"
            />
            <img
              className="mx-auto mt-6 hidden h-56 dark:block lg:mt-0"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg"
              alt="ipad dark"
            />
          </a>
        </Card>
      </div>
    </section>
  );
}
