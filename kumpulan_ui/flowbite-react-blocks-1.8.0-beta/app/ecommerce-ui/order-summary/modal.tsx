"use client";

import { Modal, theme } from "flowbite-react";
import { Close } from "flowbite-react-icons/outline";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function OrderSummaryWithModal() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="m-5 flex justify-center">
        <button
          onClick={() => setModalOpen(true)}
          className="block rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Show order summary modal
        </button>
      </div>
      <Modal
        onClose={() => setModalOpen(false)}
        popup
        show={isModalOpen}
        size="3xl"
        theme={{
          content: {
            base: twMerge(theme.modal.content.base, "p-0"),
            inner: twMerge(
              theme.modal.content.inner,
              "overflow-y-scroll dark:bg-gray-800",
            ),
          },
          body: {
            popup: twMerge(theme.modal.body.popup, "pt-6"),
          },
          header: {
            base: twMerge(
              theme.modal.header.base,
              "items-center py-6 dark:border-gray-700",
            ),
            title: twMerge(theme.modal.header.title, "text-lg"),
          },
        }}
      >
        <form action="#" id="orderSummaryModal">
          <div className="p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-700 sm:mb-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Order summary
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <Close className="h-5 w-5" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="flow-root">
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <dl className="pb-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
                  <dt className="whitespace-nowrap font-semibold text-gray-900 dark:text-white">
                    Order date
                  </dt>
                  <dd className="mt-2 text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right">
                    24 November 2023
                  </dd>
                </dl>

                <dl className="py-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
                  <dt className="whitespace-nowrap font-semibold text-gray-900 dark:text-white">
                    Email
                  </dt>
                  <dd className="mt-2 text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right">
                    name@example.com
                  </dd>
                </dl>

                <dl className="py-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
                  <dt className="whitespace-nowrap text-base font-semibold text-gray-900 dark:text-white">
                    Phone
                  </dt>
                  <dd className="mt-2 text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right">
                    +123 456 7890
                  </dd>
                </dl>

                <dl className="py-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
                  <dt className="whitespace-nowrap font-semibold text-gray-900 dark:text-white">
                    Payment method
                  </dt>
                  <dd className="mt-2 flex items-center gap-2 sm:mt-0 sm:justify-end">
                    <img
                      className="h-auto w-5"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg"
                      alt=""
                    />
                    <span className="text-right text-gray-500 dark:text-gray-400">
                      {" "}
                      Credit Card{" "}
                    </span>
                  </dd>
                </dl>

                <dl className="pt-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
                  <dt className="whitespace-nowrap font-semibold text-gray-900 dark:text-white">
                    Shipping address
                  </dt>
                  <dd className="mt-2 text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right">
                    plm62 Miles Drive St, Newark, NJ 07103, California
                  </dd>
                </dl>
              </div>
            </div>
            <h4 className="mb-4 mt-5 text-lg font-semibold text-gray-900 dark:text-white">
              Products
            </h4>
            <div className="mb-5 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-gray-50 dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800">
              <div className="items-center space-y-4 p-4 sm:flex sm:gap-6 sm:space-y-0">
                <div className="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
                  <a
                    href="#"
                    className="block aspect-square h-14 w-14 shrink-0"
                  >
                    <img
                      className="h-full w-full dark:hidden"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                      alt="imac image"
                    />
                    <img
                      className="hidden h-full w-full dark:block"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                      alt="imac image"
                    />
                  </a>

                  <div className="w-full md:max-w-sm lg:max-w-md">
                    <a
                      href="#"
                      className="font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      {" "}
                      PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple
                      M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, macOS
                      Sonoma, Blue, Keyboard layout INT{" "}
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-8 shrink-0">
                    <p className="text-base font-normal text-gray-900 dark:text-white">
                      x1
                    </p>
                  </div>

                  <div className="md:w-24 md:text-right">
                    <p className="text-base font-bold text-gray-900 dark:text-white">
                      $1,499
                    </p>
                  </div>
                </div>
              </div>

              <div className="items-center space-y-4 p-4 sm:flex sm:gap-6 sm:space-y-0">
                <div className="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
                  <a
                    href="#"
                    className="block aspect-square h-14 w-14 shrink-0"
                  >
                    <img
                      className="h-full w-full dark:hidden"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg"
                      alt="imac image"
                    />
                    <img
                      className="hidden h-full w-full dark:block"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg"
                      alt="imac image"
                    />
                  </a>

                  <div className="w-full md:max-w-sm lg:max-w-md">
                    <a
                      href="#"
                      className="font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      {" "}
                      Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum
                      Case with Midnight Sport Band{" "}
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 shrink-0">
                    <p className="text-base font-normal text-gray-900 dark:text-white">
                      x2
                    </p>
                  </div>

                  <div className="md:w-24 md:text-right">
                    <p className="text-base font-bold text-gray-900 dark:text-white">
                      $598
                    </p>
                  </div>
                </div>
              </div>

              <div className="items-center space-y-4 p-4 sm:flex sm:gap-6 sm:space-y-0">
                <div className="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
                  <a
                    href="#"
                    className="block aspect-square h-14 w-14 shrink-0"
                  >
                    <img
                      className="h-full w-full dark:hidden"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg"
                      alt="imac image"
                    />
                    <img
                      className="hidden h-full w-full dark:block"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg"
                      alt="imac image"
                    />
                  </a>

                  <div className="w-full md:max-w-sm lg:max-w-md">
                    <a
                      href="#"
                      className="font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      {" "}
                      Sony Playstation 5 Digital Edition Console with Extra Blue
                      Controller, White PULSE 3D Headset and Surge Dual
                      Controller, 2 games{" "}
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-8 shrink-0">
                    <p className="text-base font-normal text-gray-900 dark:text-white">
                      x1
                    </p>
                  </div>

                  <div className="md:w-24 md:text-right">
                    <p className="text-base font-bold text-gray-900 dark:text-white">
                      $799
                    </p>
                  </div>
                </div>
              </div>

              <div className="items-center space-y-4 p-4 sm:flex sm:gap-6 sm:space-y-0">
                <div className="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
                  <a
                    href="#"
                    className="block aspect-square h-14 w-14 shrink-0"
                  >
                    <img
                      className="h-full w-full dark:hidden"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-light.svg"
                      alt="imac image"
                    />
                    <img
                      className="hidden h-full w-full dark:block"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-dark.svg"
                      alt="imac image"
                    />
                  </a>

                  <div className="w-full md:max-w-sm lg:max-w-md">
                    <a
                      href="#"
                      className="font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      {" "}
                      Xbox Series X Diablo IV Bundle + Xbox Wireless Controller
                      Carbon Black{" "}
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-8 shrink-0">
                    <p className="text-base font-normal text-gray-900 dark:text-white">
                      x1
                    </p>
                  </div>

                  <div className="md:w-24 md:text-right">
                    <p className="text-base font-bold text-gray-900 dark:text-white">
                      $699
                    </p>
                  </div>
                </div>
              </div>

              <div className="items-center space-y-4 p-4 sm:flex sm:gap-6 sm:space-y-0">
                <div className="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
                  <a
                    href="#"
                    className="block aspect-square h-14 w-14 shrink-0"
                  >
                    <img
                      className="h-full w-full dark:hidden"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg"
                      alt="imac image"
                    />
                    <img
                      className="hidden h-full w-full dark:block"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg"
                      alt="imac image"
                    />
                  </a>

                  <div className="w-full md:max-w-sm lg:max-w-md">
                    <a
                      href="#"
                      className="font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      {" "}
                      APPLE iPhone 15 5G phone, 256GB, Gold{" "}
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-8 shrink-0">
                    <p className="text-base font-normal text-gray-900 dark:text-white">
                      x3
                    </p>
                  </div>

                  <div className="md:w-24 md:text-right">
                    <p className="text-base font-bold text-gray-900 dark:text-white">
                      $2,997
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Order summary
              </h4>
              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-gray-500 dark:text-gray-400">
                      Original price
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      $6,592.00
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-gray-500 dark:text-gray-400">
                      Savings
                    </dt>
                    <dd className="text-base font-medium text-green-500">
                      -$299.00
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-gray-500 dark:text-gray-400">
                      Store Pickup
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      $99
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-gray-500 dark:text-gray-400">Tax</dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      $799
                    </dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-lg font-bold text-gray-900 dark:text-white">
                    Total
                  </dt>
                  <dd className="text-lg font-bold text-gray-900 dark:text-white">
                    $7,191.00
                  </dd>
                </dl>
              </div>
            </div>
            <div className="mt-4 items-center space-x-0 space-y-4 border-t border-gray-200 pt-4 dark:border-gray-700 sm:flex sm:space-x-4 sm:space-y-0 md:mt-5 md:pt-5">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600  dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0 sm:w-auto"
              >
                Place your order
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
              >
                Cancel the order
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}
