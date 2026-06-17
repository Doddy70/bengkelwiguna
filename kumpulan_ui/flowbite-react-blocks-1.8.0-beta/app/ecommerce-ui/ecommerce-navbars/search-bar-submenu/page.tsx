"use client";

import {
  Avatar,
  Badge,
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
  Progress,
  TextInput,
  theme,
  Tooltip,
} from "flowbite-react";
import {
  ArrowRightToBracket,
  Bars,
  Book,
  Cart,
  CartPlus,
  ChevronDown,
  Cog,
  ComputerSpeaker,
  Dna,
  Headphones,
  Heart,
  Home,
  MapPin,
  Minus,
  Plus,
  QuestionCircle,
  Search,
  ShoppingBag,
  Store,
  TrashBin,
  UserCircle,
  Wallet,
} from "flowbite-react-icons/outline";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function EcommerceNavbarWithSearchBarAndSubmenu() {
  const [isOpenSearch, setOpenSearch] = useState(false);
  const [item1, setItem1] = useState(2);
  const [item2, setItem2] = useState(3);
  const [item3, setItem3] = useState(1);
  const [item4, setItem4] = useState(1);
  const [item5, setItem5] = useState(2);

  return (
    <Navbar fluid rounded className="flex-col py-3 dark:bg-gray-800 sm:px-4">
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
            label="All categories"
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
            size={32}
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
        <button className="hidden items-center justify-center rounded-lg p-2 text-sm font-medium leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 md:inline-flex">
          <div className="relative sm:me-2.5">
            <Heart className="h-5 w-5 lg:me-1" />
            <div className="absolute -end-1.5 -top-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-700 text-xs font-medium text-white dark:bg-red-600">
              6
            </div>
          </div>
          <span>Favorites</span>
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
          <div className="border-b border-gray-200 pb-4 dark:border-gray-700">
            <p className="text-center text-base font-semibold leading-none text-gray-900 dark:text-white">
              Your shopping cart
            </p>
          </div>

          <div className="border-b border-gray-200 pb-4 dark:border-gray-700">
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Receive{" "}
              <span className="font-medium text-gray-900 dark:text-white">
                free shipping
              </span>{" "}
              for products worth{" "}
              <span className="font-medium text-gray-900 dark:text-white">
                $9000
              </span>
              .
            </p>

            <Progress color="green" progress={75} className="mt-3 h-1.5" />
          </div>

          <div className="grid grid-cols-2 items-center">
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
          <div className="grid grid-cols-2 items-center">
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
          <div className="grid grid-cols-2 items-center">
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
          <div className="grid grid-cols-2 items-center">
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
          <div className="grid grid-cols-2 items-center">
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
          <div className="space-y-4 border-t border-gray-200 pt-4 dark:border-gray-700">
            <dl className="space-y-2.5 text-center">
              <dt className="leading-none text-gray-500 dark:text-gray-400">
                Total payment
              </dt>

              <dd className="text-lg font-semibold leading-none text-gray-900 dark:text-white">
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
                alt=""
                img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                rounded
                size="xs"
              />
              <span className="me-1 ms-2 hidden sm:inline">My Account</span>
              <ChevronDown className="h-6 w-6 text-gray-900 dark:text-white" />
            </span>
          }
          theme={{
            content: twMerge(theme.dropdown.content, "w-52 rounded-lg pb-2"),
            floating: {
              base: twMerge(theme.dropdown.floating.base, "rounded-lg"),
            },
          }}
        >
          <div className="w-full space-y-2 px-2 pb-4 pt-2 text-center">
            <Avatar
              alt=""
              img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              rounded
              size="sm"
              className="mx-auto"
            />
            <div>
              <p className="truncate text-sm font-semibold leading-tight text-gray-900 dark:text-white">
                Hello, Jese Leos
              </p>
              <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                name@example.com
              </p>
            </div>
            <a
              href="#"
              className="mb-2 me-2 block w-full rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-700"
            >
              View Profile
            </a>
          </div>
          <DropdownDivider className="mb-2" />
          <DropdownItem className="group mx-2 w-[calc(100%-1rem)] rounded-lg px-3">
            <UserCircle className="me-1 h-4 w-4 dark:text-gray-400 dark:group-hover:text-white" />
            &nbsp;My Account
          </DropdownItem>
          <DropdownItem className="group mx-2 w-[calc(100%-1rem)] rounded-lg px-3">
            <img
              alt=""
              src="https://flowbite.com/images/logo.svg"
              className="me-1 h-4 w-4 dark:text-gray-400 dark:group-hover:text-white"
            />
            <div className="flex w-full items-center justify-between">
              <span>&nbsp;Flowbite</span>
              <Badge
                color="blue"
                className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300"
              >
                PRO
              </Badge>
            </div>
          </DropdownItem>
          <DropdownItem className="group mx-2 w-[calc(100%-1rem)] rounded-lg px-3">
            <Wallet className="me-1 h-4 w-4 dark:text-gray-400 dark:group-hover:text-white" />
            &nbsp;My Wallet
          </DropdownItem>
          <DropdownItem className="group mx-2 w-[calc(100%-1rem)] rounded-lg px-3">
            <CartPlus className="me-1 h-4 w-4 dark:text-gray-400 dark:group-hover:text-white" />
            &nbsp;My Orders
          </DropdownItem>
          <DropdownItem className="group mx-2 w-[calc(100%-1rem)] rounded-lg px-3">
            <Home className="me-1 h-4 w-4 dark:text-gray-400 dark:group-hover:text-white" />
            &nbsp;Delivery Addresses
          </DropdownItem>
          <DropdownItem className="group mx-2 w-[calc(100%-1rem)] rounded-lg px-3">
            <Cog className="me-1 h-4 w-4 dark:text-gray-400 dark:group-hover:text-white" />
            &nbsp;Settings
          </DropdownItem>
          <DropdownItem className="group mx-2 w-[calc(100%-1rem)] rounded-lg px-3">
            <QuestionCircle className="me-1 h-4 w-4 dark:text-gray-400 dark:group-hover:text-white" />
            &nbsp;Helpdesk
          </DropdownItem>
          <DropdownItem className="group mx-2 w-[calc(100%-1rem)] rounded-lg px-3 text-red-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-white">
            <ArrowRightToBracket className="me-1 h-4 w-4" />
            &nbsp;Log Out
          </DropdownItem>
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
        <div className="flex items-center dark:text-white">
          <NavbarToggle
            barIcon={() => (
              <span className="flex items-center gap-2 text-gray-900 dark:text-white">
                <Bars className="h-5 w-5" />
                Menu
              </span>
            )}
            className="md:hidden"
          />
          <ul className="hidden items-center gap-8 md:flex">
            <li>
              <a
                href="#"
                title=""
                className="block text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                title=""
                className="block text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
              >
                Best Sellers
              </a>
            </li>
            <li>
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
                Games
              </a>
            </li>
            <li className="hidden lg:flex">
              <a
                href="#"
                title=""
                className="block text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
              >
                PC
              </a>
            </li>
            <li className="hidden lg:flex">
              <a
                href="#"
                title=""
                className="block text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
              >
                Music
              </a>
            </li>
            <li className="hidden xl:flex">
              <a
                href="#"
                title=""
                className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
              >
                Books
              </a>
            </li>
            <li className="hidden xl:flex">
              <a
                href="#"
                title=""
                className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
              >
                Electronics
              </a>
            </li>
            <li className="hidden xl:flex">
              <a
                href="#"
                title=""
                className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
              >
                Home & Garden
              </a>
            </li>
          </ul>
        </div>
        <div className="relative shrink-0 sm:ml-auto">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <span className="inline-flex items-center justify-center gap-2 rounded-lg p-2 text-sm font-medium leading-none text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                <MapPin className="h-5 w-5" />
                Deliver to: United States
                <ChevronDown className="-ms-1 h-6 w-6 text-gray-900 dark:text-white sm:flex" />
              </span>
            }
            theme={{
              content: twMerge(theme.dropdown.content, "my-1 w-52 rounded-lg"),
              floating: {
                base: twMerge(theme.dropdown.floating.base, "rounded-lg"),
              },
            }}
          >
            <form>
              <li className="mx-2 inline-flex w-[calc(100%-1rem)] items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                <Checkbox id="country-checkbox-9" name="country-checkbox-9" />
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
                <Checkbox id="country-checkbox-8" name="country-checkbox-8" />
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
                <Checkbox id="country-checkbox-6" name="country-checkbox-6" />
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
                <Checkbox id="country-checkbox-5" name="country-checkbox-5" />
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
                <Checkbox id="country-checkbox-4" name="country-checkbox-4" />
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
                <Checkbox id="country-checkbox-3" name="country-checkbox-3" />
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
                <Checkbox id="country-checkbox-2" name="country-checkbox-2" />
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
                  <Checkbox id="country-checkbox-1" name="country-checkbox-1" />
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
        <div className="w-full sm:w-auto sm:shrink-0">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <span className="inline-flex w-full items-center justify-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium leading-none text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">
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
              content: twMerge(theme.dropdown.content, "my-1 w-52 rounded-lg"),
              inlineWrapper: twMerge(theme.dropdown.inlineWrapper, "w-full"),
              floating: {
                base: twMerge(theme.dropdown.floating.base, "rounded-lg"),
              },
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
  );
}
