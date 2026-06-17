import { Button, Label, TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";

export function SearchBarCardLinks404Page() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-primary-600">
            404 Not Found
          </h1>
          <p className="mb-8 font-medium text-gray-500 dark:text-gray-400 sm:text-2xl">
            Whoops! That page doesn’t exist.
          </p>
          <form action="#" method="post">
            <div className="mx-auto mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0">
              <div className="relative mr-3 w-full">
                <Label htmlFor="member_email" className="sr-only">
                  Email address
                </Label>
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    aria-hidden
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <TextInput
                  icon={HiSearch}
                  id="member_email"
                  placeholder="e.g. Flowbite, components"
                  required
                  type="email"
                  theme={{
                    field: {
                      input: {
                        colors: {
                          gray: "border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500",
                        },
                        sizes: {
                          md: "p-3 text-sm",
                        },
                      },
                    },
                  }}
                />
              </div>
              <div>
                <Button
                  color="info"
                  type="submit"
                  className="w-full [&>span]:py-3"
                >
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          <a
            href="#"
            className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
              <svg
                className="h-5 w-5 text-primary-600 dark:text-primary-400 lg:h-6 lg:w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-gray-500 dark:text-gray-400">
              Homepage
            </h3>
          </a>
          <a
            href="#"
            className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900 lg:h-12 lg:w-12">
              <svg
                aria-hidden
                className="h-5 w-5 text-teal-600 dark:text-teal-400 lg:h-6 lg:w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-gray-500 dark:text-gray-400">
              Library
            </h3>
          </a>
          <a
            href="#"
            className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900 lg:h-12 lg:w-12">
              <svg
                className="h-5 w-5 text-purple-600 dark:text-purple-400 lg:h-6 lg:w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-gray-500 dark:text-gray-400">
              Knowledge Center
            </h3>
          </a>
          <a
            href="#"
            className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900 lg:h-12 lg:w-12">
              <svg
                aria-hidden
                className="h-5 w-5 text-green-600 dark:text-green-400 lg:h-6 lg:w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                  clipRule="evenodd"
                />
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-gray-500 dark:text-gray-400">
              Blog
            </h3>
          </a>
        </div>
      </div>
    </section>
  );
}
