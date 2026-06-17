import { Button } from "flowbite-react";
import {
  ComputerSpeaker,
  DesktopPc,
  FaceGrin,
  Headphones,
  Server,
  ShoppingBag,
  Store,
  WandMagicSparkles,
} from "flowbite-react-icons/outline";

export default function StorefrontHeroSectionWithBackgroundImage() {
  return (
    <section className="bg-gray-50 pb-8 antialiased dark:bg-gray-900 md:pb-16">
      <div className="bg-[url('https://flowbite.s3.amazonaws.com/blocks/e-commerce/hero-ecommcerce-image-light.jpg')] bg-cover bg-center bg-no-repeat dark:bg-[url('https://flowbite.s3.amazonaws.com/blocks/e-commerce/hero-ecommcerce-image-dark.jpg')]">
        <div className="relative z-10 mx-auto max-w-2xl px-4 pb-32 pt-8 text-center text-white lg:pt-16 xl:px-0">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-primary-900 dark:text-white lg:text-6xl">
            Don’t miss out on exclusive deals.
          </h1>
          <p className="mb-6 font-light text-primary-800 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            Don't Miss Out - Limited Stock at Rock-Bottom Prices!
          </p>
          <Button className="inline-flex [&>span]:px-6 [&>span]:py-3.5 [&>span]:text-base">
            Shop now
          </Button>
        </div>
      </div>
      <div className="-mt-20 px-4">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-8 rounded-lg border border-gray-200 bg-white py-8 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:grid-cols-3 md:grid-cols-4 md:p-8 lg:grid-cols-8">
          <div className="text-center">
            <a
              href="#"
              className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <Server className="h-5 w-5 text-gray-900 dark:text-white lg:h-8 lg:w-8" />
            </a>
            <a
              href="#"
              className="mb-2 text-lg font-semibold text-gray-900 hover:underline dark:text-white"
            >
              Servers
            </a>
          </div>
          <div className="text-center">
            <a
              href="#"
              className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <ShoppingBag className="h-5 w-5 text-gray-900 dark:text-white lg:h-8 lg:w-8" />
            </a>
            <a
              href="#"
              className="mb-2 text-lg font-semibold text-gray-900 hover:underline dark:text-white"
            >
              Fashion
            </a>
          </div>
          <div className="text-center">
            <a
              href="#"
              className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <ComputerSpeaker className="h-5 w-5 text-gray-900 dark:text-white lg:h-8 lg:w-8" />
            </a>
            <a
              href="#"
              className="mb-2 text-lg font-semibold text-gray-900 hover:underline dark:text-white"
            >
              Electronics
            </a>
          </div>
          <div className="text-center">
            <a
              href="#"
              className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <Headphones className="h-5 w-5 text-gray-900 dark:text-white lg:h-8 lg:w-8" />
            </a>
            <a
              href="#"
              className="mb-2 text-lg font-semibold text-gray-900 hover:underline dark:text-white"
            >
              Gaming
            </a>
          </div>
          <div className="text-center">
            <a
              href="#"
              className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <DesktopPc className="h-5 w-5 text-gray-900 dark:text-white lg:h-8 lg:w-8" />
            </a>
            <a
              href="#"
              className="mb-2 text-lg font-semibold text-gray-900 hover:underline dark:text-white"
            >
              TV/Projectors
            </a>
          </div>
          <div className="text-center">
            <a
              href="#"
              className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <WandMagicSparkles className="h-5 w-5 text-gray-900 dark:text-white lg:h-8 lg:w-8" />
            </a>
            <a
              href="#"
              className="mb-2 text-lg font-semibold text-gray-900 hover:underline dark:text-white"
            >
              Toys
            </a>
          </div>
          <div className="text-center">
            <a
              href="#"
              className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <FaceGrin className="h-5 w-5 text-gray-900 dark:text-white lg:h-8 lg:w-8" />
            </a>
            <a
              href="#"
              className="mb-2 text-lg font-semibold text-gray-900 hover:underline dark:text-white"
            >
              Sport
            </a>
          </div>
          <div className="text-center">
            <a
              href="#"
              className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <Store className="h-5 w-5 text-gray-900 dark:text-white lg:h-8 lg:w-8" />
            </a>
            <a
              href="#"
              className="mb-2 text-lg font-semibold text-gray-900 hover:underline dark:text-white"
            >
              Grocery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
