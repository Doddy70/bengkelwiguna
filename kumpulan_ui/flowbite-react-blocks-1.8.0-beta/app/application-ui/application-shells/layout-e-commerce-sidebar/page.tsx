"use client";

import {
  Avatar,
  Button,
  Drawer,
  Dropdown,
  Navbar,
  Sidebar,
  TextInput,
  theme,
} from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  HiBell,
  HiCog,
  HiCreditCard,
  HiEye,
  HiFolderDownload,
  HiHeart,
  HiIdentification,
  HiLogout,
  HiMenuAlt1,
  HiPresentationChartBar,
  HiSearch,
  HiStar,
  HiTruck,
} from "react-icons/hi";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

export default function ShellLayoutForEcommerceWithSidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Navbar
        fluid
        theme={{
          root: {
            base: "bg-white dark:bg-gray-800",
            inner: {
              base: "",
            },
          },
          link: {
            base: twMerge(theme.navbar.link.base, "px-4 py-3"),
          },
        }}
      >
        <div className="w-full px-4 py-3.5 md:px-6">
          <div className="flex w-full flex-wrap items-center justify-between">
            <div className="flex items-center justify-start">
              <a href="https://flowbite.com" className="mr-4 flex">
                <img
                  src="https://flowbite.s3.amazonaws.com/logo.svg"
                  className="mr-3 h-8"
                  alt=""
                />
                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                  Flowbite
                </span>
              </a>
              <div className="hidden items-center lg:flex">
                <Dropdown
                  color="gray"
                  label="All categories"
                  theme={{
                    floating: {
                      target: twMerge(
                        theme.dropdown.floating.target,
                        "rounded-r-none border-r-0 bg-gray-100 py-0.5 dark:bg-gray-700 dark:text-white",
                      ),
                    },
                  }}
                >
                  <Dropdown.Item>Electronics</Dropdown.Item>
                  <Dropdown.Item>Vehicles</Dropdown.Item>
                  <Dropdown.Item>Instruments</Dropdown.Item>
                  <Dropdown.Item>Clothings</Dropdown.Item>
                </Dropdown>
                <TextInput
                  id="search"
                  name="search"
                  placeholder="Search Products... (ie. iPhone 12)"
                  size={28}
                  type="search"
                  className="[&_input]:rounded-none"
                />
                <Button className="rounded-l-none [&>span]:px-2.5 [&>span]:py-[0.7rem]">
                  <HiSearch className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="flex items-center md:order-2">
              <div className="hidden lg:block">
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <span className="inline-flex cursor-pointer justify-center rounded p-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 3900 3900"
                        className="h-5 w-5 rounded-full"
                      >
                        <path fill="#b22234" d="M0 0h7410v3900H0z" />
                        <path
                          d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                          stroke="#fff"
                          strokeWidth="300"
                        />
                        <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                        <g fill="#fff">
                          <g id="d">
                            <g id="c">
                              <g id="e">
                                <g id="b">
                                  <path
                                    id="a"
                                    d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                                  />
                                  <use xlinkHref="#a" y="420" />
                                  <use xlinkHref="#a" y="840" />
                                  <use xlinkHref="#a" y="1260" />
                                </g>
                                <use xlinkHref="#a" y="1680" />
                              </g>
                              <use xlinkHref="#b" x="247" y="210" />
                            </g>
                            <use xlinkHref="#c" x="494" />
                          </g>
                          <use xlinkHref="#d" x="988" />
                          <use xlinkHref="#c" x="1976" />
                          <use xlinkHref="#e" x="2470" />
                        </g>
                      </svg>
                      <span className="pl-3">English (US)</span>
                    </span>
                  }
                >
                  <ul className="py-1" role="none">
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <div className="inline-flex items-center">
                          <svg
                            className="mr-2 h-4 w-4 rounded-full"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-us"
                            viewBox="0 0 512 512"
                          >
                            <g fillRule="evenodd">
                              <g strokeWidth="1pt">
                                <path
                                  fill="#bd3d44"
                                  d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                  transform="scale(3.9385)"
                                />
                                <path
                                  fill="#fff"
                                  d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                  transform="scale(3.9385)"
                                />
                              </g>
                              <path
                                fill="#192f5d"
                                d="M0 0h98.8v70H0z"
                                transform="scale(3.9385)"
                              />
                              <path
                                fill="#fff"
                                d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                                transform="scale(3.9385)"
                              />
                            </g>
                          </svg>
                          <span className="whitespace-nowrap">
                            English (US)
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <div className="inline-flex items-center">
                          <svg
                            className="mr-2 h-4 w-4 rounded-full"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-de"
                            viewBox="0 0 512 512"
                          >
                            <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                            <path d="M0 0h512v170.7H0z" />
                            <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                          </svg>
                          Deutsch
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <div className="inline-flex items-center">
                          <svg
                            className="mr-2 h-4 w-4 rounded-full"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-it"
                            viewBox="0 0 512 512"
                          >
                            <g fillRule="evenodd" strokeWidth="1pt">
                              <path fill="#fff" d="M0 0h512v512H0z" />
                              <path fill="#009246" d="M0 0h170.7v512H0z" />
                              <path
                                fill="#ce2b37"
                                d="M341.3 0H512v512H341.3z"
                              />
                            </g>
                          </svg>
                          Italiano
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <div className="inline-flex items-center">
                          <svg
                            className="mr-2 h-4 w-4 rounded-full"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            id="flag-icon-css-cn"
                            viewBox="0 0 512 512"
                          >
                            <defs>
                              <path
                                id="a"
                                fill="#ffde00"
                                d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                              />
                            </defs>
                            <path fill="#de2910" d="M0 0h512v512H0z" />
                            <use
                              width="30"
                              height="20"
                              transform="matrix(76.8 0 0 76.8 128 128)"
                              xlinkHref="#a"
                            />
                            <use
                              width="30"
                              height="20"
                              transform="rotate(-121 142.6 -47) scale(25.5827)"
                              xlinkHref="#a"
                            />
                            <use
                              width="30"
                              height="20"
                              transform="rotate(-98.1 198 -82) scale(25.6)"
                              xlinkHref="#a"
                            />
                            <use
                              width="30"
                              height="20"
                              transform="rotate(-74 272.4 -114) scale(25.6137)"
                              xlinkHref="#a"
                            />
                            <use
                              width="30"
                              height="20"
                              transform="matrix(16 -19.968 19.968 16 256 230.4)"
                              xlinkHref="#a"
                            />
                          </svg>
                          <span className="whitespace-nowrap">中文 (繁體)</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </Dropdown>
              </div>
              <button
                onClick={() => setSidebarOpen(true)}
                className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 lg:hidden"
              >
                <span className="sr-only">Search</span>
                <HiSearch className="h-6 w-6" />
              </button>
              <div className="mx-3 hidden h-5 w-px bg-gray-200 dark:bg-gray-600 lg:inline" />
              <Dropdown
                className="rounded-xl"
                arrowIcon={false}
                inline
                label={
                  <span className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span className="sr-only">Notifications</span>
                    <HiBell className="h-6 w-6" />
                  </span>
                }
                theme={{ content: "py-0" }}
              >
                <div className="max-w-sm">
                  <div className="block rounded-t-xl bg-gray-50 px-4 py-2 text-center text-base font-medium text-gray-700 dark:bg-gray-600 dark:text-white">
                    Notifications
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="flex border-y px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                    >
                      <div className="shrink-0">
                        <img
                          alt=""
                          height={44}
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                          width={44}
                          className="rounded-full"
                        />
                        <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-primary-700 dark:border-gray-700">
                          <svg
                            className="h-3 w-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                            <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                          </svg>
                        </div>
                      </div>
                      <div className="w-full pl-3">
                        <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                          New message from&nbsp;
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Bonnie Green
                          </span>
                          : &quot;Hey, what&apos;s up? All set for the
                          presentation?&quot;
                        </div>
                        <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                          a few moments ago
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                    >
                      <div className="shrink-0">
                        <img
                          alt=""
                          height={44}
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                          width={44}
                          className="rounded-full"
                        />
                        <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-gray-900 dark:border-gray-700">
                          <svg
                            className="h-3 w-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="w-full pl-3">
                        <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Jese Leos
                          </span>
                          &nbsp;and&nbsp;
                          <span className="font-medium text-gray-900 dark:text-white">
                            5 others
                          </span>
                          &nbsp;started following you.
                        </div>
                        <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                          10 minutes ago
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                    >
                      <div className="shrink-0">
                        <img
                          alt=""
                          height={44}
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                          width={44}
                          className="rounded-full"
                        />
                        <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-red-600 dark:border-gray-700">
                          <svg
                            className="h-3 w-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="w-full pl-3">
                        <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Joseph Mcfall
                          </span>
                          &nbsp;and&nbsp;
                          <span className="font-medium text-gray-900 dark:text-white">
                            141 others
                          </span>
                          &nbsp;love your story. See it and view more stories.
                        </div>
                        <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                          44 minutes ago
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                    >
                      <div className="shrink-0">
                        <img
                          alt=""
                          height={44}
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/leslie-livingston.png"
                          width={44}
                          className="rounded-full"
                        />
                        <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-green-400 dark:border-gray-700">
                          <svg
                            className="h-3 w-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="w-full pl-3">
                        <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Leslie Livingston
                          </span>
                          &nbsp;mentioned you in a comment:&nbsp;
                          <span className="font-medium text-primary-700 dark:text-primary-500">
                            @bonnie.green
                          </span>
                          &nbsp;what do you say?
                        </div>
                        <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                          1 hour ago
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <div className="shrink-0">
                        <img
                          alt=""
                          height={44}
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                          width={44}
                          className="rounded-full"
                        />
                        <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-purple-500 dark:border-gray-700">
                          <svg
                            className="h-3 w-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                          </svg>
                        </div>
                      </div>
                      <div className="w-full pl-3">
                        <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Robert Brown
                          </span>
                          &nbsp;posted a new video: Glassmorphism - learn how to
                          implement the new design trend.
                        </div>
                        <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                          3 hours ago
                        </div>
                      </div>
                    </Link>
                  </div>
                  <Link
                    href="#"
                    className="block rounded-b-xl border-t border-gray-100 bg-gray-50 py-2 text-center text-base font-normal text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:hover:underline"
                  >
                    <div className="inline-flex items-center gap-x-2">
                      <HiEye className="h-5 w-5" />
                      <span>View all</span>
                    </div>
                  </Link>
                </div>
              </Dropdown>
              <div className="mx-3 hidden h-5 w-px bg-gray-200 dark:bg-gray-600 lg:inline" />
              <a
                href="#"
                className="inline-flex items-center rounded-lg px-2.5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-800"
              >
                <div className="relative">
                  <svg
                    className="h-6 w-6 text-gray-500 dark:text-gray-400 sm:mr-2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                  <span className="absolute -right-2 -top-1.5 h-4 w-4 rounded-full bg-red-700 text-center text-xs text-white sm:right-0">
                    2
                  </span>
                </div>
                <span className="ml-1 hidden sm:inline">My Cart</span>
              </a>
              <button
                onClick={() => setSidebarOpen(!isSidebarOpen)}
                className="mr-3 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:hidden"
              >
                <span className="sr-only">Toggle sidebar</span>
                <div className="lg:hidden">
                  <GiHamburgerMenu className="h-6 w-6" />
                </div>
                <div className="hidden lg:block">
                  <HiMenuAlt1 className="h-6 w-6" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <Navbar.Collapse
          theme={{
            list: twMerge(
              theme.navbar.collapse.list,
              "mt-0 hidden w-full border-y bg-gray-100 dark:border-gray-700 dark:bg-gray-900 md:space-x-0 md:px-6 md:py-2 md:dark:bg-gray-700 lg:flex",
            ),
          }}
        >
          <Navbar.Link
            href="#"
            className="rounded-lg text-sm font-medium dark:text-gray-100 md:px-3 md:py-2 lg:hover:bg-gray-200 lg:hover:text-gray-900 lg:dark:hover:bg-gray-600"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="rounded-lg text-sm font-medium dark:text-gray-100 md:px-3 md:py-2 lg:hover:bg-gray-200 lg:hover:text-gray-900 lg:dark:hover:bg-gray-600"
          >
            Shop
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="rounded-lg text-sm font-medium dark:text-gray-100 md:px-3 md:py-2 lg:hover:bg-gray-200 lg:hover:text-gray-900 lg:dark:hover:bg-gray-600"
          >
            Today's deals
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="rounded-lg text-sm font-medium dark:text-gray-100 md:px-3 md:py-2 lg:hover:bg-gray-200 lg:hover:text-gray-900 lg:dark:hover:bg-gray-600"
          >
            Blog
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="rounded-lg text-sm font-medium dark:text-gray-100 md:px-3 md:py-2 lg:hover:bg-gray-200 lg:hover:text-gray-900 lg:dark:hover:bg-gray-600"
          >
            Contact
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="rounded-lg text-sm font-medium dark:text-gray-100 md:px-3 md:py-2 lg:hover:bg-gray-200 lg:hover:text-gray-900 lg:dark:hover:bg-gray-600"
          >
            Forum
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="rounded-lg text-sm font-medium dark:text-gray-100 md:px-3 md:py-2 lg:hover:bg-gray-200 lg:hover:text-gray-900 lg:dark:hover:bg-gray-600"
          >
            Support
          </Navbar.Link>
        </Navbar.Collapse>
        <Navbar.Collapse
          theme={{
            list: twMerge(
              theme.navbar.collapse.list,
              "mt-0 flex w-full flex-row space-x-0 bg-gray-50 px-5 py-3 dark:bg-gray-700",
            ),
          }}
          className="block lg:hidden"
        >
          <Navbar.Link
            href="#"
            className="rounded-lg border-none px-3 py-2 text-sm font-medium hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-600"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="rounded-lg border-none px-3 py-2 text-sm font-medium hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-600"
          >
            Shop
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="rounded-lg border-none px-3 py-2 text-sm font-medium hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-600"
          >
            Today's deals
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="rounded-lg border-none px-3 py-2 text-sm font-medium hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-600"
          >
            <Dropdown
              inline
              label={<HiEllipsisHorizontal className="h-5 w-5" />}
              theme={{
                arrowIcon: "hidden",
                floating: {
                  base: twMerge(
                    theme.dropdown.floating.base,
                    "w-56 rounded-xl",
                  ),
                },
              }}
            >
              <Dropdown.Item>Overview</Dropdown.Item>
              <Dropdown.Item>Sales</Dropdown.Item>
              <Dropdown.Item>Billing</Dropdown.Item>
              <Dropdown.Item>Team</Dropdown.Item>
              <Dropdown.Item>Resources</Dropdown.Item>
              <Dropdown.Item>Messages</Dropdown.Item>
              <Dropdown.Item>Support</Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <div className="relative mx-auto flex h-full w-full max-w-screen-2xl px-4 pt-4 xl:pt-8">
        <Sidebar
          aria-label="Sidebar with multi-level dropdown example"
          className="hidden bg-transparent lg:block [&>div]:rounded-xl [&>div]:bg-white"
        >
          <div className="flex h-full flex-col justify-between py-2">
            <div className="h-full overflow-y-auto bg-white pt-1 dark:bg-gray-800 lg:rounded-lg">
              <a
                href="#"
                className="dark:hover-bg-gray-700 mb-5 flex w-full items-center justify-between rounded-lg p-2 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                type="button"
              >
                <span className="sr-only">Open user menu</span>
                <Avatar
                  alt=""
                  img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  rounded
                >
                  <div className="mb-0.5 font-semibold leading-none text-gray-900 dark:text-white">
                    Bonnie Green
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    bonnie@flowbite.com
                  </div>
                </Avatar>
              </a>

              <div className="my-5 border-y border-gray-100 py-5 dark:border-gray-700">
                <ul className="grid grid-cols-3 gap-2">
                  <li>
                    <a
                      href="#"
                      className="group flex flex-col items-center justify-center rounded-xl bg-primary-50 p-2.5 hover:bg-primary-100 dark:bg-primary-900 dark:hover:bg-primary-800"
                    >
                      <span className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 group-hover:bg-primary-200 dark:bg-primary-800  dark:group-hover:bg-primary-700">
                        <svg
                          className="h-5 w-5 text-primary-600 dark:text-primary-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          ></path>
                        </svg>
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
                        <svg
                          className="h-5 w-5 text-purple-600 dark:text-purple-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                            d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                          ></path>
                          <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                        </svg>
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
                        <svg
                          className="h-5 w-5 text-teal-600 dark:text-teal-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                          ></path>
                        </svg>
                      </span>
                      <span className="text-sm font-medium text-teal-600 dark:text-teal-300">
                        Support
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <form className="pb-3 md:hidden">
                  <TextInput
                    icon={HiSearch}
                    type="search"
                    placeholder="Search"
                    required
                    size={32}
                  />
                </form>
                <Sidebar.Items className="[&_*]:font-medium">
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiPresentationChartBar}>
                      Overview
                    </Sidebar.Item>
                    <Sidebar.Collapse icon={HiTruck} label="Orders">
                      <Sidebar.Item href="#">Completed orders</Sidebar.Item>
                      <Sidebar.Item href="#">Orders in delivery</Sidebar.Item>
                      <Sidebar.Item href="#">Canceled orders</Sidebar.Item>
                      <Sidebar.Item href="#">Returns</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiCreditCard} label="Payments">
                      <Sidebar.Item href="#">Invoices</Sidebar.Item>
                      <Sidebar.Item href="#">Payouts</Sidebar.Item>
                      <Sidebar.Item href="#">Billing information</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Item
                      href="#"
                      icon={HiFolderDownload}
                      label={5}
                      className="[&>span]:rounded-full"
                    >
                      Messages
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiStar}>Reviews</Sidebar.Item>
                    <Sidebar.Item icon={HiEye}>Recently viewed</Sidebar.Item>
                    <Sidebar.Item icon={HiHeart}>Favourite items</Sidebar.Item>
                  </Sidebar.ItemGroup>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiCog}>
                      Settings
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiIdentification}>
                      Personal info
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiCreditCard}>
                      Subscriptions
                    </Sidebar.Item>
                    <Sidebar.Item
                      href="#"
                      icon={HiLogout}
                      className="text-red-600 hover:bg-red-100 dark:text-red-600 [&>svg]:text-red-600 dark:[&>svg]:text-red-600"
                    >
                      Log out
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </div>
        </Sidebar>
        <div className="h-full flex-1 overflow-y-auto pb-4 lg:pl-4">
          <div className="mb-4 grid grid-cols-2 gap-4 xl:grid-cols-4">
            <div className="h-32 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 lg:h-64"></div>
            <div className="h-32 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 lg:h-64"></div>
            <div className="rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600"></div>
            <div className="h-32 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 lg:h-64"></div>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="h-48 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 lg:h-96"></div>
            <div className="h-48 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 lg:h-96"></div>
          </div>
          <div className="mb-4 grid grid-cols-3 gap-4">
            <div className="h-32 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 lg:h-64"></div>
            <div className="h-32 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 lg:h-64"></div>
            <div className="h-32 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 lg:h-64"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-48 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 lg:h-96"></div>
            <div className="h-48 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 lg:h-96"></div>
          </div>
        </div>
      </div>
      <Drawer
        backdrop
        open={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        className="top-0 max-h-[56rem] w-64 border-r bg-white p-0 dark:border-gray-700"
      >
        <Drawer.Items className="h-full">
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="bg-transparent py-0 [&>div]:rounded-xl [&>div]:bg-white"
          >
            <form className="pb-3 md:hidden">
              <TextInput
                icon={HiSearch}
                type="search"
                placeholder="Search"
                required
                rightIcon={() => <Button size="xs">Search</Button>}
                size={32}
              />
            </form>
            <div className="flex h-full flex-col justify-between py-2">
              <div className="h-full overflow-y-auto bg-white pt-1 dark:bg-gray-800 lg:rounded-lg">
                <a
                  href="#"
                  className="dark:hover-bg-gray-700 mb-5 flex w-full items-center justify-between rounded-lg p-2 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  type="button"
                >
                  <span className="sr-only">Open user menu</span>
                  <Avatar
                    alt=""
                    img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    rounded
                  >
                    <div className="mb-0.5 font-semibold leading-none text-gray-900 dark:text-white">
                      Bonnie Green
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      bonnie@flowbite.com
                    </div>
                  </Avatar>
                </a>
                <div className="my-5 border-y border-gray-100 py-5 dark:border-gray-700">
                  <ul className="grid grid-cols-3 gap-2">
                    <li>
                      <a
                        href="#"
                        className="group flex flex-col items-center justify-center rounded-xl bg-primary-50 p-2.5 hover:bg-primary-100 dark:bg-primary-900 dark:hover:bg-primary-800"
                      >
                        <span className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 group-hover:bg-primary-200 dark:bg-primary-800  dark:group-hover:bg-primary-700">
                          <svg
                            className="h-5 w-5 text-primary-600 dark:text-primary-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            ></path>
                          </svg>
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
                          <svg
                            className="h-5 w-5 text-purple-600 dark:text-purple-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                              d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                            ></path>
                            <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                          </svg>
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
                          <svg
                            className="h-5 w-5 text-teal-600 dark:text-teal-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                            ></path>
                          </svg>
                        </span>
                        <span className="text-sm font-medium text-teal-600 dark:text-teal-300">
                          Support
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <Sidebar.Items className="[&_*]:font-medium">
                    <Sidebar.ItemGroup>
                      <Sidebar.Item href="#" icon={HiPresentationChartBar}>
                        Overview
                      </Sidebar.Item>
                      <Sidebar.Collapse icon={HiTruck} label="Orders">
                        <Sidebar.Item href="#">Completed orders</Sidebar.Item>
                        <Sidebar.Item href="#">Orders in delivery</Sidebar.Item>
                        <Sidebar.Item href="#">Canceled orders</Sidebar.Item>
                        <Sidebar.Item href="#">Returns</Sidebar.Item>
                      </Sidebar.Collapse>
                      <Sidebar.Collapse icon={HiCreditCard} label="Payments">
                        <Sidebar.Item href="#">Invoices</Sidebar.Item>
                        <Sidebar.Item href="#">Payouts</Sidebar.Item>
                        <Sidebar.Item href="#">
                          Billing information
                        </Sidebar.Item>
                      </Sidebar.Collapse>
                      <Sidebar.Item
                        href="#"
                        icon={HiFolderDownload}
                        label={5}
                        className="[&>span]:rounded-full"
                      >
                        Messages
                      </Sidebar.Item>
                      <Sidebar.Item icon={HiStar}>Reviews</Sidebar.Item>
                      <Sidebar.Item icon={HiEye}>Recently viewed</Sidebar.Item>
                      <Sidebar.Item icon={HiHeart}>
                        Favourite items
                      </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                      <Sidebar.Item href="#" icon={HiCog}>
                        Settings
                      </Sidebar.Item>
                      <Sidebar.Item href="#" icon={HiIdentification}>
                        Personal info
                      </Sidebar.Item>
                      <Sidebar.Item href="#" icon={HiCreditCard}>
                        Subscriptions
                      </Sidebar.Item>
                      <Sidebar.Item
                        href="#"
                        icon={HiLogout}
                        className="text-red-600 hover:bg-red-100 dark:text-red-600 [&>svg]:text-red-600 dark:[&>svg]:text-red-600"
                      >
                        Log out
                      </Sidebar.Item>
                    </Sidebar.ItemGroup>
                  </Sidebar.Items>
                </div>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </div>
  );
}
