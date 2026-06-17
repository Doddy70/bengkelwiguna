import { Banner, Button } from "flowbite-react";

export function CookieBanner() {
  return (
    <Banner>
      <div className="relative h-full w-full md:h-auto">
        <div className="relative bg-white shadow dark:bg-gray-800">
          <div className="items-center justify-between p-5 lg:flex">
            <p className="mb-4 text-sm text-gray-500 dark:text-white lg:mb-0">
              We use our own cookies as well as third-party cookies on our
              websites to enhance your experience, analyze our traffic, and for
              security and marketing. Select "Accept All" to allow them to be
              used. Read our&nbsp;
              <a
                href="#"
                className="font-medium text-gray-900 hover:underline dark:text-white"
              >
                Cookie Policy
              </a>
              .
            </p>
            <div className="shrink-0 items-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0 lg:pl-10">
              <a
                href="#"
                className="text-sm text-primary-600 hover:underline dark:text-primary-500"
              >
                Manage settings
              </a>
              <Button className="inline-flex w-full sm:w-fit">
                Block all cookies
              </Button>
              <Button className="inline-flex w-full sm:w-fit">
                Accept all
              </Button>
              <Banner.CollapseButton
                color="gray"
                className="ml-auto hidden border-0 bg-transparent text-gray-400 md:flex [&>span]:p-1.5 hover:[&>span]:bg-gray-200 hover:[&>span]:text-gray-900 dark:hover:[&>span]:bg-gray-600 dark:hover:[&>span]:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Banner.CollapseButton>
            </div>
          </div>
        </div>
      </div>
    </Banner>
  );
}
