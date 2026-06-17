import { Button } from "flowbite-react";
import {
  ArrowRight,
  Book,
  CameraPhoto,
  ComputerSpeaker,
  DesktopPc,
  FaceGrin,
  Home,
  Lightbulb,
  ShoppingBag,
  Store,
  Truck,
  WandMagicSparkles,
} from "flowbite-react-icons/outline";

export default function StorefrontHeroSectionWithCTAAndCategoriesList() {
  return (
    <section className="bg-gray-50 px-6 py-8 antialiased dark:bg-gray-900 md:py-16 xl:px-0">
      <div className="mx-auto w-full max-w-screen-xl rounded-lg bg-white p-4 dark:bg-gray-800 md:p-6">
        <div className="flex flex-col items-stretch md:flex-row">
          <div className="order-2 shrink-0 space-y-2 border-gray-200 pb-4 dark:border-gray-700 md:order-1 md:w-72 md:border-r md:pb-0 md:pe-6">
            <a
              href="#"
              className="flex items-center justify-between gap-4 rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold leading-none text-gray-900 dark:bg-gray-700 dark:text-white"
            >
              <DesktopPc className="h-4 w-4 text-gray-900 dark:text-white" />
              Computer &amp; Office
              <ArrowRight className="ml-auto h-4 w-4 text-gray-900 dark:text-white" />
            </a>
            <a
              href="#"
              className="group flex items-center justify-between gap-4 rounded-lg px-4 py-2 text-sm font-semibold leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <ShoppingBag className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              Fashion/Clothes
              <div className="ml-auto -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
              </div>
            </a>
            <a
              href="#"
              className="group flex items-center justify-between gap-4 rounded-lg px-4 py-2 text-sm font-semibold leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <Lightbulb className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              Electronics
              <div className="ml-auto -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
              </div>
            </a>
            <a
              href="#"
              title=""
              className="group flex items-center justify-between gap-4 rounded-lg px-4 py-2 text-sm font-semibold leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <FaceGrin className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              Gaming/Consoles
              <div className="ml-auto -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
              </div>
            </a>
            <a
              href="#"
              className="group flex items-center justify-between gap-4 rounded-lg px-4 py-2 text-sm font-semibold leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <ComputerSpeaker className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              TV/Projectors
              <div className="ml-auto -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
              </div>
            </a>
            <a
              href="#"
              title=""
              className="group flex items-center justify-between gap-4 rounded-lg px-4 py-2 text-sm font-semibold leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <WandMagicSparkles className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              Collectibles &amp; Toys
              <div className="ml-auto -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
              </div>
            </a>
            <a
              href="#"
              className="group flex items-center justify-between gap-4 rounded-lg px-4 py-2 text-sm font-semibold leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                aria-hidden
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M4.4 7.7c2 .5 2.4 2.8 3.2 3.8 1 1.4 2 1.3 3.2 2.7 1.8 2.3 1.3 5.7 1.3 6.7M20 15h-1a4 4 0 0 0-4 4v1M8.6 4c0 .8.1 1.9 1.5 2.6 1.4.7 3 .3 3 2.3 0 .3 0 2 1.9 2 2 0 2-1.7 2-2 0-.6.5-.9 1.2-.9H20m1 4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Sports &amp; Outdoors
              <div className="ml-auto -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
              </div>
            </a>
            <a
              href="#"
              className="group flex items-center justify-between gap-4 rounded-lg px-4 py-2 text-sm font-semibold leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <Store className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              Food &amp; Grocery
              <div className="ml-auto -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
              </div>
            </a>
            <a
              href="#"
              className="group flex items-center justify-between gap-4 rounded-lg px-4 py-2 text-sm font-semibold leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
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
                  d="M15 13.9a5 5 0 0 1 2 4V21M7 3v3.2A5 5 0 0 0 8.9 10M17 3v3.2a5 5 0 0 1-2.4 4.3l-5.2 3A5 5 0 0 0 7 17.8V21M7 5h10M7.4 8h9.3M8 16h8.7M7 19h10"
                />
              </svg>
              Health &amp; Beauty
              <div className="ml-auto -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
              </div>
            </a>
            <a
              href="#"
              className="group flex items-center justify-between gap-4 rounded-lg px-4 py-2 text-sm font-semibold leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <Truck className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              Car &amp; Motorbike
              <div className="ml-auto -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
              </div>
            </a>
            <a
              href="#"
              className="group flex items-center justify-between gap-4 rounded-lg px-4 py-2 text-sm font-semibold leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <Book className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              Books
              <div className="ml-auto -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
              </div>
            </a>
            <a
              href="#"
              className="group flex items-center justify-between gap-4 rounded-lg px-4 py-2 text-sm font-semibold leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <Home className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              Home Air Quality
              <div className="ml-auto -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
              </div>
            </a>
            <a
              href="#"
              className="group flex items-center justify-between gap-4 rounded-lg px-4 py-2 text-sm font-semibold leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <CameraPhoto className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              Photo/Video
              <div className="ml-auto -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
              </div>
            </a>
          </div>
          <div className="order-1 mx-auto mb-8 grid border-b border-gray-200 pb-8 dark:border-gray-700 sm:pt-4 md:order-2 md:border-0 md:ps-6 md:pt-0 lg:mb-0 lg:grid-cols-5 lg:gap-8 lg:pb-0">
            <div className="hidden md:flex lg:col-span-2 lg:mt-0">
              <img
                className="w-56 dark:hidden sm:w-72 lg:w-full"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components.svg"
                alt="peripherals"
              />
              <img
                className="hidden w-56 dark:block sm:w-72"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components-dark.svg"
                alt="peripherals"
              />
            </div>
            <div className="me-auto place-self-center pt-4 lg:col-span-3">
              <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white lg:text-4xl">
                Save $500 today on your new iMac computer.
              </h1>
              <p className="mb-6 text-gray-500 dark:text-gray-400">
                Reserve your new Apple iMac 27” today and enjoy exclusive
                savings. Pre-order now to secure your discount.
              </p>
              <Button className="inline-flex [&>span]:px-5 [&>span]:py-3 [&>span]:text-base">
                Pre-order now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
