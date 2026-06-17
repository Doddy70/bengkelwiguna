"use client";

import { Drawer, Sidebar } from "flowbite-react";
import { useState } from "react";
import {
  HiChartPie,
  HiDocument,
  HiFolderDownload,
  HiLockClosed,
  HiMenuAlt1,
  HiShoppingBag,
} from "react-icons/hi";

export default function SidenavWithUserContacts() {
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
      <Drawer onClose={() => setOpen(false)} open={isOpen} className="max-w-64">
        <Drawer.Items className="h-full">
          <Sidebar
            aria-label="Default side navigation"
            className="w-full [&>div]:bg-transparent [&>div]:p-0 [&_*]:font-medium"
          >
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
                <div className="mb-4 pl-2 text-sm font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
                  Active contacts
                </div>
                <ul className="space-y-4 pl-2 dark:border-gray-700">
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white"
                    >
                      <div className="relative mr-2.5">
                        <img
                          className="h-6 w-6 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                          alt="jese avatar"
                        />
                        <span className="absolute left-4 top-0 h-3 w-3 rounded-full border-2 border-white bg-green-400 dark:border-gray-800"></span>
                      </div>
                      Jese Leos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white"
                    >
                      <div className="relative mr-2.5">
                        <img
                          className="h-6 w-6 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                          alt="bonnie avatar"
                        />
                        <span className="absolute left-4 top-0 h-3 w-3 rounded-full border-2 border-white bg-green-400 dark:border-gray-800"></span>
                      </div>
                      Bonnie Green
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white"
                    >
                      <div className="relative mr-2.5">
                        <img
                          className="h-6 w-6 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                          alt="Joseph avatar"
                        />
                        <span className="absolute left-4 top-0 h-3 w-3 rounded-full border-2 border-white bg-red-400 dark:border-gray-800"></span>
                      </div>
                      Joseph McFall
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white"
                    >
                      <div className="relative mr-2.5">
                        <img
                          className="h-6 w-6 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                          alt="Lana avatar"
                        />
                        <span className="absolute left-4 top-0 h-3 w-3 rounded-full border-2 border-white bg-red-400 dark:border-gray-800"></span>
                      </div>
                      Lana Byrd
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white"
                    >
                      <div className="relative mr-2.5">
                        <img
                          className="h-6 w-6 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                          alt="Leslie avatar"
                        />
                        <span className="absolute left-4 top-0 h-3 w-3 rounded-full border-2 border-white bg-green-400 dark:border-gray-800"></span>
                      </div>
                      Leslie Livingston
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white"
                    >
                      <div className="relative mr-2.5">
                        <img
                          className="h-6 w-6 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
                          alt="Thomas avatar"
                        />
                        <span className="absolute left-4 top-0 h-3 w-3 rounded-full border-2 border-white bg-green-400 dark:border-gray-800"></span>
                      </div>
                      Thomas Lean
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white"
                    >
                      <div className="relative mr-2.5">
                        <img
                          className="h-6 w-6 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                          alt="Robert avatar"
                        />
                        <span className="absolute left-4 top-0 h-3 w-3 rounded-full border-2 border-white bg-red-400 dark:border-gray-800"></span>
                      </div>
                      Robert Brown
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white"
                    >
                      <div className="relative mr-2.5">
                        <img
                          className="h-6 w-6 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                          alt="Micheal avatar"
                        />
                        <span className="absolute left-4 top-0 h-3 w-3 rounded-full border-2 border-white bg-green-400 dark:border-gray-800"></span>
                      </div>
                      Micheal Gough
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white"
                    >
                      <div className="relative mr-2.5">
                        <img
                          className="h-6 w-6 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                          alt="Roberta avatar"
                        />
                        <span className="absolute left-4 top-0 h-3 w-3 rounded-full border-2 border-white bg-green-400 dark:border-gray-800"></span>
                      </div>
                      Roberta Casas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white"
                    >
                      <div className="relative mr-2.5">
                        <img
                          className="h-6 w-6 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"
                          alt="Neil avatar"
                        />
                        <span className="absolute left-4 top-0 h-3 w-3 rounded-full border-2 border-white bg-green-400 dark:border-gray-800"></span>
                      </div>
                      Neil Sims
                    </a>
                  </li>
                </ul>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
            <div className="absolute bottom-0 left-0 z-20 hidden w-full justify-center space-x-4 bg-white p-4 dark:bg-gray-800 lg:flex">
              <a
                href="#"
                className="inline-flex cursor-pointer items-center rounded p-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="mr-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                </svg>
                Settings
              </a>
              <a
                href="#"
                data-tooltip-target="tooltip-settings"
                className="inline-flex cursor-pointer items-center rounded p-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="mr-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Help
              </a>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
