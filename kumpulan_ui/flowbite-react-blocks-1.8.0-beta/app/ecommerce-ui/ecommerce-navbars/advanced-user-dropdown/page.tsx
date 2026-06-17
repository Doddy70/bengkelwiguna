"use client";

import {
  Button,
  Checkbox,
  Dropdown,
  DropdownItem,
  Label,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  TextInput,
  theme,
  Tooltip,
} from "flowbite-react";
import {
  ArrowRight,
  ArrowRightToBracket,
  ArrowsRepeat,
  Bars,
  Book,
  CameraPhoto,
  Cart,
  CartPlus,
  ChevronDown,
  Clipboard,
  ComputerSpeaker,
  DesktopPc,
  Dna,
  FaceGrin,
  GiftBox,
  Globe,
  Headphones,
  Heart,
  Home,
  Lightbulb,
  MailBox,
  MapPin,
  Phone,
  Receipt,
  ScaleBalanced,
  Search,
  ShoppingBag,
  Star,
  Store,
  TrashBin,
  Truck,
  User,
  UserCircle,
  UserHeadset,
  Wallet,
  WandMagicSparkles,
} from "flowbite-react-icons/outline";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function EcommerceNavbarWithAdvancedUserDropdown() {
  const [isOpenSearch, setOpenSearch] = useState(false);

  return (
    <>
      <div className="border-b border-gray-200 bg-gray-100 py-2.5 dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="hidden items-center gap-1 text-gray-500 dark:text-gray-400 lg:inline-flex">
              <Phone className="h-5 w-5 shrink-0" />
              <a href="#" className="text-sm font-medium hover:underline">
                (555) 555-1234
              </a>
            </div>
            <div className="hidden items-center justify-center space-x-2 divide-x divide-gray-300 sm:flex">
              <p className="text-sm text-gray-900 dark:text-white">
                Get 50% off on Member Exclusive Month
              </p>
              <a
                href="#"
                title=""
                className="ps-2 text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
              >
                Shop Now
              </a>
            </div>
            <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-end">
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <span className="inline-flex w-full items-center justify-center gap-2 rounded-lg border p-0 text-sm font-medium leading-none text-gray-900 dark:text-white">
                    <img
                      alt=""
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/us.svg"
                      className="h-auto w-4 shrink-0"
                    />
                    English (USA)
                    <ChevronDown className="-ms-1 h-6 w-6 sm:flex" />
                  </span>
                }
                theme={{
                  content: twMerge(
                    theme.dropdown.content,
                    "my-1 w-52 rounded-lg",
                  ),
                  floating: {
                    base: twMerge(theme.dropdown.floating.base, "rounded-lg"),
                  },
                  inlineWrapper: twMerge(
                    theme.dropdown.inlineWrapper,
                    "hover:underline dark:text-white [&>span]:border-0",
                  ),
                }}
              >
                <TextInput
                  icon={() => <Search className="h-4 w-4" />}
                  id="search"
                  name="search"
                  placeholder="Search"
                  className="mx-2 mb-2 [&_input]:py-2 dark:[&_input]:border-gray-500 dark:[&_input]:bg-gray-600"
                />
                <li className="mx-2 inline-flex w-[calc(100%-1rem)] items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img
                    alt=""
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/ca.svg"
                    className="h-auto w-4 shrink-0"
                  />
                  English (Canada)
                </li>
                <li className="mx-2 inline-flex w-[calc(100%-1rem)] items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img
                    alt=""
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/gb.svg"
                    className="h-auto w-4 shrink-0"
                  />
                  English (U.K.)
                </li>
                <li className="mx-2 inline-flex w-[calc(100%-1rem)] items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img
                    alt=""
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/us.svg"
                    className="h-auto w-4 shrink-0"
                  />
                  English (U.S.)
                </li>
                <li className="mx-2 inline-flex w-[calc(100%-1rem)] items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img
                    alt=""
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/de.svg"
                    className="h-auto w-4 shrink-0"
                  />
                  Deutsch
                </li>
                <li className="mx-2 inline-flex w-[calc(100%-1rem)] items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img
                    alt=""
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/fr.svg"
                    className="h-auto w-4 shrink-0"
                  />
                  Français
                </li>
                <li className="mx-2 inline-flex w-[calc(100%-1rem)] items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img
                    alt=""
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/cn.svg"
                    className="h-auto w-4 shrink-0"
                  />
                  China
                </li>
                <li className="mx-2 inline-flex w-[calc(100%-1rem)] items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img
                    alt=""
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/jp.svg"
                    className="h-auto w-4 shrink-0"
                  />
                  Japan
                </li>
                <li className="mx-2 inline-flex w-[calc(100%-1rem)] items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <img
                    alt=""
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/it.svg"
                    className="h-auto w-4 shrink-0"
                  />
                  Italiano
                </li>
                <li className="ml-2 inline-flex w-[calc(100%-1rem)] items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                  <img
                    alt=""
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/es.svg"
                    className="h-auto w-4 shrink-0"
                  />
                  Español
                </li>
              </Dropdown>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <span className="inline-flex items-center justify-center gap-2 rounded-lg p-0 text-sm font-medium leading-none text-gray-900 dark:text-white">
                    <MapPin className="h-5 w-5" />
                    Location
                    <ChevronDown className="-ms-1 h-6 w-6 sm:flex" />
                  </span>
                }
                theme={{
                  content: twMerge(
                    theme.dropdown.content,
                    "my-1 w-72 rounded-lg",
                  ),
                  floating: {
                    base: twMerge(theme.dropdown.floating.base, "rounded-lg"),
                  },
                  inlineWrapper: twMerge(
                    theme.dropdown.inlineWrapper,
                    "hover:underline dark:text-white",
                  ),
                }}
              >
                <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-3 border-b p-5 dark:border-gray-600">
                  <div className="flex items-center">
                    <Checkbox
                      id="continents-checkbox-1"
                      name="continents-checkbox-1"
                    />

                    <label
                      htmlFor="continents-checkbox"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      All
                    </label>
                  </div>

                  <div className="flex items-center">
                    <Checkbox
                      id="continents-checkbox-2"
                      name="continents-checkbox-2"
                    />

                    <label
                      htmlFor="continents-checkbox-2"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Europe
                    </label>
                  </div>

                  <div className="flex items-center">
                    <Checkbox
                      id="continents-checkbox-3"
                      name="continents-checkbox-3"
                    />

                    <label
                      htmlFor="continents-checkbox-3"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Americas
                    </label>
                  </div>

                  <div className="flex items-center">
                    <Checkbox
                      id="continents-checkbox-4"
                      name="continents-checkbox-4"
                    />

                    <label
                      htmlFor="continents-checkbox-4"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Asia
                    </label>
                  </div>

                  <div className="flex items-center">
                    <Checkbox
                      id="continents-checkbox-5"
                      name="continents-checkbox-5"
                    />

                    <label
                      htmlFor="continents-checkbox-5"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Oceania
                    </label>
                  </div>

                  <div className="flex items-center">
                    <Checkbox
                      id="continents-checkbox-6"
                      name="continents-checkbox-6"
                    />

                    <label
                      htmlFor="continents-checkbox-6"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Africa
                    </label>
                  </div>

                  <div className="flex items-center">
                    <Checkbox
                      id="continents-checkbox-7"
                      name="continents-checkbox-7"
                    />
                    <label
                      htmlFor="continents-checkbox-7"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Antarctica
                    </label>
                  </div>
                </div>
                <form className="mx-2 mb-2">
                  <label
                    htmlFor="country-search"
                    className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                      <svg
                        className="h-4 w-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
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
                      type="search"
                      id="country-search"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 ps-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Search for country"
                      required
                    />
                  </div>
                </form>
                <form>
                  <li className="mx-2 inline-flex w-[calc(100%-1rem)] items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                    <Checkbox
                      id="country-checkbox-9"
                      name="country-checkbox-9"
                    />
                    <Label
                      htmlFor="country-checkbox-9"
                      className="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"
                    >
                      <img
                        alt=""
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/ca.svg"
                        className="h-auto w-4 shrink-0"
                      />
                      Canada
                    </Label>
                  </li>
                  <li className="mx-2 inline-flex w-[calc(100%-1rem)] items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                    <Checkbox
                      id="country-checkbox-8"
                      name="country-checkbox-8"
                    />
                    <Label
                      htmlFor="country-checkbox-8"
                      className="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"
                    >
                      <img
                        alt=""
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/gb.svg"
                        className="h-auto w-4 shrink-0"
                      />
                      United Kingdom
                    </Label>
                  </li>
                  <li className="mx-2 inline-flex w-[calc(100%-1rem)] items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                    <Checkbox
                      defaultChecked
                      id="country-checkbox-7"
                      name="country-checkbox-7"
                    />
                    <Label
                      htmlFor="country-checkbox-7"
                      className="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"
                    >
                      <img
                        alt=""
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/us.svg"
                        className="h-auto w-4 shrink-0"
                      />
                      United States
                    </Label>
                  </li>
                  <li className="mx-2 inline-flex w-[calc(100%-1rem)] items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                    <Checkbox
                      id="country-checkbox-6"
                      name="country-checkbox-6"
                    />
                    <Label
                      htmlFor="country-checkbox-6"
                      className="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"
                    >
                      <img
                        alt=""
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/de.svg"
                        className="h-auto w-4 shrink-0"
                      />
                      Germany
                    </Label>
                  </li>
                  <li className="mx-2 inline-flex w-[calc(100%-1rem)] items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                    <Checkbox
                      id="country-checkbox-5"
                      name="country-checkbox-5"
                    />
                    <Label
                      htmlFor="country-checkbox-5"
                      className="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"
                    >
                      <img
                        alt=""
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/fr.svg"
                        className="h-auto w-4 shrink-0"
                      />
                      France
                    </Label>
                  </li>
                  <li className="mx-2 inline-flex w-[calc(100%-1rem)] items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                    <Checkbox
                      id="country-checkbox-4"
                      name="country-checkbox-4"
                    />
                    <Label
                      htmlFor="country-checkbox-4"
                      className="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"
                    >
                      <img
                        alt=""
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/cn.svg"
                        className="h-auto w-4 shrink-0"
                      />
                      China
                    </Label>
                  </li>
                  <li className="mx-2 inline-flex w-[calc(100%-1rem)] items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                    <Checkbox
                      id="country-checkbox-3"
                      name="country-checkbox-3"
                    />
                    <Label
                      htmlFor="country-checkbox-3"
                      className="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"
                    >
                      <img
                        alt=""
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/jp.svg"
                        className="h-auto w-4 shrink-0"
                      />
                      Japan
                    </Label>
                  </li>
                  <li className="mx-2 inline-flex w-[calc(100%-1rem)] items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                    <Checkbox
                      id="country-checkbox-2"
                      name="country-checkbox-2"
                    />
                    <Label
                      htmlFor="country-checkbox-2"
                      className="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"
                    >
                      <img
                        alt=""
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/it.svg"
                        className="h-auto w-4 shrink-0"
                      />
                      Italy
                    </Label>
                  </li>
                  <li className="ml-2 inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                    <Label
                      htmlFor="country-checkbox-1"
                      className="inline-flex w-full items-center gap-2 text-gray-900 dark:text-gray-300"
                    >
                      <Checkbox
                        id="country-checkbox-1"
                        name="country-checkbox-1"
                      />
                      <img
                        alt=""
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/flags/es.svg"
                        className="h-auto w-4 shrink-0"
                      />
                      Spain
                    </Label>
                  </li>
                </form>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
      <Navbar
        fluid
        className="mx-0 w-full max-w-full flex-col px-4 py-3 dark:bg-gray-800"
      >
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
          <div className="hidden items-center lg:flex">
            <Dropdown
              color="gray"
              label="Electronics"
              theme={{
                content: twMerge(theme.dropdown.content, "rounded-lg py-2"),
                floating: {
                  base: twMerge(theme.dropdown.floating.base, "rounded-lg"),
                  target: twMerge(
                    theme.dropdown.floating.target,
                    "rounded-r-none border-r-0 bg-gray-100 py-0.5 dark:bg-gray-700 dark:text-white [&>span]:items-center",
                  ),
                },
              }}
            >
              <DropdownItem className="mx-2 w-[calc(100%-1rem)] rounded-lg px-3">
                <ComputerSpeaker className="me-2 h-4 w-4 text-gray-600 dark:text-gray-300" />
                Electronics
              </DropdownItem>
              <DropdownItem className="mx-2 w-[calc(100%-1rem)] rounded-lg px-3">
                <Headphones className="me-2 h-4 w-4 text-gray-600 dark:text-gray-300" />
                Sports &amp; Outdoors
              </DropdownItem>
              <DropdownItem className="mx-2 w-[calc(100%-1rem)] rounded-lg px-3">
                <ShoppingBag className="me-2 h-4 w-4 text-gray-600 dark:text-gray-300" />
                Fashion
              </DropdownItem>
              <DropdownItem className="mx-2 w-[calc(100%-1rem)] rounded-lg px-3">
                <Store className="me-2 h-4 w-4 text-gray-600 dark:text-gray-300" />
                Food &amp; Grocery
              </DropdownItem>
              <DropdownItem className="mx-2 w-[calc(100%-1rem)] rounded-lg px-3">
                <Dna className="me-2 h-4 w-4 text-gray-600 dark:text-gray-300" />
                Health &amp; Beauty
              </DropdownItem>
              <DropdownItem className="mx-2 w-[calc(100%-1rem)] rounded-lg px-3">
                <Book className="me-2 h-4 w-4 text-gray-600 dark:text-gray-300" />
                Books &amp; School
              </DropdownItem>
            </Dropdown>
            <TextInput
              id="search"
              name="search"
              placeholder="What can we help you find today?"
              size={68}
              type="search"
              className="[&_input]:rounded-none"
            />
            <Button className="rounded-l-none [&>span]:px-2.5 [&>span]:py-[0.7rem]">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
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
                <div className="relative sm:me-2.5">
                  <Cart className="h-5 w-5 lg:me-1" />
                  <div className="absolute -end-1.5 -top-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-700 text-xs font-medium text-white dark:bg-red-600">
                    2
                  </div>
                </div>
                <span className="hidden sm:flex">My Cart</span>
                <ChevronDown className="ms-1 hidden h-6 w-6 text-gray-900 dark:text-white sm:flex" />
              </span>
            }
            theme={{
              content: twMerge(
                theme.dropdown.content,
                "space-y-4 rounded-lg p-4 dark:bg-gray-700",
              ),
              floating: {
                base: twMerge(theme.dropdown.floating.base, "rounded-lg"),
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
                <User className="h-5 w-5" />
                <span className="mx-1">Account</span>
                <ChevronDown className="h-6 w-6 text-gray-900 dark:text-white" />
              </span>
            }
            theme={{
              content: twMerge(
                theme.dropdown.content,
                "w-[96vw] rounded-lg pb-2 lg:w-[32rem]",
              ),
              floating: {
                base: twMerge(theme.dropdown.floating.base, "rounded-lg"),
              },
            }}
          >
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
                  <svg
                    className="h-5 w-5 text-gray-900 dark:text-white"
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
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m8 15 4 4 4-4m0-6-4-4-4 4"
                    />
                  </svg>
                </div>
              }
              theme={{
                inlineWrapper: twMerge(
                  theme.dropdown.inlineWrapper,
                  "mt-0 w-full rounded-t-lg border-b border-gray-100 p-3 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-600",
                ),
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
            <div className="grid items-stretch py-4 sm:grid-cols-2">
              <ul className="mb-4 border-b border-gray-100 pb-4 text-sm font-medium sm:mb-0 sm:border-0 sm:pb-0">
                <li className="px-4 pb-2">
                  <p className="text-base text-gray-900 dark:text-white">
                    My Wish Lists
                  </p>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                  >
                    Family gifts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                  >
                    Beauty
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                  >
                    Gaming/Relax
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex items-center gap-1 px-4 py-2 text-primary-700 hover:bg-primary-50 dark:text-primary-500 dark:hover:bg-gray-600"
                  >
                    <svg
                      className="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h14m-7 7V5"
                      />
                    </svg>
                    Create a new list
                  </a>
                </li>
              </ul>
              <ul className="border-l border-gray-100 text-sm font-medium dark:border-gray-600">
                <li className="px-4 pb-2">
                  <p className="text-base font-medium text-gray-900 dark:text-white">
                    My Account
                  </p>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="group flex items-center gap-2 px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                  >
                    <UserCircle className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    My Account
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="group flex items-center gap-2 px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                  >
                    <CartPlus className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    My Orders
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="group flex items-center gap-2 px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                  >
                    <Wallet className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    My Wallet
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="group flex items-center gap-2 px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                  >
                    <Heart className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    Favourite Items
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="group flex items-center gap-2 px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                  >
                    <GiftBox className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    Vouchers and gift cards
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="group flex items-center gap-2 px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                  >
                    <UserHeadset className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="group flex items-center gap-2 px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                  >
                    <ArrowsRepeat className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    My Returns
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="group flex items-center gap-2 px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                  >
                    <Star className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    My Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="group flex items-center gap-2 px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                  >
                    <ScaleBalanced className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    My Guarantees
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="group flex items-center gap-2 px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                  >
                    <Receipt className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    Billing Data
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="group flex items-center gap-2 px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                  >
                    <MailBox className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    Plans & Subscriptions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="group flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 dark:text-red-500 dark:hover:bg-gray-600"
                  >
                    <ArrowRightToBracket className="h-4 w-4" />
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          </Dropdown>
        </div>
        <div className="mt-4 flex w-full flex-wrap items-center justify-between gap-2 border-t border-gray-200 pt-3 dark:border-gray-700 sm:flex-nowrap sm:gap-4">
          {isOpenSearch && (
            <form
              action="#"
              className="w-full pt-1 md:order-2 md:w-auto md:flex-1"
            >
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
          <div className="flex w-full items-center justify-between dark:text-white">
            <ul className="flex items-center gap-4 lg:gap-8">
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <span className="inline-flex items-center justify-center rounded-lg p-0 text-sm font-medium leading-none text-gray-900 hover:text-blue-600 dark:text-white">
                    <Clipboard className="h-5 w-5 lg:me-1" />
                    <span>All categories</span>
                    <ChevronDown className="h-6 w-6" />
                  </span>
                }
                theme={{
                  content: twMerge(
                    theme.dropdown.content,
                    "space-y-4 rounded-lg p-0 dark:bg-gray-700",
                  ),
                  floating: {
                    base: twMerge(
                      theme.dropdown.floating.base,
                      "mt-2 w-full rounded-lg p-0 xl:w-[1280px]",
                    ),
                  },
                }}
              >
                <div className="lg:flex lg:items-stretch">
                  <div className="shrink-0 space-y-2 border-gray-200 p-4 dark:border-gray-600 sm:p-6 lg:w-72 lg:border-r">
                    <a
                      href="#"
                      title=""
                      className="flex items-center justify-between gap-4 rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold leading-none text-gray-900 dark:bg-gray-600 dark:text-white"
                    >
                      <DesktopPc className="h-4 w-4 text-gray-900 dark:text-white" />
                      Computer & Office
                      <ArrowRight className="ml-auto h-4 w-4 text-gray-900 dark:text-white" />
                    </a>

                    <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700 lg:hidden">
                      <div className="grid-cols grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                        <div className="space-y-6">
                          <ul className="space-y-2">
                            <li className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                              Laptops
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                Gaming
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                2 in 1
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                Business
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                Home Office
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                Ultrabook
                              </a>
                            </li>
                          </ul>

                          <ul className="space-y-2">
                            <li className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                              Monitors
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                Build-In Speakers
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                Audio & HiFi
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                Audio & HiFi
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                Headphones
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                Home Cinema
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                Sat Nav & Car Electronics
                              </a>
                            </li>
                          </ul>
                          <ul className="space-y-2">
                            <li className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                              Desktop PC
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                Gaming PC
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                Home Office
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                Servers
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                Mini PC
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                All in One PC
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-6">
                          <ul className="space-y-2">
                            <li className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                              Tablets
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                Best Sellers
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                Phone Call Functionality
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                Supports USB OTG
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                IOS
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                Android
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                Flowbite Global Store
                              </a>
                            </li>
                          </ul>

                          <ul className="space-y-2">
                            <li className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                              Memory & Storage
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                Primary Storage Devices
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                Magnetic Storage Devices
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                Flash Memory Devices
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                Optical Storage Devices
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title=""
                                className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              >
                                Cloud and Virtual Storage
                              </a>
                            </li>
                          </ul>

                          <ul className="space-y-2">
                            <p className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                              Printers & Ink
                            </p>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Best Sellers
                            </a>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Laser Printers
                            </a>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Inkjet Printers
                            </a>
                          </ul>
                        </div>

                        <div className="space-y-6">
                          <div className="space-y-2">
                            <p className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                              Computer Components
                            </p>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Graphics Cards
                            </a>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Memory
                            </a>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Motherboards
                            </a>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Computer Cases
                            </a>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Power Supplies
                            </a>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              CPUS
                            </a>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Network Cards
                            </a>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              External Optical Drives
                            </a>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              External Sound Cards
                            </a>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Fans & Cooling
                            </a>
                          </div>

                          <div className="space-y-2">
                            <p className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                              Software
                            </p>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Operating Systems
                            </a>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Antivirus & Security
                            </a>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Home & Hobbies
                            </a>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Language & Travel
                            </a>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Programming & Web Development
                            </a>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Music
                            </a>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Photography & Graphic Design
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a
                      href="#"
                      title=""
                      className="group flex items-center justify-between gap-4 rounded-lg px-4 py-2 text-sm font-semibold leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      <ShoppingBag className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                      Fashion/Clothes
                      <div className="ml-auto -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                        <ArrowRight className="ml-auto h-4 w-4 text-gray-900 dark:text-white" />
                      </div>
                    </a>

                    <a
                      href="#"
                      title=""
                      className="group flex items-center justify-between gap-4 rounded-lg px-4 py-2 text-sm font-semibold leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      <Lightbulb className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                      Electronics
                      <div className="ml-auto -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                        <ArrowRight className="ml-auto h-4 w-4 text-gray-900 dark:text-white" />
                      </div>
                    </a>

                    <a
                      href="#"
                      title=""
                      className="group flex items-center justify-between gap-4 rounded-lg px-4 py-2 text-sm font-semibold leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      <FaceGrin className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                      Gaming/Consoles
                      <div className="ml-auto -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                        <ArrowRight className="ml-auto h-4 w-4 text-gray-900 dark:text-white" />
                      </div>
                    </a>

                    <a
                      href="#"
                      title=""
                      className="group flex items-center justify-between gap-4 rounded-lg px-4 py-2 text-sm font-semibold leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      <ComputerSpeaker className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                      TV/Projectors
                      <div className="ml-auto -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                        <ArrowRight className="ml-auto h-4 w-4 text-gray-900 dark:text-white" />
                      </div>
                    </a>

                    <a
                      href="#"
                      title=""
                      className="group flex items-center justify-between gap-4 rounded-lg px-4 py-2 text-sm font-semibold leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      <WandMagicSparkles className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                      Collectibles & Toys
                      <div className="ml-auto -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                        <ArrowRight className="ml-auto h-4 w-4 text-gray-900 dark:text-white" />
                      </div>
                    </a>

                    <a
                      href="#"
                      title=""
                      className="group flex items-center justify-between gap-4 rounded-lg px-4 py-2 text-sm font-semibold leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      <Globe className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                      Sports & Outdoors
                      <div className="ml-auto -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                        <ArrowRight className="ml-auto h-4 w-4 text-gray-900 dark:text-white" />
                      </div>
                    </a>

                    <a
                      href="#"
                      title=""
                      className="group flex items-center justify-between gap-4 rounded-lg px-4 py-2 text-sm font-semibold leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      <Store className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                      Food & Grocery
                      <div className="ml-auto -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                        <ArrowRight className="ml-auto h-4 w-4 text-gray-900 dark:text-white" />
                      </div>
                    </a>

                    <a
                      href="#"
                      title=""
                      className="group flex items-center justify-between gap-4 rounded-lg px-4 py-2 text-sm font-semibold leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      <Dna className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                      Health & Beauty
                      <div className="ml-auto -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                        <ArrowRight className="ml-auto h-4 w-4 text-gray-900 dark:text-white" />
                      </div>
                    </a>

                    <a
                      href="#"
                      title=""
                      className="group flex items-center justify-between gap-4 rounded-lg px-4 py-2 text-sm font-semibold leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      <Truck className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                      Car & Motorbike
                      <div className="ml-auto -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                        <ArrowRight className="ml-auto h-4 w-4 text-gray-900 dark:text-white" />
                      </div>
                    </a>

                    <a
                      href="#"
                      title=""
                      className="group flex items-center justify-between gap-4 rounded-lg px-4 py-2 text-sm font-semibold leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      <Book className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                      Books
                      <div className="ml-auto -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                        <ArrowRight className="ml-auto h-4 w-4 text-gray-900 dark:text-white" />
                      </div>
                    </a>

                    <a
                      href="#"
                      title=""
                      className="group flex items-center justify-between gap-4 rounded-lg px-4 py-2 text-sm font-semibold leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      <Home className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                      Home Air Quality
                      <div className="ml-auto -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                        <ArrowRight className="ml-auto h-4 w-4 text-gray-900 dark:text-white" />
                      </div>
                    </a>

                    <a
                      href="#"
                      title=""
                      className="group flex items-center justify-between gap-4 rounded-lg px-4 py-2 text-sm font-semibold leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    >
                      <CameraPhoto className="h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                      Photo/Video
                      <div className="ml-auto -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                        <ArrowRight className="ml-auto h-4 w-4 text-gray-900 dark:text-white" />
                      </div>
                    </a>
                  </div>

                  <div className="hidden min-w-0 flex-1 bg-gray-50 dark:bg-gray-700 sm:p-6 lg:block">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div className="space-y-6">
                        <ul className="space-y-2">
                          <li className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                            Laptops
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Gaming
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              2 in 1
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Business
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Home Office
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Ultrabook
                            </a>
                          </li>
                        </ul>

                        <ul className="space-y-2">
                          <p className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                            Monitors
                          </p>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Build-In Speakers
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Audio & HiFi
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Audio & HiFi
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Headphones
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Home Cinema
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Sat Nav & Car Electronics
                            </a>
                          </li>
                        </ul>

                        <ul className="space-y-2">
                          <li className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                            Desktop PC
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Gaming PC
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Home Office
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Servers
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Mini PC
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              All in One PC
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-6">
                        <ul className="space-y-2">
                          <li className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                            Tablets
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Best Sellers
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Phone Call Functionality
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Supports USB OTG
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              IOS
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Android
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Flowbite Global Store
                            </a>
                          </li>
                        </ul>

                        <ul className="space-y-2">
                          <li className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                            Memory & Storage
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Primary Storage Devices
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Magnetic Storage Devices
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Flash Memory Devices
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Optical Storage Devices
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Cloud and Virtual Storage
                            </a>
                          </li>
                        </ul>

                        <ul className="space-y-2">
                          <li className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                            Printers & Ink
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Best Sellers
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Laser Printers
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Inkjet Printers
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-6">
                        <ul className="space-y-2">
                          <li className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                            Computer Components
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Graphics Cards
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Memory
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Motherboards
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Computer Cases
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Power Supplies
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              CPUS
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Network Cards
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              External Optical Drives
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              External Sound Cards
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Fans & Cooling
                            </a>
                          </li>
                        </ul>

                        <ul className="space-y-2">
                          <li className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                            Software
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Operating Systems
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Antivirus & Security
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Home & Hobbies
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Language & Travel
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Programming & Web
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Music
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title=""
                              className="block text-sm font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                              Photography & Graphic Design
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Dropdown>
              <li className="lg:hidden">
                <a
                  href="#"
                  title=""
                  className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                >
                  <GiftBox className="h-4 w-4" />
                  Deals
                </a>
              </li>
              <li className="hidden lg:flex">
                <a
                  href="#"
                  title=""
                  className="block text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                >
                  Best Sellers
                </a>
              </li>
              <li className="hidden lg:flex">
                <a
                  href="#"
                  title=""
                  className="block text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                >
                  Gift Cards
                </a>
              </li>
              <li className="hidden lg:flex">
                <a
                  href="#"
                  title=""
                  className="block text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                >
                  Gift Ideas
                </a>
              </li>
              <li className="hidden lg:flex">
                <a
                  href="#"
                  title=""
                  className="block text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                >
                  Deal of the day
                </a>
              </li>
              <li className="hidden lg:flex">
                <a
                  href="#"
                  title=""
                  className="block text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                >
                  Top Deals
                </a>
              </li>
              <li className="hidden xl:flex">
                <a
                  href="#"
                  title=""
                  className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                >
                  Membership Deals
                </a>
              </li>
              <li className="hidden xl:flex">
                <a
                  href="#"
                  title=""
                  className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                >
                  New Releases
                </a>
              </li>
            </ul>
            <NavbarToggle
              barIcon={() => (
                <span className="flex items-center gap-2 text-gray-900 dark:text-white">
                  <Bars className="h-5 w-5" />
                  Menu
                </span>
              )}
              className="md:hidden"
            />
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
              Games
            </NavbarLink>
            <NavbarLink
              href="#"
              className="border-0 bg-transparent px-4 py-1.5 text-sm text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
            >
              Electronics
            </NavbarLink>
            <NavbarLink
              href="#"
              className="border-0 bg-transparent px-4 py-1.5 text-sm text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
            >
              Home &amp; Garden
            </NavbarLink>
          </NavbarCollapse>
        </div>
      </Navbar>
    </>
  );
}
