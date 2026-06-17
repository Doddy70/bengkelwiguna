"use client";

import { Alert, Badge, Drawer, Sidebar, theme } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import {
  HiChartPie,
  HiClipboard,
  HiDocument,
  HiFolderDownload,
  HiLockClosed,
  HiMenuAlt1,
  HiShoppingBag,
} from "react-icons/hi";
import { HiLifebuoy, HiRectangleStack } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

export default function SidenavWithNotifications() {
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
        className="max-w-64 border-r px-3 dark:border-gray-800"
      >
        <Drawer.Items className="h-full">
          <Sidebar className="w-full [&>div]:bg-transparent [&>div]:p-0">
            <Sidebar.Items className="h-full">
              <div className="flex h-full flex-col justify-between py-2">
                <div>
                  <Sidebar.ItemGroup>
                    <Link href="#" className="mb-5 flex items-center pl-2">
                      <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-8"
                        alt="Flowbite"
                      />
                      <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                        Flowbite
                      </span>
                    </Link>
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
                    <Sidebar.Item href="#" icon={HiRectangleStack}>
                      Components
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiLifebuoy}>
                      Help
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                </div>
                <div className="space-y-3">
                  <Alert
                    additionalContent={
                      <>
                        <div className="mb-3 mt-1 text-sm text-gray-700 dark:text-gray-300">
                          A new system update is available today.
                        </div>
                        <Link
                          href="#"
                          className="inline-flex items-center text-sm font-medium text-purple-600 hover:underline dark:text-purple-500"
                        >
                          Update now
                          <svg
                            aria-hidden="true"
                            className="ml-1 h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </Link>
                      </>
                    }
                    color="gray"
                    onDismiss={() => void 0}
                    rounded
                    theme={{
                      closeButton: {
                        base: twMerge(theme.alert.closeButton.base, "h-7 w-7"),
                        icon: "h-4 w-4",
                      },
                    }}
                  >
                    <Badge
                      color="purple"
                      className="font-normal dark:bg-purple-600 dark:text-purple-200"
                    >
                      New update
                    </Badge>
                  </Alert>
                  <Alert
                    additionalContent={
                      <>
                        <div className="mb-3 mt-1 text-sm text-gray-700 dark:text-gray-300">
                          Flowbite Widget Generator is now ready.
                        </div>
                        <a
                          href="#"
                          className="inline-flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                          Download
                          <svg
                            aria-hidden="true"
                            className="ml-1 h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </>
                    }
                    color="gray"
                    onDismiss={() => void 0}
                    rounded
                    theme={{
                      closeButton: {
                        base: twMerge(theme.alert.closeButton.base, "h-7 w-7"),
                        icon: "h-4 w-4",
                      },
                    }}
                  >
                    <Badge
                      color="blue"
                      className="font-normal dark:bg-blue-600 dark:text-blue-200"
                    >
                      New plugin
                    </Badge>
                  </Alert>
                </div>
              </div>
            </Sidebar.Items>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
