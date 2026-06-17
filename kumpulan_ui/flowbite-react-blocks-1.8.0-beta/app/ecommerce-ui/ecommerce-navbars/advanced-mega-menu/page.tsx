"use client";

import {
  Button,
  Checkbox,
  Dropdown,
  DropdownDivider,
  DropdownItem,
  Label,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Rating,
  TextInput,
  theme,
  ToggleSwitch,
  Tooltip,
} from "flowbite-react";
import {
  ArrowRight,
  ArrowRightToBracket,
  ArrowsRepeat,
  Bars,
  Bell,
  BookOpen,
  Cart,
  ChevronDown,
  Cog,
  ComputerSpeaker,
  Dollar,
  GiftBox,
  Heart,
  Lock,
  MailBox,
  MapPin,
  Minus,
  Moon,
  Plus,
  QuestionCircle,
  Search,
  ShoppingBag,
  Store,
  Sun,
  TrashBin,
  Truck,
  User,
  UserCircle,
  Wallet,
} from "flowbite-react-icons/outline";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function AdvancedEcommerceNavbarWithMegaMenu() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [item1, setItem1] = useState(2);
  const [item2, setItem2] = useState(3);
  const [item3, setItem3] = useState(1);
  const [item4, setItem4] = useState(1);
  const [item5, setItem5] = useState(2);

  return (
    <>
      <div className="bg-primary-50 py-3 dark:bg-primary-900">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <a
            href="#"
            title=""
            className="flex items-center justify-center gap-2 text-sm text-primary-700 hover:underline dark:text-primary-300"
          >
            🎮 Don't miss out on our Haloween Game Sale! Level up your
            collection!
            <ArrowRight className="h-4 w-4 shrink-0" />
          </a>
        </div>
      </div>
      <div className="border-b border-gray-200 bg-white py-2.5 dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="hidden items-center gap-4 sm:flex">
              <div className="hidden items-center gap-1 lg:inline-flex">
                <Truck className="dark:text-garay-400 h-5 w-5 text-gray-500" />
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Fast & Free Delivery
                </p>
              </div>
              <div className="hidden items-center gap-1 lg:inline-flex">
                <Dollar className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Fair Prices
                </p>
              </div>
              <Rating>
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  5.0
                </p>
              </Rating>
            </div>
            <div className="flex w-full items-center gap-4 sm:w-auto sm:justify-end">
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
              <button className="inline-flex items-center justify-center gap-2 rounded-lg p-0 text-sm font-medium leading-none text-gray-900 hover:underline dark:text-white">
                <QuestionCircle className="h-5 w-5" />
                Support
              </button>
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
          <form className="hidden lg:block">
            <label htmlFor="default-search" className="sr-only">
              Search
            </label>
            <TextInput
              icon={() => (
                <Search className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              )}
              id="default-search"
              name="default-search"
              placeholder="Search in all categories"
              required
              rightIcon={() => <Button type="submit">Search</Button>}
              size={72}
              type="search"
              className="[&_input]:py-4"
            />
          </form>
        </div>
        <div className="flex">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <span className="inline-flex items-center justify-center rounded-lg p-2 text-sm font-medium leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                <Cart className="h-5 w-5 lg:me-1" />
                <span className="hidden sm:flex">4 items ($106.70)</span>
                <ChevronDown className="ms-1 h-6 w-6 text-gray-900 dark:text-white" />
              </span>
            }
            theme={{
              content: twMerge(
                theme.dropdown.content,
                "space-y-4 rounded-lg p-4 dark:bg-gray-700",
              ),
              floating: {
                base: twMerge(
                  theme.dropdown.floating.base,
                  "divide-y rounded-lg dark:divide-gray-700",
                ),
              },
            }}
          >
            <div className="border-b border-gray-200 pb-4 dark:border-gray-600">
              <p className="text-center text-base font-semibold leading-none text-gray-900 dark:text-white">
                Your shopping cart
              </p>
            </div>
            <div className="grid grid-cols-2 items-center border-b border-gray-200 pb-4 dark:border-gray-600">
              <div className="flex items-center gap-2">
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
                <div>
                  <a
                    href="#"
                    className="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white"
                  >
                    Apple iPhone 15
                  </a>
                  <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                    $1,299
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3">
                <div>
                  <label htmlFor="counter-input-6" className="sr-only">
                    Choose quantity:
                  </label>
                  <div className="relative flex items-center">
                    <button
                      onClick={() => setItem1(item1 - 1)}
                      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    >
                      <Minus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                    </button>
                    <input
                      type="text"
                      id="counter-input-6"
                      data-input-counter
                      className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                      placeholder=""
                      value={item1}
                      required
                    />
                    <button
                      onClick={() => setItem1(item1 + 1)}
                      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    >
                      <Plus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                    </button>
                  </div>
                </div>
                <div>
                  <Tooltip content="Remove">
                    <TrashBin className="mb-1 h-4 w-4 cursor-pointer text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600" />
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center border-b border-gray-200 pb-4 dark:border-gray-600">
              <div className="flex items-center gap-2">
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
                <div>
                  <a
                    href="#"
                    className="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white"
                  >
                    Apple iPad PRO
                  </a>
                  <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                    $1,899
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3">
                <div>
                  <label htmlFor="counter-input-6" className="sr-only">
                    Choose quantity:
                  </label>
                  <div className="relative flex items-center">
                    <button
                      onClick={() => setItem2(item2 - 1)}
                      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    >
                      <Minus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                    </button>
                    <input
                      type="text"
                      id="counter-input-6"
                      data-input-counter
                      className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                      placeholder=""
                      value={item2}
                      required
                    />
                    <button
                      onClick={() => setItem2(item2 + 1)}
                      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    >
                      <Plus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                    </button>
                  </div>
                </div>
                <div>
                  <Tooltip content="Remove">
                    <TrashBin className="mb-1 h-4 w-4 cursor-pointer text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600" />
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center border-b border-gray-200 pb-4 dark:border-gray-600">
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="flex aspect-square h-9 w-9 shrink-0 items-center"
                >
                  <img
                    className="h-auto max-h-full w-full dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg"
                    alt="imac image"
                  />
                  <img
                    className="hidden h-auto max-h-full w-full dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg"
                    alt="imac image"
                  />
                </a>
                <div>
                  <a
                    href="#"
                    className="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white"
                  >
                    Apple iPad PRO
                  </a>
                  <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                    $899
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3">
                <div>
                  <label htmlFor="counter-input-6" className="sr-only">
                    Choose quantity:
                  </label>
                  <div className="relative flex items-center">
                    <button
                      onClick={() => setItem3(item3 - 1)}
                      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    >
                      <Minus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                    </button>
                    <input
                      type="text"
                      id="counter-input-6"
                      data-input-counter
                      className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                      placeholder=""
                      value={item3}
                      required
                    />
                    <button
                      onClick={() => setItem3(item3 + 1)}
                      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    >
                      <Plus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                    </button>
                  </div>
                </div>
                <div>
                  <Tooltip content="Remove">
                    <TrashBin className="mb-1 h-4 w-4 cursor-pointer text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600" />
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center border-b border-gray-200 pb-4 dark:border-gray-600">
              <div className="flex items-center gap-2">
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
                <div>
                  <a
                    href="#"
                    className="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white"
                  >
                    Apple iPhone 15
                  </a>
                  <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                    $999
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3">
                <div>
                  <label htmlFor="counter-input-6" className="sr-only">
                    Choose quantity:
                  </label>
                  <div className="relative flex items-center">
                    <button
                      onClick={() => setItem4(item4 - 1)}
                      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    >
                      <Minus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                    </button>
                    <input
                      type="text"
                      id="counter-input-6"
                      data-input-counter
                      className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                      placeholder=""
                      value={item4}
                      required
                    />
                    <button
                      onClick={() => setItem4(item4 + 1)}
                      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    >
                      <Plus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                    </button>
                  </div>
                </div>
                <div>
                  <Tooltip content="Remove">
                    <TrashBin className="mb-1 h-4 w-4 cursor-pointer text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600" />
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center border-b border-gray-200 pb-4 dark:border-gray-600">
              <div className="flex items-center gap-2">
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
                <div>
                  <a
                    href="#"
                    className="truncate text-sm font-semibold leading-none text-gray-900 hover:underline dark:text-white"
                  >
                    Apple Watch
                  </a>
                  <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                    $1,099
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3">
                <div>
                  <label htmlFor="counter-input-6" className="sr-only">
                    Choose quantity:
                  </label>
                  <div className="relative flex items-center">
                    <button
                      onClick={() => setItem5(item5 - 1)}
                      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    >
                      <Minus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                    </button>
                    <input
                      type="text"
                      id="counter-input-6"
                      data-input-counter
                      className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                      placeholder=""
                      value={item5}
                      required
                    />
                    <button
                      onClick={() => setItem5(item5 + 1)}
                      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    >
                      <Plus className="h-2.5 w-2.5 text-gray-900 dark:text-white" />
                    </button>
                  </div>
                </div>
                <div>
                  <Tooltip content="Remove">
                    <TrashBin className="mb-1 h-4 w-4 cursor-pointer text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600" />
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <dl className="flex w-full items-center justify-between">
                <dt className="font-semibold leading-none text-gray-900 dark:text-white">
                  Total
                </dt>
                <dd className="font-semibold leading-none text-gray-900 dark:text-white">
                  $6,796
                </dd>
              </dl>
              <a
                href="#"
                className="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                See your cart
              </a>
            </div>
          </Dropdown>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <span className="inline-flex items-center justify-center rounded-lg p-2 text-sm font-medium leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                <User className="h-5 w-5" />
                <span className="mx-1 hidden lg:inline">Account</span>
                <ChevronDown className="h-6 w-6 text-gray-900 dark:text-white" />
              </span>
            }
            theme={{
              content: twMerge(theme.dropdown.content, "w-56 rounded-lg pb-2"),
              floating: {
                base: twMerge(theme.dropdown.floating.base, "rounded-lg"),
              },
            }}
          >
            <DropdownItem className="group mx-2 w-[calc(100%-1rem)] rounded-lg px-3 text-gray-900">
              <UserCircle className="me-1 h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              &nbsp;My Account
            </DropdownItem>
            <DropdownItem className="group mx-2 w-[calc(100%-1rem)] rounded-lg px-3 text-gray-900">
              <Wallet className="me-1 h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              &nbsp;My Wallet
            </DropdownItem>
            <DropdownItem className="group mx-2 w-[calc(100%-1rem)] rounded-lg px-3 text-gray-900">
              <Heart className="me-1 h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              &nbsp;Favourites Items
            </DropdownItem>
            <DropdownItem className="group mx-2 w-[calc(100%-1rem)] rounded-lg px-3 text-gray-900">
              <ArrowsRepeat className="me-1 h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              &nbsp;My Returns
            </DropdownItem>
            <DropdownItem className="group mx-2 w-[calc(100%-1rem)] rounded-lg px-3 text-gray-900">
              <GiftBox className="me-1 h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              &nbsp;Gift Cards
            </DropdownItem>
            <DropdownItem className="group mx-2 w-[calc(100%-1rem)] rounded-lg px-3 text-gray-900">
              <MailBox className="me-1 h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              &nbsp;Subscriptions
            </DropdownItem>
            <DropdownDivider className="my-2" />
            <DropdownItem className="group mx-2 w-[calc(100%-1rem)] rounded-lg px-3 text-gray-900">
              <User className="me-1 h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              &nbsp;Account
            </DropdownItem>
            <DropdownItem className="group mx-2 w-[calc(100%-1rem)] rounded-lg px-3 text-gray-900">
              <Cog className="me-1 h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              &nbsp;Settings
            </DropdownItem>
            <DropdownItem className="group mx-2 w-[calc(100%-1rem)] rounded-lg px-3 text-gray-900">
              <Lock className="me-1 h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              &nbsp;Privacy
            </DropdownItem>
            <DropdownItem className="group mx-2 w-[calc(100%-1rem)] rounded-lg px-3 text-gray-900">
              <Bell className="me-1 h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              &nbsp;Notifications
            </DropdownItem>
            <DropdownDivider className="my-2" />
            <DropdownItem className="group mx-2 w-[calc(100%-1rem)] rounded-lg px-3 text-gray-900">
              <BookOpen className="me-1 h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              &nbsp;Help Guide
            </DropdownItem>
            <DropdownItem className="group mx-2 w-[calc(100%-1rem)] rounded-lg px-3 text-gray-900">
              <QuestionCircle className="me-1 h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              &nbsp;Help Center
            </DropdownItem>
            <DropdownDivider className="my-2" />
            <DropdownItem className="group mx-2 w-[calc(100%-1rem)] rounded-lg px-3 text-gray-900">
              <Moon className="me-1 h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              &nbsp;
              <span className="flex w-full items-center justify-between">
                Dark Mode
                <ToggleSwitch
                  checked={isDarkMode}
                  onChange={() => setDarkMode(!isDarkMode)}
                />
              </span>
            </DropdownItem>
            <DropdownDivider className="my-2" />
            <DropdownItem className="group mx-2 w-[calc(100%-1rem)] rounded-lg px-3 text-red-600 hover:bg-red-50 hover:text-red-500 dark:text-red-600 dark:hover:text-red-500">
              <ArrowRightToBracket className="me-1 h-4 w-4" />
              &nbsp;Sign Out
            </DropdownItem>
          </Dropdown>
          <NavbarToggle
            barIcon={() => (
              <span className="flex items-center gap-2 text-gray-900 dark:text-white">
                <Bars className="h-5 w-5" />
              </span>
            )}
            className="md:hidden"
          />
        </div>
        <form className="mt-3 lg:hidden">
          <label htmlFor="default-search" className="sr-only">
            Search
          </label>
          <TextInput
            icon={() => <Search className="h-5 w-5 dark:text-gray-400" />}
            id="default-search"
            name="default-search"
            placeholder="Search in all categories"
            required
            rightIcon={() => <Button type="submit">Search</Button>}
            size={72}
            type="search"
            className="[&_input]:py-4"
          />
        </form>
        <NavbarCollapse className="mt-4 w-full rounded-xl border border-gray-200 bg-gray-50 py-2 dark:border-gray-600 dark:bg-gray-700 lg:hidden [&>ul]:mt-0">
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
        <div className="mt-4 flex w-full flex-wrap items-center justify-between gap-2 border-t border-gray-200 pt-3 dark:border-gray-700 sm:flex-nowrap sm:gap-4">
          <div className="flex w-full items-center justify-between dark:text-white">
            <ul className="flex items-center gap-4 lg:gap-8">
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <span className="inline-flex items-center justify-center rounded-lg p-0 text-sm font-medium leading-none text-gray-900 hover:text-blue-600 dark:text-white">
                    <span>All categories</span>
                    <ChevronDown className="h-6 w-6" />
                  </span>
                }
                theme={{
                  content: twMerge(
                    theme.dropdown.content,
                    "-ms-2 w-screen space-y-4 rounded-none pb-3 pt-8 dark:bg-gray-800 lg:-ms-4",
                  ),
                  floating: {
                    base: twMerge(
                      theme.dropdown.floating.base,
                      "mt-0 w-full rounded-none border-none shadow-none xl:w-[1280px]",
                    ),
                  },
                }}
              >
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                    <div>
                      <div className="flex items-center gap-2">
                        <ComputerSpeaker className="h-6 w-6 shrink-0 text-gray-900 dark:text-white" />
                        <p className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                          Electronics
                        </p>
                      </div>

                      <ul className="mt-4 max-h-72 space-y-2 overflow-y-auto lg:max-h-[420px]">
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            TV & Home Cinema
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Phones
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Computers
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Consoles/Gaming
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Camera & Photo
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Monitors
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Audio & HiFi
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Headphones
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Computer Components
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Headphones
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Home Cinema
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Sat Nav & Car Electronics
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Video Hardware
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Office Electronics
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Smart Home
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <Store className="h-6 w-6 shrink-0 text-gray-900 dark:text-white" />
                        <p className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                          Food & Grocery
                        </p>
                      </div>

                      <ul className="mt-4 max-h-72 space-y-2 overflow-y-auto lg:max-h-[420px]">
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Bakery and Bread
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Meat and Seafood
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Pasta and Rice
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Cereals and Breakfast Foods
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Frozen Foods
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Dairy, Cheese, and Eggs
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Snacks and Crackers
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Fruits
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Soup & Canned Goods
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Beer, Wine & Spirits
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Luxury Food & Drink
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Petshop
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Kitchen detergents
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Non-Alcoholic Drinks
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Vouchers
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <ShoppingBag className="h-6 w-6 shrink-0 text-gray-900 dark:text-white" />
                        <p className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                          Fashion
                        </p>
                      </div>

                      <ul className="mt-4 max-h-72 space-y-2 overflow-y-auto lg:max-h-[420px]">
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Women's Clothing
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Women's Shoes
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Women's Accessories
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Children's Clothing
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Children's Shoes
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Children's Accessories
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Men's Clothing
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Men's Shoes
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Men's Accessories
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <Sun className="h-6 w-6 shrink-0 text-gray-900 dark:text-white" />
                        <p className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                          Sports & Outdoors
                        </p>
                      </div>

                      <ul className="mt-4 max-h-72 space-y-2 overflow-y-auto lg:max-h-[420px]">
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Sport Clothes
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Sport Shoes
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Cycling
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Football
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Camping
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Fishing
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Tennis
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Paddle sports
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Team Sports
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Hike
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Running
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Fitness & Nutrition
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Sports Accessories
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Tents
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title=""
                            className="block text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          >
                            Other Sport activities
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 lg:mt-12">
                    <a
                      href="#"
                      title=""
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                      role="button"
                    >
                      See all categories
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </Dropdown>
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
          </div>
        </div>
      </Navbar>
    </>
  );
}
