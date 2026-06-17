"use client";

import {
  Dropdown,
  DropdownDivider,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  theme,
  Tooltip,
} from "flowbite-react";
import { Cart, ChevronDown, User } from "flowbite-react-icons/outline";
import { CloseCircle } from "flowbite-react-icons/solid";
import { twMerge } from "tailwind-merge";

export default function DefaultEcommerceNavbar() {
  return (
    <Navbar fluid rounded className="flex-col py-3 dark:bg-gray-800">
      <div className="lg:flex lg:items-center lg:gap-8">
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
        <NavbarCollapse className="hidden lg:block">
          <NavbarLink href="#" active>
            Home
          </NavbarLink>
          <NavbarLink href="#">Best Sellers</NavbarLink>
          <NavbarLink href="#">Gift Ideas</NavbarLink>
          <NavbarLink href="#">Today's Deals</NavbarLink>
          <NavbarLink href="#">Sell</NavbarLink>
        </NavbarCollapse>
      </div>
      <div className="flex">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <span className="inline-flex items-center justify-center rounded-lg p-2 text-sm font-medium leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              <Cart className="h-5 w-5 lg:me-1" />
              <span className="hidden sm:flex">My Cart</span>
              <ChevronDown className="ms-1 hidden h-6 w-6 text-gray-900 dark:text-white sm:flex" />
            </span>
          }
          theme={{
            content: twMerge(
              theme.dropdown.content,
              "space-y-4 rounded-b-xl p-4 dark:bg-gray-800",
            ),
            floating: {
              base: twMerge(theme.dropdown.floating.base, "rounded-b-xl"),
            },
          }}
        >
          <div className="grid grid-cols-2">
            <div>
              <a
                href="#"
                className="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white"
              >
                Apple iPhone 15
              </a>
              <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                $599
              </p>
            </div>
            <div className="flex items-center justify-end gap-6">
              <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                Qty: 1
              </p>
              <Tooltip
                content={<span className="whitespace-nowrap">Remove item</span>}
              >
                <button className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                  <span className="sr-only">Remove</span>
                  <CloseCircle className="h-4 w-4" />
                </button>
              </Tooltip>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <a
                href="#"
                className="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white"
              >
                Apple iPad Air
              </a>
              <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                $499
              </p>
            </div>
            <div className="flex items-center justify-end gap-6">
              <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                Qty: 1
              </p>
              <Tooltip
                content={<span className="whitespace-nowrap">Remove item</span>}
              >
                <button className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                  <span className="sr-only">Remove</span>
                  <CloseCircle className="h-4 w-4" />
                </button>
              </Tooltip>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <a
                href="#"
                className="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white"
              >
                Apple Watch SE
              </a>
              <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                $598
              </p>
            </div>
            <div className="flex items-center justify-end gap-6">
              <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                Qty: 2
              </p>
              <Tooltip
                content={<span className="whitespace-nowrap">Remove item</span>}
              >
                <button className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                  <span className="sr-only">Remove</span>
                  <CloseCircle className="h-4 w-4" />
                </button>
              </Tooltip>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <a
                href="#"
                className="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white"
              >
                Sony Playstation 5
              </a>
              <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                $799
              </p>
            </div>
            <div className="flex items-center justify-end gap-6">
              <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                Qty: 1
              </p>
              <Tooltip
                content={<span className="whitespace-nowrap">Remove item</span>}
              >
                <button className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                  <span className="sr-only">Remove</span>
                  <CloseCircle className="h-4 w-4" />
                </button>
              </Tooltip>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <a
                href="#"
                className="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white"
              >
                Apple iMac 20"
              </a>
              <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                $8,997
              </p>
            </div>
            <div className="flex items-center justify-end gap-6">
              <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                Qty: 3
              </p>
              <Tooltip
                content={<span className="whitespace-nowrap">Remove item</span>}
              >
                <button className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                  <span className="sr-only">Remove</span>
                  <CloseCircle className="h-4 w-4" />
                </button>
              </Tooltip>
            </div>
          </div>
          <a
            href="#"
            className="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Proceed to Checkout
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
            content: twMerge(theme.dropdown.content, "w-56 rounded-lg"),
            floating: {
              base: twMerge(theme.dropdown.floating.base, "rounded-lg"),
            },
          }}
        >
          <DropdownItem>My Account</DropdownItem>
          <DropdownItem>My Orders</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Favourites</DropdownItem>
          <DropdownItem>Delivery Addresses</DropdownItem>
          <DropdownItem>Billing Data</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign Out</DropdownItem>
        </Dropdown>
        <NavbarToggle className="dark:text-white lg:hidden [&>svg]:h-4 [&>svg]:w-4" />
      </div>
      <NavbarCollapse className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 py-2 dark:border-gray-600 dark:bg-gray-700 lg:hidden [&>ul]:mt-0">
        <NavbarLink
          href="#"
          active
          className="border-0 bg-transparent px-4 py-1.5 text-sm text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
        >
          Home
        </NavbarLink>
        <NavbarLink
          href="#"
          className="border-0 bg-transparent px-4 py-1.5 text-sm text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
        >
          Best Sellers
        </NavbarLink>
        <NavbarLink
          href="#"
          className="border-0 bg-transparent px-4 py-1.5 text-sm text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
        >
          Gift Ideas
        </NavbarLink>
        <NavbarLink
          href="#"
          className="border-0 bg-transparent px-4 py-1.5 text-sm text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
        >
          Today's Deals
        </NavbarLink>
        <NavbarLink
          href="#"
          className="border-0 bg-transparent px-4 py-1.5 text-sm text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
        >
          Sell
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
