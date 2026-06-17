"use client";

import { Banner, BannerCollapseButton } from "flowbite-react";
import { Close } from "flowbite-react-icons/outline";

export default function DiscountBannerWithIllustration() {
  return (
    <Banner className="fixed z-50 flex w-full items-start justify-between gap-8 border-b border-primary-200 bg-primary-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800 sm:items-center lg:py-4">
      <div className="mx-auto items-center sm:flex sm:space-x-4">
        <div className="mb-4 flex items-center text-sm text-primary-700 dark:text-primary-300 sm:mb-0 md:text-base">
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-with-rocket.svg"
            className="mx-auto h-12 pe-4 dark:hidden"
          />
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-with-rocket-dark.svg"
            className="mx-auto hidden h-12 pe-4 dark:block"
          />
          <p className="border-primary-200 dark:border-gray-700 sm:border-s sm:ps-4">
            <span className="font-medium">50% Off!</span> 🌟 Don't miss out the
            chance to level up your gaming collection with huge savings!
          </p>
        </div>
        <div className="flex items-center space-x-4 sm:shrink-0 sm:space-x-0">
          <a
            href="#"
            className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-center text-xs font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Shop Now
          </a>
          <button className="flex w-full justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:hidden">
            Close
          </button>
        </div>
      </div>
      <BannerCollapseButton
        color="gray"
        className="hidden border-0 sm:flex [&>span]:bg-primary-50 [&>span]:p-1.5 [&>span]:text-primary-500 hover:[&>span]:bg-primary-200 hover:[&>span]:text-primary-700 dark:[&>span]:bg-gray-800 dark:[&>span]:text-gray-400 dark:hover:[&>span]:bg-gray-700 dark:hover:[&>span]:text-white"
      >
        <Close className="h-5 w-5" />
      </BannerCollapseButton>
    </Banner>
  );
}
