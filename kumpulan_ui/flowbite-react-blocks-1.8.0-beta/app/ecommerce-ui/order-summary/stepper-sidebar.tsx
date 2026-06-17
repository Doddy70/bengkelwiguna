"use client";

import { Button } from "flowbite-react";
import { CheckCircle } from "flowbite-react-icons/outline";

export default function OrderSummaryWithStepperAndSidebar() {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <ol className="flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
          <li className="flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:w-full sm:after:inline-block sm:after:content-[''] xl:after:mx-10">
            <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
              <CheckCircle className="me-2 h-4 w-4 sm:h-5 sm:w-5" />
              Cart
            </span>
          </li>
          <li className="flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:w-full sm:after:inline-block sm:after:content-[''] xl:after:mx-10">
            <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
              <CheckCircle className="me-2 h-4 w-4 sm:h-5 sm:w-5" />
              Checkout
            </span>
          </li>
          <li className="flex shrink-0 items-center text-primary-700 dark:text-primary-500">
            <CheckCircle className="me-2 h-4 w-4 sm:h-5 sm:w-5" />
            Order summary
          </li>
        </ol>
        <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-8">
          <div className="min-w-0 flex-1 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white shadow-sm dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex flex-wrap items-center space-y-4 p-6 sm:gap-6 sm:space-y-0 md:justify-between">
              <div className="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
                <a href="#" className="block aspect-square w-20 shrink-0">
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
                    PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3,
                    24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, macOS Sonoma,
                    Blue, Keyboard layout INT
                  </a>
                </div>
              </div>

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

            <div className="flex flex-wrap items-center space-y-4 p-6 sm:gap-6 sm:space-y-0 md:justify-between">
              <div className="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
                <a href="#" className="block aspect-square w-20 shrink-0">
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
                    Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum
                    Case with Midnight Sport Band
                  </a>
                </div>
              </div>

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

            <div className="flex flex-wrap items-center space-y-4 p-6 sm:gap-6 sm:space-y-0 md:justify-between">
              <div className="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
                <a href="#" className="block aspect-square w-20 shrink-0">
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
                    Sony Playstation 5 Digital Edition Console with Extra Blue
                    Controller, White PULSE 3D Headset and Surge Dual
                    Controller, 2 games
                  </a>
                </div>
              </div>

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

            <div className="flex flex-wrap items-center space-y-4 p-6 sm:gap-6 sm:space-y-0 md:justify-between">
              <div className="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
                <a href="#" className="block aspect-square w-20 shrink-0">
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
                    Xbox Series X Diablo IV Bundle + Xbox Wireless Controller
                    Carbon Black
                  </a>
                </div>
              </div>

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

            <div className="flex flex-wrap items-center space-y-4 p-6 sm:gap-6 sm:space-y-0 md:justify-between">
              <div className="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
                <a href="#" className="block aspect-square w-20 shrink-0">
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
                    APPLE iPhone 15 5G phone, 256GB, Gold
                  </a>
                </div>
              </div>

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

          <div className="mt-6 w-full divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 dark:divide-gray-700 dark:border-gray-700 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
            <div className="p-6">
              <h4 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                Order Details
              </h4>

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
                        Credit Card
                      </span>
                    </dd>
                  </dl>

                  <dl className="pt-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
                    <dt className="whitespace-nowrap font-semibold text-gray-900 dark:text-white">
                      Shipping address
                    </dt>
                    <dd className="mt-2 text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right">
                      62 Miles Drive St, Newark, NJ 07103, California
                    </dd>
                  </dl>
                </div>
              </div>
            </div>

            <div className="space-y-4 p-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                Order amount
              </h4>

              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-gray-500 dark:text-gray-400">
                      Original price
                    </dt>
                    <dd className="font-medium text-gray-900 dark:text-white">
                      $6,592.00
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-gray-500 dark:text-gray-400">
                      Savings
                    </dt>
                    <dd className="font-medium text-green-500">-$299.00</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-gray-500 dark:text-gray-400">
                      Store Pickup
                    </dt>
                    <dd className="font-medium text-gray-900 dark:text-white">
                      $99
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-gray-500 dark:text-gray-400">Tax</dt>
                    <dd className="font-medium text-gray-900 dark:text-white">
                      $799
                    </dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="font-bold text-gray-900 dark:text-white">
                    Total
                  </dt>
                  <dd className="font-bold text-gray-900 dark:text-white">
                    $7,191.00
                  </dd>
                </dl>
              </div>

              <Button type="submit" className="w-full">
                Place your order
              </Button>

              <p className="max-w-xs text-sm font-normal text-gray-500 dark:text-gray-400">
                By placing your order, you agree to Flowbite's&nbsp;
                <a
                  href="#"
                  title=""
                  className="text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                >
                  privacy note
                </a>
                &nbsp;and&nbsp;
                <a
                  href="#"
                  title=""
                  className="text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                >
                  terms of use
                </a>
                .
              </p>
            </div>

            <div className="space-y-4 bg-gray-50 p-6 dark:bg-gray-700">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Your benefits:
              </p>
              <ul className="list-outside list-disc space-y-1 pl-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                <li>Pre-order guarantee</li>
                <li>Free shipping</li>
                <li>Best price</li>
              </ul>

              <a
                href="#"
                title=""
                className="inline-block text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
              >
                How are shipping costs calculated?
              </a>

              <p className="max-w-xs text-sm font-normal text-gray-500 dark:text-gray-400">
                Flowbite PRO shipping benefits have been applied to your order.
              </p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
