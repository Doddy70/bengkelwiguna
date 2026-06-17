"use client";

import { Drawer, DrawerHeader } from "flowbite-react";
import { useState } from "react";

export default function OrderSummaryWithDrawer() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div className="m-5 text-center">
        <button
          onClick={() => setDrawerOpen(true)}
          className="rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Show order summary drawer
        </button>
      </div>
      <Drawer
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        className="w-[30rem]"
      >
        <DrawerHeader title="MY SHOPPING CART" titleIcon={() => <></>} />
        <form action="#" className="mt-6">
          <div className="flex-1 space-y-6">
            <div>
              <div className="space-y-4 border-b border-gray-200 pb-4 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Billing information
                </h4>

                <dl>
                  <dt className="text-base font-medium text-gray-900 dark:text-white">
                    Company
                  </dt>
                  <dd className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                    Bergside LLC, VAT 123456, (+1) 234 567 890
                  </dd>
                </dl>

                <button
                  type="button"
                  className="text-base font-medium text-primary-700 hover:underline dark:text-primary-500"
                >
                  Edit
                </button>
              </div>

              <div className="space-y-4 border-b border-gray-200 py-4 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Delivery information
                </h4>

                <dl>
                  <dt className="text-base font-medium text-gray-900 dark:text-white">
                    DHL Express
                  </dt>
                  <dd className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                    3454 Scott Street, San Francisco, California, United States
                  </dd>
                </dl>

                <button
                  type="button"
                  className="text-base font-medium text-primary-700 hover:underline dark:text-primary-500"
                >
                  Edit
                </button>
              </div>

              <div className="space-y-4 border-b border-gray-200 py-4 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Payment method
                </h4>

                <p className="text-base font-medium text-gray-900 dark:text-white">
                  Online with credit card
                </p>

                <button
                  type="button"
                  className="text-base font-medium text-primary-700 hover:underline dark:text-primary-500"
                >
                  Edit
                </button>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                Products
              </h4>
              <div className="relative overflow-x-auto">
                <table className="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    <tr>
                      <td className="whitespace-nowrap pb-4 md:w-[224px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex aspect-square h-10 w-10 shrink-0 items-center"
                          >
                            <img
                              className="h-auto max-h-full w-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                              alt="imac image"
                            />
                            <img
                              className="hidden h-auto max-h-full w-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                              alt="imac image"
                            />
                          </a>
                          <a href="#" className="hover:underline">
                            Apple iMac 27”
                          </a>
                        </div>
                      </td>

                      <td className="p-4 text-base font-normal text-gray-900 dark:text-white">
                        x1
                      </td>

                      <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                        $1,499
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 md:w-[224px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex aspect-square h-10 w-10 shrink-0 items-center"
                          >
                            <img
                              className="h-auto max-h-full w-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg"
                              alt="phone image"
                            />
                            <img
                              className="hidden h-auto max-h-full w-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg"
                              alt="phone image"
                            />
                          </a>
                          <a href="#" className="hover:underline">
                            Apple iPhone 14
                          </a>
                        </div>
                      </td>

                      <td className="p-4 text-base font-normal text-gray-900 dark:text-white">
                        x2
                      </td>

                      <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                        $1,998
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 md:w-[224px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex aspect-square h-10 w-10 shrink-0 items-center"
                          >
                            <img
                              className="h-auto max-h-full w-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg"
                              alt="ipad image"
                            />
                            <img
                              className="hidden h-auto max-h-full w-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg"
                              alt="ipad image"
                            />
                          </a>
                          <a href="#" className="hover:underline">
                            Apple iPad Air
                          </a>
                        </div>
                      </td>

                      <td className="p-4 text-base font-normal text-gray-900 dark:text-white">
                        x1
                      </td>

                      <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                        $898
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 md:w-[224px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex aspect-square h-10 w-10 shrink-0 items-center"
                          >
                            <img
                              className="h-auto max-h-full w-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-light.svg"
                              alt="xbox image"
                            />
                            <img
                              className="hidden h-auto max-h-full w-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-dark.svg"
                              alt="xbox image"
                            />
                          </a>
                          <a href="#" className="hover:underline">
                            Xbox Series X
                          </a>
                        </div>
                      </td>

                      <td className="p-4 text-base font-normal text-gray-900 dark:text-white">
                        x4
                      </td>

                      <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                        $4,499
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 md:w-[224px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex aspect-square h-10 w-10 shrink-0 items-center"
                          >
                            <img
                              className="h-auto max-h-full w-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg"
                              alt="playstation image"
                            />
                            <img
                              className="hidden h-auto max-h-full w-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg"
                              alt="playstation image"
                            />
                          </a>
                          <a href="#" className="hover:underline">
                            PlayStation 5
                          </a>
                        </div>
                      </td>

                      <td className="p-4 text-base font-normal text-gray-900 dark:text-white">
                        x1
                      </td>

                      <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                        $499
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 md:w-[224px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex aspect-square h-10 w-10 shrink-0 items-center"
                          >
                            <img
                              className="h-auto max-h-full w-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg"
                              alt="macbook image"
                            />
                            <img
                              className="hidden h-auto max-h-full w-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg"
                              alt="macbook image"
                            />
                          </a>
                          <a href="#" className="hover:underline">
                            MacBook Pro 16"
                          </a>
                        </div>
                      </td>

                      <td className="p-4 text-base font-normal text-gray-900 dark:text-white">
                        x1
                      </td>

                      <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                        $499
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap pt-4 md:w-[224px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex aspect-square h-10 w-10 shrink-0 items-center"
                          >
                            <img
                              className="h-auto max-h-full w-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg"
                              alt="watch image"
                            />
                            <img
                              className="hidden h-auto max-h-full w-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg"
                              alt="watch image"
                            />
                          </a>
                          <a href="#" className="hover:underline">
                            Apple Watch SE
                          </a>
                        </div>
                      </td>

                      <td className="p-4 text-base font-normal text-gray-900 dark:text-white">
                        x2
                      </td>

                      <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                        $799
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
              <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                Order amount
              </h4>

              <dl className="mb-2 flex items-center justify-between gap-4">
                <dt className="font-normal text-gray-500 dark:text-gray-400">
                  Subtotal
                </dt>
                <dd className="font-medium text-gray-900 dark:text-white">
                  $5,992
                </dd>
              </dl>

              <dl className="mb-2 flex items-center justify-between gap-4">
                <dt className="font-normal text-gray-500 dark:text-gray-400">
                  Savings
                </dt>
                <dd className="font-medium text-green-500 dark:text-green-400">
                  $0
                </dd>
              </dl>

              <dl className="mb-2 flex items-center justify-between gap-4">
                <dt className="font-normal text-gray-500 dark:text-gray-400">
                  Store Pickup
                </dt>
                <dd className="font-medium text-gray-900 dark:text-white">
                  $99
                </dd>
              </dl>

              <dl className="mb-2 flex items-center justify-between gap-4">
                <dt className="font-normal text-gray-500 dark:text-gray-400">
                  Tax
                </dt>
                <dd className="font-medium text-gray-900 dark:text-white">
                  $199
                </dd>
              </dl>

              <dl className="mt-4 flex items-center justify-between gap-4 border-t border-gray-200 pt-2 font-bold text-gray-900 dark:border-gray-700 dark:text-white">
                <dt>Total</dt>
                <dd>$6,290</dd>
              </dl>
            </div>
          </div>
          <div className="mt-8 gap-4 sm:flex sm:items-center sm:justify-center">
            <button
              type="submit"
              className="mb-4 flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600  dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mb-0 sm:mt-0"
            >
              Place your order
            </button>
            <button
              onClick={() => setDrawerOpen(false)}
              className="block w-full rounded-lg  border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Cancel the order
            </button>
          </div>
        </form>
      </Drawer>
    </>
  );
}
