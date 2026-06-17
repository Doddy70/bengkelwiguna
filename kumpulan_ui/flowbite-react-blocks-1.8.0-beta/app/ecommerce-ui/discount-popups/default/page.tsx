"use client";

import { Banner, BannerCollapseButton } from "flowbite-react";
import { Close } from "flowbite-react-icons/outline";

export default function DefaultDiscountBanner() {
  return (
    <Banner className="fixed z-50 flex w-full items-start justify-between gap-8 border-b border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800 sm:items-center lg:py-4">
      <p className="mx-auto text-base text-gray-500 dark:text-gray-400">
        <span className="font-medium text-gray-900 dark:text-white">
          Autumn Sale is Here!
        </span>
        &nbsp;🌟 Whether you're prepping for cooler days or refreshing your
        home, now’s the time&nbsp;
        <a
          href="#"
          className="font-medium text-gray-900 underline hover:no-underline dark:text-white"
        >
          to shop!
        </a>
      </p>
      <BannerCollapseButton
        color="gray"
        className="hidden border-0 sm:flex [&>span]:bg-gray-50 [&>span]:p-1.5 [&>span]:text-gray-500 hover:[&>span]:bg-gray-200 hover:[&>span]:text-gray-800 dark:[&>span]:bg-gray-800 dark:[&>span]:text-gray-400 dark:hover:[&>span]:bg-gray-700 dark:hover:[&>span]:text-white"
      >
        <Close className="h-5 w-5" />
      </BannerCollapseButton>
    </Banner>
  );
}
