import { Banner, Button } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

export function InformationalBanner() {
  return (
    <Banner>
      <div className="flex w-full flex-col items-start justify-between border border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800 md:flex-row md:items-center md:gap-8 lg:py-4">
        <div className="sm:flex xl:items-center">
          <HiInformationCircle className="mr-3 hidden h-5 w-5 shrink-0 text-primary-600 md:inline" />
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-300 md:mb-0">
            Flowbite will no longer process new data in standard properties
            beginning&nbsp;
            <span className="font-semibold text-gray-900 dark:text-white">
              July 1, 2023
            </span>
            . Prepare now by setting up and switching over to a Flowbite 4
            property.
          </p>
        </div>
        <div className="flex shrink-0 items-center space-x-4">
          <Banner.CollapseButton
            color="gray"
            className="border-0 bg-transparent px-0 text-primary-600 hover:underline enabled:hover:bg-transparent dark:text-primary-500 dark:enabled:hover:text-primary-500 [&>span]:px-0"
          >
            Dismiss
          </Banner.CollapseButton>
          <a
            href="#"
            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Learn more
          </a>
          <Button href="#">Let's go</Button>
        </div>
      </div>
    </Banner>
  );
}
