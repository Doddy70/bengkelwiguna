"use client";

import {
  Badge,
  Button,
  Drawer,
  DrawerHeader,
  DrawerItems,
  Dropdown,
  DropdownItem,
  Select,
  theme,
} from "flowbite-react";
import {
  Check,
  ChevronDown,
  Clipboard,
  Close,
  Refresh,
} from "flowbite-react-icons/outline";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function OrderListWithDrawer() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div className="flex min-h-[20vh] items-center justify-center">
        <Button onClick={() => setDrawerOpen(true)}>Show my orders</Button>
      </div>
      <Drawer
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        className="w-full max-w-md overflow-y-scroll"
      >
        <DrawerHeader title="MY ORDERS" titleIcon={() => <></>} />
        <DrawerItems className="flex flex-col justify-between sm:h-[97%]">
          <div className="my-4 space-y-4">
            <div className="items-center space-y-4 sm:flex sm:space-x-4 md:space-y-0">
              <form action="#" className="flex-1">
                <label htmlFor="order-type-drawer" className="sr-only">
                  Select order type
                </label>
                <Select id="order-type-drawer" name="order-type-drawer">
                  <option selected>All orders</option>
                  <option value="pre-order">Pre-order</option>
                  <option value="transit">In transit</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="cancelled">Cancelled</option>
                </Select>
              </form>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <span className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                    Last 7 days
                    <ChevronDown className="h-6 w-6 text-gray-900 dark:text-gray-500" />
                  </span>
                }
                theme={{
                  content: twMerge(theme.dropdown.content, "py-0"),
                  inlineWrapper: twMerge(
                    theme.dropdown.inlineWrapper,
                    "w-full flex-1 md:w-auto",
                  ),
                  floating: {
                    item: {
                      base: twMerge(
                        theme.dropdown.floating.item.base,
                        "border-b border-gray-200",
                      ),
                    },
                  },
                }}
              >
                <DropdownItem className="group flex items-center gap-2 px-4 py-2 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-600">
                  Today
                  <span className="font-normal text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                    Aug 21, 2023 - Aug 21, 2023
                  </span>
                </DropdownItem>
                <DropdownItem className="group flex items-center gap-2 px-4 py-2 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-600">
                  Yesterday
                  <span className="font-normal text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                    Aug 20, 2023 - Aug 21, 2023
                  </span>
                </DropdownItem>
                <DropdownItem className="group flex items-center gap-2 px-4 py-2 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-600">
                  Last 7 days
                  <span className="font-normal text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                    Aug 21, 2023 - Aug 21, 2023
                  </span>
                </DropdownItem>
                <DropdownItem className="group flex items-center gap-2 px-4 py-2 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-600">
                  Last Month
                  <span className="font-normal text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                    Aug 15, 2023 - Aug 21, 2023
                  </span>
                </DropdownItem>
                <DropdownItem className="group flex items-center gap-2 px-4 py-2 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-600">
                  Last year
                  <span className="font-normal text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                    Jan 1, 2023 - Aug 21, 2023
                  </span>
                </DropdownItem>
                <DropdownItem className="group flex items-center gap-2 px-4 py-2 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-600">
                  All time
                  <span className="font-normal text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                    Feb 1, 2020 - Aug 21, 2023
                  </span>
                </DropdownItem>
              </Dropdown>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-600">
                <h3 className="text-gray-500 dark:text-gray-400">
                  Order ID:
                  <a
                    href="#"
                    className="font-medium text-gray-900 hover:underline dark:text-white"
                  >
                    #FWB1273255
                  </a>
                </h3>
                <Badge color="green" className="w-fit">
                  <Check className="me-1 h-3 w-3" />
                  Completed
                </Badge>
              </div>
              <div className="items-center space-y-4 border-b border-gray-200 py-4 dark:border-gray-600 sm:flex sm:space-x-4 sm:space-y-0">
                <Button className="w-full sm:m-auto">
                  <Refresh className="me-1.5 mt-0.5 h-4 w-4" />
                  Order again
                </Button>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  <Clipboard className="-ms-0.5 me-1.5 h-4 w-4" />
                  Order details
                </a>
              </div>
              <div className="items-center text-sm sm:flex sm:flex-wrap">
                <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400 sm:me-6">
                  <dt className="me-2 font-medium text-gray-900 dark:text-white">
                    Order date:
                  </dt>
                  <dd>02 June 2024</dd>
                </dl>
                <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400 sm:me-6">
                  <dt className="me-2 font-medium text-gray-900 dark:text-white">
                    Total price:
                  </dt>
                  <dd>$475</dd>
                </dl>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-600">
                <h3 className="text-gray-500 dark:text-gray-400">
                  Order ID:
                  <a
                    href="#"
                    className="font-medium text-gray-900 hover:underline dark:text-white"
                  >
                    #FWB1273192
                  </a>
                </h3>
                <Badge color="green" className="w-fit">
                  <Check className="me-1 h-3 w-3" />
                  Completed
                </Badge>
              </div>
              <div className="items-center space-y-4 border-b border-gray-200 py-4 dark:border-gray-600 sm:flex sm:space-x-4 sm:space-y-0">
                <Button className="w-full sm:m-auto">
                  <Refresh className="me-1.5 mt-0.5 h-4 w-4" />
                  Order again
                </Button>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  <Clipboard className="-ms-0.5 me-1.5 h-4 w-4" />
                  Order details
                </a>
              </div>
              <div className="items-center text-sm sm:flex sm:flex-wrap">
                <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400 sm:me-6">
                  <dt className="me-2 font-medium text-gray-900 dark:text-white">
                    Order date:
                  </dt>
                  <dd>18 May 2024</dd>
                </dl>
                <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400 sm:me-6">
                  <dt className="me-2 font-medium text-gray-900 dark:text-white">
                    Total price:
                  </dt>
                  <dd>$1,045</dd>
                </dl>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-600">
                <h3 className="text-gray-500 dark:text-gray-400">
                  Order ID:
                  <a
                    href="#"
                    className="font-medium text-gray-900 hover:underline dark:text-white"
                  >
                    #FWB1273192
                  </a>
                </h3>
                <Badge color="red" className="ms-2">
                  <Close className="me-1 h-3 w-3" />
                  Cancelled
                </Badge>
              </div>
              <div className="items-center space-y-4 border-b border-gray-200 py-4 dark:border-gray-600 sm:flex sm:space-x-4 sm:space-y-0">
                <Button className="w-full sm:m-auto">
                  <Refresh className="me-1.5 mt-0.5 h-4 w-4" />
                  Order again
                </Button>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  <Clipboard className="-ms-0.5 me-1.5 h-4 w-4" />
                  Order details
                </a>
              </div>
              <div className="items-center text-sm sm:flex sm:flex-wrap">
                <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400 sm:me-6">
                  <dt className="me-2 font-medium text-gray-900 dark:text-white">
                    Order date:
                  </dt>
                  <dd>25 February 2024</dd>
                </dl>
                <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400 sm:me-6">
                  <dt className="me-2 font-medium text-gray-900 dark:text-white">
                    Total price:
                  </dt>
                  <dd>$2,977</dd>
                </dl>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-600">
                <h3 className="text-gray-500 dark:text-gray-400">
                  Order ID:
                  <a
                    href="#"
                    className="font-medium text-gray-900 hover:underline dark:text-white"
                  >
                    #FWB1273111
                  </a>
                </h3>
                <Badge color="green" className="w-fit">
                  <Check className="me-1 h-3 w-3" />
                  Completed
                </Badge>
              </div>
              <div className="items-center space-y-4 border-b border-gray-200 py-4 dark:border-gray-600 sm:flex sm:space-x-4 sm:space-y-0">
                <Button className="w-full sm:m-auto">
                  <Refresh className="me-1.5 mt-0.5 h-4 w-4" />
                  Order again
                </Button>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  <Clipboard className="-ms-0.5 me-1.5 h-4 w-4" />
                  Order details
                </a>
              </div>
              <div className="items-center text-sm sm:flex sm:flex-wrap">
                <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400 sm:me-6">
                  <dt className="me-2 font-medium text-gray-900 dark:text-white">
                    Order date:
                  </dt>
                  <dd>27 January 2024</dd>
                </dl>
                <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400 sm:me-6">
                  <dt className="me-2 font-medium text-gray-900 dark:text-white">
                    Total price:
                  </dt>
                  <dd>$900</dd>
                </dl>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="block w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:mt-0"
          >
            Back to shopping
          </a>
        </DrawerItems>
      </Drawer>
    </>
  );
}
