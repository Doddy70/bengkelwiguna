"use client";

import { Button, Select } from "flowbite-react";
import { CheckCircle, Close, Truck } from "flowbite-react-icons/outline";

export default function ShoppingCartWithSidebar() {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <ol className="flex w-full max-w-2xl items-center text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
          <li className="flex items-center text-primary-600 after:mx-6 after:hidden after:w-full after:border after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 md:w-full md:after:inline-block md:after:content-[''] xl:after:mx-10">
            <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 md:after:hidden">
              <CheckCircle className="me-2 h-4 w-4 sm:h-5 sm:w-5" />
              Cart
            </span>
          </li>

          <li className="flex items-center after:mx-6 after:hidden after:w-full after:border after:border-b after:border-gray-200 after:content-[''] dark:after:border-gray-700 md:w-full md:after:inline-block xl:after:mx-10">
            <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 md:after:hidden">
              <CheckCircle className="me-2 h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
              Payment
            </span>
          </li>

          <li className="flex shrink-0 items-center">
            <CheckCircle className="me-2 h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
            Order summary
          </li>
        </ol>

        <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white sm:mt-8 sm:text-2xl">
          Your Cart
        </h2>

        <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
          <div className="min-w-0 flex-1 divide-y divide-gray-200 border-b border-gray-200 dark:divide-gray-800 dark:border-gray-800">
            <div className="flex items-start gap-4 pb-4">
              <a href="#" className="h-10 w-10 shrink-0">
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

              <div className="min-w-0 flex-1 space-y-3">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                >
                  PC system All in One APPLE iMac (2024) mqrq3ro/a, Apple M3,
                  24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout
                  INT
                </a>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="">
                      <label
                        htmlFor="quantity"
                        className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Select quantity
                      </label>
                      <Select id="quantity" name="quantity">
                        <option value="1" selected>
                          1
                        </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </Select>
                    </div>

                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                    >
                      <Close className="h-5 w-5" />
                      Remove
                    </button>
                  </div>

                  <p className="w-24 shrink-0 text-end text-base font-bold text-gray-900 dark:text-white sm:hidden">
                    $1,499
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400" />
                  <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Delivery on 18 Nov 2024
                  </p>
                </div>
              </div>

              <p className="hidden w-24 shrink-0 text-end text-base font-bold text-gray-900 dark:text-white sm:block">
                $1,499
              </p>
            </div>

            <div className="flex items-start gap-4 py-4">
              <a href="#" className="h-10 w-10 shrink-0">
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
              <div className="min-w-0 flex-1 space-y-3">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                >
                  APPLE iPhone 15 5G phone, 256GB, Gold
                </a>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="">
                      <label
                        htmlFor="quantity-2"
                        className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Select quantity
                      </label>
                      <Select id="quantity-2" name="quantity-2">
                        <option value="1" selected>
                          1
                        </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </Select>
                    </div>

                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                    >
                      <Close className="h-5 w-5" />
                      Remove
                    </button>
                  </div>

                  <p className="w-24 shrink-0 text-end text-base font-bold text-gray-900 dark:text-white sm:hidden">
                    $1,998
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400" />
                  <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Delivery on 03 Dec 2024
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Extend the standard warranty:
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        id="1YearGuarantee"
                        type="radio"
                        value=""
                        name="GuaranteeInput"
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      />
                      <label
                        htmlFor="1YearGuarantee"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Guarantee Plus 1 Year - $99{" "}
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="2YearsGuarantee"
                        type="radio"
                        value=""
                        name="GuaranteeInput"
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      />
                      <label
                        htmlFor="2YearsGuarantee"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Guarantee Plus 2 Years - $199{" "}
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <p className="hidden w-24 shrink-0 text-end text-base font-bold text-gray-900 dark:text-white sm:block">
                $1,998
              </p>
            </div>

            <div className="flex items-start gap-4 py-4">
              <a href="#" className="aspect-square h-10 w-10 shrink-0">
                <img
                  className="h-full w-full dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg"
                  alt="imac image"
                />
                <img
                  className="hidden h-full w-full dark:block"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg"
                  alt="imac image"
                />
              </a>

              <div className="min-w-0 flex-1 space-y-3">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                >
                  Tablet APPLE iPad Pro 12.9" 6th Gen, 128GB, Wi-Fi, Gold
                </a>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="">
                      <label
                        htmlFor="quantity-3"
                        className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Select quantity
                      </label>
                      <Select id="quantity-3" name="quantity-3">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5" selected>
                          5
                        </option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </Select>
                    </div>

                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                    >
                      <Close className="h-5 w-5" />
                      Remove
                    </button>
                  </div>

                  <p className="w-24 shrink-0 text-end text-base font-bold text-gray-900 dark:text-white sm:hidden">
                    $3,299
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400" />
                  <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Delivery on 14 Nov 2024
                  </p>
                </div>
              </div>

              <p className="hidden w-24 shrink-0 text-end text-base font-bold text-gray-900 dark:text-white sm:block">
                $3,299
              </p>
            </div>

            <div className="flex items-start gap-4 py-4">
              <a href="#" className="aspect-square h-10 w-10 shrink-0">
                <img
                  className="h-full w-full dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg"
                  alt="imac image"
                />
                <img
                  className="hidden h-full w-full dark:block"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg"
                  alt="imac image"
                />
              </a>

              <div className="min-w-0 flex-1 space-y-3">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                >
                  Apple - MacBook Pro 16" Laptop, M3 Pro chip, 36GB Memory,
                  18-core GPU, 512GB SSD, Space Black
                </a>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="">
                      <label
                        htmlFor="quantity-4"
                        className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Select quantity
                      </label>
                      <Select id="quantity-4" name="quantity-4">
                        <option value="1" selected>
                          1
                        </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </Select>
                    </div>

                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                    >
                      <Close className="h-5 w-5" />
                      Remove
                    </button>
                  </div>

                  <p className="w-24 shrink-0 text-end text-base font-bold text-gray-900 dark:text-white sm:hidden">
                    $799
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400" />
                  <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Delivery on 09 Dec 2024
                  </p>
                </div>
              </div>

              <p className="hidden w-24 shrink-0 text-end text-base font-bold text-gray-900 dark:text-white sm:block">
                $799
              </p>
            </div>

            <div className="flex items-start gap-4 py-4">
              <a href="#" className="aspect-square h-10 w-10 shrink-0">
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

              <div className="min-w-0 flex-1 space-y-3">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                >
                  Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case with
                  Midnight Sport Band
                </a>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="">
                      <label
                        htmlFor="quantity-5"
                        className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Select quantity
                      </label>
                      <Select id="quantity-5" name="quantity-5">
                        <option value="1" selected>
                          1
                        </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </Select>
                    </div>

                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                    >
                      <Close className="h-5 w-5" />
                      Remove
                    </button>
                  </div>

                  <p className="w-24 shrink-0 text-end text-base font-bold text-gray-900 dark:text-white sm:hidden">
                    $499
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400" />
                  <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Delivery on 14 Nov 2024
                  </p>
                </div>
              </div>

              <p className="hidden w-24 shrink-0 text-end text-base font-bold text-gray-900 dark:text-white sm:block">
                $499
              </p>
            </div>
          </div>

          <div className="ml-auto mt-6 w-full space-y-6 rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 sm:mt-8 md:p-6 lg:mt-0 lg:max-w-sm xl:max-w-md">
            <div className="flow-root">
              <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-700">
                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Subtotal
                  </dt>
                  <dd className="text-base font-medium text-gray-900 dark:text-white">
                    $8,094.00
                  </dd>
                </dl>

                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Savings
                  </dt>
                  <dd className="text-base font-medium text-green-500">0</dd>
                </dl>

                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Store Pickup
                  </dt>
                  <dd className="text-base font-medium text-gray-900 dark:text-white">
                    $99
                  </dd>
                </dl>

                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Tax
                  </dt>
                  <dd className="text-base font-medium text-gray-900 dark:text-white">
                    $199
                  </dd>
                </dl>

                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-base font-bold text-gray-900 dark:text-white">
                    Total
                  </dt>
                  <dd className="text-base font-bold text-gray-900 dark:text-white">
                    $8,392.00
                  </dd>
                </dl>
              </div>
            </div>

            <div className="space-y-3">
              <Button className="w-full">Proceed to Checkout</Button>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                One or more items in your cart require an account.&nbsp;
                <a
                  href="#"
                  title=""
                  className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                >
                  Sign in or create an account now
                </a>
                .
              </p>
            </div>

            <form className="flex items-end gap-4">
              <div className="flex-1">
                <label
                  htmlFor="voucher"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Do you have a voucher or gift card?
                </label>
                <input
                  type="text"
                  id="voucher"
                  className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder=""
                  required
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Apply
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
