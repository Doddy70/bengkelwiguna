"use client";

import {
  Avatar,
  Button,
  Dropdown,
  Label,
  Textarea,
  TextInput,
  theme,
} from "flowbite-react";
import { twMerge } from "tailwind-merge";

export default function WordPressCommentsSection() {
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
        <form
          action="#"
          className="grid-cols mx-auto mb-6 grid gap-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:grid-cols-2"
        >
          <div className="sm:col-span-2">
            <Label htmlFor="first-name" className="mb-2 block">
              First Name
            </Label>
            <TextInput
              id="first-name"
              name="first-name"
              placeholder="Bonnie Green"
              required
            />
          </div>
          <div>
            <Label htmlFor="email" className="mb-2 block">
              Your email
            </Label>
            <TextInput
              id="email"
              name="email"
              placeholder="name@flowbite.com"
              required
              type="email"
            />
          </div>
          <div>
            <Label htmlFor="website" className="mb-2 block">
              Website
            </Label>
            <TextInput
              id="website"
              name="website"
              placeholder="www.yoursite.com"
              required
              type="url"
            />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="message" className="mb-2 block">
              Your message
            </Label>
            <Textarea id="message" name="message" rows={6} />
          </div>
          <Button type="submit">Post comment</Button>
        </form>
        <article className="mb-6 rounded-lg border border-gray-200 bg-white p-6 text-base shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <footer className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <p className="mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                <Avatar
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  size="sm"
                  className="space-x-3"
                >
                  <div className="flex flex-col">
                    <span>Michael Gough</span>
                    <time
                      title="February 8th, 2022"
                      className="text-sm font-normal text-gray-600 dark:text-gray-400"
                    >
                      Feb. 8, 2022
                    </time>
                  </div>
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
                  "inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-600",
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
                className="mr-1 h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
              </svg>
              11 Likes
            </button>
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
        <article className="mb-6 ml-6 rounded-lg border border-gray-200 bg-white p-6 text-base shadow-sm dark:border-gray-700 dark:bg-gray-800 lg:ml-12">
          <footer className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <p className="mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                <Avatar
                  img="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  size="sm"
                  className="space-x-3"
                >
                  <div className="flex flex-col">
                    <span>Jese Leos</span>
                    <time
                      title="February 12th, 2022"
                      className="text-sm font-normal text-gray-600 dark:text-gray-400"
                    >
                      Feb. 12, 2022
                    </time>
                  </div>
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
                  "inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-600",
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
                className="mr-1 h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
              </svg>
              3 Likes
            </button>
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
        <article className="mb-6 rounded-lg border border-gray-200 bg-white p-6 text-base shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <footer className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <p className="mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                <Avatar
                  img="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                  size="sm"
                  className="space-x-3"
                >
                  <div className="flex flex-col">
                    <span>Bonnie Green</span>
                    <time
                      title="March 12th, 2022"
                      className="text-sm font-normal text-gray-600 dark:text-gray-400"
                    >
                      Mar. 12, 2022
                    </time>
                  </div>
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
                  "inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-600",
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
                className="mr-1 h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
              </svg>
              24 Likes
            </button>
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
        <article className="mb-6 rounded-lg border border-gray-200 bg-white p-6 text-base shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <footer className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <p className="mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                <Avatar
                  img="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                  size="sm"
                  className="space-x-3"
                >
                  <div className="flex flex-col">
                    <span>Helene Engels</span>
                    <time
                      title="June 23rd, 2022"
                      className="text-sm font-normal text-gray-600 dark:text-gray-400"
                    >
                      Jun. 23, 2022
                    </time>
                  </div>
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
                  "inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-600",
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
                className="mr-1 h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
              </svg>
              9 Likes
            </button>
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
