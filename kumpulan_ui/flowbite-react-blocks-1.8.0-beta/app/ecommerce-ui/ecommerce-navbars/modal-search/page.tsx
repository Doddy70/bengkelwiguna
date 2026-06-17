"use client";

import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownItem,
  Modal,
  Navbar,
  NavbarBrand,
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
  Bell,
  Book,
  BookOpen,
  Cart,
  ChevronDown,
  Clipboard,
  Cog,
  DesktopPc,
  Dna,
  GiftBox,
  Headphones,
  Heart,
  Lightbulb,
  Lock,
  MailBox,
  Minus,
  Moon,
  Play,
  Plus,
  QuestionCircle,
  Search,
  ShoppingBag,
  Store,
  TrashBin,
  Truck,
  User,
  Wallet,
} from "flowbite-react-icons/outline";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function EcommerceNavbarWithModalSearch() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isOpenSearch, setOpenSearch] = useState(true);
  const [item1, setItem1] = useState(2);
  const [item2, setItem2] = useState(3);
  const [item3, setItem3] = useState(1);
  const [item4, setItem4] = useState(1);
  const [item5, setItem5] = useState(2);

  return (
    <>
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
        </div>
        <div className="md:flex md:items-center md:justify-center">
          <div className="relative items-center justify-center rounded-lg sm:flex sm:gap-4 sm:bg-gray-100 sm:p-2 sm:dark:bg-gray-700">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <>
                  <Clipboard className="-ms-0.5 me-2 h-4 w-4" />
                  All categories
                  <ChevronDown className="-me-0.5 ms-2 h-4 w-4" />
                </>
              }
              theme={{
                content: twMerge(theme.dropdown.content, "py-0"),
                floating: {
                  base: twMerge(
                    theme.dropdown.floating.base,
                    "-ms-64 w-[672px] border-none",
                  ),
                },
                inlineWrapper: twMerge(
                  theme.dropdown.inlineWrapper,
                  "hidden w-full flex-1 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 sm:w-auto sm:border-0 sm:dark:bg-gray-600 sm:dark:hover:bg-gray-500 md:flex-none lg:inline-flex",
                ),
              }}
            >
              <div className="sm:flex sm:items-stretch">
                <div className="w-full shrink-0 space-y-4 px-2 py-4 sm:max-w-sm sm:p-6 md:max-w-md">
                  <a
                    href="#"
                    title=""
                    className="group flex items-center gap-4 rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 sm:px-4"
                  >
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow dark:bg-gray-600">
                      <ShoppingBag className="h-4 w-4 text-gray-900 dark:text-white" />
                    </div>

                    <div className="min-w-0 flex-1 space-y-0.5">
                      <p className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white">
                        Fashion
                      </p>
                      <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                        Trending designs to inspire you
                      </p>
                    </div>

                    <div className="-translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                      <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
                    </div>
                  </a>

                  <a
                    href="#"
                    title=""
                    className="group flex items-center gap-4 rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 sm:px-4"
                  >
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow dark:bg-gray-600">
                      <Lightbulb className="h-4 w-4 text-gray-900 dark:text-white" />
                    </div>

                    <div className="min-w-0 flex-1 space-y-0.5">
                      <p className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white">
                        Electronics
                      </p>
                      <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                        Up-and-coming designers
                      </p>
                    </div>

                    <div className="-translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                      <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
                    </div>
                  </a>

                  <a
                    href="#"
                    title=""
                    className="group flex items-center gap-4 rounded-lg bg-gray-100 px-2 py-2 dark:bg-gray-600 sm:px-4"
                  >
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow dark:bg-gray-600">
                      <DesktopPc className="h-4 w-4 text-gray-900 dark:text-white" />
                    </div>

                    <div className="min-w-0 flex-1 space-y-0.5">
                      <p className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white">
                        Computer & Office
                      </p>
                      <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                        Work designers are riffing on
                      </p>
                    </div>

                    <div className="translate-x-0 opacity-100 transition-all duration-200">
                      <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
                    </div>
                  </a>

                  <a
                    href="#"
                    title=""
                    className="group flex items-center gap-4 rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 sm:px-4"
                  >
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow dark:bg-gray-600">
                      <Play className="h-4 w-4 text-gray-900 dark:text-white" />
                    </div>

                    <div className="min-w-0 flex-1 space-y-0.5">
                      <p className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white">
                        Gaming/Consoles
                      </p>
                      <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                        Interviews, tutorials, and more
                      </p>
                    </div>

                    <div className="-translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                      <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
                    </div>
                  </a>

                  <a
                    href="#"
                    title=""
                    className="group flex items-center gap-4 rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 sm:px-4"
                  >
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow dark:bg-gray-600">
                      <Book className="h-4 w-4 text-gray-900 dark:text-white" />
                    </div>

                    <div className="min-w-0 flex-1 space-y-0.5">
                      <p className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white">
                        Books
                      </p>
                      <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                        Prompt to flex your skills
                      </p>
                    </div>

                    <div className="-translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                      <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
                    </div>
                  </a>

                  <a
                    href="#"
                    title=""
                    className="group flex items-center gap-4 rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 sm:px-4"
                  >
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow dark:bg-gray-600">
                      <Headphones className="h-4 w-4 text-gray-900 dark:text-white" />
                    </div>

                    <div className="min-w-0 flex-1 space-y-0.5">
                      <p className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white">
                        Sports & Outdoors
                      </p>
                      <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                        Prompt to flex your skills
                      </p>
                    </div>

                    <div className="-translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                      <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
                    </div>
                  </a>

                  <a
                    href="#"
                    title=""
                    className="group flex items-center gap-4 rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 sm:px-4"
                  >
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow dark:bg-gray-600">
                      <Store className="h-4 w-4 text-gray-900 dark:text-white" />
                    </div>

                    <div className="min-w-0 flex-1 space-y-0.5">
                      <p className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white">
                        Food & Grocery
                      </p>
                      <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                        Prompt to flex your skills
                      </p>
                    </div>

                    <div className="-translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                      <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
                    </div>
                  </a>

                  <a
                    href="#"
                    title=""
                    className="group flex items-center gap-4 rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 sm:px-4"
                  >
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow dark:bg-gray-600">
                      <Dna className="h-4 w-4 text-gray-900 dark:text-white" />
                    </div>

                    <div className="min-w-0 flex-1 space-y-0.5">
                      <p className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white">
                        Health & Beauty
                      </p>
                      <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                        Prompt to flex your skills
                      </p>
                    </div>

                    <div className="-translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                      <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
                    </div>
                  </a>

                  <a
                    href="#"
                    title=""
                    className="group flex items-center gap-4 rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 sm:px-4"
                  >
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow dark:bg-gray-600">
                      <Truck className="h-4 w-4 text-gray-900 dark:text-white" />
                    </div>

                    <div className="min-w-0 flex-1 space-y-0.5">
                      <p className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white">
                        Car & Motorbike
                      </p>
                      <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                        Prompt to flex your skills
                      </p>
                    </div>

                    <div className="-translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                      <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
                    </div>
                  </a>
                </div>

                <ul className="w-full space-y-4 bg-gray-50 p-4 text-sm font-medium text-gray-500 dark:bg-gray-600 dark:text-gray-400 sm:p-6">
                  <li className="text-sm font-semibold text-gray-900 dark:text-white">
                    Browse Categories
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="block hover:text-gray-900 hover:underline dark:hover:text-white"
                    >
                      Laptops
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="block hover:text-gray-900 hover:underline dark:hover:text-white"
                    >
                      Tablets
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="block hover:text-gray-900 hover:underline dark:hover:text-white"
                    >
                      Desktop PC
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="block hover:text-gray-900 hover:underline dark:hover:text-white"
                    >
                      Monitors
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="block hover:text-gray-900 hover:underline dark:hover:text-white"
                    >
                      Memory & Storage
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="block hover:text-gray-900 hover:underline dark:hover:text-white"
                    >
                      Networking
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="block hover:text-gray-900 hover:underline dark:hover:text-white"
                    >
                      Computer Components
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="block hover:text-gray-900 hover:underline dark:hover:text-white"
                    >
                      Software
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="block hover:text-gray-900 hover:underline dark:hover:text-white"
                    >
                      Printers & Ink
                    </a>
                  </li>
                </ul>
              </div>
            </Dropdown>
            <ul className="flex items-center space-x-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="hidden items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500 sm:inline-flex"
                >
                  Best Sellers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="hidden items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500 sm:inline-flex"
                >
                  Gift Cards
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="hidden items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500 sm:inline-flex"
                >
                  Gift Ideas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="hidden items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500 md:inline-flex"
                >
                  Deal of the day
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setOpenSearch(!isOpenSearch)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-sm font-medium leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            <span className="sr-only">Search</span>
            <Search className="h-5 w-5" />
          </button>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <span className="inline-flex items-center justify-center rounded-lg p-2 text-sm font-medium leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                <div className="relative sm:me-1.5">
                  <Cart className="h-5 w-5 lg:me-1" />
                  <div className="absolute -end-1.5 -top-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-700 text-xs font-medium text-white dark:bg-red-600">
                    2
                  </div>
                </div>
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
              <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
                Your shopping cart
                <span className="ms-2 font-normal text-gray-500">
                  (5 items)
                </span>
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
                <Avatar
                  alt="Account"
                  img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  rounded
                  size="xs"
                />
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
              <Truck className="me-1 h-4 w-4 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              &nbsp;My Orders
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
        </div>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <span className="inline-flex w-full flex-1 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 sm:w-auto sm:border-0 sm:dark:bg-gray-600 sm:dark:hover:bg-gray-500 md:flex-none">
              <Clipboard className="me-2 h-5 w-5" />
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
                "mt-2 w-[96vw] rounded-lg p-0 xl:w-[1280px]",
              ),
            },
            inlineWrapper: twMerge(
              theme.dropdown.inlineWrapper,
              "mt-3 w-[96vw] sm:hidden",
            ),
          }}
        >
          <div className="sm:flex sm:items-stretch">
            <div className="w-full shrink-0 space-y-4 px-2 py-4 sm:max-w-sm sm:p-6 md:max-w-md">
              <a
                href="#"
                title=""
                className="group flex items-center gap-4 rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 sm:px-4"
              >
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow dark:bg-gray-600">
                  <ShoppingBag className="h-4 w-4 text-gray-900 dark:text-white" />
                </div>

                <div className="min-w-0 flex-1 space-y-0.5">
                  <p className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white">
                    Fashion
                  </p>
                  <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                    Trending designs to inspire you
                  </p>
                </div>

                <div className="-translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
                </div>
              </a>

              <a
                href="#"
                title=""
                className="group flex items-center gap-4 rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 sm:px-4"
              >
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow dark:bg-gray-600">
                  <Lightbulb className="h-4 w-4 text-gray-900 dark:text-white" />
                </div>

                <div className="min-w-0 flex-1 space-y-0.5">
                  <p className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white">
                    Electronics
                  </p>
                  <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                    Up-and-coming designers
                  </p>
                </div>

                <div className="-translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
                </div>
              </a>

              <a
                href="#"
                title=""
                className="group flex items-center gap-4 rounded-lg bg-gray-100 px-2 py-2 dark:bg-gray-600 sm:px-4"
              >
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow dark:bg-gray-600">
                  <DesktopPc className="h-4 w-4 text-gray-900 dark:text-white" />
                </div>

                <div className="min-w-0 flex-1 space-y-0.5">
                  <p className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white">
                    Computer & Office
                  </p>
                  <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                    Work designers are riffing on
                  </p>
                </div>

                <div className="translate-x-0 opacity-100 transition-all duration-200">
                  <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
                </div>
              </a>

              <a
                href="#"
                title=""
                className="group flex items-center gap-4 rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 sm:px-4"
              >
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow dark:bg-gray-600">
                  <Play className="h-4 w-4 text-gray-900 dark:text-white" />
                </div>

                <div className="min-w-0 flex-1 space-y-0.5">
                  <p className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white">
                    Gaming/Consoles
                  </p>
                  <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                    Interviews, tutorials, and more
                  </p>
                </div>

                <div className="-translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
                </div>
              </a>

              <a
                href="#"
                title=""
                className="group flex items-center gap-4 rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 sm:px-4"
              >
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow dark:bg-gray-600">
                  <Book className="h-4 w-4 text-gray-900 dark:text-white" />
                </div>

                <div className="min-w-0 flex-1 space-y-0.5">
                  <p className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white">
                    Books
                  </p>
                  <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                    Prompt to flex your skills
                  </p>
                </div>

                <div className="-translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
                </div>
              </a>

              <a
                href="#"
                title=""
                className="group flex items-center gap-4 rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 sm:px-4"
              >
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow dark:bg-gray-600">
                  <Headphones className="h-4 w-4 text-gray-900 dark:text-white" />
                </div>

                <div className="min-w-0 flex-1 space-y-0.5">
                  <p className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white">
                    Sports & Outdoors
                  </p>
                  <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                    Prompt to flex your skills
                  </p>
                </div>

                <div className="-translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
                </div>
              </a>

              <a
                href="#"
                title=""
                className="group flex items-center gap-4 rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 sm:px-4"
              >
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow dark:bg-gray-600">
                  <Store className="h-4 w-4 text-gray-900 dark:text-white" />
                </div>

                <div className="min-w-0 flex-1 space-y-0.5">
                  <p className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white">
                    Food & Grocery
                  </p>
                  <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                    Prompt to flex your skills
                  </p>
                </div>

                <div className="-translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
                </div>
              </a>

              <a
                href="#"
                title=""
                className="group flex items-center gap-4 rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 sm:px-4"
              >
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow dark:bg-gray-600">
                  <Dna className="h-4 w-4 text-gray-900 dark:text-white" />
                </div>

                <div className="min-w-0 flex-1 space-y-0.5">
                  <p className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white">
                    Health & Beauty
                  </p>
                  <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                    Prompt to flex your skills
                  </p>
                </div>

                <div className="-translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
                </div>
              </a>

              <a
                href="#"
                title=""
                className="group flex items-center gap-4 rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 sm:px-4"
              >
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow dark:bg-gray-600">
                  <Truck className="h-4 w-4 text-gray-900 dark:text-white" />
                </div>

                <div className="min-w-0 flex-1 space-y-0.5">
                  <p className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white">
                    Car & Motorbike
                  </p>
                  <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                    Prompt to flex your skills
                  </p>
                </div>

                <div className="-translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowRight className="h-4 w-4 text-gray-900 dark:text-white" />
                </div>
              </a>
            </div>

            <ul className="w-full space-y-4 bg-gray-50 p-4 text-sm font-medium text-gray-500 dark:bg-gray-600 dark:text-gray-400 sm:p-6">
              <li className="text-sm font-semibold text-gray-900 dark:text-white">
                Browse Categories
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="block hover:text-gray-900 hover:underline dark:hover:text-white"
                >
                  Laptops
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="block hover:text-gray-900 hover:underline dark:hover:text-white"
                >
                  Tablets
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="block hover:text-gray-900 hover:underline dark:hover:text-white"
                >
                  Desktop PC
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="block hover:text-gray-900 hover:underline dark:hover:text-white"
                >
                  Monitors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="block hover:text-gray-900 hover:underline dark:hover:text-white"
                >
                  Memory & Storage
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="block hover:text-gray-900 hover:underline dark:hover:text-white"
                >
                  Networking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="block hover:text-gray-900 hover:underline dark:hover:text-white"
                >
                  Computer Components
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="block hover:text-gray-900 hover:underline dark:hover:text-white"
                >
                  Software
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="block hover:text-gray-900 hover:underline dark:hover:text-white"
                >
                  Printers & Ink
                </a>
              </li>
            </ul>
          </div>
        </Dropdown>
      </Navbar>

      <Modal
        onClose={() => setOpenSearch(false)}
        show={isOpenSearch}
        popup
        theme={{
          content: {
            inner: twMerge(theme.modal.content.inner, "dark:bg-gray-800"),
          },
        }}
      >
        <Modal.Header className="m-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Advanced search
          </h3>
        </Modal.Header>
        <Modal.Body>
          <form className="mx-auto mb-4 w-full border-b border-gray-200 pb-4 dark:border-gray-700">
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
          <div className="mb-4">
            <h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
              Suggested results
            </h3>
            <ul className="space-y-2 text-sm font-normal text-gray-500 dark:text-gray-400">
              <li className="flex items-center">
                <svg
                  className="me-1 h-4 w-4 text-gray-500 dark:text-gray-400"
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
                <a href="#" className="hover:underline">
                  Apple iMac 2024 (All-in-One PC)
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className="me-1 h-4 w-4 text-gray-500 dark:text-gray-400"
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
                <a href="#" className="hover:underline">
                  Samsung Galaxy S24 Ultra (1Tb, Titanium Violet)
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className="me-1 h-4 w-4 text-gray-500 dark:text-gray-400"
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
                <a href="#" className="hover:underline">
                  MacBook Pro 14-inch M3 - Space Gray - Apple
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
              History
            </h3>
            <ul className="space-y-2 text-sm font-normal text-gray-500 dark:text-gray-400">
              <li className="flex items-center">
                <svg
                  className="me-1 h-4 w-4 text-gray-500 dark:text-gray-400"
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
                    d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <a href="#" className="hover:underline">
                  Microsoft - Surface Laptop, Platinum, 256 GB SSD
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className="me-1 h-4 w-4 text-gray-500 dark:text-gray-400"
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
                    d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <a href="#" className="hover:underline">
                  Huawei - P40 Lite - Smartphone 128GB, Black
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
              Featured products
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <a
                href="#"
                className="group block space-y-2 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700"
              >
                <div>
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                    className="h-16 dark:hidden"
                    alt=""
                  />
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                    className="hidden h-16 dark:block"
                    alt=""
                  />
                </div>
                <h4 className="text-sm font-medium text-gray-900 group-hover:underline dark:text-white">
                  Apple Imac 2024, 27”, 256GB
                </h4>
                <Rating>
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star filled={false} />
                  <p className="ms-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                    4.95
                  </p>
                </Rating>
                <span className="block text-sm font-bold text-gray-900 dark:text-white">
                  $1,799
                </span>
              </a>
              <a
                href="#"
                className="group block space-y-2 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700"
              >
                <div>
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg"
                    className="h-16 dark:hidden"
                    alt=""
                  />
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg"
                    className="hidden h-16 dark:block"
                    alt=""
                  />
                </div>
                <h4 className="text-sm font-medium text-gray-900 group-hover:underline dark:text-white">
                  Apple iPad PRO, 12”, Space Gray
                </h4>
                <Rating>
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star filled={false} />
                  <p className="ms-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                    4.7
                  </p>
                </Rating>
                <span className="block text-sm font-bold text-gray-900 dark:text-white">
                  $999
                </span>
              </a>
              <a
                href="#"
                className="group block space-y-2 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700"
              >
                <div>
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg"
                    className="h-16 dark:hidden"
                    alt=""
                  />
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg"
                    className="hidden h-16 dark:block"
                    alt=""
                  />
                </div>
                <h4 className="text-sm font-medium text-gray-900 group-hover:underline dark:text-white">
                  Apple MacBook PRO, 1TB
                </h4>
                <Rating>
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star filled={false} />
                  <p className="ms-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                    4.8
                  </p>
                </Rating>
                <span className="block text-sm font-bold text-gray-900 dark:text-white">
                  $2,999
                </span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
              All categories
            </h3>
            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
              <a
                href="#"
                className="flex items-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <svg
                  className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white"
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
                    d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Computer & Office
                </span>
              </a>
              <a
                href="#"
                className="flex items-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <svg
                  className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white"
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
                    d="M16.872 9.687 20 6.56 17.44 4 4 17.44 6.56 20 16.873 9.687Zm0 0-2.56-2.56M6 7v2m0 0v2m0-2H4m2 0h2m7 7v2m0 0v2m0-2h-2m2 0h2M8 4h.01v.01H8V4Zm2 2h.01v.01H10V6Zm2-2h.01v.01H12V4Zm8 8h.01v.01H20V12Zm-2 2h.01v.01H18V14Zm2 2h.01v.01H20V16Z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Collectibles & Toys
                </span>
              </a>
              <a
                href="#"
                className="flex items-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <svg
                  className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white"
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
                    d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Books
                </span>
              </a>
              <a
                href="#"
                className="flex items-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <svg
                  className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white"
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
                    d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Fashion/Clothes
                </span>
              </a>
              <a
                href="#"
                className="flex items-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <svg
                  className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white"
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
                    d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Sports & Outdoors
                </span>
              </a>
              <a
                href="#"
                className="flex items-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <svg
                  className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white"
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
                    d="M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Painting & Hobby
                </span>
              </a>
              <a
                href="#"
                className="flex items-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <svg
                  className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white"
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
                    d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Electronics
                </span>
              </a>
              <a
                href="#"
                className="flex items-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <svg
                  className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white"
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
                    d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Food & Grocery
                </span>
              </a>
              <a
                href="#"
                className="flex items-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <svg
                  className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 16v-4a8 8 0 1 0-16 0v4m16 0v2a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2ZM4 16v2a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Music
                </span>
              </a>
              <a
                href="#"
                className="flex items-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <svg
                  className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white"
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
                    d="M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  TV/Projectors
                </span>
              </a>
              <a
                href="#"
                className="flex items-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <svg
                  className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white"
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
                    d="M15.041 13.862A4.999 4.999 0 0 1 17 17.831V21M7 3v3.169a5 5 0 0 0 1.891 3.916M17 3v3.169a5 5 0 0 1-2.428 4.288l-5.144 3.086A5 5 0 0 0 7 17.831V21M7 5h10M7.399 8h9.252M8 16h8.652M7 19h10"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Health & beauty
                </span>
              </a>
              <a
                href="#"
                className="flex items-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <svg
                  className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white"
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
                    d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Home Air Quality
                </span>
              </a>
              <a
                href="#"
                className="flex items-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <svg
                  className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="square"
                    stroke-width="2"
                    d="M8 15h7.01v.01H15L8 15Z"
                  />
                  <path
                    stroke="currentColor"
                    stroke-linecap="square"
                    stroke-width="2"
                    d="M20 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"
                  />
                  <path
                    stroke="currentColor"
                    stroke-linecap="square"
                    stroke-width="2"
                    d="M6 9h.01v.01H6V9Zm0 3h.01v.01H6V12Zm0 3h.01v.01H6V15Zm3-6h.01v.01H9V9Zm0 3h.01v.01H9V12Zm3-3h.01v.01H12V9Zm0 3h.01v.01H12V12Zm3 0h.01v.01H15V12Zm3 0h.01v.01H18V12Zm0 3h.01v.01H18V15Zm-3-6h.01v.01H15V9Zm3 0h.01v.01H18V9Z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Gaming/Consoles
                </span>
              </a>
              <a
                href="#"
                className="flex items-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <svg
                  className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white"
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
                    d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Car & Motorbike
                </span>
              </a>
              <a
                href="#"
                className="flex items-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <svg
                  className="me-2 h-4 w-4 shrink-0 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
                  />
                  <path
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Photo/Video
                </span>
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
