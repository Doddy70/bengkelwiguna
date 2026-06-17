import { Alert, Card } from "flowbite-react";
import { ArrowRight, InfoCircle } from "flowbite-react-icons/outline";

export default function AdvancedProductCategoriesList() {
  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 sm:flex sm:items-center sm:justify-between sm:gap-4 md:mb-8">
          <p className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Shop member deals by category
          </p>
          <a
            href="#"
            title=""
            className="mt-4 hidden rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:mt-0 md:inline-block"
            role="button"
          >
            {" "}
            See more categories
          </a>
        </div>
        <Alert
          color="blue"
          icon={InfoCircle}
          className="bg-primary-50 text-primary-800 dark:bg-gray-700 dark:text-primary-400"
        >
          <span>
            We are displaying products that ship to your location. You can
            select a different location in the menu above.&nbsp;
            <a href="#" className="font-medium underline hover:no-underline">
              Click here to learn more about international shipping.
            </a>
          </span>
        </Alert>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          <Card className="space-y-4 md:space-y-6">
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              Top categories
            </p>
            <div className="grid grid-cols-2 divide-x divide-y divide-gray-200 text-gray-900 dark:divide-gray-700 dark:text-white">
              <div className="relative pb-4 pr-4">
                <a href="#">
                  <img
                    className="mb-4 h-20 dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                    alt="imac"
                  />
                  <img
                    className="mb-4 hidden h-20 dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                    alt="imac"
                  />
                </a>
                <a href="#" title="" className="font-medium hover:underline">
                  Laptop/Computers
                </a>
              </div>
              <div className="relative !border-t-0 pb-4 pl-4">
                <a href="#">
                  <img
                    className="mb-4 h-20 dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-controller.svg"
                    alt="controller"
                  />
                  <img
                    className="mb-4 hidden h-20 dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-controller-dark.svg"
                    alt="controller-dark"
                  />
                </a>
                <a href="#" title="" className="font-medium hover:underline">
                  Gaming
                </a>
              </div>
              <div className="relative !border-l-0 pr-4 pt-4">
                <a href="#">
                  <img
                    className="mb-4 h-20 dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg"
                    alt="ipad"
                  />
                  <img
                    className="mb-4 hidden h-20 dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg"
                    alt="ipad"
                  />
                </a>
                <a href="#" title="" className="font-medium hover:underline">
                  Tablets
                </a>
              </div>
              <div className="relative pl-4 pt-4">
                <a href="#">
                  <img
                    className="mb-4 h-20 dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/bag.svg"
                    alt="shopping-bag"
                  />
                  <img
                    className="mb-4 hidden h-20 dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/bag-dark.svg"
                    alt="shopping-bag"
                  />
                </a>
                <a href="#" title="" className="font-medium hover:underline">
                  Fashion/Clothes
                </a>
              </div>
            </div>
            <a
              href="#"
              className="flex items-center gap-1 font-medium text-primary-700 hover:text-primary-600 hover:underline dark:text-primary-500 dark:hover:text-primary-400"
            >
              Shop now
              <ArrowRight className="h-5 w-5" />
            </a>
          </Card>
          <Card className="space-y-4 md:space-y-6">
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              Shop consumer electronics
            </p>
            <div className="grid grid-cols-2 divide-x divide-y divide-gray-200 text-gray-900 dark:divide-gray-700 dark:text-white">
              <div className="relative pb-4 pr-4">
                <a href="#">
                  <img
                    className="mb-4 h-20 dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg"
                    alt="laptop"
                  />
                  <img
                    className="mb-4 hidden h-20 dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg"
                    alt="laptop"
                  />
                </a>
                <a href="#" title="" className="font-medium hover:underline">
                  Laptops
                </a>
              </div>
              <div className="relative !border-t-0 pb-4 pl-4">
                <a href="#">
                  <img
                    className="mb-4 h-20 dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg"
                    alt="watch"
                  />
                  <img
                    className="mb-4 hidden h-20 dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg"
                    alt="watch"
                  />
                </a>
                <a href="#" title="" className="font-medium hover:underline">
                  Watches
                </a>
              </div>
              <div className="relative !border-l-0 pr-4 pt-4">
                <a href="#">
                  <img
                    className="mb-4 h-20 dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-keyboard.svg"
                    alt="tablet"
                  />
                  <img
                    className="mb-4 hidden h-20 dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-keyboard-dark.svg"
                    alt="tablet"
                  />
                </a>
                <a href="#" title="" className="font-medium hover:underline">
                  Tablets
                </a>
              </div>
              <div className="relative pl-4 pt-4">
                <a href="#">
                  <img
                    className="mb-4 h-20 dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/airpods.svg"
                    alt="airpods"
                  />
                  <img
                    className="mb-4 hidden h-20 dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/airpods-dark.svg"
                    alt="airpods"
                  />
                </a>
                <a href="#" title="" className="font-medium hover:underline">
                  Accessories
                </a>
              </div>
            </div>
            <a
              href="#"
              className="flex items-center gap-1 font-medium text-primary-700 hover:text-primary-600 hover:underline dark:text-primary-500 dark:hover:text-primary-400"
            >
              Shop now
              <ArrowRight className="h-5 w-5" />
            </a>
          </Card>
          <Card className="space-y-4 md:space-y-6">
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              Free Time
            </p>
            <div className="grid grid-cols-2 divide-x divide-y divide-gray-200 text-gray-900 dark:divide-gray-700 dark:text-white">
              <div className="relative pb-4 pr-4">
                <a href="#">
                  <img
                    className="mb-4 h-20 dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-side.svg"
                    alt="xbox"
                  />
                  <img
                    className="mb-4 hidden h-20 dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-side-dark.svg"
                    alt="xbox"
                  />
                </a>
                <a href="#" title="" className="font-medium hover:underline">
                  Consoles
                </a>
              </div>
              <div className="relative !border-t-0 pb-4 pl-4">
                <a href="#">
                  <img
                    className="mb-4 h-20 dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components.svg"
                    alt="peripherals"
                  />
                  <img
                    className="mb-4 hidden h-20 dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components-dark.svg"
                    alt="peripherals"
                  />
                </a>
                <a href="#" title="" className="font-medium hover:underline">
                  Peripherals
                </a>
              </div>
              <div className="relative !border-l-0 pr-4 pt-4">
                <a href="#">
                  <img
                    className="mb-4 h-20 dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg"
                    alt="iphone"
                  />
                  <img
                    className="mb-4 hidden h-20 dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg"
                    alt="iphone"
                  />
                </a>
                <a href="#" title="" className="font-medium hover:underline">
                  Phones
                </a>
              </div>
              <div className="relative pl-4 pt-4">
                <a href="#">
                  <img
                    className="mb-4 h-20 dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/football.svg"
                    alt="ball"
                  />
                  <img
                    className="mb-4 hidden h-20 dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/football-dark.svg"
                    alt="ball"
                  />
                </a>
                <a href="#" title="" className="font-medium hover:underline">
                  Sports/Outdoors
                </a>
              </div>
            </div>
            <a
              href="#"
              className="flex items-center gap-1 font-medium text-primary-700 hover:text-primary-600 hover:underline dark:text-primary-500 dark:hover:text-primary-400"
            >
              Shop now
              <ArrowRight className="h-5 w-5" />
            </a>
          </Card>
        </div>
        <a
          href="#"
          title=""
          className="mt-4 block rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:hidden"
          role="button"
        >
          See more categories
        </a>
      </div>
    </section>
  );
}
