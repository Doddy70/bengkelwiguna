import { Dropdown, Navbar, Radio, Tooltip, theme } from "flowbite-react";
import { twMerge } from "tailwind-merge";

export function DoubleDashboardNavbarWithProjectDropdown() {
  return (
    <header className="antialiased">
      <Navbar
        fluid
        theme={{
          root: {
            base: "bg-white dark:bg-gray-900",
            inner: {
              base: "",
            },
          },
          link: {
            base: twMerge(theme.navbar.link.base, "px-4 py-3"),
          },
        }}
      >
        <div className="w-full px-4 py-3.5 md:px-6">
          <div className="flex w-full flex-wrap items-center justify-between">
            <div className="flex items-center justify-start">
              <a href="https://flowbite.com" className="mr-4 flex">
                <img
                  src="https://flowbite.s3.amazonaws.com/logo.svg"
                  className="mr-3 h-8"
                  alt=""
                />
                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                  Flowbite
                </span>
              </a>
            </div>
            <div className="flex items-center md:order-2">
              <Dropdown
                inline
                label={
                  <>
                    <span className="sr-only">View notifications</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 14 20"
                    >
                      <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
                    </svg>
                  </>
                }
                placement="bottom"
                theme={{
                  arrowIcon: "hidden",
                  content: twMerge(theme.dropdown.content, "py-0"),
                  floating: {
                    base: twMerge(theme.dropdown.floating.base, "w-96"),
                  },
                  inlineWrapper: twMerge(
                    theme.dropdown.inlineWrapper,
                    "rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600",
                  ),
                }}
              >
                <div className="block bg-gray-50 px-4 py-2 text-center text-base font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  Notifications
                </div>
                <div className="border-t dark:border-gray-600">
                  <a
                    href="#"
                    className="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                  >
                    <div className="shrink-0">
                      <img
                        className="h-11 w-11 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                        alt=""
                      />
                      <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-primary-700 dark:border-gray-700">
                        <svg
                          className="h-2 w-2 text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 18"
                        >
                          <path d="M15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783ZM6 2h6a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2Zm7 5H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Z" />
                          <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="w-full pl-3">
                      <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                        New message from{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Bonnie Green
                        </span>
                        : "Hey, what's up? All set for the presentation?"
                      </div>
                      <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                        a few moments ago
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                  >
                    <div className="shrink-0">
                      <img
                        className="h-11 w-11 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                        alt=""
                      />
                      <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-gray-900 dark:border-gray-700">
                        <svg
                          className="h-2 w-2 text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 18"
                        >
                          <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="w-full pl-3">
                      <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Jese leos
                        </span>{" "}
                        and{" "}
                        <span className="font-medium text-gray-900 dark:text-white">
                          5 others
                        </span>{" "}
                        started following you.
                      </div>
                      <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                        10 minutes ago
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                  >
                    <div className="shrink-0">
                      <img
                        className="h-11 w-11 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                        alt=""
                      />
                      <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-red-600 dark:border-gray-700">
                        <svg
                          className="h-2 w-2 text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 18"
                        >
                          {" "}
                          <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />{" "}
                        </svg>
                      </div>
                    </div>
                    <div className="w-full pl-3">
                      <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Joseph Mcfall
                        </span>{" "}
                        and{" "}
                        <span className="font-medium text-gray-900 dark:text-white">
                          141 others
                        </span>{" "}
                        love your story. See it and view more stories.
                      </div>
                      <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                        44 minutes ago
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                  >
                    <div className="shrink-0">
                      <img
                        className="h-11 w-11 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                        alt=""
                      />
                      <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-green-400 dark:border-gray-700">
                        <svg
                          className="h-2 w-2 text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 18"
                        >
                          <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="w-full pl-3">
                      <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Leslie Livingston
                        </span>{" "}
                        mentioned you in a comment:{" "}
                        <span className="font-medium text-primary-700 dark:text-primary-500">
                          @bonnie.green
                        </span>{" "}
                        what do you say?
                      </div>
                      <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                        1 hour ago
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <div className="shrink-0">
                      <img
                        className="h-11 w-11 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                        alt=""
                      />
                      <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-purple-500 dark:border-gray-700">
                        <svg
                          className="h-2 w-2 text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 14"
                        >
                          <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="w-full pl-3">
                      <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Robert Brown
                        </span>{" "}
                        posted a new video: Glassmorphism - learn how to
                        implement the new design trend.
                      </div>
                      <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                        3 hours ago
                      </div>
                    </div>
                  </a>
                </div>
                <a
                  href="#"
                  className="block bg-gray-50 py-2 text-center text-base font-medium text-gray-900 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:underline"
                >
                  <div className="inline-flex items-center ">
                    <svg
                      aria-hidden="true"
                      className="mr-2 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    View all
                  </div>
                </a>
              </Dropdown>
              <span className="mx-2 h-5 w-px bg-gray-200 dark:bg-gray-600 md:inline"></span>
              <Dropdown
                inline
                label={
                  <>
                    <span className="sr-only">View apps</span>
                    <svg
                      className="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 18"
                    >
                      <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                    </svg>
                  </>
                }
                placement="bottom"
                theme={{
                  arrowIcon: "hidden",
                  content: twMerge(theme.dropdown.content, "py-0"),
                  floating: {
                    base: twMerge(theme.dropdown.floating.base, "w-96"),
                  },
                  inlineWrapper: twMerge(
                    theme.dropdown.inlineWrapper,
                    "rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600",
                  ),
                }}
              >
                <div className="block bg-gray-50 px-4 py-2 text-center text-base font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  Apps
                </div>
                <div className="grid grid-cols-3 gap-4 border-t p-4 dark:border-gray-600">
                  <a
                    href="#"
                    className="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <svg
                      className="mx-auto mb-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 20"
                    >
                      <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Sales
                    </div>
                  </a>
                  <a
                    href="#"
                    className="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <svg
                      className="mx-auto mb-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 19"
                    >
                      <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                      <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Users
                    </div>
                  </a>
                  <a
                    href="#"
                    className="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <svg
                      className="mx-auto mb-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 18"
                    >
                      {" "}
                      <path d="M15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783ZM6 2h6a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2Zm7 5H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Z" />{" "}
                      <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />{" "}
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Inbox
                    </div>
                  </a>
                  <a
                    href="#"
                    className="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <svg
                      className="mx-auto mb-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Profile
                    </div>
                  </a>
                  <a
                    href="#"
                    className="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <svg
                      className="mx-auto mb-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Settings
                    </div>
                  </a>
                  <a
                    href="#"
                    className="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <svg
                      className="mx-auto mb-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="M19 0H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM2 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6H2Zm11 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0v1Z" />
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Products
                    </div>
                  </a>
                  <a
                    href="#"
                    className="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <svg
                      className="mx-auto mb-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 11 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1.75 15.363a4.954 4.954 0 0 0 2.638 1.574c2.345.572 4.653-.434 5.155-2.247.502-1.813-1.313-3.79-3.657-4.364-2.344-.574-4.16-2.551-3.658-4.364.502-1.813 2.81-2.818 5.155-2.246A4.97 4.97 0 0 1 10 5.264M6 17.097v1.82m0-17.5v2.138"
                      />
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Pricing
                    </div>
                  </a>
                  <a
                    href="#"
                    className="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <svg
                      className="mx-auto mb-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M7 11H5v1h2v-1Zm4 3H9v1h2v-1Zm-4 0H5v1h2v-1ZM5 5V.13a2.98 2.98 0 0 0-1.293.749L.88 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM13 16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6Zm-1-8H9a1 1 0 0 1 0-2h3a1 1 0 1 1 0 2Zm0-3H9a1 1 0 0 1 0-2h3a1 1 0 1 1 0 2Z" />
                      <path d="M11 11H9v1h2v-1Z" />
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Billing
                    </div>
                  </a>
                  <a
                    href="#"
                    className="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <svg
                      className="mx-auto mb-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
                      />
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Logout
                    </div>
                  </a>
                </div>
              </Dropdown>
              <span className="mx-2 hidden h-5 w-px bg-gray-200 dark:bg-gray-600 md:inline"></span>
              <Tooltip content="View FAQ">
                <button className="hidden rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600 md:inline-block">
                  <span className="sr-only">View FAQ</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
                  </svg>
                </button>
              </Tooltip>
              <span className="mx-2 hidden h-5 w-px bg-gray-200 dark:bg-gray-600 md:inline"></span>
              <Dropdown
                inline
                label="N. Virginia"
                placement="bottom"
                theme={{
                  floating: {
                    base: twMerge(theme.dropdown.floating.base, "w-64"),
                  },
                  inlineWrapper: twMerge(
                    theme.dropdown.inlineWrapper,
                    "hidden items-center rounded-lg p-2 pl-4 pr-3 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600 md:inline-flex",
                  ),
                }}
              >
                <ul
                  className="space-y-1 p-3 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="regionDropdownButton"
                >
                  <li>
                    <div className="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                      <div className="flex h-5 items-center">
                        <input
                          id="helper-radio-4"
                          name="helper-radio"
                          type="radio"
                          value=""
                          className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600"
                        />
                      </div>
                      <div className="ml-2 text-sm">
                        <label
                          htmlFor="helper-radio-4"
                          className="font-medium text-gray-900 dark:text-gray-300"
                        >
                          <div>New York</div>
                          <p
                            id="helper-radio-text-4"
                            className="text-xs font-normal text-gray-500 dark:text-gray-300"
                          >
                            Dynamic server switching
                          </p>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                      <div className="flex h-5 items-center">
                        <input
                          id="helper-radio-5"
                          name="helper-radio"
                          type="radio"
                          value=""
                          className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600"
                        />
                      </div>
                      <div className="ml-2 text-sm">
                        <label
                          htmlFor="helper-radio-5"
                          className="font-medium text-gray-900 dark:text-gray-300"
                        >
                          <div>N. Virginia</div>
                          <p
                            id="helper-radio-text-5"
                            className="text-xs font-normal text-gray-500 dark:text-gray-300"
                          >
                            Auto-scaling adapter
                          </p>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                      <div className="flex h-5 items-center">
                        <input
                          id="helper-radio-6"
                          name="helper-radio"
                          type="radio"
                          value=""
                          className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600"
                        />
                      </div>
                      <div className="ml-2 text-sm">
                        <label
                          htmlFor="helper-radio-6"
                          className="font-medium text-gray-900 dark:text-gray-300"
                        >
                          <div>Washington DC.</div>
                          <p
                            id="helper-radio-text-6"
                            className="text-xs font-normal text-gray-500 dark:text-gray-300"
                          >
                            Automatic backups included
                          </p>
                        </label>
                      </div>
                    </div>
                  </li>
                </ul>
              </Dropdown>
              <span className="mx-2 h-5 w-px bg-gray-200 dark:bg-gray-600 md:inline"></span>
              <Dropdown
                inline
                label="Bonnie Green @ 1234-567-890"
                placement="bottom"
                theme={{
                  floating: {
                    base: twMerge(theme.dropdown.floating.base, "w-48"),
                  },
                  inlineWrapper: twMerge(
                    theme.dropdown.inlineWrapper,
                    "hidden items-center rounded-lg p-2 pl-4 pr-3 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600 md:inline-flex",
                  ),
                }}
              >
                <div className="px-4 py-3">
                  <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                    Bonnie Green
                  </span>
                  <span className="block truncate text-sm text-gray-500 dark:text-gray-400">
                    bonnie@flowbite.com
                  </span>
                </div>
                <ul
                  className="py-1 text-gray-500 dark:text-gray-400"
                  aria-labelledby="userDropdownButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      My profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Account settings
                    </a>
                  </li>
                </ul>
                <ul
                  className="py-1 text-gray-500 dark:text-gray-400"
                  aria-labelledby="userDropdownButton"
                >
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        className="mr-2 h-4 w-4 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                      </svg>
                      My likes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        className="mr-2 h-4 w-4 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        {" "}
                        <path d="m1.56 6.245 8 3.924a1 1 0 0 0 .88 0l8-3.924a1 1 0 0 0 0-1.8l-8-3.925a1 1 0 0 0-.88 0l-8 3.925a1 1 0 0 0 0 1.8Z" />{" "}
                        <path d="M18 8.376a1 1 0 0 0-1 1v.163l-7 3.434-7-3.434v-.163a1 1 0 0 0-2 0v.786a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.786a1 1 0 0 0-1-1Z" />{" "}
                        <path d="M17.993 13.191a1 1 0 0 0-1 1v.163l-7 3.435-7-3.435v-.163a1 1 0 1 0-2 0v.787a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.787a1 1 0 0 0-1-1Z" />{" "}
                      </svg>
                      Collections
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <span className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-primary-600 dark:text-primary-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="m7.164 3.805-4.475.38L.327 6.546a1.114 1.114 0 0 0 .63 1.89l3.2.375 3.007-5.006ZM11.092 15.9l.472 3.14a1.114 1.114 0 0 0 1.89.63l2.36-2.362.38-4.475-5.102 3.067Zm8.617-14.283A1.613 1.613 0 0 0 18.383.291c-1.913-.33-5.811-.736-7.556 1.01-1.98 1.98-6.172 9.491-7.477 11.869a1.1 1.1 0 0 0 .193 1.316l.986.985.985.986a1.1 1.1 0 0 0 1.316.193c2.378-1.3 9.889-5.5 11.869-7.477 1.746-1.745 1.34-5.643 1.01-7.556Zm-3.873 6.268a2.63 2.63 0 1 1-3.72-3.72 2.63 2.63 0 0 1 3.72 3.72Z" />
                        </svg>
                        Pro version
                      </span>
                      <svg
                        className="h-2.5 w-2.5 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
                <ul
                  className="py-1 text-gray-500 dark:text-gray-400"
                  aria-labelledby="userDropdownButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </Dropdown>
              <Navbar.Toggle className="items-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600 md:hidden" />
            </div>
          </div>
        </div>
        <Navbar.Collapse
          theme={{
            list: twMerge(
              theme.navbar.collapse.list,
              "mt-0 w-full bg-white dark:bg-gray-900 md:space-x-0 md:bg-gray-50 md:px-6 md:py-3 md:dark:bg-gray-800",
            ),
          }}
        >
          <div className="[&>li]:md:hidden">
            <Navbar.Link>
              <Dropdown
                inline
                label={
                  <span className="flex w-full items-center justify-between text-sm font-medium text-gray-900 dark:text-white md:p-0 md:hover:underline">
                    <span>
                      Account&nbsp;
                      <span className="ml-2 text-base text-gray-500 dark:text-gray-400">
                        Bonnie @ 1234-567-890
                      </span>
                    </span>
                    <svg
                      className="h-2.5 w-2.5 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </span>
                }
                theme={{
                  arrowIcon: "hidden",
                  floating: {
                    base: twMerge(theme.dropdown.floating.base, "w-56"),
                  },
                  inlineWrapper: twMerge(
                    theme.dropdown.inlineWrapper,
                    "w-full",
                  ),
                }}
              >
                <div className="px-4 py-3">
                  <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                    Neil Sims
                  </span>
                  <span className="block truncate text-sm text-gray-500 dark:text-gray-400">
                    name@flowbite.com
                  </span>
                </div>
                <Dropdown.Divider />
                <Dropdown.Item>My profile</Dropdown.Item>
                <Dropdown.Item>Account settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <svg
                    className="mr-2 h-4 w-4 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                  </svg>
                  My links
                </Dropdown.Item>
                <Dropdown.Item>
                  <svg
                    className="mr-2 h-4 w-4 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m1.56 6.245 8 3.924a1 1 0 0 0 .88 0l8-3.924a1 1 0 0 0 0-1.8l-8-3.925a1 1 0 0 0-.88 0l-8 3.925a1 1 0 0 0 0 1.8Z" />{" "}
                    <path d="M18 8.376a1 1 0 0 0-1 1v.163l-7 3.434-7-3.434v-.163a1 1 0 0 0-2 0v.786a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.786a1 1 0 0 0-1-1Z" />{" "}
                    <path d="M17.993 13.191a1 1 0 0 0-1 1v.163l-7 3.435-7-3.435v-.163a1 1 0 1 0-2 0v.787a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.787a1 1 0 0 0-1-1Z" />{" "}
                  </svg>
                  Collections
                </Dropdown.Item>
                <Dropdown.Item>
                  <div className="flex w-full items-center justify-between">
                    <span className="flex items-center">
                      <svg
                        className="mr-2 h-4 w-4 text-primary-600 dark:text-primary-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="m7.164 3.805-4.475.38L.327 6.546a1.114 1.114 0 0 0 .63 1.89l3.2.375 3.007-5.006ZM11.092 15.9l.472 3.14a1.114 1.114 0 0 0 1.89.63l2.36-2.362.38-4.475-5.102 3.067Zm8.617-14.283A1.613 1.613 0 0 0 18.383.291c-1.913-.33-5.811-.736-7.556 1.01-1.98 1.98-6.172 9.491-7.477 11.869a1.1 1.1 0 0 0 .193 1.316l.986.985.985.986a1.1 1.1 0 0 0 1.316.193c2.378-1.3 9.889-5.5 11.869-7.477 1.746-1.745 1.34-5.643 1.01-7.556Zm-3.873 6.268a2.63 2.63 0 1 1-3.72-3.72 2.63 2.63 0 0 1 3.72 3.72Z" />
                      </svg>
                      Pro version
                    </span>
                    <svg
                      className="h-2.5 w-2.5 text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <ul className="py-1 text-gray-500 dark:text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </Dropdown>
            </Navbar.Link>
            <Navbar.Link>
              <Dropdown
                inline
                label={
                  <span className="flex w-full items-center justify-between text-sm font-medium text-gray-900 dark:text-white md:p-0 md:hover:underline">
                    <span>
                      Regions&nbsp;
                      <span className="ml-2 text-base text-gray-500 dark:text-gray-400">
                        US East (N. Virginia)
                      </span>
                    </span>
                    <svg
                      className="h-2.5 w-2.5 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </span>
                }
                theme={{
                  arrowIcon: "hidden",
                  floating: {
                    base: twMerge(theme.dropdown.floating.base, "w-56"),
                  },
                  inlineWrapper: twMerge(
                    theme.dropdown.inlineWrapper,
                    "w-full",
                  ),
                }}
              >
                <ul className="space-y-1 p-3 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <div className="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                      <div className="flex h-5 items-center">
                        <Radio id="helper-radio-4" name="helper-radio" />
                      </div>
                      <div className="ml-2 text-sm">
                        <label
                          htmlFor="helper-radio-4"
                          className="font-medium text-gray-900 dark:text-gray-300"
                        >
                          <div>New York</div>
                          <p
                            id="helper-radio-text-4"
                            className="text-xs font-normal text-gray-500 dark:text-gray-300"
                          >
                            Dynamic server switching
                          </p>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                      <div className="flex h-5 items-center">
                        <Radio id="helper-radio-5" name="helper-radio" />
                      </div>
                      <div className="ml-2 text-sm">
                        <label
                          htmlFor="helper-radio-5"
                          className="font-medium text-gray-900 dark:text-gray-300"
                        >
                          <div>N. Virginia</div>
                          <p
                            id="helper-radio-text-5"
                            className="text-xs font-normal text-gray-500 dark:text-gray-300"
                          >
                            Auto-scaling adapter
                          </p>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                      <div className="flex h-5 items-center">
                        <Radio id="helper-radio-6" name="helper-radio" />
                      </div>
                      <div className="ml-2 text-sm">
                        <label
                          htmlFor="helper-radio-6"
                          className="font-medium text-gray-900 dark:text-gray-300"
                        >
                          <div>Washington DC.</div>
                          <p
                            id="helper-radio-text-6"
                            className="text-xs font-normal text-gray-500 dark:text-gray-300"
                          >
                            Automatic backups included
                          </p>
                        </label>
                      </div>
                    </div>
                  </li>
                </ul>
              </Dropdown>
            </Navbar.Link>
          </div>
          <Navbar.Link
            href="#"
            className="px-4 py-2.5 text-sm font-medium hover:underline dark:text-gray-100 md:mr-8"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="px-4 py-2.5 text-sm font-medium hover:underline dark:text-gray-100 md:mr-8"
          >
            Company
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="px-4 py-2.5 text-sm font-medium hover:underline dark:text-gray-100 md:mr-8"
          >
            Team
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="px-4 py-2.5 text-sm font-medium hover:underline dark:text-gray-100 md:mr-8"
          >
            Features
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="px-4 py-2.5 text-sm font-medium hover:underline dark:text-gray-100 md:mr-8"
          >
            Marketplace
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="px-4 py-2.5 text-sm font-medium hover:underline dark:text-gray-100 md:mr-8"
          >
            Resources
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="px-4 py-2.5 text-sm font-medium hover:underline dark:text-gray-100 md:mr-8"
          >
            Forum
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="border-b-0 px-4 py-2.5 text-sm font-medium hover:underline dark:text-gray-100"
          >
            Support
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
