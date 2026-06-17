"use client";

import {
  Avatar,
  Dropdown,
  Label,
  Navbar,
  Select,
  TextInput,
} from "flowbite-react";
import Link from "next/link";
import {
  HiArchive,
  HiBell,
  HiCog,
  HiCurrencyDollar,
  HiEye,
  HiInbox,
  HiLogout,
  HiOutlineTicket,
  HiSearch,
  HiShoppingBag,
  HiUserCircle,
  HiUsers,
  HiViewGrid,
} from "react-icons/hi";

export default function StackedLayoutWithTabsAndNavbar() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <Navbar
        fluid
        className="fixed top-0 z-50 w-full border-b bg-white p-0 dark:border-gray-700 dark:bg-gray-800 sm:p-0 lg:border-none"
      >
        <div className="w-full border-b border-gray-200 p-3 pr-4 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Navbar.Brand as={Link} href="/" className="mr-4">
                <img
                  className="mr-3 h-8"
                  alt=""
                  src="https://flowbite.com/images/logo.svg"
                  width={32}
                  height={32}
                />
                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                  Flowbite
                </span>
              </Navbar.Brand>
              <form className="hidden lg:block lg:pl-2">
                <Label htmlFor="search" className="sr-only">
                  Search
                </Label>
                <TextInput
                  className="w-full lg:w-96"
                  icon={HiSearch}
                  id="search"
                  name="search"
                  placeholder="Search"
                  required
                  type="search"
                />
              </form>
            </div>
            <div className="flex items-center lg:gap-3">
              <div className="flex items-center">
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
                            &nbsp;posted a new video: Glassmorphism - learn how
                            to implement the new design trend.
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
                <Dropdown
                  className="rounded-xl"
                  arrowIcon={false}
                  inline
                  label={
                    <span className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      <span className="sr-only">Apps</span>
                      <HiViewGrid className="h-6 w-6" />
                    </span>
                  }
                  theme={{ content: "py-0" }}
                >
                  <div className="block rounded-t-xl border-b border-gray-100 bg-gray-50 px-4 py-2 text-center text-base font-medium text-gray-700 dark:border-b-gray-600 dark:bg-gray-600 dark:text-white">
                    Apps
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-4">
                    <Link
                      href="#"
                      className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <HiShoppingBag className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400" />
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Sales
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <HiUsers className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400" />
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Users
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <HiInbox className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400" />
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Inbox
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <HiUserCircle className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400" />
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Profile
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <HiCog className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400" />
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Settings
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <HiArchive className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400" />
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Products
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <HiCurrencyDollar className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400" />
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Pricing
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <HiOutlineTicket className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400" />
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Billing
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <HiLogout className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400" />
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Logout
                      </div>
                    </Link>
                  </div>
                </Dropdown>
                <div className="ml-3 flex items-center">
                  <Dropdown
                    className="w-56 rounded-lg"
                    arrowIcon={false}
                    inline
                    label={
                      <span>
                        <span className="sr-only">User menu</span>
                        <Avatar
                          alt=""
                          img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                          rounded
                          size="sm"
                        />
                      </span>
                    }
                  >
                    <Dropdown.Header className="px-4 py-3">
                      <span className="block text-sm font-bold">Neil Sims</span>
                      <span className="block truncate text-sm">
                        neil.sims@flowbite.com
                      </span>
                    </Dropdown.Header>
                    <Dropdown.Item className="hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                      My profile
                    </Dropdown.Item>
                    <Dropdown.Item className="hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                      Account settings
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <svg
                        className="mr-2 h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      My likes
                    </Dropdown.Item>
                    <Dropdown.Item className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <svg
                        className="mr-2 h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                      </svg>
                      Collections
                    </Dropdown.Item>
                    <Dropdown.Item className="flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <span className="flex items-center">
                        <svg
                          aria-hidden
                          className="mr-2 h-5 w-5 text-primary-600 dark:text-primary-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        Pro version
                      </span>
                      <svg
                        aria-hidden
                        className="h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Sign out
                    </Dropdown.Item>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Navbar.Collapse className="hidden justify-center bg-gray-100 pt-6 dark:bg-gray-900 lg:flex lg:w-full">
          <div className="flex flex-col items-center border-b border-gray-200 bg-gray-100 shadow-sm dark:border-gray-800 dark:bg-gray-900 lg:flex-row [&_li]:w-full lg:[&_li]:w-auto">
            <Navbar.Link
              aria-current="page"
              href="#"
              className="block border-b p-0 dark:border-gray-700 lg:inline lg:border-b-0"
            >
              <span className="block border-b-2 border-primary-600 px-4 py-3 text-sm font-medium text-primary-600 hover:text-primary-600 dark:border-primary-500 dark:text-primary-500">
                My account
              </span>
            </Navbar.Link>
            <Navbar.Link
              href="#"
              className="block border-b p-0 dark:border-gray-700 md:inline md:border-b-0"
            >
              <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                Company
              </span>
            </Navbar.Link>
            <Navbar.Link
              href="#"
              className="block border-b p-0 dark:border-gray-700 md:inline md:border-b-0"
            >
              <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                Downloads
              </span>
            </Navbar.Link>
            <Navbar.Link
              href="#"
              className="block border-b p-0 dark:border-gray-700 md:inline md:border-b-0"
            >
              <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                Earnings
              </span>
            </Navbar.Link>
            <Navbar.Link
              href="#"
              className="block border-b p-0 dark:border-gray-700 md:inline md:border-b-0"
            >
              <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                Billing
              </span>
            </Navbar.Link>
            <Navbar.Link
              href="#"
              className="block border-b p-0 dark:border-gray-700 md:inline md:border-b-0"
            >
              <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                Help &amp; Support
              </span>
            </Navbar.Link>
          </div>
        </Navbar.Collapse>
        <div className="w-full border-t bg-gray-100 p-3 dark:border-gray-700 dark:bg-gray-800 lg:hidden">
          <Select className="w-full">
            <option>My account</option>
            <option>Company</option>
            <option>Downloads</option>
            <option>Earnings</option>
            <option>Billing</option>
            <option>Help &amp; Support</option>
          </Select>
        </div>
      </Navbar>
      <div className="flex-1 space-y-4 p-4 pt-[9.5rem] lg:pt-[11rem]">
        <div className="h-96 flex-1 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600"></div>
        <div className="h-96 flex-1 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600"></div>
        <div className="h-96 flex-1 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600"></div>
        <div className="h-96 flex-1 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600"></div>
        <div className="h-96 flex-1 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600"></div>
      </div>
    </div>
  );
}
