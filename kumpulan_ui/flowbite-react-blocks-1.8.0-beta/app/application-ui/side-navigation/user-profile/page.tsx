"use client";

import { Avatar, Button, Drawer, Sidebar } from "flowbite-react";
import { useState } from "react";
import {
  HiAcademicCap,
  HiClipboard,
  HiExternalLink,
  HiIdentification,
  HiMenuAlt1,
  HiPhone,
} from "react-icons/hi";
import { HiRectangleStack } from "react-icons/hi2";

export default function SidenavWithUserProfile() {
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
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <Avatar
                    img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    rounded
                    size="lg"
                    className="mb-4"
                  />
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Michael Gough</a>
                  </h3>
                  <p className="font-light text-gray-500 dark:text-gray-400">
                    name@company.com
                  </p>
                  <Button
                    color="gray"
                    className="my-5 w-full [&>span]:flex [&>span]:items-center"
                  >
                    <HiExternalLink className="mr-2 h-5 w-5" />
                    Logout
                  </Button>
                  <ul className="mb-4 flex justify-center space-x-1">
                    <li>
                      <a
                        href="#"
                        className="inline-flex rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                      >
                        <svg
                          className="h-6 w-6"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-flex rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                      >
                        <svg
                          className="h-6 w-6"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-flex rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                      >
                        <svg
                          className="h-6 w-6"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </Sidebar.ItemGroup>
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
            </Sidebar.Items>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
