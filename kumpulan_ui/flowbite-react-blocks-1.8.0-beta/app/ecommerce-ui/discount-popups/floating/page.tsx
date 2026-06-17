"use client";

import { Banner, BannerCollapseButton } from "flowbite-react";
import { ArrowRight, Close, SalePercent } from "flowbite-react-icons/outline";

export default function FloatingDiscountBanner() {
  return (
    <div className="fixed left-1/2 w-full max-w-screen-lg -translate-x-1/2 px-4 py-4 2xl:px-0">
      <Banner className="relative z-50 flex w-full items-start justify-between gap-8 rounded-lg border border-primary-200 bg-primary-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800 sm:items-center lg:py-4">
        <button className="absolute right-1 top-1 inline-flex items-center rounded-lg p-1.5 text-sm text-primary-500 hover:bg-primary-100 hover:text-primary-900 dark:hover:bg-primary-700 dark:hover:text-white sm:hidden">
          <Close className="h-5 w-5" />
        </button>
        <div className="items-center text-primary-700 dark:text-primary-300 sm:flex sm:space-x-3">
          <div className="mb-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 sm:mb-0">
            <SalePercent className="h-5 w-5" />
          </div>
          <p className="border-primary-200 dark:border-gray-700">
            <span className="font-medium">BLACK FRIDAY!</span> From gadgets to
            fashion, enjoy huge savings on your favorite items.&nbsp;
            <a
              href="#"
              className="inline-flex items-center font-medium hover:underline"
            >
              Shop now
              <ArrowRight className="h-5 w-5" />
            </a>
          </p>
        </div>
        <BannerCollapseButton
          color="gray"
          className="hidden border-0 sm:flex [&>span]:bg-primary-50 [&>span]:p-1.5 [&>span]:text-primary-500 hover:[&>span]:bg-primary-200 hover:[&>span]:text-primary-700 dark:[&>span]:bg-gray-800 dark:[&>span]:text-gray-400 dark:hover:[&>span]:bg-gray-700 dark:hover:[&>span]:text-white"
        >
          <Close className="h-5 w-5" />
        </BannerCollapseButton>
      </Banner>
    </div>
  );
}
