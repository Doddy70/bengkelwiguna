"use client";

import {
  Alert,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Dropdown,
  DropdownItem,
  Modal,
  ModalBody,
  Pagination,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  TextInput,
  theme,
} from "flowbite-react";
import {
  ArrowRightToBracket,
  ArrowUpDown,
  Check,
  CheckCircle,
  ChevronDown,
  Clipboard,
  Close,
  Cog,
  Download,
  Eye,
  Filter,
  GiftBox,
  Heart,
  Home,
  Hourglass,
  Refresh,
  Search,
  Star,
  TrashBin,
  Truck,
  UserSettings,
  Wallet,
} from "flowbite-react-icons/outline";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function OrderListWithSidebar() {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <Breadcrumb aria-label="Default breadcrumb example" className="mb-4">
          <BreadcrumbItem href="#" icon={Home}>
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href="#">My account</BreadcrumbItem>
          <BreadcrumbItem>All orders</BreadcrumbItem>
        </Breadcrumb>
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-8">
          My orders
        </h2>
        <div className="gap-8 lg:flex">
          <Sidebar className="hidden h-full w-80 shrink-0 overflow-y-auto border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 lg:block lg:rounded-lg">
            <SidebarItems>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                        className="mr-3 h-8 w-8 rounded-md"
                        alt="Jese avatar"
                      />
                      <div className="text-left">
                        <div className="mb-0.5 font-semibold leading-none text-gray-900 dark:text-white">
                          Jese Leos (Personal)
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          jese@flowbite.com
                        </div>
                      </div>
                    </div>
                    <ArrowUpDown className="h-5 w-5 text-gray-900 dark:text-white" />
                  </div>
                }
                theme={{
                  inlineWrapper: twMerge(
                    theme.dropdown.inlineWrapper,
                    "mt-0 w-full rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700",
                  ),
                  content: twMerge(theme.dropdown.content, "py-0"),
                }}
              >
                <a
                  href="#"
                  className="flex items-center rounded px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-8 w-8 rounded"
                    alt="Michael avatar"
                  />
                  <div className="text-left">
                    <div className="mb-0.5 font-semibold leading-none text-gray-900 dark:text-white">
                      Flowbite LLC (Company)
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      company@flowbite.com
                    </div>
                  </div>
                </a>
              </Dropdown>
              <SidebarItemGroup className="mt-3">
                <ul className="grid grid-cols-3 gap-2">
                  <li>
                    <a
                      href="#"
                      className="group flex flex-col items-center justify-center rounded-xl bg-primary-50 p-2.5 hover:bg-primary-100 dark:bg-primary-900 dark:hover:bg-primary-800"
                    >
                      <span className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 group-hover:bg-primary-200 dark:bg-primary-800  dark:group-hover:bg-primary-700">
                        <UserSettings className="h-5 w-5 text-primary-600 dark:text-primary-300" />
                      </span>
                      <span className="text-sm font-medium text-primary-600 dark:text-primary-300">
                        Profile
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group flex flex-col items-center justify-center rounded-xl bg-purple-50 p-2.5 hover:bg-purple-100 dark:bg-purple-900 dark:hover:bg-purple-800"
                    >
                      <span className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 dark:bg-purple-800  dark:group-hover:bg-purple-700">
                        <GiftBox className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                      </span>
                      <span className="text-sm font-medium text-purple-600 dark:text-purple-300">
                        Gifts
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group flex flex-col items-center justify-center rounded-xl bg-teal-50 p-2.5 hover:bg-teal-100 dark:bg-teal-900 dark:hover:bg-teal-800"
                    >
                      <span className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 group-hover:bg-teal-200 dark:bg-teal-800  dark:group-hover:bg-teal-700">
                        <Wallet className="h-5 w-5 text-teal-600 dark:text-teal-300" />
                      </span>
                      <span className="text-sm font-medium text-teal-600 dark:text-teal-300">
                        Wallet
                      </span>
                    </a>
                  </li>
                </ul>
              </SidebarItemGroup>
              <SidebarItemGroup>
                <SidebarItem href="#" icon={Truck}>
                  My orders
                </SidebarItem>
                <SidebarItem href="#" icon={Star}>
                  Reviews
                </SidebarItem>
                <SidebarItem href="#" icon={Home}>
                  Delivery addresses
                </SidebarItem>
                <SidebarItem href="#" icon={Eye}>
                  Recently viewed
                </SidebarItem>
                <SidebarItem href="#" icon={Heart}>
                  Favourite items
                </SidebarItem>
              </SidebarItemGroup>
              <SidebarItemGroup>
                <SidebarItem href="#" icon={Cog}>
                  Settings
                </SidebarItem>
                <SidebarItem
                  href="#"
                  icon={ArrowRightToBracket}
                  theme={{
                    icon: {
                      base: twMerge(
                        theme.sidebar.item.icon.base,
                        "text-red-600 dark:text-red-600",
                      ),
                    },
                  }}
                  className="text-red-600 dark:text-red-600"
                >
                  Log out
                </SidebarItem>
              </SidebarItemGroup>
            </SidebarItems>
          </Sidebar>

          <div className="w-full">
            <div className="mb-4 items-center justify-between md:flex md:space-x-4">
              <form className="w-full flex-1 md:mr-4 md:max-w-md">
                <label htmlFor="default-search" className="sr-only">
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

              <div className="mt-4 items-center space-y-4 sm:flex sm:space-y-0 md:mt-0">
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <span className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto">
                      <Filter className="-ms-0.5 me-1.5 h-4 w-4" />
                      Filter by: Completed
                      <ChevronDown className="ms-1 h-5 w-5" />
                    </span>
                  }
                  theme={{
                    floating: {
                      base: twMerge(theme.dropdown.floating.base, "p-2"),
                    },
                    inlineWrapper: twMerge(
                      theme.dropdown.inlineWrapper,
                      "w-full md:w-auto",
                    ),
                  }}
                >
                  <DropdownItem className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <span className="me-2 h-2.5 w-2.5 rounded-full bg-green-500" />
                    <span>Completed</span>
                  </DropdownItem>
                  <DropdownItem className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <span className="me-2 h-2.5 w-2.5 rounded-full bg-primary-600"></span>
                    Pre-order
                  </DropdownItem>
                  <DropdownItem className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <span className="me-2 h-2.5 w-2.5 rounded-full bg-yellow-300"></span>
                    In transit
                  </DropdownItem>
                  <DropdownItem className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <span className="me-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>
                    Cancelled
                  </DropdownItem>
                </Dropdown>
                <Dropdown
                  arrowIcon={false}
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

            <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="items-start justify-between border-b border-gray-100 pb-4 dark:border-gray-700 md:flex lg:block xl:flex">
                <div className="mb-4 justify-between sm:flex sm:items-center md:mb-0 md:block lg:mb-4 lg:flex xl:mb-0 xl:block">
                  <h3 className="mb-2 text-gray-500 sm:mb-0 md:mb-2">
                    Order ID:&nbsp;
                    <a
                      href="#"
                      className="font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      #FWB1273643
                    </a>
                    <Badge color="blue" className="ms-2 inline w-fit">
                      <Hourglass className="me-1 h-3 w-3" />
                      Pre-order
                    </Badge>
                  </h3>
                  <button
                    type="button"
                    className="inline-flex items-center font-medium text-primary-700 hover:underline dark:text-primary-500"
                  >
                    <Download className="me-2 h-5 w-5" />
                    Download invoice
                  </button>
                </div>
                <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                  <Button
                    color="failure"
                    onClick={() => setDeleteModalOpen(true)}
                    className="w-full sm:w-auto"
                  >
                    Cancel order
                  </Button>
                  <a
                    href="#"
                    className="inline-flex w-full items-center justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:mt-0 sm:w-auto"
                  >
                    <Clipboard className="-ms-0.5 me-1.5 h-4 w-4" />
                    Track order
                  </a>
                  <a
                    href="#"
                    className="inline-flex w-full justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:mt-0 sm:w-auto"
                  >
                    Order details
                  </a>
                </div>
              </div>
              <div className="mb-4 items-center sm:flex sm:flex-wrap xl:flex">
                <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400 sm:me-8">
                  <dt className="me-2 font-medium text-gray-900 dark:text-white">
                    Order date:
                  </dt>
                  <dd>24 January 2024</dd>
                </dl>
                <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400 sm:me-8">
                  <dt className="me-2 font-medium text-gray-900 dark:text-white">
                    Email:
                  </dt>
                  <dd>name@example.com</dd>
                </dl>
                <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400">
                  <dt className="me-2 font-medium text-gray-900 dark:text-white">
                    Payment method:
                  </dt>
                  <dd className="flex items-center">
                    <img
                      className="h-4 w-auto dark:hidden"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg"
                      alt=""
                    />
                    <img
                      className="hidden h-4 w-auto dark:flex"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg"
                      alt=""
                    />
                    <span className="ms-1">Credit card</span>
                  </dd>
                </dl>
              </div>
              <Alert
                color="yellow"
                icon={Truck}
                className="bg-orange-100 py-3 dark:bg-gray-700 dark:text-orange-300"
              >
                <span className="sr-only">Info</span>
                <div>
                  Expected delivery on&nbsp;
                  <span className="font-medium">Monday 16 Jul 2024</span>
                </div>
              </Alert>
            </div>
            <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="items-start justify-between border-b border-gray-100 pb-4 dark:border-gray-700 md:flex lg:block xl:flex">
                <div className="mb-4 justify-between sm:flex sm:items-center md:mb-0 md:block lg:mb-4 lg:flex xl:mb-0 xl:block">
                  <h3 className="mb-2 text-gray-500 sm:mb-0 md:mb-2">
                    Order ID:&nbsp;
                    <a
                      href="#"
                      className="font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      #FWB1273722
                    </a>
                    <Badge color="yellow" className="ms-2 inline w-fit">
                      <Truck className="me-1 h-3 w-3" />
                      In transit
                    </Badge>
                  </h3>
                  <button
                    type="button"
                    className="inline-flex items-center font-medium text-primary-700 hover:underline dark:text-primary-500"
                  >
                    <Download className="me-2 h-5 w-5" />
                    Download invoice
                  </button>
                </div>
                <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                  <Button
                    color="failure"
                    onClick={() => setDeleteModalOpen(true)}
                    className="w-full sm:w-auto"
                  >
                    Cancel order
                  </Button>
                  <a
                    href="#"
                    className="inline-flex w-full items-center justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:mt-0 sm:w-auto"
                  >
                    <Clipboard className="-ms-0.5 me-1.5 h-4 w-4" />
                    Track order
                  </a>
                  <a
                    href="#"
                    className="inline-flex w-full justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:mt-0 sm:w-auto"
                  >
                    Order details
                  </a>
                </div>
              </div>
              <div className="mb-4 items-center sm:flex sm:flex-wrap xl:flex">
                <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400 sm:me-8">
                  <dt className="me-2 font-medium text-gray-900 dark:text-white">
                    Order date:
                  </dt>
                  <dd>01 May 2024</dd>
                </dl>
                <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400 sm:me-8">
                  <dt className="me-2 font-medium text-gray-900 dark:text-white">
                    Email:
                  </dt>
                  <dd>name@example.com</dd>
                </dl>
                <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400">
                  <dt className="me-2 font-medium text-gray-900 dark:text-white">
                    Payment method:
                  </dt>
                  <dd className="flex items-center">
                    <img
                      className="h-4 w-auto dark:hidden"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
                      alt=""
                    />
                    <img
                      className="hidden h-4 w-auto dark:flex"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg"
                      alt=""
                    />
                    <span className="sr-only">Visa</span>
                  </dd>
                </dl>
              </div>
              <Alert
                color="yellow"
                icon={Truck}
                className="bg-orange-100 py-3 dark:bg-gray-700 dark:text-orange-300"
              >
                <span className="sr-only">Info</span>
                <div>
                  Expected delivery <span className="font-medium">Today</span>
                </div>
              </Alert>
            </div>
            <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="items-start justify-between border-b border-gray-100 pb-4 dark:border-gray-700 md:flex lg:block xl:flex">
                <div className="mb-4 justify-between sm:flex sm:items-center md:mb-0 md:block lg:mb-4 lg:flex xl:mb-0 xl:block">
                  <h3 className="mb-2 text-gray-500 sm:mb-0 md:mb-2">
                    Order ID:&nbsp;
                    <a
                      href="#"
                      className="font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      #FWB1273756
                    </a>
                    <Badge color="green" className="ms-2 inline w-fit">
                      <Check className="me-1 h-3 w-3" />
                      Completed
                    </Badge>
                  </h3>
                  <button
                    type="button"
                    className="inline-flex items-center font-medium text-primary-700 hover:underline dark:text-primary-500"
                  >
                    <Download className="me-2 h-5 w-5" />
                    Download invoice
                  </button>
                </div>
                <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
                  >
                    <Refresh className="-ms-0.5 me-1.5 h-4 w-4" />
                    Order again
                  </button>
                  <a
                    href="#"
                    className="inline-flex w-full justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:mt-0 sm:w-auto"
                  >
                    Order details
                  </a>
                </div>
              </div>
              <div className="mb-4 items-center sm:flex sm:flex-wrap xl:flex">
                <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400 sm:me-8">
                  <dt className="me-2 font-medium text-gray-900 dark:text-white">
                    Order date:
                  </dt>
                  <dd>01 May 2024</dd>
                </dl>
                <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400 sm:me-8">
                  <dt className="me-2 font-medium text-gray-900 dark:text-white">
                    Email:
                  </dt>
                  <dd>name@example.com</dd>
                </dl>
                <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400">
                  <dt className="me-2 font-medium text-gray-900 dark:text-white">
                    Payment method:
                  </dt>
                  <dd className="flex items-center">
                    <img
                      className="h-4 w-auto dark:hidden"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
                      alt=""
                    />
                    <img
                      className="hidden h-4 w-auto dark:flex"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg"
                      alt=""
                    />
                    <span className="sr-only">Visa</span>
                  </dd>
                </dl>
              </div>
              <Alert color="gray" icon={CheckCircle} className="py-3">
                <span className="sr-only">Info</span>
                <div>
                  Delivered on&nbsp;
                  <span className="font-medium">Friday 04 May 2024</span>
                </div>
              </Alert>
            </div>
            <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="items-start justify-between border-b border-gray-100 pb-4 dark:border-gray-700 md:flex lg:block xl:flex">
                <div className="mb-4 justify-between sm:flex sm:items-center md:mb-0 md:block lg:mb-4 lg:flex xl:mb-0 xl:block">
                  <h3 className="mb-2 text-gray-500 sm:mb-0 md:mb-2">
                    Order ID:&nbsp;
                    <a
                      href="#"
                      className="font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      #FWB1273855
                    </a>
                    <Badge color="red" className="ms-2 inline w-fit">
                      <Close className="me-1 h-3 w-3" />
                      Cancelled
                    </Badge>
                  </h3>
                  <button
                    type="button"
                    className="inline-flex items-center font-medium text-primary-700 hover:underline dark:text-primary-500"
                  >
                    <Download className="me-2 h-5 w-5" />
                    Download invoice
                  </button>
                </div>
                <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
                  >
                    <Refresh className="-ms-0.5 me-1.5 h-4 w-4" />
                    Order again
                  </button>
                  <a
                    href="#"
                    className="inline-flex w-full justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:mt-0 sm:w-auto"
                  >
                    Order details
                  </a>
                </div>
              </div>
              <div className="mb-4 items-center sm:flex sm:flex-wrap xl:flex">
                <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400 sm:me-8">
                  <dt className="me-2 font-medium text-gray-900 dark:text-white">
                    Order date:
                  </dt>
                  <dd>08 March 2024</dd>
                </dl>
                <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400 sm:me-8">
                  <dt className="me-2 font-medium text-gray-900 dark:text-white">
                    Email:
                  </dt>
                  <dd>name@example.com</dd>
                </dl>
                <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400">
                  <dt className="me-2 font-medium text-gray-900 dark:text-white">
                    Payment method:
                  </dt>
                  <dd className="flex items-center">
                    <img
                      className="h-5 w-auto dark:hidden"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg"
                      alt=""
                    />
                    <img
                      className="hidden h-5 w-auto dark:flex"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-dark.svg"
                      alt=""
                    />
                    <span className="sr-only">paypal</span>
                  </dd>
                </dl>
              </div>
              <Alert color="gray" icon={CheckCircle} className="py-3">
                <span className="sr-only">Info</span>
                <div>
                  Cancelled on&nbsp;
                  <span className="font-medium">Monday 08 March 2024</span>
                </div>
              </Alert>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="items-start justify-between border-b border-gray-100 pb-4 dark:border-gray-700 md:flex lg:block xl:flex">
                <div className="mb-4 justify-between sm:flex sm:items-center md:mb-0 md:block lg:mb-4 lg:flex xl:mb-0 xl:block">
                  <h3 className="mb-2 text-gray-500 sm:mb-0 md:mb-2">
                    Order ID:&nbsp;
                    <a
                      href="#"
                      className="font-medium text-gray-900 hover:underline dark:text-white"
                    >
                      #FWB1273444
                    </a>
                    <Badge color="green" className="ms-2 inline w-fit">
                      <Check className="me-1 h-3 w-3" />
                      Completed
                    </Badge>
                  </h3>
                  <button
                    type="button"
                    className="inline-flex items-center font-medium text-primary-700 hover:underline dark:text-primary-500"
                  >
                    <Download className="me-2 h-5 w-5" />
                    Download invoice
                  </button>
                </div>
                <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
                  >
                    <Refresh className="-ms-0.5 me-1.5 h-4 w-4" />
                    Order again
                  </button>
                  <a
                    href="#"
                    className="inline-flex w-full justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:mt-0 sm:w-auto"
                  >
                    Order details
                  </a>
                </div>
              </div>
              <div className="mb-4 items-center sm:flex sm:flex-wrap xl:flex">
                <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400 sm:me-8">
                  <dt className="me-2 font-medium text-gray-900 dark:text-white">
                    Order date:
                  </dt>
                  <dd>09 February 2024</dd>
                </dl>
                <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400 sm:me-8">
                  <dt className="me-2 font-medium text-gray-900 dark:text-white">
                    Email:
                  </dt>
                  <dd>name@example.com</dd>
                </dl>
                <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400">
                  <dt className="me-2 font-medium text-gray-900 dark:text-white">
                    Payment method:
                  </dt>
                  <dd className="flex items-center">
                    <span>Monthly installments</span>
                  </dd>
                </dl>
              </div>
              <Alert color="gray" icon={CheckCircle} className="py-3">
                <span className="sr-only">Info</span>
                <div>
                  Delivered on&nbsp;
                  <span className="font-medium">Thursday 14 Feb 2024</span>
                </div>
              </Alert>
            </div>
            <div className="mt-5 flex items-center justify-center">
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
