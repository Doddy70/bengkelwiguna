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

export default function SidenavWithAlertInfo() {
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
            aria-label="Sidenav with alert info"
            className="w-full [&>div]:bg-transparent [&>div]:p-0"
          >
            <Sidebar.Items>
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
                <Sidebar.Item href="#" icon={HiLifebuoy} className="mb-4">
                  Help
                </Sidebar.Item>
                <Alert
                  additionalContent={
                    <>
                      <div className="mb-3 mt-2 text-sm font-light text-primary-700 dark:text-primary-300">
                        Preview the new Flowbite v2.0! You can turn the new
                        features off for a limited time in your settings page.
                      </div>
                      <Link
                        href="#"
                        className="text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-300"
                      >
                        Turn new features off
                      </Link>
                    </>
                  }
                  color="info"
                  onDismiss={() => void 0}
                  rounded
                  theme={{
                    closeButton: {
                      base: twMerge(theme.alert.closeButton.base, "h-7 w-7"),
                      icon: "h-4 w-4",
                    },
                  }}
                >
                  <Badge color="purple">Beta</Badge>
                </Alert>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
