import { Button, Checkbox, Label } from "flowbite-react";
import { CheckCircle } from "flowbite-react-icons/outline";

export default function ProductRefundSelectionForm() {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <form action="#" className="mx-auto max-w-5xl space-y-6 lg:space-y-8">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Product return form
            </h2>
            <ol className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 sm:justify-center md:flex-row md:items-center lg:gap-6">
              <li className="flex items-center gap-2 md:flex-1 md:flex-col md:gap-1.5 lg:flex-none">
                <CheckCircle className="h-5 w-5 text-primary-700 dark:text-primary-500" />
                <p className="text-sm font-medium leading-tight text-primary-700 dark:text-primary-500">
                  My products
                </p>
              </li>
              <div className="hidden h-px w-4 shrink-0 bg-gray-200 dark:bg-gray-700 md:block lg:w-16"></div>
              <li className="flex items-center gap-2 md:flex-1 md:flex-col md:gap-1.5 lg:flex-none">
                <CheckCircle className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <p className="text-sm font-medium leading-tight text-gray-500 dark:text-gray-400">
                  Return reason
                </p>
              </li>
              <div className="hidden h-px w-4 shrink-0 bg-gray-200 dark:bg-gray-700 md:block lg:w-16"></div>
              <li className="flex items-center gap-2 md:flex-1 md:flex-col md:gap-1.5 lg:flex-none">
                <CheckCircle className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <p className="text-sm font-medium leading-tight text-gray-500 dark:text-gray-400">
                  Delivery option
                </p>
              </li>
              <div className="hidden h-px w-4 shrink-0 bg-gray-200 dark:bg-gray-700 md:block lg:w-16"></div>
              <li className="flex items-center gap-2 md:flex-1 md:flex-col md:gap-1.5 lg:flex-none">
                <CheckCircle className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <p className="text-sm font-medium leading-tight text-gray-500 dark:text-gray-400">
                  Refund choice
                </p>
              </li>
              <div className="hidden h-px w-4 shrink-0 bg-gray-200 dark:bg-gray-700 md:block lg:w-16"></div>
              <li className="flex items-center gap-2 md:flex-1 md:flex-col md:gap-1.5 lg:flex-none">
                <CheckCircle className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <p className="text-sm font-medium leading-tight text-gray-500 dark:text-gray-400">
                  Confirmation
                </p>
              </li>
            </ol>
          </div>
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                1. Select the product you want to return:
              </h3>
            </div>
            <div className="divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-center gap-8 p-6 sm:items-start lg:items-center">
                <div>
                  <Checkbox id="product1" name="product1" />
                  <Label htmlFor="product1" className="sr-only">
                    Product 1
                  </Label>
                </div>
                <div className="min-w-0 flex-1 gap-14 lg:flex lg:items-center">
                  <div className="min-w-0 max-w-xl flex-1 gap-6 sm:flex sm:items-center">
                    <a
                      href="#"
                      className="mb-4 flex aspect-square h-14 w-14 shrink-0 items-center sm:mb-0"
                    >
                      <img
                        className="h-auto max-h-full w-full dark:hidden"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                        alt=""
                      />
                      <img
                        className="hidden h-auto max-h-full w-full dark:block"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                        alt=""
                      />
                    </a>
                    <a
                      href="#"
                      className="mt-4 font-medium text-gray-900 hover:underline dark:text-white sm:mt-0"
                    >
                      PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple
                      M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU
                    </a>
                  </div>
                  <div className="mt-4 flex shrink-0 flex-col gap-2 sm:flex-row sm:justify-between md:items-center lg:mt-0 lg:flex-col lg:items-start">
                    <dl className="flex items-center gap-2.5">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400 lg:w-36">
                        Order Number:
                      </dt>
                      <dd className="text-base font-normal text-gray-500 dark:text-gray-400">
                        <a href="#" className="hover:underline">
                          #737423642
                        </a>
                      </dd>
                    </dl>
                    <dl className="flex items-center gap-2.5">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400 lg:w-36">
                        Return Term:
                      </dt>
                      <dd className="text-base font-normal text-gray-500 dark:text-gray-400">
                        21.07.2023
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-8 p-6 sm:items-start lg:items-center">
                <div>
                  <Checkbox
                    id="product2"
                    name="product2"
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  />
                  <Label htmlFor="product2" className="sr-only">
                    Product 2
                  </Label>
                </div>
                <div className="min-w-0 flex-1 gap-14 lg:flex lg:items-center">
                  <div className="min-w-0 max-w-xl flex-1 gap-6 sm:flex sm:items-center">
                    <a
                      href="#"
                      className="mb-4 flex aspect-square h-14 w-14 shrink-0 items-center sm:mb-0"
                    >
                      <img
                        className="h-auto max-h-full w-full dark:hidden"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg"
                        alt=""
                      />
                      <img
                        className="hidden h-auto max-h-full w-full dark:block"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg"
                        alt=""
                      />
                    </a>
                    <a
                      href="#"
                      className="mt-4 font-medium text-gray-900 hover:underline dark:text-white sm:mt-0"
                    >
                      Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum
                      Case with Midnight Sport Band
                    </a>
                  </div>
                  <div className="mt-4 flex shrink-0 flex-col gap-2 sm:flex-row sm:justify-between md:items-center lg:mt-0 lg:flex-col lg:items-start">
                    <dl className="flex items-center gap-2.5">
                      <dt className="text-gray-500 dark:text-gray-400 lg:w-36">
                        Order Number:
                      </dt>
                      <dd className="text-base font-normal text-gray-500 dark:text-gray-400">
                        <a href="#" className="hover:underline">
                          #45632736
                        </a>
                      </dd>
                    </dl>
                    <dl className="flex items-center gap-2.5">
                      <dt className="text-gray-500 dark:text-gray-400 lg:w-36">
                        Return Term:
                      </dt>
                      <dd className="text-base font-normal text-gray-500 dark:text-gray-400">
                        26.07.2023
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-8 p-6 sm:items-start lg:items-center">
                <div>
                  <Checkbox defaultChecked id="product3" name="product3" />
                  <Label htmlFor="product3" className="sr-only">
                    Product 3
                  </Label>
                </div>
                <div className="min-w-0 flex-1 gap-14 lg:flex lg:items-center">
                  <div className="min-w-0 max-w-xl flex-1 gap-6 sm:flex sm:items-center">
                    <a
                      href="#"
                      className="mb-4 flex aspect-square h-14 w-14 shrink-0 items-center sm:mb-0"
                    >
                      <img
                        className="h-auto max-h-full w-full dark:hidden"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg"
                        alt=""
                      />
                      <img
                        className="hidden h-auto max-h-full w-full dark:block"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg"
                        alt=""
                      />
                    </a>
                    <a
                      href="#"
                      className="mt-4 font-medium text-gray-900 hover:underline dark:text-white sm:mt-0"
                    >
                      Sony Playstation 5 Digital Edition Console with Extra Blue
                      Controller, and White PULSE 3D Headset
                    </a>
                  </div>
                  <div className="mt-4 flex shrink-0 flex-col gap-2 sm:flex-row sm:justify-between md:items-center lg:mt-0 lg:flex-col lg:items-start">
                    <dl className="flex items-center gap-2.5">
                      <dt className="text-gray-500 dark:text-gray-400 lg:w-36">
                        Order Number:
                      </dt>
                      <dd className="text-base font-normal text-gray-500 dark:text-gray-400">
                        <a href="#" className="hover:underline">
                          #54628495
                        </a>
                      </dd>
                    </dl>
                    <dl className="flex items-center gap-2.5">
                      <dt className="text-gray-500 dark:text-gray-400 lg:w-36">
                        Return Term:
                      </dt>
                      <dd className="text-base font-normal text-gray-500 dark:text-gray-400">
                        24.07.2023
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-8 p-6 sm:items-start lg:items-center">
                <div>
                  <Checkbox id="product4" name="product4" />
                  <Label htmlFor="product4" className="sr-only">
                    Product 4
                  </Label>
                </div>
                <div className="min-w-0 flex-1 gap-14 lg:flex lg:items-center">
                  <div className="min-w-0 max-w-xl flex-1 gap-6 sm:flex sm:items-center">
                    <a
                      href="#"
                      className="mb-4 flex aspect-square h-14 w-14 shrink-0 items-center sm:mb-0"
                    >
                      <img
                        className="h-auto max-h-full w-full dark:hidden"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg"
                        alt=""
                      />
                      <img
                        className="hidden h-auto max-h-full w-full dark:block"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg"
                        alt=""
                      />
                    </a>
                    <a
                      href="#"
                      className="mt-4 font-medium text-gray-900 hover:underline dark:text-white sm:mt-0"
                    >
                      APPLE iPhone 15 5G phone, 256GB, Gold
                    </a>
                  </div>
                  <div className="mt-4 flex shrink-0 flex-col gap-2 sm:flex-row sm:justify-between md:items-center lg:mt-0 lg:flex-col lg:items-start">
                    <dl className="flex items-center gap-2.5">
                      <dt className="text-gray-500 dark:text-gray-400 lg:w-36">
                        Order Number:
                      </dt>
                      <dd className="text-base font-normal text-gray-500 dark:text-gray-400">
                        <a href="#" className="hover:underline">
                          #64534294
                        </a>
                      </dd>
                    </dl>
                    <dl className="flex items-center gap-2.5">
                      <dt className="text-gray-500 dark:text-gray-400 lg:w-36">
                        Return Term:
                      </dt>
                      <dd className="text-base font-normal text-gray-500 dark:text-gray-400">
                        26.07.2023
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-8 p-6 sm:items-start lg:items-center">
                <div>
                  <Checkbox id="product5" name="product5" />
                  <Label htmlFor="product5" className="sr-only">
                    Product 5
                  </Label>
                </div>
                <div className="min-w-0 flex-1 gap-14 lg:flex lg:items-center">
                  <div className="min-w-0 max-w-xl flex-1 gap-6 sm:flex sm:items-center">
                    <a
                      href="#"
                      className="mb-4 flex aspect-square h-14 w-14 shrink-0 items-center sm:mb-0"
                    >
                      <img
                        className="h-auto max-h-full w-full dark:hidden"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-light.svg"
                        alt=""
                      />
                      <img
                        className="hidden h-auto max-h-full w-full dark:block"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-dark.svg"
                        alt=""
                      />
                    </a>
                    <a
                      href="#"
                      className="mt-4 font-medium text-gray-900 hover:underline dark:text-white sm:mt-0"
                    >
                      Xbox Series X Diablo IV Bundle + Xbox Wireless Controller
                      Carbon Black + Dual Controller Charge Docker
                    </a>
                  </div>
                  <div className="mt-4 flex shrink-0 flex-col gap-2 sm:flex-row sm:justify-between md:items-center lg:mt-0 lg:flex-col lg:items-start">
                    <dl className="flex items-center gap-2.5">
                      <dt className="text-gray-500 dark:text-gray-400 lg:w-36">
                        Order Number:
                      </dt>
                      <dd className="text-base font-normal text-gray-500 dark:text-gray-400">
                        <a href="#" className="hover:underline">
                          #98475625
                        </a>
                      </dd>
                    </dl>
                    <dl className="flex items-center gap-2.5">
                      <dt className="text-gray-500 dark:text-gray-400 lg:w-36">
                        Return Term:
                      </dt>
                      <dd className="text-base font-normal text-gray-500 dark:text-gray-400">
                        21.07.2023
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="gap-4 sm:flex sm:items-center">
              <button
                type="button"
                className="w-full rounded-lg border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
              >
                Cancel
              </button>
              <Button
                type="submit"
                className="mt-4 flex w-full sm:mt-0 sm:w-auto"
              >
                Next: Return reason
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
