import { Button, Label, TextInput, theme } from "flowbite-react";
import { twMerge } from "tailwind-merge";

export function HeroSectionWithSearchBar() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
        <div className="mb-8 grid items-center gap-8 lg:mb-16 lg:grid-cols-12 lg:gap-12">
          <div className="col-span-6 text-center sm:mb-6 lg:mb-0 lg:text-left">
            <a
              href="#"
              className="mb-6 inline-flex items-center justify-between rounded-full bg-gray-100 p-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              <span className="mr-3 rounded-full bg-primary-600 px-3 py-1 text-xs text-white">
                New
              </span>
              &nbsp;
              <span className="text-sm font-medium">
                Flowbite is out! See what's new
              </span>
              <svg
                className="ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl xl:text-6xl">
              We invest in the world’s potential
            </h1>
            <p className="mx-auto mb-6 max-w-xl text-gray-500 dark:text-gray-400 md:text-lg lg:mx-0 xl:mb-8 xl:text-xl">
              Here at Flowbite we focus on markets where innovation can unlock
              long-term value and drive economic growth.
            </p>
            <form className="mx-auto max-w-lg lg:ml-0" action="#">
              <Label
                htmlFor="default-search"
                className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Search
              </Label>
              <div className="relative">
                <TextInput
                  rightIcon={() => (
                    <Button type="submit" className="[&>span]:items-center">
                      <svg
                        className="-ml-1 mr-2 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Search
                    </Button>
                  )}
                  id="default-search"
                  type="search"
                  placeholder="Search Mockups, Logos..."
                  required
                  theme={{
                    field: {
                      rightIcon: {
                        base: "absolute inset-y-0 right-0 flex items-center pr-3",
                      },
                      input: {
                        base: twMerge(
                          theme.textInput.field.input.base,
                          "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
                        ),
                      },
                    },
                  }}
                  className="py-3.5 [&_input]:py-4"
                />
              </div>
            </form>
          </div>
          <div className="col-span-6">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/search-mockup.png"
              className="dark:hidden"
              alt="mockup"
            />
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/search-mockup-dark.png"
              className="hidden dark:block"
              alt="mockup dark"
            />
          </div>
        </div>
        <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
          <div className="flex justify-center">
            <svg
              className="mr-3 h-6 w-6 shrink-0 text-primary-600 dark:text-primary-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                Customizable Categories
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Host code that you don't want to share with the world in
                private.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <svg
              className="mr-3 h-6 w-6 shrink-0 text-primary-600 dark:text-primary-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                Private repos
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Host code that you don't want to share with the world in
                private.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <svg
              className="mr-3 h-6 w-6 shrink-0 text-primary-600 dark:text-primary-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h3 className="mb-1 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                Tracking Saving Rate
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Host code that you don't want to share with the world in
                private.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
