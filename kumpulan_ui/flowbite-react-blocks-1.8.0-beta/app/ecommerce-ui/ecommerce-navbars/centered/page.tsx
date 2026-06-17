"use client";

import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  TextInput,
  theme,
  Tooltip,
} from "flowbite-react";
import {
  ArrowRightToBracket,
  ArrowsRepeat,
  Cart,
  CartPlus,
  ChevronDown,
  DotsHorizontal,
  GiftBox,
  Heart,
  List,
  MailBox,
  Receipt,
  ScaleBalanced,
  Search,
  Star,
  TrashBin,
  User,
  UserCircle,
  UserHeadset,
  Wallet,
} from "flowbite-react-icons/outline";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function CenteredEcommerceNavbar() {
  const [isOpenSearch, setOpenSearch] = useState(false);

  return (
    <Navbar
      fluid
      rounded
      theme={{
        collapse: {
          list: twMerge(theme.navbar.collapse.list, "mt-0 flex-row"),
        },
      }}
      className="flex-col p-4 pb-2 dark:bg-gray-800"
    >
      <div className="mb-1 flex w-full items-center justify-between border-b pb-3 dark:border-gray-700">
        <form action="#" className="hidden md:block">
          <div className="group relative z-0 w-full">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="peer block w-full appearance-none border-0 bg-transparent px-0 py-2.5  ps-6 text-sm text-gray-900  focus:outline-none focus:ring-0 dark:text-white"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="absolute top-2.5 -z-10 origin-[0] -translate-y-6 scale-75 ps-6 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-primary-600 dark:text-gray-400 peer-focus:dark:text-primary-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
            >
              Search
            </label>
          </div>
        </form>
        <NavbarBrand href="#">
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg"
            className="block h-8 w-auto dark:hidden"
          />
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg"
            className="hidden h-8 w-auto dark:block"
          />
        </NavbarBrand>
        <div className="flex">
          <button
            onClick={() => setOpenSearch(!isOpenSearch)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-sm font-medium leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 lg:hidden"
          >
            <span className="sr-only">Search</span>
            <Search className="h-5 w-5" />
          </button>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <span className="inline-flex items-center justify-center rounded-lg p-2 text-sm font-medium leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                <span className="sr-only">Cart</span>
                <div className="relative sm:me-2.5">
                  <Cart className="h-5 w-5 lg:me-1" />
                  <div className="absolute -end-1.5 -top-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-700 text-xs font-medium text-white dark:bg-red-600">
                    2
                  </div>
                </div>
                <span className="hidden sm:flex">$109.12</span>
                <ChevronDown className="ms-1 hidden h-6 w-6 text-gray-900 dark:text-white sm:flex" />
              </span>
            }
            theme={{
              content: twMerge(
                theme.dropdown.content,
                "space-y-4 rounded-lg p-4 dark:bg-gray-700",
              ),
              floating: {
                base: twMerge(theme.dropdown.floating.base, "w-96 rounded-lg"),
              },
            }}
          >
            <dl className="flex items-center justify-between gap-4 border-b border-gray-200 pb-4 dark:border-gray-600">
              <dt className="font-semibold leading-none text-gray-900 dark:text-white">
                Your shopping cart
              </dt>
              <dd className="leading-none text-gray-500 dark:text-gray-400">
                4 items
              </dd>
            </dl>

            <div className="grid grid-cols-4 items-center justify-between gap-3">
              <div className="col-span-2 flex items-center gap-2">
                <a
                  href="#"
                  className="flex aspect-square h-9 w-9 shrink-0 items-center"
                >
                  <img
                    className="h-auto max-h-full w-full dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg"
                    alt="imac image"
                  />
                  <img
                    className="hidden h-auto max-h-full w-full dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg"
                    alt="imac image"
                  />
                </a>
                <div className="flex-1">
                  <a
                    href="#"
                    className="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white"
                  >
                    Apple iPhone 15
                  </a>
                  <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                    Gold Edition, 256GB
                  </p>
                </div>
              </div>

              <div className="flex justify-center text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                x1
              </div>

              <div className="flex items-center justify-end gap-2">
                <p className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                  $599
                </p>

                <Tooltip content="Remove">
                  <span className="sr-only">Remove</span>
                  <TrashBin className="h-4 w-4 cursor-pointer text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600" />
                </Tooltip>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center justify-between gap-3">
              <div className="col-span-2 flex items-center gap-2">
                <a
                  href="#"
                  className="flex aspect-square h-9 w-9 shrink-0 items-center"
                >
                  <img
                    className="h-auto max-h-full w-full dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg"
                    alt="imac image"
                  />
                  <img
                    className="hidden h-auto max-h-full w-full dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg"
                    alt="imac image"
                  />
                </a>
                <div className="flex-1">
                  <a
                    href="#"
                    className="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white"
                  >
                    Apple iPad Air
                  </a>
                  <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                    Silver, 64GB
                  </p>
                </div>
              </div>

              <div className="flex justify-center text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                x9
              </div>

              <div className="flex items-center justify-end gap-2">
                <p className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                  $38,599
                </p>

                <Tooltip content="Remove">
                  <span className="sr-only">Remove</span>
                  <TrashBin className="h-4 w-4 cursor-pointer text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600" />
                </Tooltip>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center justify-between gap-3">
              <div className="col-span-2 flex items-center gap-2">
                <a
                  href="#"
                  className="flex aspect-square h-9 w-9 shrink-0 items-center"
                >
                  <img
                    className="h-auto max-h-full w-full dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg"
                    alt="imac image"
                  />
                  <img
                    className="hidden h-auto max-h-full w-full dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg"
                    alt="imac image"
                  />
                </a>
                <div className="flex-1">
                  <a
                    href="#"
                    className="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white"
                  >
                    Apple Watch SE
                  </a>
                  <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                    Purple, GPS
                  </p>
                </div>
              </div>

              <div className="flex justify-center text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                x1
              </div>

              <div className="flex items-center justify-end gap-2">
                <p className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                  $199
                </p>
                <Tooltip content="Remove">
                  <span className="sr-only">Remove</span>
                  <TrashBin className="h-4 w-4 cursor-pointer text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600" />
                </Tooltip>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center justify-between gap-3">
              <div className="col-span-2 flex items-center gap-2">
                <a
                  href="#"
                  className="flex aspect-square h-9 w-9 shrink-0 items-center"
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
                <div className="flex-1">
                  <a
                    href="#"
                    className="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white"
                  >
                    Apple iMac 20”
                  </a>
                  <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                    512GB, 32GB RAM
                  </p>
                </div>
              </div>

              <div className="flex justify-center text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                x1
              </div>

              <div className="flex items-center justify-end gap-2">
                <p className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                  $2,999
                </p>

                <Tooltip content="Remove">
                  <span className="sr-only">Remove</span>
                  <TrashBin className="h-4 w-4 cursor-pointer text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600" />
                </Tooltip>
              </div>
            </div>

            <dl className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
              <dt className="font-semibold leading-none text-gray-900 dark:text-white">
                Total
              </dt>

              <dd className="font-semibold leading-none text-gray-900 dark:text-white">
                $43,796
              </dd>
            </dl>

            <a
              href="#"
              title=""
              className="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              See your cart
            </a>
          </Dropdown>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <span className="inline-flex items-center justify-center rounded-lg p-2 text-sm font-medium leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                <User className="h-5 w-5 lg:me-1" />
                <span>Account</span>
                <ChevronDown className="ms-1 h-6 w-6 text-gray-900 dark:text-white" />
              </span>
            }
            theme={{
              content: twMerge(theme.dropdown.content, "w-60 rounded-lg"),
              floating: {
                base: twMerge(theme.dropdown.floating.base, "rounded-lg"),
              },
            }}
          >
            <DropdownItem>
              <Avatar
                alt=""
                img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                rounded
                size="sm"
              >
                <div className="text-left">
                  <strong>Jese Leos</strong>
                </div>
                <div className="text-left text-gray-600 dark:text-gray-200">
                  name@example.com
                </div>
              </Avatar>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem className="group">
              <UserCircle className="me-2 h-4 w-4 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="text-gray-900 dark:text-white">My Account</span>
            </DropdownItem>
            <DropdownItem className="group">
              <CartPlus className="me-2 h-4 w-4 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="text-gray-900 dark:text-white">My Orders</span>
            </DropdownItem>
            <DropdownItem className="group">
              <List className="me-2 h-4 w-4 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="text-gray-900 dark:text-white">My Lists</span>
            </DropdownItem>
            <DropdownItem className="group">
              <Wallet className="me-2 h-4 w-4 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="text-gray-900 dark:text-white">My Wallet</span>
            </DropdownItem>
            <DropdownItem className="group">
              <Heart className="me-2 h-4 w-4 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="text-gray-900 dark:text-white">
                Favourites Items
              </span>
            </DropdownItem>
            <DropdownItem className="group">
              <GiftBox className="me-2 h-4 w-4 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="text-gray-900 dark:text-white">
                Vouchers and gift cards
              </span>
            </DropdownItem>
            <DropdownItem className="group">
              <UserHeadset className="me-2 h-4 w-4 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="text-gray-900 dark:text-white">Service</span>
            </DropdownItem>
            <DropdownItem className="group">
              <ArrowsRepeat className="me-2 h-4 w-4 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="text-gray-900 dark:text-white">My Returns</span>
            </DropdownItem>
            <DropdownItem className="group">
              <Star className="me-2 h-4 w-4 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="text-gray-900 dark:text-white">My Reviews</span>
            </DropdownItem>
            <DropdownItem className="group">
              <ScaleBalanced className="me-2 h-4 w-4 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="text-gray-900 dark:text-white">
                My Guarantees
              </span>
            </DropdownItem>
            <DropdownItem className="group">
              <Receipt className="me-2 h-4 w-4 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="text-gray-900 dark:text-white">
                Billing Data
              </span>
            </DropdownItem>
            <DropdownItem className="group">
              <MailBox className="me-2 h-4 w-4 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="text-gray-900 dark:text-white">
                Subscriptions
              </span>
            </DropdownItem>
            <DropdownItem className="text-red-600 hover:bg-red-50">
              <ArrowRightToBracket className="me-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownItem>
          </Dropdown>
        </div>
      </div>
      {isOpenSearch && (
        <form action="#" className="w-full pt-3 md:order-2 md:w-auto md:flex-1">
          <label htmlFor="default-search" className="sr-only">
            Search
          </label>
          <TextInput
            id="default-search"
            name="default-search"
            placeholder="Search in all categories"
            required
            rightIcon={() => <Button type="submit">Search</Button>}
            type="search"
            className="[&_input]:py-3"
          />
        </form>
      )}
      <NavbarCollapse className="mx-auto flex gap-3 pt-2 lg:pb-2 lg:pt-3">
        <NavbarLink
          active
          href="#"
          className="border-0 bg-transparent px-4 py-1.5 pl-0 text-sm text-gray-900 dark:bg-transparent dark:text-white dark:hover:text-primary-500"
        >
          Home
        </NavbarLink>
        <NavbarLink
          href="#"
          className="border-0 bg-transparent px-4 py-1.5 pl-0 text-sm text-gray-900 dark:bg-transparent dark:text-white dark:hover:text-primary-500"
        >
          Best Sellers
        </NavbarLink>
        <NavbarLink
          href="#"
          className="border-0 bg-transparent px-4 py-1.5 pl-0 text-sm text-gray-900 dark:bg-transparent dark:text-white dark:hover:text-primary-500"
        >
          Gift Ideas
        </NavbarLink>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <span className="inline-flex items-center justify-center rounded-lg p-0 text-sm font-medium leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              <DotsHorizontal className="h-6 w-6 lg:me-1" />
              <span className="sr-only">More Options</span>
            </span>
          }
          theme={{
            content: twMerge(theme.dropdown.content, "rounded-lg"),
            floating: {
              base: twMerge(theme.dropdown.floating.base, "w-48 rounded-lg"),
            },
            inlineWrapper: twMerge(
              theme.dropdown.inlineWrapper,
              "p-0 lg:hidden",
            ),
          }}
        >
          <DropdownItem href="#">Games</DropdownItem>
          <DropdownItem href="#">PC</DropdownItem>
          <DropdownItem href="#">Music</DropdownItem>
          <DropdownItem href="#">Books</DropdownItem>
          <DropdownItem href="#">Electronics</DropdownItem>
          <DropdownItem href="#">Home &amp; Garden</DropdownItem>
          <DropdownDivider />
          <DropdownItem href="#">View all categories</DropdownItem>
        </Dropdown>
        <NavbarLink
          href="#"
          className="hidden border-0 bg-transparent px-4 py-1.5 pl-0 text-sm text-gray-900 dark:bg-transparent dark:text-white dark:hover:text-primary-500 lg:block"
        >
          Games
        </NavbarLink>
        <NavbarLink
          href="#"
          className="hidden border-0 bg-transparent px-4 py-1.5 pl-0 text-sm text-gray-900 dark:bg-transparent dark:text-white dark:hover:text-primary-500 lg:block"
        >
          PC
        </NavbarLink>
        <NavbarLink
          href="#"
          className="hidden border-0 bg-transparent px-4 py-1.5 pl-0 text-sm text-gray-900 dark:bg-transparent dark:text-white dark:hover:text-primary-500 lg:block"
        >
          Music
        </NavbarLink>
        <NavbarLink
          href="#"
          className="hidden border-0 bg-transparent px-4 py-1.5 pl-0 text-sm text-gray-900 dark:bg-transparent dark:text-white dark:hover:text-primary-500 lg:block"
        >
          Books
        </NavbarLink>
        <NavbarLink
          href="#"
          className="hidden border-0 bg-transparent px-4 py-1.5 pl-0 text-sm text-gray-900 dark:bg-transparent dark:text-white dark:hover:text-primary-500 lg:block"
        >
          Electronics
        </NavbarLink>
        <NavbarLink
          href="#"
          className="hidden border-0 bg-transparent px-4 py-1.5 pl-0 text-sm text-gray-900 dark:bg-transparent dark:text-white dark:hover:text-primary-500 lg:block"
        >
          Home &amp; Garden
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
