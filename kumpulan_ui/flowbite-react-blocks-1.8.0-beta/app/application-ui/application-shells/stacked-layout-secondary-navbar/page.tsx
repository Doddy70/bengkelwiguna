"use client";

import { Dropdown, Navbar, theme } from "flowbite-react";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

export default function StackedLayoutWithSecondaryNavbar() {
  return (
    <div className="bg-white dark:bg-gray-800">
      <Navbar
        fluid
        theme={{
          root: {
            base: "border-b bg-white dark:border-gray-700 dark:bg-gray-800",
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
            </div>
            <div className="flex items-center md:order-2">
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                My profile
              </a>
              <span className="px-3 text-gray-200 dark:text-gray-700">|</span>
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
        <Navbar.Collapse
          theme={{
            list: twMerge(
              theme.navbar.collapse.list,
              "mt-0 hidden w-full bg-white dark:bg-gray-900 md:space-x-0 md:bg-gray-50 md:px-6 md:py-2 md:dark:bg-gray-700 lg:flex",
            ),
          }}
        >
          <Navbar.Link
            href="#"
            className="rounded-lg text-sm font-medium dark:text-gray-100 md:px-3 md:py-2.5 lg:hover:bg-gray-100 lg:hover:text-gray-900 lg:dark:hover:bg-gray-600"
          >
            Overview
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="rounded-lg text-sm font-medium dark:text-gray-100 md:px-3 md:py-2.5 lg:hover:bg-gray-100 lg:hover:text-gray-900 lg:dark:hover:bg-gray-600"
          >
            Sales
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="rounded-lg text-sm font-medium dark:text-gray-100 md:px-3 md:py-2.5 lg:hover:bg-gray-100 lg:hover:text-gray-900 lg:dark:hover:bg-gray-600"
          >
            Billing
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="rounded-lg text-sm font-medium dark:text-gray-100 md:px-3 md:py-2.5 lg:hover:bg-gray-100 lg:hover:text-gray-900 lg:dark:hover:bg-gray-600"
          >
            Team
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="rounded-lg text-sm font-medium dark:text-gray-100 md:px-3 md:py-2.5 lg:hover:bg-gray-100 lg:hover:text-gray-900 lg:dark:hover:bg-gray-600"
          >
            Resources
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="rounded-lg text-sm font-medium dark:text-gray-100 md:px-3 md:py-2.5 lg:hover:bg-gray-100 lg:hover:text-gray-900 lg:dark:hover:bg-gray-600"
          >
            Messages
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="rounded-lg text-sm font-medium dark:text-gray-100 md:px-3 md:py-2.5 lg:hover:bg-gray-100 lg:hover:text-gray-900 lg:dark:hover:bg-gray-600"
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
            Overview
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="rounded-lg border-none px-3 py-2 text-sm font-medium hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-600"
          >
            Sales
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="rounded-lg border-none px-3 py-2 text-sm font-medium hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-600"
          >
            Billing
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
                    "mt-5 w-56 rounded-xl",
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
      <div className="flex-1 space-y-4 p-4">
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 lg:gap-4">
          <div className="col-span-1 mb-4 grid gap-4 lg:mb-0">
            <div className="flex h-32 items-center justify-center rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-600 lg:h-48"></div>
            <div className="flex h-32 items-center justify-center rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-600 lg:h-48"></div>
            <div className="flex h-32 items-center justify-center rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-600 lg:h-48"></div>
            <div className="flex h-32 items-center justify-center rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-600 lg:h-48"></div>
          </div>
          <div className="col-span-2 flex flex-col gap-4">
            <div className="flex h-32 items-center justify-center rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-600 lg:h-64"></div>
            <div className="flex h-32 items-center justify-center rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-600 lg:h-64"></div>
            <div className="flex h-32 items-center justify-center rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-600 lg:h-64"></div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="flex h-32 w-full flex-1 items-center justify-center rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-600 lg:h-64"></div>
          <div className="flex h-32 w-full flex-1 items-center justify-center rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-600 lg:h-64"></div>
        </div>
      </div>
    </div>
  );
}
