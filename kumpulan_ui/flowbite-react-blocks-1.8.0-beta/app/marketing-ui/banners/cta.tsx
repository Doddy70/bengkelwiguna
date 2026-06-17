import { Banner } from "flowbite-react";
import { HiCalendar, HiX } from "react-icons/hi";

export function CTABanner() {
  return (
    <Banner>
      <div className="grid w-full border border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800 sm:grid-cols-3">
        <div className="mb-3 sm:col-span-2 sm:mb-0 sm:pr-0">
          <div className="flex items-center justify-between md:block">
            <p className="mb-1 font-bold text-gray-900 dark:text-white">
              I hope you enjoyed reading this post.
            </p>
            <Banner.CollapseButton
              color="gray"
              className="border-0 bg-transparent px-0 text-gray-400 enabled:hover:bg-gray-200 enabled:hover:text-gray-900 dark:enabled:hover:bg-gray-600 dark:enabled:hover:text-white sm:hidden [&>span]:px-2"
            >
              <HiX className="h-5 w-5" />
            </Banner.CollapseButton>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            If you want my team at Flowbite Digital to help you get more
            traffic, just book a call.
          </p>
        </div>

        <div className="flex justify-start sm:justify-end">
          <div className="flex items-center sm:space-x-4">
            <a
              href="#"
              className="flex items-center rounded-lg bg-primary-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
            >
              <HiCalendar className="mr-2" />
              Book a call
            </a>
            <Banner.CollapseButton
              color="gray"
              className="hidden border-0 bg-transparent px-0 text-gray-400 enabled:hover:bg-gray-200 enabled:hover:text-gray-900 dark:enabled:hover:bg-gray-600 dark:enabled:hover:text-white sm:block [&>span]:px-2"
            >
              <HiX className="h-5 w-5" />
            </Banner.CollapseButton>
          </div>
        </div>
      </div>
    </Banner>
  );
}
