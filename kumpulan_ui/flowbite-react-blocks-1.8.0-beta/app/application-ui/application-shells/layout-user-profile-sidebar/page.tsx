"use client";

import {
  Avatar,
  Drawer,
  Dropdown,
  Navbar,
  Sidebar,
  Tooltip,
} from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  HiAcademicCap,
  HiAdjustments,
  HiArchive,
  HiBell,
  HiBookOpen,
  HiChartPie,
  HiClipboard,
  HiCog,
  HiCollection,
  HiCurrencyDollar,
  HiDocument,
  HiEye,
  HiFolderDownload,
  HiIdentification,
  HiInbox,
  HiInformationCircle,
  HiLockClosed,
  HiLogout,
  HiMenuAlt1,
  HiOutlineTicket,
  HiPhone,
  HiQuestionMarkCircle,
  HiShoppingBag,
  HiUserCircle,
  HiUsers,
  HiViewGrid,
} from "react-icons/hi";
import { HiRectangleStack } from "react-icons/hi2";

export default function ShellLayoutWithUserProfileSidebar() {
  const [isMobile, setMobile] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isUserSidebarOpen, setUserSidebarOpen] = useState(true);

  function hideSidebarOnResize() {
    const isMobileNow = window.innerWidth < 768;
    setMobile(isMobileNow);
    setSidebarOpen(!isMobileNow);
    setUserSidebarOpen(!isMobileNow);
  }

  useEffect(() => {
    hideSidebarOnResize();

    window.addEventListener("resize", hideSidebarOnResize);

    return () => window.removeEventListener("resize", hideSidebarOnResize);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Navbar
        fluid
        className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white p-0 dark:border-gray-700 dark:bg-gray-800 sm:p-0 lg:hidden"
      >
        <div className="w-full p-3 pr-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!isSidebarOpen)}
                className="mr-3 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:hidden"
              >
                <span className="sr-only">Toggle sidebar</span>
                <div className="lg:hidden">
                  <HiMenuAlt1 className="h-6 w-6" />
                </div>
                <div className="hidden lg:block">
                  <HiMenuAlt1 className="h-6 w-6" />
                </div>
              </button>
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
            </div>
            <div className="flex items-center lg:gap-3">
              <div className="flex items-center gap-3">
                <Dropdown
                  className="rounded"
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
                    <div className="block rounded-t-xl bg-gray-50 px-4 py-2 text-center text-base font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-400">
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
                      className="block rounded-b-xl border-t border-gray-200 bg-gray-50 py-2 text-center text-base font-normal text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:underline"
                    >
                      <div className="inline-flex items-center gap-x-2">
                        <HiEye className="h-5 w-5" />
                        <span>View all</span>
                      </div>
                    </Link>
                  </div>
                </Dropdown>
                <button onClick={() => setUserSidebarOpen(true)}>
                  <Avatar
                    alt=""
                    img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                    rounded
                    size="sm"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
      <div className="relative mt-1 flex h-full w-full flex-1 md:mt-0">
        <Drawer
          backdrop={isMobile}
          open={isSidebarOpen}
          onClose={() => isMobile && setSidebarOpen(false)}
          className="top-16 max-h-[calc(100vh-4rem)] w-64 border-r px-2 py-1 dark:border-gray-700 lg:top-0 lg:max-h-screen"
        >
          <Drawer.Items className="h-full">
            <Sidebar
              aria-label="Sidebar with multi-level dropdown example"
              className="w-full [&>div]:bg-transparent [&>div]:p-0 [&_*]:font-medium"
            >
              <div className="hidden items-center px-2 lg:mb-4 lg:mt-3 lg:flex">
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
              </div>
              <div className="flex h-full flex-col justify-between py-2">
                <div>
                  <Sidebar.Items className="pb-32">
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
                        label={8}
                        className="[&_span]:rounded-full"
                      >
                        Messages
                      </Sidebar.Item>
                      <Sidebar.Collapse
                        icon={HiLockClosed}
                        label="Authentication"
                      >
                        <Sidebar.Item href="#">Sign In</Sidebar.Item>
                        <Sidebar.Item href="#">Sign Up</Sidebar.Item>
                        <Sidebar.Item href="#">Forgot Password</Sidebar.Item>
                      </Sidebar.Collapse>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                      <Sidebar.Item href="#" icon={HiClipboard}>
                        Docs
                      </Sidebar.Item>
                      <Sidebar.Item href="#" icon={HiCollection}>
                        Components
                      </Sidebar.Item>
                      <Sidebar.Item href="#" icon={HiInformationCircle}>
                        Help
                      </Sidebar.Item>
                    </Sidebar.ItemGroup>
                  </Sidebar.Items>
                </div>
                <div
                  hidden={isMobile}
                  className="absolute bottom-0 left-0 z-20 hidden w-full justify-center space-x-4 bg-white p-4 dark:bg-gray-800 lg:flex"
                >
                  <button className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span className="sr-only">Tweaks</span>
                    <HiAdjustments className="h-6 w-6" />
                  </button>
                  <Tooltip content="Settings page">
                    <Link
                      href="/users/settings"
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
            </Sidebar>
          </Drawer.Items>
        </Drawer>
        <div className="flex h-full w-full flex-1 flex-col items-stretch space-y-4 p-4 pt-20 dark:bg-gray-900 md:pt-4 lg:mx-64">
          <div className="h-96 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600"></div>
          <div className="h-96 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600"></div>
          <div className="h-96 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600"></div>
          <div className="h-96 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600"></div>
          <div className="h-96 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600"></div>
        </div>
        <Drawer
          backdrop={isMobile}
          open={isUserSidebarOpen}
          onClose={() => isMobile && setUserSidebarOpen(false)}
          position="right"
          className="top-16 max-h-[calc(100vh-4rem)] w-64 overflow-visible border-l px-0 py-1 dark:border-gray-700 lg:top-0 lg:max-h-screen"
        >
          <Sidebar id="user-sidebar" className="[&>div]:bg-white">
            <div className="flex flex-col items-center">
              <Avatar
                img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/lana-byrd.png"
                rounded
                size="lg"
                alt=""
              />
              <div className="mt-2 text-center">
                <h3 className="text-xl font-bold dark:text-white">
                  Leslie Livingston
                </h3>
                <p className="dark:text-gray-400">name@flowbite.com</p>
              </div>
              <button
                type="button"
                className="my-5 flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-4 w-4 dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
                Logout
              </button>
              <div className="flex items-center justify-center">
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <span className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      <span className="sr-only">Apps</span>
                      <HiViewGrid className="h-6 w-6" />
                    </span>
                  }
                  theme={{ content: "py-0" }}
                  className="w-72 rounded-lg"
                >
                  <div className="block rounded-t-lg border-b border-gray-100 bg-gray-50 px-4 py-2 text-center text-base font-medium text-gray-700 dark:border-b-gray-600 dark:bg-gray-600 dark:text-white">
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
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <span className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      <span className="sr-only">Notifications</span>
                      <HiBell className="h-6 w-6" />
                    </span>
                  }
                  theme={{ content: "py-0" }}
                  className="w-96 rounded-xl"
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
                  arrowIcon={false}
                  inline
                  label={
                    <span className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      <span className="sr-only">Support</span>
                      <HiQuestionMarkCircle className="h-6 w-6" />
                    </span>
                  }
                  // placement="left"
                  theme={{ content: "py-0" }}
                  className="rounded-xl"
                >
                  <div className="max-w-sm">
                    <div className="block rounded-t-xl bg-gray-50 px-4 py-2 text-center text-base font-medium text-gray-700 dark:bg-gray-600 dark:text-white">
                      Support
                    </div>
                    <div>
                      <a
                        href="#"
                        className="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                      >
                        <div className="w-full">
                          <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                            Learn how to create new projects
                          </div>
                          <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                            Read more &rarr;
                          </div>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                      >
                        <div className="w-full">
                          <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                            Invite your coworkers
                          </div>
                          <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                            Read more &rarr;
                          </div>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                      >
                        <div className="w-full">
                          <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                            Become a pro user
                          </div>
                          <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                            Read more &rarr;
                          </div>
                        </div>
                      </a>
                    </div>
                    <Link
                      href="#"
                      className="block rounded-b-xl border-t border-gray-100 bg-gray-50 py-2 text-center text-base font-normal text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:hover:underline"
                    >
                      <div className="inline-flex items-center gap-x-2 text-sm">
                        <HiBookOpen className="text-gray-500 dark:text-gray-200" />
                        <span>View full docs</span>
                      </div>
                    </Link>
                  </div>
                </Dropdown>
              </div>
            </div>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiIdentification}>
                About
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiRectangleStack}>
                Projects
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiAcademicCap}>
                Work experience
              </Sidebar.Item>
              <Sidebar.Collapse icon={HiClipboard} label="Tasks">
                <Sidebar.Item href="#">To do</Sidebar.Item>
                <Sidebar.Item href="#">In progress</Sidebar.Item>
                <Sidebar.Item href="#">Completed</Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Item href="#" icon={HiPhone}>
                Contact
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar>
        </Drawer>
      </div>
    </div>
  );
}
