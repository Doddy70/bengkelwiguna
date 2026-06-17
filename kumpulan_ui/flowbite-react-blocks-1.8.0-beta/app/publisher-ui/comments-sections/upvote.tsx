"use client";

import { Avatar, Button, Dropdown, theme } from "flowbite-react";
import { twMerge } from "tailwind-merge";

export default function CommentsWithUpvoteCommentsSections() {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 lg:py-16">
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white lg:text-2xl">
            Discussion (20)
          </h2>
          <div>
            <button
              type="button"
              className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="mr-3 hidden shrink-0 sm:block">
            <Avatar
              img="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
              rounded
            />
          </div>
          <form className="mb-6 w-full">
            <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
              <div className="rounded-t-lg bg-white px-4 py-2 dark:bg-gray-800">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  placeholder="Write a comment..."
                  required
                  rows={4}
                  className="w-full border-0 bg-white px-0 text-sm text-gray-900 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400"
                />
              </div>
              <div className="flex items-center justify-between border-t px-3 py-2 dark:border-gray-600">
                <div className="flex flex-wrap items-center divide-gray-200 dark:divide-gray-600 sm:divide-x">
                  <div className="flex items-center space-x-1 sm:pr-4">
                    <button
                      type="button"
                      className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 12 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                        />
                      </svg>
                      <span className="sr-only">Attach file</span>
                    </button>
                    <button
                      type="button"
                      className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 20"
                      >
                        <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                      </svg>
                      <span className="sr-only">Embed map</span>
                    </button>
                    <button
                      type="button"
                      className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 20"
                      >
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                      </svg>
                      <span className="sr-only">Upload image</span>
                    </button>
                    <button
                      type="button"
                      className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 20"
                      >
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                        <path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z" />
                      </svg>
                      <span className="sr-only">Format code</span>
                    </button>
                    <button
                      type="button"
                      className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z" />
                      </svg>
                      <span className="sr-only">Add emoji</span>
                    </button>
                  </div>
                  <div className="hidden flex-wrap items-center space-x-1 sm:flex sm:pl-4">
                    <button
                      type="button"
                      className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 21 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"
                        />
                      </svg>
                      <span className="sr-only">Add list</span>
                    </button>
                    <button
                      type="button"
                      className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                      </svg>
                      <span className="sr-only">Settings</span>
                    </button>
                    <button
                      type="button"
                      className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z" />
                        <path d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z" />
                      </svg>
                      <span className="sr-only">Timeline</span>
                    </button>
                    <button
                      type="button"
                      className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                        <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                      </svg>
                      <span className="sr-only">Download</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Button type="submit" className="[&>span]:py-2.5 [&>span]:text-xs">
              Post comment
            </Button>
          </form>
        </div>
        <article className="mb-6 rounded-lg border border-gray-100 bg-white p-4 text-base dark:border-gray-700 dark:bg-gray-800 lg:p-6">
          <div className="flex">
            <div className="mr-4">
              <div className="flex w-9 flex-col items-center justify-center rounded-lg bg-gray-100 font-medium dark:bg-gray-700">
                <button
                  type="button"
                  className="w-full rounded-t-lg py-1 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  +
                </button>
                <span className="font-m px-2 py-1 text-xs text-gray-900 dark:text-white lg:px-0 lg:text-sm">
                  14
                </span>
                <button
                  type="button"
                  className="w-full  rounded-b-lg py-1 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  -
                </button>
              </div>
            </div>
            <div className="w-full">
              <footer className="mb-2 flex w-full items-center justify-between">
                <a href="#" className="flex items-center">
                  <p className="mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                    <Avatar
                      img="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                      rounded
                      size="xs"
                      className="space-x-2"
                    >
                      <p>
                        Bonnie Green
                        <time
                          title="March 15th, 2022"
                          className="mx-3 text-sm font-normal text-gray-600 dark:text-gray-400"
                        >
                          Mar. 15, 2022
                        </time>
                      </p>
                    </Avatar>
                  </p>
                </a>
                <Dropdown
                  color="gray"
                  inline
                  label={
                    <svg
                      className="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                  }
                  theme={{
                    arrowIcon: "hidden",
                    floating: {
                      base: twMerge(theme.dropdown.floating.base, "w-32"),
                    },
                    inlineWrapper: twMerge(
                      theme.dropdown.inlineWrapper,
                      "inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                    ),
                  }}
                >
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item>Remove</Dropdown.Item>
                  <Dropdown.Item>Report</Dropdown.Item>
                </Dropdown>
              </footer>
              <p className="text-gray-500 dark:text-gray-400">
                The article covers the essentials, challenges, myths and stages
                the UX designer should consider while creating the design
                strategy.
              </p>
              <div className="mt-4 flex items-center space-x-4">
                <button
                  type="button"
                  className="flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400"
                >
                  <svg
                    className="mr-1.5 h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                  </svg>
                  Reply
                </button>
              </div>
            </div>
          </div>
        </article>
        <article className="mb-6 ml-6 rounded-lg border border-gray-100 bg-white p-4 text-base dark:border-gray-700 dark:bg-gray-800 lg:ml-12 lg:p-6">
          <div className="flex">
            <div className="mr-4">
              <div className="flex w-9 flex-col items-center justify-center rounded-lg bg-gray-100 font-medium dark:bg-gray-700">
                <button
                  type="button"
                  className="w-full rounded-t-lg py-1 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  +
                </button>
                <span className="font-m px-2 py-1 text-xs text-gray-900 dark:text-white lg:px-0 lg:text-sm">
                  3
                </span>
                <button
                  type="button"
                  className="w-full  rounded-b-lg py-1 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  -
                </button>
              </div>
            </div>
            <div className="w-full">
              <footer className="mb-2 flex w-full items-center justify-between">
                <a href="#" className="flex items-center">
                  <p className="mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                    <Avatar
                      img="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                      rounded
                      size="xs"
                      className="space-x-2"
                    >
                      <p>
                        Jese Leos
                        <time
                          title="February 12th, 2022"
                          className="mx-3 text-sm font-normal text-gray-600 dark:text-gray-400"
                        >
                          Feb. 12, 2022
                        </time>
                      </p>
                    </Avatar>
                  </p>
                </a>
                <Dropdown
                  color="gray"
                  inline
                  label={
                    <svg
                      className="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                  }
                  theme={{
                    arrowIcon: "hidden",
                    floating: {
                      base: twMerge(theme.dropdown.floating.base, "w-32"),
                    },
                    inlineWrapper: twMerge(
                      theme.dropdown.inlineWrapper,
                      "inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                    ),
                  }}
                >
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item>Remove</Dropdown.Item>
                  <Dropdown.Item>Report</Dropdown.Item>
                </Dropdown>
              </footer>
              <p className="text-gray-500 dark:text-gray-400">
                Much appreciated! Glad you liked it ☺️
              </p>
              <div className="mt-4 flex items-center space-x-4">
                <button
                  type="button"
                  className="flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400"
                >
                  <svg
                    className="mr-1.5 h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                  </svg>
                  Reply
                </button>
              </div>
            </div>
          </div>
        </article>
        <article className="mb-6 rounded-lg border border-gray-100 bg-white p-4 text-base dark:border-gray-700 dark:bg-gray-800 lg:p-6">
          <div className="flex">
            <div className="mr-4">
              <div className="flex w-9 flex-col items-center justify-center rounded-lg bg-gray-100 font-medium dark:bg-gray-700">
                <button
                  type="button"
                  className="w-full rounded-t-lg py-1 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  +
                </button>
                <span className="font-m px-2 py-1 text-xs text-gray-900 dark:text-white lg:px-0 lg:text-sm">
                  12
                </span>
                <button
                  type="button"
                  className="w-full  rounded-b-lg py-1 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  -
                </button>
              </div>
            </div>
            <div className="w-full">
              <footer className="mb-2 flex w-full items-center justify-between">
                <a href="#" className="flex items-center">
                  <p className="mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                    <Avatar
                      img="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                      rounded
                      size="xs"
                      className="space-x-2"
                    >
                      <p>
                        Danny Hart
                        <time
                          title="February 8th, 2022"
                          className="mx-3 text-sm font-normal text-gray-600 dark:text-gray-400"
                        >
                          Feb. 8, 2022
                        </time>
                      </p>
                    </Avatar>
                  </p>
                </a>
                <Dropdown
                  color="gray"
                  inline
                  label={
                    <svg
                      className="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                  }
                  theme={{
                    arrowIcon: "hidden",
                    floating: {
                      base: twMerge(theme.dropdown.floating.base, "w-32"),
                    },
                    inlineWrapper: twMerge(
                      theme.dropdown.inlineWrapper,
                      "inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                    ),
                  }}
                >
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item>Remove</Dropdown.Item>
                  <Dropdown.Item>Report</Dropdown.Item>
                </Dropdown>
              </footer>
              <p className="text-gray-500 dark:text-gray-400">
                Very straight-to-point article. Really worth time reading. Thank
                you! But tools are just the instruments for the UX designers.
                The knowledge of the design tools are as important as the
                creation of the design strategy.
              </p>
              <div className="mt-4 flex items-center space-x-4">
                <button
                  type="button"
                  className="flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400"
                >
                  <svg
                    className="mr-1.5 h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                  </svg>
                  Reply
                </button>
              </div>
            </div>
          </div>
        </article>
        <article className="mb-6 rounded-lg border border-gray-100 bg-white p-4 text-base dark:border-gray-700 dark:bg-gray-800 lg:p-6">
          <div className="flex">
            <div className="mr-4">
              <div className="flex w-9 flex-col items-center justify-center rounded-lg bg-gray-100 font-medium dark:bg-gray-700">
                <button
                  type="button"
                  className="w-full rounded-t-lg py-1 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  +
                </button>
                <span className="font-m px-2 py-1 text-xs text-gray-900 dark:text-white lg:px-0 lg:text-sm">
                  8
                </span>
                <button
                  type="button"
                  className="w-full  rounded-b-lg py-1 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  -
                </button>
              </div>
            </div>
            <div className="w-full">
              <footer className="mb-2 flex w-full items-center justify-between">
                <a href="#" className="flex items-center">
                  <p className="mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                    <Avatar
                      img="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                      rounded
                      size="xs"
                      className="space-x-2"
                    >
                      <p>
                        Bonnie Green
                        <time
                          title="March 15th, 2022"
                          className="mx-3 text-sm font-normal text-gray-600 dark:text-gray-400"
                        >
                          Mar. 15, 2022
                        </time>
                      </p>
                    </Avatar>
                  </p>
                </a>
                <Dropdown
                  color="gray"
                  inline
                  label={
                    <svg
                      className="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                  }
                  theme={{
                    arrowIcon: "hidden",
                    floating: {
                      base: twMerge(theme.dropdown.floating.base, "w-32"),
                    },
                    inlineWrapper: twMerge(
                      theme.dropdown.inlineWrapper,
                      "inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                    ),
                  }}
                >
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item>Remove</Dropdown.Item>
                  <Dropdown.Item>Report</Dropdown.Item>
                </Dropdown>
              </footer>
              <p className="text-gray-500 dark:text-gray-400">
                The article covers the essentials, challenges, myths and stages
                the UX designer should consider while creating the design
                strategy.
              </p>
              <div className="mt-4 flex items-center space-x-4">
                <button
                  type="button"
                  className="flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400"
                >
                  <svg
                    className="mr-1.5 h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                  </svg>
                  Reply
                </button>
              </div>
            </div>
          </div>
        </article>
        <article className="mb-6 rounded-lg border border-gray-100 bg-white p-4 text-base dark:border-gray-700 dark:bg-gray-800 lg:p-6">
          <div className="flex">
            <div className="mr-4">
              <div className="flex w-9 flex-col items-center justify-center rounded-lg bg-gray-100 font-medium dark:bg-gray-700">
                <button
                  type="button"
                  className="w-full rounded-t-lg py-1 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  +
                </button>
                <span className="font-m px-2 py-1 text-xs text-gray-900 dark:text-white lg:px-0 lg:text-sm">
                  32
                </span>
                <button
                  type="button"
                  className="w-full  rounded-b-lg py-1 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  -
                </button>
              </div>
            </div>
            <div className="w-full">
              <footer className="mb-2 flex w-full items-center justify-between">
                <a href="#" className="flex items-center">
                  <p className="mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                    <Avatar
                      img="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                      rounded
                      size="xs"
                      className="space-x-2"
                    >
                      <p>
                        Helene Engels
                        <time
                          title="June 23rd, 2022"
                          className="mx-3 text-sm font-normal text-gray-600 dark:text-gray-400"
                        >
                          Jun. 23, 2022
                        </time>
                      </p>
                    </Avatar>
                  </p>
                </a>
                <Dropdown
                  color="gray"
                  inline
                  label={
                    <svg
                      className="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                  }
                  theme={{
                    arrowIcon: "hidden",
                    floating: {
                      base: twMerge(theme.dropdown.floating.base, "w-32"),
                    },
                    inlineWrapper: twMerge(
                      theme.dropdown.inlineWrapper,
                      "inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                    ),
                  }}
                >
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item>Remove</Dropdown.Item>
                  <Dropdown.Item>Report</Dropdown.Item>
                </Dropdown>
              </footer>
              <p className="text-gray-500 dark:text-gray-400">
                Thanks for sharing this. I do came from the Backend development
                and explored some of the tools to design my Side Projects.
              </p>
              <div className="mt-4 flex items-center space-x-4">
                <button
                  type="button"
                  className="flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400"
                >
                  <svg
                    className="mr-1.5 h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                  </svg>
                  Reply
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
