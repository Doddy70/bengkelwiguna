import { Badge, Card } from "flowbite-react";
import { ArrowRight, SalePercent } from "flowbite-react-icons/outline";

export default function FeaturedProductCategories() {
  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Featured Categories
          </h2>
          <a
            href="#"
            className="text-base font-medium text-gray-900 underline hover:no-underline dark:text-white"
          >
            See all categories
          </a>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          <Card>
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
            <Badge color="gray" className="me-2 inline-flex w-fit ">
              <SalePercent className="me-1.5 h-3 w-3" />
              Up to 25% off today
            </Badge>
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
              <ArrowRight className="h-5 w-5" />
            </a>
          </Card>
          <Card>
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
            <Badge color="gray" className="me-2 inline-flex w-fit ">
              <SalePercent className="me-1.5 h-3 w-3" />
              Up to 50% off today
            </Badge>
            <a
              href="#"
              className="mt-4 block font-medium text-gray-900 hover:underline dark:text-white"
            >
              MacBook Pro Accessories, from Apple, Belkin, Logitech, Anker, and
              more
            </a>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-1.5 font-medium text-primary-700 hover:text-primary-600 hover:underline dark:text-primary-500 dark:hover:text-primary-400"
            >
              See more laptop deals
              <ArrowRight className="h-5 w-5" />
            </a>
          </Card>
          <Card>
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
            <Badge color="gray" className="me-2 inline-flex w-fit ">
              <SalePercent className="me-1.5 h-3 w-3" />
              Up to 25% off today
            </Badge>
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
              <ArrowRight className="h-5 w-5" />
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
}
