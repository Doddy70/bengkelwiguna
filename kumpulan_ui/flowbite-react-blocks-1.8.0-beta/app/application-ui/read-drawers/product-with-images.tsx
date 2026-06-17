"use client";

import { Badge, Button, Drawer, theme } from "flowbite-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function ReadProductDrawerWithImages() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center">
        <Button onClick={() => setOpen(true)}>Read product</Button>
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
        className="w-full max-w-lg"
      >
        <Drawer.Header title='Apple iMac 25"' titleIcon={() => <></>} />
        <Drawer.Items>
          <h5 className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
            $2999
          </h5>
          <div className="mb-4 grid grid-cols-3 gap-4 sm:mb-5">
            <div className="w-auto rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                alt="iMac Side"
              />
            </div>
            <div className="w-auto rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                alt="iMac Front"
              />
            </div>
            <div className="w-auto rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                alt="iMac Back"
              />
            </div>
            <div className="w-auto rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                alt="iMac Back"
              />
            </div>
            <div className="w-auto rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                alt="iMac Front"
              />
            </div>
            <div className="w-auto rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                alt="iMac Side"
              />
            </div>
          </div>
          <dl className="sm:mb-5">
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              Details
            </dt>
            <dd className="mb-4 font-light text-gray-500 dark:text-gray-400 sm:mb-5">
              Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
              processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
              Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
              Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
            </dd>
          </dl>
          <dl className="mb-4 grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-lg border border-gray-200 bg-gray-100 p-3 dark:border-gray-600 dark:bg-gray-700 sm:col-span-1">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Shipping
              </dt>
              <dd className="flex items-center text-gray-500 dark:text-gray-400">
                <svg
                  className="mr-1.5 h-4 w-4"
                  aria-hidden="true"
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
                United States, Europe
              </dd>
            </div>
            <div className="col-span-2 rounded-lg border border-gray-200 bg-gray-100 p-3 dark:border-gray-600 dark:bg-gray-700 sm:col-span-1">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Colors
              </dt>
              <dd className="flex items-center space-x-2 font-light text-gray-500 dark:text-gray-400">
                <div className="h-6 w-6 shrink-0 rounded-full bg-purple-600"></div>
                <div className="h-6 w-6 shrink-0 rounded-full bg-indigo-400"></div>
                <div className="h-6 w-6 shrink-0 rounded-full bg-primary-600"></div>
                <div className="h-6 w-6 shrink-0 rounded-full bg-pink-400"></div>
                <div className="h-6 w-6 shrink-0 rounded-full bg-teal-300"></div>
                <div className="h-6 w-6 shrink-0 rounded-full bg-green-300"></div>
              </dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-100 p-3 dark:border-gray-600 dark:bg-gray-700">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Product State
              </dt>
              <dd>
                <Badge color="blue" className="w-fit">
                  <svg
                    aria-hidden
                    className="mr-1 h-3 w-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  New
                </Badge>
              </dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-100 p-3 dark:border-gray-600 dark:bg-gray-700">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Sold by
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">Flowbite</dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-100 p-3 dark:border-gray-600 dark:bg-gray-700">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Ships from
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">Flowbite</dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-100 p-3 dark:border-gray-600 dark:bg-gray-700">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Brand
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">Apple</dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-100 p-3 dark:border-gray-600 dark:bg-gray-700">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Dimensions (cm)
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">
                105 x 15 x 23
              </dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-100 p-3 dark:border-gray-600 dark:bg-gray-700">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Item weight
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">12kg</dd>
            </div>
          </dl>
          <div className="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4 [&_span]:px-5 [&_span]:py-2.5">
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
            <Button
              color="gray"
              outline
              className="inline-flex w-full [&>span]:dark:border-gray-600 [&>span]:dark:bg-gray-800 [&>span]:dark:text-gray-400 [&>span]:dark:hover:bg-gray-700 [&>span]:dark:hover:text-white [&>span]:dark:focus:ring-gray-700"
            >
              Preview
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
