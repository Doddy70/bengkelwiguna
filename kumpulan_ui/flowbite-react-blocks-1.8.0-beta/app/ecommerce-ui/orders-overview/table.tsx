"use client";

import {
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  Label,
  Modal,
  ModalBody,
  Pagination,
  Progress,
  Radio,
  TextInput,
  theme,
} from "flowbite-react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpDown,
  Check,
  ChevronDown,
  Close,
  DotsHorizontal,
  Eye,
  Hourglass,
  Refresh,
  Search,
  TrashBin,
  Truck,
} from "flowbite-react-icons/outline";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function OrderListWithTable() {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            My orders
          </h2>

          <div className="mt-6 space-y-6 sm:mt-8 sm:space-y-8">
            <div className="gap-8 lg:flex">
              <div className="w-full space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6 lg:max-w-xl">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Hi, Bonnie Green
                </h4>

                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  So far you have accumulated&nbsp;
                  <span className="font-semibold text-gray-900 dark:text-white">
                    5,183
                  </span>
                  &nbsp;points, to become a Premium user, you need&nbsp;
                  <span className="font-semibold text-gray-900 dark:text-white">
                    10,000
                  </span>
                  &nbsp;points.
                </p>

                <div className="space-y-1">
                  <p className="text-right text-sm font-medium text-gray-500 dark:text-gray-400">
                    5183/10000
                  </p>
                  <Progress color="green" progress={55} className="h-1.5" />
                </div>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center gap-2 font-medium text-primary-700 hover:underline dark:text-primary-500"
                >
                  View premium benefits
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-6 space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:mt-8 md:p-6 lg:mt-0">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  You have a $49 voucher
                </h4>

                <div className="space-y-2">
                  <p className="text-gray-500 dark:text-gray-400">
                    You have -$49 extra dollars for an order of the Oral-B iO10
                    electric toothbrush product.
                  </p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Expires on 31.12.2023 - 23:59
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Button size="sm" className="[&>span]:text-xs">
                    Apply in basket
                  </Button>

                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center gap-2 font-medium text-gray-900 hover:underline dark:text-white"
                  >
                    See voucher details
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800">
              <div className="space-y-4 p-4">
                <div className="flex flex-col-reverse items-center justify-between md:flex-row md:space-x-4">
                  <form className="w-full flex-1 md:mr-4 md:max-w-md">
                    <label
                      htmlFor="default-search"
                      className="sr-only text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Search
                    </label>
                    <div className="flex items-center">
                      <TextInput
                        icon={() => (
                          <Search className="h-4 w-4 dark:text-gray-400" />
                        )}
                        id="default-search"
                        name="default-search"
                        placeholder="Search by Order ID"
                        size={36}
                        className="[&_input]:rounded-r-none [&_input]:border-r-0 [&_input]:py-[7px]"
                      />
                      <Button type="submit" className="rounded-l-none">
                        Search
                      </Button>
                    </div>
                  </form>

                  <div className="mb-4 w-full md:mb-0 md:w-auto">
                    <Dropdown
                      arrowIcon={false}
                      dir="down"
                      inline
                      label={
                        <span className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto">
                          Last 7 days
                          <ChevronDown className="ms-1 h-5 w-5" />
                        </span>
                      }
                      theme={{
                        inlineWrapper: twMerge(
                          theme.dropdown.inlineWrapper,
                          "w-full md:w-auto",
                        ),
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
                      <DropdownItem className="group">
                        <span className="flex items-center gap-2 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-600">
                          Today
                          <span className="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                            Aug 21, 2023 - Aug 21, 2023
                          </span>
                        </span>
                      </DropdownItem>
                      <DropdownItem className="group">
                        <span className="flex items-center gap-2 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-600">
                          Yesterday
                          <span className="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                            Aug 20, 2023 - Aug 21, 2023
                          </span>
                        </span>
                      </DropdownItem>
                      <DropdownItem className="group">
                        <span className="flex items-center gap-2 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-600">
                          Last 7 days
                          <span className="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                            Aug 21, 2023 - Aug 21, 2023
                          </span>
                        </span>
                      </DropdownItem>
                      <DropdownItem className="group">
                        <span className="flex items-center gap-2 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-600">
                          Last Month
                          <span className="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                            Aug 15, 2023 - Aug 21, 2023
                          </span>
                        </span>
                      </DropdownItem>
                      <DropdownItem className="group">
                        <span className="flex items-center gap-2 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-600">
                          Last year
                          <span className="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                            Jan 1, 2023 - Aug 21, 2023
                          </span>
                        </span>
                      </DropdownItem>
                      <DropdownItem className="group">
                        <span className="flex items-center gap-2 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-600">
                          All time
                          <span className="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                            Feb 1, 2020 - Aug 21, 2023
                          </span>
                        </span>
                      </DropdownItem>
                    </Dropdown>
                  </div>
                </div>

                <hr className="border-gray-200 dark:border-gray-700" />

                <div className="flex flex-wrap items-center">
                  <div className="mr-4 hidden items-center text-sm font-medium text-gray-900 dark:text-white md:flex">
                    Show:
                  </div>
                  <div className="flex flex-wrap gap-x-2 gap-y-3">
                    <div className="mr-4 flex items-center">
                      <Radio id="all-orders" name="show-only" />
                      <Label
                        htmlFor="all-orders"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        All
                      </Label>
                    </div>

                    <div className="mr-4 flex items-center">
                      <Radio id="confirmed" name="show-only" />
                      <Label
                        htmlFor="confirmed"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Confirmed
                      </Label>
                    </div>

                    <div className="mr-4 flex items-center">
                      <Radio id="in-transit" name="show-only" />
                      <Label
                        htmlFor="in-transit"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        In Transit
                      </Label>
                    </div>

                    <div className="mr-4 flex items-center">
                      <Radio id="cancelled" name="show-only" />
                      <Label
                        htmlFor="cancelled"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Cancelled
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-x-auto">
                <table className="w-full divide-y divide-gray-200 text-left text-sm text-gray-900 dark:divide-gray-700 dark:text-white">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th
                        scope="col"
                        className="whitespace-nowrap p-4 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400"
                      >
                        Order ID
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap p-4 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400"
                      >
                        <div className="flex items-center gap-1">
                          Due Date
                          <ArrowUpDown className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap p-4 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400"
                      >
                        <div className="flex items-center gap-1">
                          Price
                          <ArrowUpDown className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap p-4 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400"
                      >
                        <div className="flex items-center gap-1">
                          Status
                          <ArrowUpDown className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-semibold uppercase"
                      >
                        <span className="sr-only"> Actions </span>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <th
                        scope="row"
                        className="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white"
                      >
                        <a href="#" className="hover:underline">
                          #FWB127364372
                        </a>
                      </th>
                      <td className="whitespace-nowrap p-4 text-sm font-medium">
                        09 Mar 2023
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm font-medium">
                        $466
                      </td>
                      <td className="p-4">
                        <Badge color="blue" className="w-fit whitespace-nowrap">
                          <Hourglass className="me-1 h-3 w-3" />
                          Pre-order
                        </Badge>
                      </td>
                      <td className="flex justify-end p-4">
                        <Dropdown
                          arrowIcon={false}
                          inline
                          label={<DotsHorizontal className="h-5 w-5" />}
                          theme={{
                            floating: {
                              base: twMerge(
                                theme.dropdown.floating.base,
                                "rounded-md p-2",
                              ),
                            },
                            inlineWrapper: twMerge(
                              theme.dropdown.inlineWrapper,
                              "items-center justify-center rounded-lg p-1 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",
                            ),
                          }}
                        >
                          <DropdownItem className="rounded-md">
                            <Refresh className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                            <span>Order again</span>
                          </DropdownItem>
                          <DropdownItem className="rounded-md">
                            <Eye className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                            Order details
                          </DropdownItem>
                          <DropdownItem className="group rounded-md">
                            <button
                              onClick={() => setDeleteModalOpen(true)}
                              className="flex items-center text-red-600 dark:group-hover:text-white"
                            >
                              <TrashBin className="me-1.5 h-4 w-4" />
                              Cancel order
                            </button>
                          </DropdownItem>
                        </Dropdown>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <th
                        scope="row"
                        className="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white"
                      >
                        <a href="#" className="hover:underline">
                          #FWB125467980
                        </a>
                      </th>
                      <td className="whitespace-nowrap p-4 text-sm font-medium">
                        12 Mar 2023
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm font-medium">
                        $245
                      </td>
                      <td className="p-4">
                        <Badge
                          color="yellow"
                          className="w-fit whitespace-nowrap"
                        >
                          <Truck className="me-1 h-3 w-3" />
                          In transit
                        </Badge>
                      </td>
                      <td className="flex justify-end p-4">
                        <Dropdown
                          arrowIcon={false}
                          inline
                          label={<DotsHorizontal className="h-5 w-5" />}
                          theme={{
                            floating: {
                              base: twMerge(
                                theme.dropdown.floating.base,
                                "rounded-md p-2",
                              ),
                            },
                            inlineWrapper: twMerge(
                              theme.dropdown.inlineWrapper,
                              "items-center justify-center rounded-lg p-1 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",
                            ),
                          }}
                        >
                          <DropdownItem className="rounded-md">
                            <Refresh className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                            <span>Order again</span>
                          </DropdownItem>
                          <DropdownItem className="rounded-md">
                            <Eye className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                            Order details
                          </DropdownItem>
                          <DropdownItem className="group rounded-md">
                            <button
                              onClick={() => setDeleteModalOpen(true)}
                              className="flex items-center text-red-600 dark:group-hover:text-white"
                            >
                              <TrashBin className="me-1.5 h-4 w-4" />
                              Cancel order
                            </button>
                          </DropdownItem>
                        </Dropdown>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <th
                        scope="row"
                        className="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white"
                      >
                        <a href="#" className="hover:underline">
                          #FWB139485607
                        </a>
                      </th>
                      <td className="whitespace-nowrap p-4 text-sm font-medium">
                        19 Mar 2023
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm font-medium">
                        $2000
                      </td>
                      <td className="p-4">
                        <Badge
                          color="green"
                          className="w-fit whitespace-nowrap"
                        >
                          <Check className="me-1 h-3 w-3" />
                          Confirmed
                        </Badge>
                      </td>
                      <td className="flex justify-end p-4">
                        <Dropdown
                          arrowIcon={false}
                          inline
                          label={<DotsHorizontal className="h-5 w-5" />}
                          theme={{
                            floating: {
                              base: twMerge(
                                theme.dropdown.floating.base,
                                "rounded-md p-2",
                              ),
                            },
                            inlineWrapper: twMerge(
                              theme.dropdown.inlineWrapper,
                              "items-center justify-center rounded-lg p-1 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",
                            ),
                          }}
                        >
                          <DropdownItem className="rounded-md">
                            <Refresh className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                            <span>Order again</span>
                          </DropdownItem>
                          <DropdownItem className="rounded-md">
                            <Eye className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                            Order details
                          </DropdownItem>
                          <DropdownItem className="group rounded-md">
                            <button
                              onClick={() => setDeleteModalOpen(true)}
                              className="flex items-center text-red-600 dark:group-hover:text-white"
                            >
                              <TrashBin className="me-1.5 h-4 w-4" />
                              Cancel order
                            </button>
                          </DropdownItem>
                        </Dropdown>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <th
                        scope="row"
                        className="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white"
                      >
                        <a href="#" className="hover:underline">
                          #FWB137364371
                        </a>
                      </th>
                      <td className="whitespace-nowrap p-4 text-sm font-medium">
                        23 Apr 2023
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm font-medium">
                        $90
                      </td>
                      <td className="p-4">
                        <Badge
                          color="green"
                          className="w-fit whitespace-nowrap"
                        >
                          <Check className="me-1 h-3 w-3" />
                          Confirmed
                        </Badge>
                      </td>
                      <td className="flex justify-end p-4">
                        <Dropdown
                          arrowIcon={false}
                          inline
                          label={<DotsHorizontal className="h-5 w-5" />}
                          theme={{
                            floating: {
                              base: twMerge(
                                theme.dropdown.floating.base,
                                "rounded-md p-2",
                              ),
                            },
                            inlineWrapper: twMerge(
                              theme.dropdown.inlineWrapper,
                              "items-center justify-center rounded-lg p-1 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",
                            ),
                          }}
                        >
                          <DropdownItem className="rounded-md">
                            <Refresh className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                            <span>Order again</span>
                          </DropdownItem>
                          <DropdownItem className="rounded-md">
                            <Eye className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                            Order details
                          </DropdownItem>
                          <DropdownItem className="group rounded-md">
                            <button
                              onClick={() => setDeleteModalOpen(true)}
                              className="flex items-center text-red-600 dark:group-hover:text-white"
                            >
                              <TrashBin className="me-1.5 h-4 w-4" />
                              Cancel order
                            </button>
                          </DropdownItem>
                        </Dropdown>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <th
                        scope="row"
                        className="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white"
                      >
                        <a href="#" className="hover:underline">
                          #FWB148273645
                        </a>
                      </th>
                      <td className="whitespace-nowrap p-4 text-sm font-medium">
                        20 Apr 2023
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm font-medium">
                        $3040
                      </td>
                      <td className="p-4">
                        <Badge color="red" className="w-fit whitespace-nowrap">
                          <Close className="me-1 h-3 w-3" />
                          Cancelled
                        </Badge>
                      </td>
                      <td className="flex justify-end p-4">
                        <Dropdown
                          arrowIcon={false}
                          inline
                          label={<DotsHorizontal className="h-5 w-5" />}
                          theme={{
                            floating: {
                              base: twMerge(
                                theme.dropdown.floating.base,
                                "rounded-md p-2",
                              ),
                            },
                            inlineWrapper: twMerge(
                              theme.dropdown.inlineWrapper,
                              "items-center justify-center rounded-lg p-1 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",
                            ),
                          }}
                        >
                          <DropdownItem className="rounded-md">
                            <Refresh className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                            <span>Order again</span>
                          </DropdownItem>
                          <DropdownItem className="rounded-md">
                            <Eye className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                            Order details
                          </DropdownItem>
                          <DropdownItem className="group rounded-md">
                            <button
                              onClick={() => setDeleteModalOpen(true)}
                              className="flex items-center text-red-600 dark:group-hover:text-white"
                            >
                              <TrashBin className="me-1.5 h-4 w-4" />
                              Cancel order
                            </button>
                          </DropdownItem>
                        </Dropdown>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <th
                        scope="row"
                        className="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white"
                      >
                        <a href="#" className="hover:underline">
                          #FWB146284623
                        </a>
                      </th>
                      <td className="whitespace-nowrap p-4 text-sm font-medium">
                        30 Apr 2023
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm font-medium">
                        $2999
                      </td>
                      <td className="p-4">
                        <Badge
                          color="green"
                          className="w-fit whitespace-nowrap"
                        >
                          <Check className="me-1 h-3 w-3" />
                          Confirmed
                        </Badge>
                      </td>
                      <td className="flex justify-end p-4">
                        <Dropdown
                          arrowIcon={false}
                          inline
                          label={<DotsHorizontal className="h-5 w-5" />}
                          theme={{
                            floating: {
                              base: twMerge(
                                theme.dropdown.floating.base,
                                "rounded-md p-2",
                              ),
                            },
                            inlineWrapper: twMerge(
                              theme.dropdown.inlineWrapper,
                              "items-center justify-center rounded-lg p-1 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",
                            ),
                          }}
                        >
                          <DropdownItem className="rounded-md">
                            <Refresh className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                            <span>Order again</span>
                          </DropdownItem>
                          <DropdownItem className="rounded-md">
                            <Eye className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                            Order details
                          </DropdownItem>
                          <DropdownItem className="group rounded-md">
                            <button
                              onClick={() => setDeleteModalOpen(true)}
                              className="flex items-center text-red-600 dark:group-hover:text-white"
                            >
                              <TrashBin className="me-1.5 h-4 w-4" />
                              Cancel order
                            </button>
                          </DropdownItem>
                        </Dropdown>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <th
                        scope="row"
                        className="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white"
                      >
                        <a href="#" className="hover:underline">
                          #FWB145967376
                        </a>
                      </th>
                      <td className="whitespace-nowrap p-4 text-sm font-medium">
                        09 May 2023
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm font-medium">
                        $1870
                      </td>
                      <td className="p-4">
                        <Badge
                          color="green"
                          className="w-fit whitespace-nowrap"
                        >
                          <Check className="me-1 h-3 w-3" />
                          Confirmed
                        </Badge>
                      </td>
                      <td className="flex justify-end p-4">
                        <Dropdown
                          arrowIcon={false}
                          inline
                          label={<DotsHorizontal className="h-5 w-5" />}
                          theme={{
                            floating: {
                              base: twMerge(
                                theme.dropdown.floating.base,
                                "rounded-md p-2",
                              ),
                            },
                            inlineWrapper: twMerge(
                              theme.dropdown.inlineWrapper,
                              "items-center justify-center rounded-lg p-1 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",
                            ),
                          }}
                        >
                          <DropdownItem className="rounded-md">
                            <Refresh className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                            <span>Order again</span>
                          </DropdownItem>
                          <DropdownItem className="rounded-md">
                            <Eye className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                            Order details
                          </DropdownItem>
                          <DropdownItem className="group rounded-md">
                            <button
                              onClick={() => setDeleteModalOpen(true)}
                              className="flex items-center text-red-600 dark:group-hover:text-white"
                            >
                              <TrashBin className="me-1.5 h-4 w-4" />
                              Cancel order
                            </button>
                          </DropdownItem>
                        </Dropdown>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <th
                        scope="row"
                        className="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white"
                      >
                        <a href="#" className="hover:underline">
                          #FWB148756352
                        </a>
                      </th>
                      <td className="whitespace-nowrap p-4 text-sm font-medium">
                        05 Jun 2023
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm font-medium">
                        $5067
                      </td>
                      <td className="p-4">
                        <Badge color="red" className="w-fit whitespace-nowrap">
                          <Close className="me-1 h-3 w-3" />
                          Cancelled
                        </Badge>
                      </td>
                      <td className="flex justify-end p-4">
                        <Dropdown
                          arrowIcon={false}
                          inline
                          label={<DotsHorizontal className="h-5 w-5" />}
                          theme={{
                            floating: {
                              base: twMerge(
                                theme.dropdown.floating.base,
                                "rounded-md p-2",
                              ),
                            },
                            inlineWrapper: twMerge(
                              theme.dropdown.inlineWrapper,
                              "items-center justify-center rounded-lg p-1 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",
                            ),
                          }}
                        >
                          <DropdownItem className="rounded-md">
                            <Refresh className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                            <span>Order again</span>
                          </DropdownItem>
                          <DropdownItem className="rounded-md">
                            <Eye className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                            Order details
                          </DropdownItem>
                          <DropdownItem className="group rounded-md">
                            <button
                              onClick={() => setDeleteModalOpen(true)}
                              className="flex items-center text-red-600 dark:group-hover:text-white"
                            >
                              <TrashBin className="me-1.5 h-4 w-4" />
                              Cancel order
                            </button>
                          </DropdownItem>
                        </Dropdown>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <th
                        scope="row"
                        className="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white"
                      >
                        <a href="#" className="hover:underline">
                          #FWB159873546
                        </a>
                      </th>
                      <td className="whitespace-nowrap p-4 text-sm font-medium">
                        31 May 2023
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm font-medium">
                        $60
                      </td>
                      <td className="p-4">
                        <Badge
                          color="green"
                          className="w-fit whitespace-nowrap"
                        >
                          <Check className="me-1 h-3 w-3" />
                          Confirmed
                        </Badge>
                      </td>
                      <td className="flex justify-end p-4">
                        <Dropdown
                          arrowIcon={false}
                          inline
                          label={<DotsHorizontal className="h-5 w-5" />}
                          theme={{
                            floating: {
                              base: twMerge(
                                theme.dropdown.floating.base,
                                "rounded-md p-2",
                              ),
                            },
                            inlineWrapper: twMerge(
                              theme.dropdown.inlineWrapper,
                              "items-center justify-center rounded-lg p-1 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",
                            ),
                          }}
                        >
                          <DropdownItem className="rounded-md">
                            <Refresh className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                            <span>Order again</span>
                          </DropdownItem>
                          <DropdownItem className="rounded-md">
                            <Eye className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                            Order details
                          </DropdownItem>
                          <DropdownItem className="group rounded-md">
                            <button
                              onClick={() => setDeleteModalOpen(true)}
                              className="flex items-center text-red-600 dark:group-hover:text-white"
                            >
                              <TrashBin className="me-1.5 h-4 w-4" />
                              Cancel order
                            </button>
                          </DropdownItem>
                        </Dropdown>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <th
                        scope="row"
                        className="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white"
                      >
                        <a href="#" className="hover:underline">
                          #FWB156475937
                        </a>
                      </th>
                      <td className="whitespace-nowrap p-4 text-sm font-medium">
                        24 Jun 2023
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm font-medium">
                        $76
                      </td>
                      <td className="p-4">
                        <Badge
                          color="green"
                          className="w-fit whitespace-nowrap"
                        >
                          <Check className="me-1 h-3 w-3" />
                          Confirmed
                        </Badge>
                      </td>
                      <td className="flex justify-end p-4">
                        <Dropdown
                          arrowIcon={false}
                          inline
                          label={<DotsHorizontal className="h-5 w-5" />}
                          theme={{
                            floating: {
                              base: twMerge(
                                theme.dropdown.floating.base,
                                "rounded-md p-2",
                              ),
                            },
                            inlineWrapper: twMerge(
                              theme.dropdown.inlineWrapper,
                              "items-center justify-center rounded-lg p-1 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",
                            ),
                          }}
                        >
                          <DropdownItem className="rounded-md">
                            <Refresh className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                            <span>Order again</span>
                          </DropdownItem>
                          <DropdownItem className="rounded-md">
                            <Eye className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                            Order details
                          </DropdownItem>
                          <DropdownItem className="group rounded-md">
                            <button
                              onClick={() => setDeleteModalOpen(true)}
                              className="flex items-center text-red-600 dark:group-hover:text-white"
                            >
                              <TrashBin className="me-1.5 h-4 w-4" />
                              Cancel order
                            </button>
                          </DropdownItem>
                        </Dropdown>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex w-full flex-col justify-between px-4 py-4 md:flex-row md:items-center">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Showing&nbsp;
                  <span className="font-semibold text-gray-900 dark:text-white">
                    1-10
                  </span>
                  &nbsp;of&nbsp;
                  <span className="font-semibold text-gray-900 dark:text-white">
                    1000
                  </span>
                </span>
                <Pagination
                  currentPage={currentPage}
                  totalPages={100}
                  onPageChange={onPageChange}
                  previousLabel=""
                  nextLabel=""
                  showIcons
                />
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start">
              <a
                href="#"
                title=""
                className="me-2 inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                role="button"
              >
                <ArrowLeft className="h-5 w-5" />
                Back to Homepage
              </a>
            </div>
          </div>
        </div>
      </div>
      <Modal
        onClose={() => setDeleteModalOpen(false)}
        popup
        show={isDeleteModalOpen}
        size="md"
        theme={{
          content: {
            inner: twMerge(theme.modal.content.inner, "dark:bg-gray-800"),
          },
        }}
      >
        <ModalBody>
          <button
            onClick={() => setDeleteModalOpen(false)}
            className="absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <Close className="h-5 w-5" />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="mx-auto my-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
            <TrashBin className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            <span className="sr-only">Danger icon</span>
          </div>
          <p className="mb-3.5 text-gray-900 dark:text-white">
            <span className="font-medium text-primary-700 dark:text-primary-500">
              @bonniegr
            </span>
            , are you sure you want to delete this order from your account?
          </p>
          <p className="mb-4 text-gray-500 dark:text-gray-300">
            This action cannot be undone.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={() => setDeleteModalOpen(false)}
              className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
            >
              No, cancel
            </button>
            <Button color="failure" type="submit">
              Yes, delete
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </section>
  );
}
