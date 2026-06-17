"use client";

import {
  Avatar,
  Drawer,
  Dropdown,
  Sidebar,
  TextInput,
  theme,
} from "flowbite-react";
import { useState } from "react";
import {
  HiAcademicCap,
  HiBookOpen,
  HiClipboardCheck,
  HiColorSwatch,
  HiIdentification,
  HiLightBulb,
  HiMenuAlt1,
  HiPlus,
  HiPresentationChartBar,
  HiShoppingCart,
  HiUsers,
} from "react-icons/hi";
import { HiMegaphone, HiRectangleStack } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

export default function SidenavWithUserSwitch() {
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
        className="max-w-64 border-r dark:border-gray-800"
      >
        <Drawer.Items className="h-full">
          <Sidebar
            aria-label="Sidenav with user profile"
            className="w-full [&>div]:bg-transparent [&>div]:p-0"
          >
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <div>
                  <Dropdown
                    inline
                    label={
                      <div className="flex w-full items-center justify-between">
                        <Avatar
                          img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                          rounded
                          size="sm"
                          className="space-x-0 text-left [&_img]:mr-3"
                        >
                          <div className="mb-0.5 text-base font-semibold leading-none text-gray-900 dark:text-white">
                            Bonnie Green
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            bonnie@flowbite.com
                          </div>
                        </Avatar>
                        <svg
                          className="h-5 w-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    }
                    theme={{
                      arrowIcon: "hidden",
                      inlineWrapper: twMerge(
                        theme.dropdown.inlineWrapper,
                        "w-full rounded-lg p-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700",
                      ),
                      content: twMerge(theme.dropdown.content, "py-0"),
                      floating: {
                        base: twMerge(theme.dropdown.floating.base, "w-60"),
                      },
                    }}
                  >
                    <Dropdown.Item className="border-b border-gray-100 py-3 dark:border-gray-600">
                      <Avatar
                        img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                        rounded
                        size="sm"
                        className="space-x-0 text-left [&_img]:mr-3"
                      >
                        <div className="mb-0.5 text-base font-semibold leading-none text-gray-900 dark:text-white">
                          Michael Gough
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          michael@flowbite.com
                        </div>
                      </Avatar>
                    </Dropdown.Item>
                    <Dropdown.Item className="py-3">
                      <Avatar
                        img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                        rounded
                        size="sm"
                        className="space-x-0 text-left [&_img]:mr-3"
                      >
                        <div className="mb-0.5 text-base font-semibold leading-none text-gray-900 dark:text-white">
                          Roberta Casas
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          roberta@flowbite.com
                        </div>
                      </Avatar>
                    </Dropdown.Item>
                  </Dropdown>
                </div>
                <div className="py-2">
                  <TextInput
                    icon={HiRectangleStack}
                    id="searchProjects"
                    name="searchProjects"
                    placeholder="Search projects"
                    type="search"
                  />
                </div>
                <Sidebar.Item href="#" icon={HiIdentification}>
                  Activity
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiBookOpen}>
                  Contacts
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiClipboardCheck}>
                  Tasks
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <div className="mb-2 flex items-center justify-between pl-2 text-sm font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
                  <h3>Collections</h3>
                  <a
                    href="#"
                    className="mr-1 inline-flex rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
                <Sidebar.Item href="#" icon={HiShoppingCart}>
                  Sales
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiColorSwatch}>
                  Design
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiMegaphone}>
                  Fundraising
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiPresentationChartBar}>
                  Internal
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiLightBulb}>
                  Customer Success
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiUsers}>
                  Networking
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiAcademicCap}>
                  Legal
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  icon={HiPlus}
                  className="text-gray-500 hover:text-gray-900  dark:text-gray-400 dark:hover:text-white"
                >
                  Add collection
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
