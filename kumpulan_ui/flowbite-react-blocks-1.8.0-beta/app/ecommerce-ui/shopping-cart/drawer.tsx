"use client";

import {
  Button,
  Drawer,
  DrawerHeader,
  Progress,
  TextInput,
} from "flowbite-react";
import {
  ArrowRight,
  Heart,
  Minus,
  Plus,
  TrashBin,
} from "flowbite-react-icons/outline";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function ShoppingCartWithDrawer() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isAddCouponCode, setAddCouponCode] = useState(false);
  const [counter1, setCounter1] = useState(2);
  const [counter2, setCounter2] = useState(1);
  const [counter3, setCounter3] = useState(1);
  const [counter4, setCounter4] = useState(1);
  const [counter5, setCounter5] = useState(3);

  return (
    <>
      <div className="m-5 text-center">
        <button
          onClick={() => setDrawerOpen(true)}
          className="rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Show shopping cart
        </button>
      </div>
      <Drawer
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        className="w-full max-w-md"
      >
        <DrawerHeader title="MY SHOPPING CART" titleIcon={() => <></>} />
        <div className="mt-6 flex flex-col justify-between space-y-4">
          <div className="w-full flex-1 space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                You can have&nbsp;
                <span className="font-medium text-gray-900 dark:text-white">
                  free shipping
                </span>
                &nbsp;if you add products worth&nbsp;
                <span className="font-medium text-gray-900 dark:text-white">
                  $600
                </span>
                .
              </p>
              <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                <Progress color="blue" progress={45} size="sm" />
              </div>
              <a
                href="#"
                className="flex items-center text-sm font-medium text-primary-700 hover:underline dark:text-primary-500"
              >
                How can I get this?
                <ArrowRight className="ms-2 h-4 w-4" />
              </a>
            </div>

            <div className="divide-y divide-gray-200 border-t border-gray-200 dark:divide-gray-700 dark:border-gray-700">
              <div className="flex items-start gap-4 py-4">
                <a href="#" className="h-20 w-20 shrink-0">
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
                    Apple iPhone 15, 256GB, Gold
                  </a>
                  <div className="flex items-center gap-4">
                    <label htmlFor="quantity-input1" className="sr-only">
                      Choose quantity:
                    </label>
                    <div className="relative flex w-32 items-center">
                      <button
                        onClick={() => setCounter1(counter1 - 1)}
                        className="flex h-9 items-center justify-center rounded-s-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <Minus className="h-3 w-3 text-gray-900 dark:text-white" />
                      </button>
                      <input
                        aria-describedby="helper-text-explanation"
                        id="quantity-input1"
                        name="quantity-input1"
                        required
                        value={counter1}
                        className="block h-9 w-full border-x-0 border-y border-gray-300 bg-gray-50 py-2 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      />
                      <button
                        onClick={() => setCounter1(counter1 + 1)}
                        className="flex h-9 items-center justify-center rounded-e-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <Plus className="h-3 w-3 text-gray-900 dark:text-white" />
                      </button>
                    </div>
                    <p className="text-base font-bold text-gray-900 dark:text-white">
                      $1,797
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="inline-flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400">
                      <Heart className="me-2 h-4 w-4" />
                      Move to Favorites
                    </button>
                    <button className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                      <TrashBin className="me-2 h-4 w-4" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 py-4">
                <a href="#" className="h-20 w-20 shrink-0">
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

                <div className="min-w-0 flex-1 space-y-3">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                  >
                    Xbox Series X, 1TB, Limited
                  </a>
                  <div className="flex items-center gap-4">
                    <label htmlFor="quantity-input2" className="sr-only">
                      Choose quantity:
                    </label>
                    <div className="relative flex w-32 items-center">
                      <button
                        onClick={() => setCounter2(counter2 - 1)}
                        className="flex h-9 items-center justify-center rounded-s-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <Minus className="h-3 w-3 text-gray-900 dark:text-white" />
                      </button>
                      <input
                        aria-describedby="helper-text-explanation"
                        id="quantity-input2"
                        name="quantity-input2"
                        required
                        value={counter2}
                        className="block h-9 w-full border-x-0 border-y border-gray-300 bg-gray-50 py-2 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      />
                      <button
                        onClick={() => setCounter2(counter2 + 1)}
                        className="flex h-9 items-center justify-center rounded-e-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <Plus className="h-3 w-3 text-gray-900 dark:text-white" />
                      </button>
                    </div>
                    <p className="text-base font-bold text-gray-900 dark:text-white">
                      $599
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="inline-flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400">
                      <Heart className="me-2 h-4 w-4" />
                      Move to Favorites
                    </button>
                    <button className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                      <TrashBin className="me-2 h-4 w-4" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 py-4">
                <a href="#" className="h-20 w-20 shrink-0">
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

                <div className="min-w-0 flex-1 space-y-3">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                  >
                    Sony PlayStation 5, 2 controllers
                  </a>
                  <div className="flex items-center gap-4">
                    <label htmlFor="quantity-input3" className="sr-only">
                      Choose quantity:
                    </label>
                    <div className="relative flex w-32 items-center">
                      <button
                        onClick={() => setCounter3(counter3 - 1)}
                        className="flex h-9 items-center justify-center rounded-s-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <Minus className="h-3 w-3 text-gray-900 dark:text-white" />
                      </button>
                      <input
                        aria-describedby="helper-text-explanation"
                        id="quantity-input3"
                        name="quantity-input3"
                        required
                        value={counter3}
                        className="block h-9 w-full border-x-0 border-y border-gray-300 bg-gray-50 py-2 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      />
                      <button
                        onClick={() => setCounter3(counter3 + 1)}
                        className="flex h-9 items-center justify-center rounded-e-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <Plus className="h-3 w-3 text-gray-900 dark:text-white" />
                      </button>
                    </div>
                    <p className="text-base font-bold text-gray-900 dark:text-white">
                      $799
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="inline-flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400">
                      <Heart className="me-2 h-4 w-4" />
                      Move to Favorites
                    </button>
                    <button className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                      <TrashBin className="me-2 h-4 w-4" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 py-4">
                <a href="#" className="h-20 w-20 shrink-0">
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
                    Apple Watch SE, 38 mm
                  </a>
                  <div className="flex items-center gap-4">
                    <label htmlFor="quantity-input4" className="sr-only">
                      Choose quantity:
                    </label>
                    <div className="relative flex w-32 items-center">
                      <button
                        onClick={() => setCounter4(counter4 - 1)}
                        className="flex h-9 items-center justify-center rounded-s-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <Minus className="h-3 w-3 text-gray-900 dark:text-white" />
                      </button>
                      <input
                        aria-describedby="helper-text-explanation"
                        id="quantity-input4"
                        name="quantity-input4"
                        required
                        value={counter4}
                        className="block h-9 w-full border-x-0 border-y border-gray-300 bg-gray-50 py-2 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      />
                      <button
                        onClick={() => setCounter4(counter4 + 1)}
                        className="flex h-9 items-center justify-center rounded-e-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <Plus className="h-3 w-3 text-gray-900 dark:text-white" />
                      </button>
                    </div>
                    <p className="text-base font-bold text-gray-900 dark:text-white">
                      $299
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="inline-flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400">
                      <Heart className="me-2 h-4 w-4" />
                      Move to Favorites
                    </button>
                    <button className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                      <TrashBin className="me-2 h-4 w-4" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 py-4">
                <a href="#" className="h-20 w-20 shrink-0">
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
                    Apple iMac, 5k, 256GB, Blue
                  </a>
                  <div className="flex items-center gap-4">
                    <label htmlFor="quantity-input5" className="sr-only">
                      Choose quantity:
                    </label>
                    <div className="relative flex w-32 items-center">
                      <button
                        onClick={() => setCounter5(counter5 - 1)}
                        className="flex h-9 items-center justify-center rounded-s-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <Minus className="h-3 w-3 text-gray-900 dark:text-white" />
                      </button>
                      <input
                        aria-describedby="helper-text-explanation"
                        id="quantity-input5"
                        name="quantity-input5"
                        required
                        value={counter5}
                        className="block h-9 w-full border-x-0 border-y border-gray-300 bg-gray-50 py-2 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      />
                      <button
                        onClick={() => setCounter5(counter5 + 1)}
                        className="flex h-9 items-center justify-center rounded-e-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <Plus className="h-3 w-3 text-gray-900 dark:text-white" />
                      </button>
                    </div>
                    <p className="text-base font-bold text-gray-900 dark:text-white">
                      $1,799
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="inline-flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400">
                      <Heart className="me-2 h-4 w-4" />
                      Move to Favorites
                    </button>
                    <button className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                      <TrashBin className="me-2 h-4 w-4" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setAddCouponCode(!isAddCouponCode)}
              type="button"
              className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Add coupon code
            </button>

            <div
              className={twMerge(
                !isAddCouponCode && "hidden",
                "mb-4 rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700",
              )}
            >
              <form className="space-y-4">
                <label
                  htmlFor="voucher"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Do you have a voucher or gift card?
                </label>
                <div className="grid grid-cols-4 gap-4">
                  <TextInput
                    id="voucher"
                    name="voucher"
                    required
                    className="col-span-3 [&_input]:bg-white dark:[&_input]:bg-gray-800"
                  />
                  <Button className="col-span-1">Apply</Button>
                </div>
              </form>
            </div>

            <div className="mb-4 rounded-lg border border-gray-100 bg-gray-50 px-4 dark:border-gray-600 dark:bg-gray-700">
              <div className="divide-y divide-gray-200 dark:divide-gray-600">
                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="font-normal text-gray-500 dark:text-gray-400">
                    Subtotal
                  </dt>
                  <dd className="font-medium text-gray-900 dark:text-white">
                    $5,992
                  </dd>
                </dl>

                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="font-normal text-gray-500 dark:text-gray-400">
                    Savings
                  </dt>
                  <dd className="font-medium text-green-500 dark:text-green-400">
                    $0
                  </dd>
                </dl>

                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="font-normal text-gray-500 dark:text-gray-400">
                    Store Pickup
                  </dt>
                  <dd className="font-medium text-gray-900 dark:text-white">
                    $99
                  </dd>
                </dl>

                <dl className="flex items-center justify-between gap-4 pb-4 pt-3">
                  <dt className="font-normal text-gray-500 dark:text-gray-400">
                    Tax
                  </dt>
                  <dd className="font-medium text-gray-900 dark:text-white">
                    $199
                  </dd>
                </dl>

                <dl className="flex items-center justify-between gap-4 py-3 text-lg font-bold text-gray-900 dark:text-white">
                  <dt>Total</dt>
                  <dd>$6,290</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="mt-6 gap-4 sm:flex sm:items-center sm:justify-center">
            <button
              type="button"
              className="mb-4 flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600  dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mb-0 sm:mt-0"
            >
              Checkout
            </button>
            <button
              type="button"
              className="block w-full rounded-lg  border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
}
