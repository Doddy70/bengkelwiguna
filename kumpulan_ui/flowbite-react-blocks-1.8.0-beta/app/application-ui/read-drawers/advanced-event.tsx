"use client";

import { Avatar, Button, Drawer, theme } from "flowbite-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function AdvancedReadEventDrawer() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-center">
        <Button onClick={() => setOpen(true)}>Read event</Button>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setOpen(false)}
        theme={{
          header: {
            inner: {
              titleText: twMerge(
                theme.drawer.header.inner.titleText,
                "mb-0 text-xl font-semibold text-gray-900 dark:text-white",
              ),
            },
          },
        }}
        className="w-full max-w-sm"
      >
        <Drawer.Header
          title="The 4th Digital Transformation"
          titleIcon={() => <></>}
        />
        <Drawer.Items>
          <dl className="mt-4 sm:mt-5">
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              Details
            </dt>
            <dd className="mb-4 font-light text-gray-500 dark:text-gray-400 sm:mb-5">
              The 4th Digital Transformation and Industry 4.0 Free Online
              Conference Organized by Flowbite and Themesberg, Live on Saturday
              26th Nov at 02:00 pm GMT | 04:00 pm EET on Zoom Webinars
            </dd>
          </dl>
          <dl className="flex items-center">
            <dt className="sr-only">Date</dt>
            <dd className="mb-4 mr-4 flex items-center space-x-1.5 text-gray-900 dark:text-white sm:mb-5">
              <svg
                className="mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500"
                aria-hidden
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold">6th November 2022</span>
            </dd>
            <dt className="sr-only">Location</dt>
            <dd className="mb-4 flex items-center space-x-1.5 text-gray-900 dark:text-white sm:mb-5">
              <svg
                className="mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500"
                aria-hidden
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold">California, USA</span>
            </dd>
          </dl>
          <dl className="mb-4 grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-gray-200 bg-gray-100 p-3 dark:border-gray-600 dark:bg-gray-700">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Participants
              </dt>
              <dd>
                <Avatar.Group className="-space-x-3 [&_img]:ring-gray-100 dark:[&_img]:ring-gray-700">
                  <Avatar
                    alt="Helene avatar"
                    img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                    rounded
                    size="sm"
                    stacked
                  />
                  <Avatar
                    alt="bonnie avatar"
                    img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    rounded
                    size="sm"
                    stacked
                  />
                  <Avatar
                    alt="jese avatar"
                    img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    rounded
                    size="sm"
                    stacked
                  />
                  <Avatar.Counter
                    total={7}
                    className="h-8 w-8 cursor-pointer ring-gray-100 dark:bg-gray-600 dark:ring-gray-700"
                  />
                </Avatar.Group>
              </dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-100 p-3 dark:border-gray-600 dark:bg-gray-700">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Online
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">Google Meet</dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-100 p-3 dark:border-gray-600 dark:bg-gray-700">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Duration
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">All day</dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-100 p-3 dark:border-gray-600 dark:bg-gray-700">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Notification
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">4 Days SMS</dd>
            </div>
          </dl>
          <div className="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">
            <Button className="inline-flex w-full">
              <svg
                aria-hidden
                className="-ml-1 mr-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path
                  fillRule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clipRule="evenodd"
                />
              </svg>
              Edit
            </Button>
            <Button color="failure" className="inline-flex w-full">
              <svg
                aria-hidden
                className="-ml-1 mr-1.5 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Delete
            </Button>
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
