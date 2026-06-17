import { Banner } from "flowbite-react";
import { HiX } from "react-icons/hi";

export function DefaultBanner() {
  return (
    <Banner>
      <div className="flex w-full items-start justify-between gap-8 border border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800 sm:items-center lg:py-4">
        <p className="text-sm text-gray-500 dark:text-gray-400 [&_p]:inline">
          Supercharge your hiring by taking advantage of our&nbsp;
          <a
            className="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500"
            href="#"
          >
            limited-time sale
          </a>
          &nbsp;for Designer Search + Job Board. Unlimited access to over 190K
          top-ranked candidates and the #1 design job board.
        </p>
        <Banner.CollapseButton
          color="gray"
          className="border-0 bg-transparent px-0 text-gray-400 enabled:hover:bg-gray-200 enabled:hover:text-gray-900 dark:enabled:hover:bg-gray-600 dark:enabled:hover:text-white [&>span]:px-2"
        >
          <HiX className="h-5 w-5" />
        </Banner.CollapseButton>
      </div>
    </Banner>
  );
}
