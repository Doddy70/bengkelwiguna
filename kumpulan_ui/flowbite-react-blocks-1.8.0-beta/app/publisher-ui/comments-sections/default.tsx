"use client";

import { Avatar, Button, Dropdown, theme } from "flowbite-react";
import { twMerge } from "tailwind-merge";

export default function DefaultCommentsListCommentsSections() {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 lg:py-16">
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white lg:text-2xl">
            Discussion (20)
          </h2>
        </div>
        <form className="mb-6">
          <div className="mb-4 rounded-lg rounded-t-lg border border-gray-200 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows={6}
              className="w-full border-0 px-0 text-sm text-gray-900 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400"
              placeholder="Write a comment..."
              required
            />
          </div>
          <Button
            size="xs"
            type="submit"
            className="[&>span]:px-4 [&>span]:py-2.5"
          >
            Post comment
          </Button>
        </form>
        <article className="mb-6 rounded-lg bg-white p-6 text-base dark:bg-gray-900">
          <footer className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <p className="mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                <Avatar
                  img="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  rounded
                  size="xs"
                  className="space-x-2"
                >
                  <p>
                    Michael Gough
                    <time
                      title="February 8th, 2022"
                      className="mx-3 text-sm font-normal text-gray-600 dark:text-gray-400"
                    >
                      Feb. 8, 2022
                    </time>
                  </p>
                </Avatar>
              </p>
            </div>
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
                  "inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
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
            you! But tools are just the instruments for the UX designers. The
            knowledge of the design tools are as important as the creation of
            the design strategy.
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
        </article>
        <article className="mb-6 ml-6 rounded-lg bg-white p-6 text-base dark:bg-gray-900 lg:ml-12">
          <footer className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <p className="mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                <Avatar
                  img="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
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
            </div>
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
                  "inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
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
        </article>
        <article className="mb-6 border-t border-gray-200 bg-white p-6 text-base dark:border-gray-700 dark:bg-gray-900">
          <footer className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
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
                      title="March 12th, 2022"
                      className="mx-3 text-sm font-normal text-gray-600 dark:text-gray-400"
                    >
                      Mar. 12, 2022
                    </time>
                  </p>
                </Avatar>
              </p>
            </div>
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
                  "inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                ),
              }}
            >
              <Dropdown.Item>Edit</Dropdown.Item>
              <Dropdown.Item>Remove</Dropdown.Item>
              <Dropdown.Item>Report</Dropdown.Item>
            </Dropdown>
          </footer>
          <p className="text-gray-500 dark:text-gray-400">
            The article covers the essentials, challenges, myths and stages the
            UX designer should consider while creating the design strategy.
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
        </article>
        <article className="border-t border-gray-200 bg-white p-6 text-base dark:border-gray-700 dark:bg-gray-900">
          <footer className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <p className="mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                <Avatar
                  img="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                  rounded
                  size="xs"
                  className="space-x-2"
                >
                  <p>
                    Helene Engels
                    <time
                      title="June 23, 2022"
                      className="mx-3 text-sm font-normal text-gray-600 dark:text-gray-400"
                    >
                      Jun. 23, 2022
                    </time>
                  </p>
                </Avatar>
              </p>
            </div>
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
                  "inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                ),
              }}
            >
              <Dropdown.Item>Edit</Dropdown.Item>
              <Dropdown.Item>Remove</Dropdown.Item>
              <Dropdown.Item>Report</Dropdown.Item>
            </Dropdown>
          </footer>
          <p className="text-gray-500 dark:text-gray-400">
            Thanks for sharing this. I do came from the Backend development and
            explored some of the tools to design my Side Projects.
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
        </article>
      </div>
    </section>
  );
}
