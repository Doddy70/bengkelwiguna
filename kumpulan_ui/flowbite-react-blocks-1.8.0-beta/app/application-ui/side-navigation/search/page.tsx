"use client";

import {
  Button,
  Drawer,
  Dropdown,
  Progress,
  Sidebar,
  TextInput,
  Tooltip,
} from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import {
  HiAdjustments,
  HiChartPie,
  HiClipboard,
  HiCog,
  HiDocument,
  HiExternalLink,
  HiFolderDownload,
  HiLockClosed,
  HiMenuAlt1,
  HiSearch,
  HiShoppingBag,
} from "react-icons/hi";
import { HiLifebuoy, HiRectangleStack } from "react-icons/hi2";

export default function SidenavWithSearch() {
  const [isOpen, setOpen] = useState(true);

  return (
    <>
      <div className="p-4">
        <button
          onClick={() => setOpen(!isOpen)}
          className="rounded-md p-1 text-xl text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          <span className="sr-only">Toggle sidenav</span>
          <HiMenuAlt1 />
        </button>
      </div>
      <Drawer
        onClose={() => setOpen(false)}
        open={isOpen}
        className="w-64 border-r px-3 dark:border-gray-800"
      >
        <Drawer.Items className="h-full">
          <Sidebar
            aria-label="Default side navigation"
            className="w-full [&>div]:bg-transparent [&>div]:p-0 [&_*]:font-medium"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <a
                    href="https://flowbite.com"
                    className="mb-5 flex items-center pl-2"
                  >
                    <img
                      src="https://flowbite.com/docs/images/logo.svg"
                      className="mr-3 h-6 sm:h-8"
                      alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                      Flowbite
                    </span>
                  </a>
                  <form action="#" className="mx-1">
                    <TextInput
                      icon={HiSearch}
                      id="search"
                      name="search"
                      placeholder="Search"
                      type="search"
                    />
                  </form>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                  <Sidebar.Item href="#" icon={HiChartPie}>
                    Overview
                  </Sidebar.Item>
                  <Sidebar.Collapse icon={HiDocument} label="Pages">
                    <Sidebar.Item href="#">Settings</Sidebar.Item>
                    <Sidebar.Item href="#">Kanban</Sidebar.Item>
                    <Sidebar.Item href="#">Calendar</Sidebar.Item>
                  </Sidebar.Collapse>
                  <Sidebar.Collapse icon={HiShoppingBag} label="Sales">
                    <Sidebar.Item href="#">Products</Sidebar.Item>
                    <Sidebar.Item href="#">Billing</Sidebar.Item>
                    <Sidebar.Item href="#">Invoice</Sidebar.Item>
                  </Sidebar.Collapse>
                  <Sidebar.Item
                    href="#"
                    icon={HiFolderDownload}
                    label={6}
                    className="[&_span]:rounded-full"
                  >
                    Messages
                  </Sidebar.Item>
                  <Sidebar.Collapse icon={HiLockClosed} label="Authentication">
                    <Sidebar.Item href="#">Sign In</Sidebar.Item>
                    <Sidebar.Item href="#">Sign Up</Sidebar.Item>
                    <Sidebar.Item href="#">Forgot Password</Sidebar.Item>
                  </Sidebar.Collapse>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                  <Sidebar.Item href="#" icon={HiClipboard}>
                    Docs
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiRectangleStack}>
                    Components
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiLifebuoy}>
                    Help
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
              <div className="hidden w-full justify-center space-x-4 px-4 pt-6 lg:flex">
                <button className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="sr-only">Tweaks</span>
                  <HiAdjustments className="h-6 w-6" />
                </button>
                <Tooltip content="Settings page">
                  <Link
                    href="#"
                    className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Settings page</span>
                    <HiCog className="h-6 w-6" />
                  </Link>
                </Tooltip>
                <div>
                  <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                      <span className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="sr-only">Current language</span>
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
                            <span className="whitespace-nowrap">
                              中文 (繁體)
                            </span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </Dropdown>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 z-20 w-full justify-center bg-white p-4 dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Space left
              </p>
              <div className="font-medium text-gray-900 dark:text-white">
                70 of 150 GB
              </div>
              <div className="mb-4 mt-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                <Progress color="green" progress={50} />
              </div>
              <Button color="gray" className="w-full">
                <HiExternalLink className="mr-2 h-5 w-5" />
                Upgrde to Pro
              </Button>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
