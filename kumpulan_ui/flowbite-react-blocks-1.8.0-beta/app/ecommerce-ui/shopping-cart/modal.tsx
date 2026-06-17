"use client";

import { Button, Checkbox, Modal, TextInput, theme } from "flowbite-react";
import { Close, Minus, Plus, TrashBin } from "flowbite-react-icons/outline";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function ShoppingCartWithModal() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(2);
  const [counter3, setCounter3] = useState(1);
  const [counter4, setCounter4] = useState(4);
  const [counter5, setCounter5] = useState(1);
  const [counter6, setCounter6] = useState(1);
  const [counter7, setCounter7] = useState(2);
  const [isAddCoupon, setAddCoupon] = useState(false);

  return (
    <>
      <div className="m-5 flex justify-center">
        <button
          onClick={() => setModalOpen(true)}
          className="block rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Show shopping cart
        </button>
      </div>
      <Modal
        show={isModalOpen}
        onClose={() => setModalOpen(false)}
        popup
        theme={{
          content: {
            base: twMerge(theme.modal.content.base, "p-0"),
            inner: twMerge(theme.modal.content.inner, "p-5 dark:bg-gray-800"),
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
        <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600 sm:mb-5">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Shopping Cart
          </h3>
          <button
            onClick={() => setModalOpen(false)}
            className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <Close className="h-5 w-5" />
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-left text-base text-gray-900 dark:text-white md:table-fixed">
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="w-72 min-w-56 whitespace-nowrap py-4">
                  <a
                    href="#"
                    className="flex items-center gap-4 font-medium hover:underline"
                  >
                    <div className="aspect-square h-10 w-10 shrink-0">
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
                    </div>
                    Apple iMac 27”
                  </a>
                </td>

                <td className="p-4">
                  <label htmlFor="counter-input1" className="sr-only">
                    Choose quantity:
                  </label>
                  <div className="flex items-center">
                    <button
                      onClick={() => setCounter1(counter1 - 1)}
                      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    >
                      <Minus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                    </button>
                    <input
                      id="counter-input1"
                      name="counter-input1"
                      required
                      value={counter1}
                      className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                    />
                    <button
                      onClick={() => setCounter1(counter1 + 1)}
                      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    >
                      <Plus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                    </button>
                  </div>
                </td>

                <td className="p-4 text-end text-base font-bold text-gray-900 dark:text-white">
                  $1,499
                </td>

                <td className="py-4 text-end">
                  <button className="inline-flex items-center gap-1.5 text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                    <TrashBin className="h-4 w-4" />
                    Remove
                  </button>
                </td>
              </tr>

              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="w-72 min-w-56 whitespace-nowrap py-4">
                  <button
                    type="button"
                    className="flex items-center gap-4 font-medium hover:underline"
                  >
                    <div className="aspect-square h-10 w-10 shrink-0">
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
                    </div>
                    Apple iPhone 14
                  </button>
                </td>

                <td className="p-4">
                  <div className="inline-flex items-center justify-center ">
                    <label htmlFor="counter-input2" className="sr-only">
                      Choose quantity:
                    </label>
                    <div className="flex items-center">
                      <button
                        onClick={() => setCounter2(counter2 - 1)}
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <Minus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                      </button>
                      <input
                        id="counter-input2"
                        name="counter-input2"
                        required
                        value={counter2}
                        className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                      />
                      <button
                        onClick={() => setCounter2(counter2 + 1)}
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <Plus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                      </button>
                    </div>
                  </div>
                </td>

                <td className="p-4 text-end text-base font-bold text-gray-900 dark:text-white">
                  $1,998
                </td>

                <td className="py-4 text-end">
                  <button className="inline-flex items-center gap-1.5 text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                    <TrashBin className="h-4 w-4" />
                    Remove
                  </button>
                </td>
              </tr>

              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="w-72 min-w-56 whitespace-nowrap py-4">
                  <a
                    href="#"
                    className="flex items-center gap-4 font-medium hover:underline"
                  >
                    <div className="aspect-square h-10 w-10 shrink-0">
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
                    </div>
                    Apple iPad Air
                  </a>
                </td>

                <td className="p-4">
                  <div className="inline-flex items-center justify-center ">
                    <label htmlFor="counter-input3" className="sr-only">
                      Choose quantity:
                    </label>
                    <div className="flex items-center">
                      <button
                        onClick={() => setCounter3(counter3 - 1)}
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <Minus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                      </button>
                      <input
                        id="counter-input3"
                        name="counter-input3"
                        required
                        value={counter3}
                        className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                      />
                      <button
                        onClick={() => setCounter3(counter3 + 1)}
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <Plus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                      </button>
                    </div>
                  </div>
                </td>

                <td className="p-4 text-end text-base font-bold text-gray-900 dark:text-white">
                  $898
                </td>

                <td className="py-4 text-end">
                  <button className="inline-flex items-center gap-1.5 text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                    <TrashBin className="h-4 w-4" />
                    Remove
                  </button>
                </td>
              </tr>

              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="w-72 min-w-56 whitespace-nowrap py-4">
                  <a
                    href="#"
                    className="flex items-center gap-4 font-medium hover:underline"
                  >
                    <div className="aspect-square h-10 w-10 shrink-0">
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
                    </div>
                    MacBook Pro 16"
                  </a>
                </td>

                <td className="p-4">
                  <div className="inline-flex items-center justify-center ">
                    <label htmlFor="counter-input4" className="sr-only">
                      Choose quantity:
                    </label>
                    <div className="flex items-center">
                      <button
                        onClick={() => setCounter4(counter4 - 1)}
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <Minus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                      </button>
                      <input
                        id="counter-input4"
                        name="counter-input4"
                        required
                        value={counter4}
                        className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                      />
                      <button
                        onClick={() => setCounter4(counter4 + 1)}
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <Plus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                      </button>
                    </div>
                  </div>
                </td>

                <td className="p-4 text-end text-base font-bold text-gray-900 dark:text-white">
                  $4,499
                </td>

                <td className="py-4 text-end">
                  <button className="inline-flex items-center gap-1.5 text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                    <TrashBin className="h-4 w-4" />
                    Remove
                  </button>
                </td>
              </tr>

              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="w-72 min-w-56 whitespace-nowrap py-4">
                  <a
                    href="#"
                    className="flex items-center gap-4 font-medium hover:underline"
                  >
                    <div className="aspect-square h-10 w-10 shrink-0">
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
                    </div>
                    PlayStation 5
                  </a>
                </td>

                <td className="p-4">
                  <div className="inline-flex items-center justify-center ">
                    <label htmlFor="counter-input5" className="sr-only">
                      Choose quantity:
                    </label>
                    <div className="flex items-center">
                      <button
                        onClick={() => setCounter5(counter5 - 1)}
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <Minus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                      </button>
                      <input
                        id="counter-input5"
                        name="counter-input5"
                        required
                        value={counter5}
                        className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                      />
                      <button
                        onClick={() => setCounter5(counter5 + 1)}
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <Plus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                      </button>
                    </div>
                  </div>
                </td>

                <td className="p-4 text-end text-base font-bold text-gray-900 dark:text-white">
                  $499
                </td>

                <td className="py-4 text-end">
                  <button className="inline-flex items-center gap-1.5 text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                    <TrashBin className="h-4 w-4" />
                    Remove
                  </button>
                </td>
              </tr>

              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="w-72 min-w-56 whitespace-nowrap py-4">
                  <a
                    href="#"
                    className="flex items-center gap-4 font-medium hover:underline"
                  >
                    <div className="aspect-square h-10 w-10 shrink-0">
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
                    </div>
                    Xbox Series X
                  </a>
                </td>

                <td className="p-4">
                  <div className="inline-flex items-center justify-center ">
                    <label htmlFor="counter-input6" className="sr-only">
                      Choose quantity:
                    </label>
                    <div className="flex items-center">
                      <button
                        onClick={() => setCounter6(counter6 - 1)}
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <Minus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                      </button>
                      <input
                        id="counter-input6"
                        name="counter-input6"
                        required
                        value={counter6}
                        className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                      />
                      <button
                        onClick={() => setCounter6(counter6 + 1)}
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <Plus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                      </button>
                    </div>
                  </div>
                </td>

                <td className="p-4 text-end text-base font-bold text-gray-900 dark:text-white">
                  $499
                </td>

                <td className="py-4 text-end">
                  <button className="inline-flex items-center gap-1.5 text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                    <TrashBin className="h-4 w-4" />
                    Remove
                  </button>
                </td>
              </tr>

              <tr>
                <td className="w-72 min-w-56 whitespace-nowrap py-4">
                  <a
                    href="#"
                    className="flex items-center gap-4 font-medium hover:underline"
                  >
                    <div className="aspect-square h-10 w-10 shrink-0">
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
                    </div>
                    Apple Watch SE
                  </a>
                </td>

                <td className="p-4">
                  <div className="inline-flex items-center justify-center ">
                    <label htmlFor="counter-input7" className="sr-only">
                      Choose quantity:
                    </label>
                    <div className="flex items-center">
                      <button
                        onClick={() => setCounter7(counter7 - 1)}
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <Minus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                      </button>
                      <input
                        id="counter-input7"
                        name="counter-input7"
                        required
                        value={counter7}
                        className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                      />
                      <button
                        onClick={() => setCounter7(counter7 + 1)}
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                      >
                        <Plus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                      </button>
                    </div>
                  </div>
                </td>

                <td className="p-4 text-end text-base font-bold text-gray-900 dark:text-white">
                  $799
                </td>

                <td className="py-4 text-end">
                  <button className="inline-flex items-center gap-1.5 text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                    <TrashBin className="h-4 w-4" />
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-4 flex items-center md:mb-5">
          <Checkbox
            id="inline-checkbox"
            name="sellingType"
            onClick={() => setAddCoupon(!isAddCoupon)}
          />
          <label
            htmlFor="inline-checkbox"
            className="ml-2 text-sm text-gray-500 dark:text-gray-400"
          >
            Add coupon
          </label>
        </div>
        <form className={twMerge(isAddCoupon ? "mb-4 md:mb-5" : "hidden")}>
          <div className="flex items-center gap-4">
            <div className="w-full max-w-xs">
              <label htmlFor="voucher" className="sr-only">
                Do you have a voucher or gift card?
              </label>
              <TextInput
                id="voucher"
                name="voucher"
                placeholder="Enter your coupon code"
                required
              />
            </div>
            <Button size="lg" type="submit">
              Apply
            </Button>
          </div>
        </form>
        <div className="mb-4 rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700 sm:mb-5">
          <p className="text-xl font-semibold text-gray-900 dark:text-white">
            Order summary
          </p>

          <div className="mt-6 space-y-4">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Original price
                </dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">
                  $10,691.00
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Savings
                </dt>
                <dd className="text-base font-medium text-green-500">
                  -$299.00
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Store Pickup
                </dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">
                  $99
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Tax
                </dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">
                  $799
                </dd>
              </dl>
            </div>

            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 text-lg font-bold text-gray-900 dark:border-gray-600 dark:text-white">
              <dt>Total</dt>
              <dd>$11,888.00</dd>
            </dl>
          </div>
        </div>

        <div className="items-center space-x-0 space-y-4 border-t border-gray-200 pt-4 dark:border-gray-700 sm:flex sm:space-x-4 sm:space-y-0 md:pt-5">
          <button
            type="button"
            className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600  dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0 sm:w-auto"
          >
            Proceed to Checkout
          </button>
          <button
            type="button"
            className="w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
          >
            Continue Shopping
          </button>
        </div>
      </Modal>
    </>
  );
}
