"use client";

import {
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  Modal,
  ModalBody,
  Pagination,
  Select,
  TextInput,
  theme,
} from "flowbite-react";
import {
  Check,
  ChevronDown,
  Close,
  Eye,
  Refresh,
  Search,
  TrashBin,
  Truck,
} from "flowbite-react-icons/outline";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function OrderListWithModal() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <>
      <div className="flex min-h-[20vh] items-center justify-center">
        <Button onClick={() => setModalOpen(true)}>Show my orders</Button>
      </div>
      <Modal
        onClose={() => setModalOpen(false)}
        popup
        show={isModalOpen}
        size="3xl"
        theme={{
          body: {
            base: twMerge(theme.modal.body.base, "px-4"),
          },
          content: {
            inner: twMerge(theme.modal.content.inner, "dark:bg-gray-800"),
          },
        }}
      >
        <ModalBody className="py-4">
          <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-700 sm:mb-5 md:mb-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              My orders
            </h3>
            <button
              onClick={() => setModalOpen(false)}
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <Close className="h-5 w-5" />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="items-center justify-between space-y-4 border-b border-gray-200 pb-4 dark:border-gray-700 sm:flex sm:space-x-4 sm:space-y-0 md:pb-5">
            <div className="w-full sm:w-72 md:w-96">
              <label
                htmlFor="default-search"
                className="sr-only text-sm font-medium text-gray-900 dark:text-white"
              >
                Search
              </label>
              <div className="flex items-center">
                <TextInput
                  icon={() => <Search className="h-4 w-4 dark:text-gray-400" />}
                  id="default-search"
                  name="default-search"
                  placeholder="Search by Order ID"
                  size={36}
                  className="[&_input]:rounded-r-none [&_input]:border-r-0 [&_input]:py-2.5"
                />
                <Button
                  type="submit"
                  className="rounded-l-none [&>span]:py-[11px]"
                >
                  Search
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <div>
                <label htmlFor="order-type" className="sr-only">
                  Select order type
                </label>
                <Select id="order-type" name="order-type">
                  <option selected>All orders</option>
                  <option value="pre-order">Pre-order</option>
                  <option value="transit">In transit</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="cancelled">Cancelled</option>
                </Select>
              </div>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <span className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto">
                    Last 7 days
                    <ChevronDown className="h-6 w-6 text-gray-900 dark:text-gray-500" />
                  </span>
                }
                theme={{
                  content: twMerge(theme.dropdown.content, "py-0"),
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
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="flex flex-wrap items-center gap-y-4 py-4 md:py-5">
              <dl className="w-1/2 sm:w-48">
                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                  Order ID:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">
                    #FWB12546798
                  </a>
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                  Date:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                  11.12.2023
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                  Price:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                  $499
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                  Status:
                </dt>
                <dd>
                  <Badge color="yellow" className="me-2 mt-1.5 w-fit">
                    <Truck className="me-1 h-3 w-3" />
                    In transit
                  </Badge>
                </dd>
              </dl>

              <div className="w-full sm:flex sm:w-32 sm:items-center sm:justify-end sm:gap-4">
                <Dropdown
                  inline
                  label="Actions"
                  theme={{
                    inlineWrapper: twMerge(
                      theme.dropdown.inlineWrapper,
                      "flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto",
                    ),
                    content: twMerge(theme.dropdown.content, "rounded-lg p-2"),
                    floating: {
                      base: twMerge(theme.dropdown.floating.base, "rounded-lg"),
                    },
                  }}
                >
                  <DropdownItem className="rounded-lg">
                    <Refresh className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span>Order again</span>
                  </DropdownItem>
                  <DropdownItem className="rounded-lg">
                    <Eye className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    Order details
                  </DropdownItem>
                  <DropdownItem className="group rounded-lg text-red-600 dark:text-red-600 dark:group-hover:text-white">
                    <TrashBin className="me-1.5 h-4 w-4" />
                    Cancel order
                  </DropdownItem>
                </Dropdown>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-y-4 py-4 md:py-5">
              <dl className="w-1/2 sm:w-48">
                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                  Order ID:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">
                    #FWB12546777
                  </a>
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                  Date:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                  10.11.2024
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                  Price:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                  $3,287
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                  Status:
                </dt>
                <dd>
                  <Badge color="red" className="mt-1.5 w-fit">
                    <Close className="me-1 h-3 w-3" />
                    Cancelled
                  </Badge>
                </dd>
              </dl>

              <div className="w-full sm:flex sm:w-32 sm:items-center sm:justify-end sm:gap-4">
                <Dropdown
                  inline
                  label="Actions"
                  theme={{
                    inlineWrapper: twMerge(
                      theme.dropdown.inlineWrapper,
                      "flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto",
                    ),
                    content: twMerge(theme.dropdown.content, "rounded-lg p-2"),
                    floating: {
                      base: twMerge(theme.dropdown.floating.base, "rounded-lg"),
                    },
                  }}
                >
                  <DropdownItem className="rounded-lg">
                    <Refresh className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span>Order again</span>
                  </DropdownItem>
                  <DropdownItem className="rounded-lg">
                    <Eye className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    Order details
                  </DropdownItem>
                  <DropdownItem className="group rounded-lg text-red-600 dark:text-red-600 dark:group-hover:text-white">
                    <TrashBin className="me-1.5 h-4 w-4" />
                    Cancel order
                  </DropdownItem>
                </Dropdown>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-y-4 py-4 md:py-5">
              <dl className="w-1/2 sm:w-48">
                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                  Order ID:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">
                    #FWB12546846
                  </a>
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                  Date:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                  07.11.2024
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                  Price:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                  $111
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                  Status:
                </dt>
                <dd>
                  <Badge color="green" className="mt-1.5 w-fit">
                    <Check className="me-1 h-3 w-3" />
                    Completed
                  </Badge>
                </dd>
              </dl>

              <div className="w-full sm:flex sm:w-32 sm:items-center sm:justify-end sm:gap-4">
                <Dropdown
                  inline
                  label="Actions"
                  theme={{
                    inlineWrapper: twMerge(
                      theme.dropdown.inlineWrapper,
                      "flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto",
                    ),
                    content: twMerge(theme.dropdown.content, "rounded-lg p-2"),
                    floating: {
                      base: twMerge(theme.dropdown.floating.base, "rounded-lg"),
                    },
                  }}
                >
                  <DropdownItem className="rounded-lg">
                    <Refresh className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span>Order again</span>
                  </DropdownItem>
                  <DropdownItem className="rounded-lg">
                    <Eye className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    Order details
                  </DropdownItem>
                  <DropdownItem className="group rounded-lg text-red-600 dark:text-red-600 dark:group-hover:text-white">
                    <TrashBin className="me-1.5 h-4 w-4" />
                    Cancel order
                  </DropdownItem>
                </Dropdown>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-y-4 py-4 md:py-5">
              <dl className="w-1/2 sm:w-48">
                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                  Order ID:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">
                    #FWB12546212
                  </a>
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                  Date:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                  18.10.2024
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                  Price:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                  $756
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                  Status:
                </dt>
                <dd>
                  <Badge color="green" className="mt-1.5 w-fit">
                    <Check className="me-1 h-3 w-3" />
                    Completed
                  </Badge>
                </dd>
              </dl>

              <div className="w-full sm:flex sm:w-32 sm:items-center sm:justify-end sm:gap-4">
                <Dropdown
                  inline
                  label="Actions"
                  theme={{
                    inlineWrapper: twMerge(
                      theme.dropdown.inlineWrapper,
                      "flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto",
                    ),
                    content: twMerge(theme.dropdown.content, "rounded-lg p-2"),
                    floating: {
                      base: twMerge(theme.dropdown.floating.base, "rounded-lg"),
                    },
                  }}
                >
                  <DropdownItem className="rounded-lg">
                    <Refresh className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span>Order again</span>
                  </DropdownItem>
                  <DropdownItem className="rounded-lg">
                    <Eye className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    Order details
                  </DropdownItem>
                  <DropdownItem className="group rounded-lg text-red-600 dark:text-red-600 dark:group-hover:text-white">
                    <TrashBin className="me-1.5 h-4 w-4" />
                    Cancel order
                  </DropdownItem>
                </Dropdown>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-y-4 py-4 md:py-5">
              <dl className="w-1/2 sm:w-48">
                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                  Order ID:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">
                    #FWB12546004
                  </a>
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                  Date:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                  05.05.2024
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                  Price:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                  $1,247
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                  Status:
                </dt>
                <dd>
                  <Badge color="green" className="mt-1.5 w-fit">
                    <Check className="me-1 h-3 w-3" />
                    Completed
                  </Badge>
                </dd>
              </dl>

              <div className="w-full sm:flex sm:w-32 sm:items-center sm:justify-end sm:gap-4">
                <Dropdown
                  inline
                  label="Actions"
                  theme={{
                    inlineWrapper: twMerge(
                      theme.dropdown.inlineWrapper,
                      "flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto",
                    ),
                    content: twMerge(theme.dropdown.content, "rounded-lg p-2"),
                    floating: {
                      base: twMerge(theme.dropdown.floating.base, "rounded-lg"),
                    },
                  }}
                >
                  <DropdownItem className="rounded-lg">
                    <Refresh className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span>Order again</span>
                  </DropdownItem>
                  <DropdownItem className="rounded-lg">
                    <Eye className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    Order details
                  </DropdownItem>
                  <DropdownItem className="group rounded-lg text-red-600 dark:text-red-600 dark:group-hover:text-white">
                    <TrashBin className="me-1.5 h-4 w-4" />
                    Cancel order
                  </DropdownItem>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700 sm:flex md:pt-5">
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 sm:mb-0">
              Showing&nbsp;
              <span className="font-medium text-gray-900 dark:text-white">
                1-5
              </span>
              &nbsp;of&nbsp;
              <span className="font-medium text-gray-900 dark:text-white">
                145
              </span>
            </p>
            <Pagination
              currentPage={currentPage}
              totalPages={100}
              onPageChange={onPageChange}
              previousLabel=""
              nextLabel=""
              showIcons
              className="[&>ul]:mt-0"
            />
          </div>
          <div className="mt-4 items-center space-x-0 space-y-4 border-t border-gray-200 pt-4 dark:border-gray-700 sm:flex sm:space-x-4 sm:space-y-0 md:mt-5 md:pt-5">
            <Button
              size="lg"
              type="submit"
              className="w-full sm:w-auto [&>span]:text-sm"
            >
              Return to homepage
            </Button>
            <button
              onClick={() => setModalOpen(false)}
              className="w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
            >
              Close
            </button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
