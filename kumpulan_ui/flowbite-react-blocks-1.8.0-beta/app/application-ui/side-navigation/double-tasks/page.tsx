"use client";

import {
  Alert,
  Avatar,
  Badge,
  Checkbox,
  Drawer,
  Dropdown,
  Label,
  Sidebar,
  theme,
} from "flowbite-react";
import { useState } from "react";
import {
  HiCalendar,
  HiClipboardCheck,
  HiFolderDownload,
  HiMenuAlt1,
  HiOutlineDotsHorizontal,
  HiPlus,
  HiShoppingBag,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export default function DoubleSidenavWithTasks() {
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
        position="right"
        className="border-l p-0 dark:border-gray-800"
      >
        <Drawer.Items className="h-full">
          <Sidebar collapsed className="border-r dark:border-gray-700">
            <Sidebar.ItemGroup className="[&_[role=tooltip]]:hidden [&_svg]:text-gray-400">
              <Sidebar.Item href="#" icon={HiCalendar} />
              <Sidebar.Item href="#" icon={HiClipboardCheck} />
              <Sidebar.Item href="#" icon={HiShoppingBag} />
              <Sidebar.Item href="#" icon={HiFolderDownload} />
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiPlus} />
            </Sidebar.ItemGroup>
          </Sidebar>
          <Sidebar>
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
                          className="text-left"
                        >
                          <div className="mb-0.5 text-base font-semibold leading-none text-gray-900 dark:text-white">
                            Tasks
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Bonnie Green
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
                      content: twMerge(theme.dropdown.content, "py-0"),
                      floating: {
                        content: twMerge(
                          theme.dropdown.floating.content,
                          "w-72",
                        ),
                      },
                      inlineWrapper: twMerge(
                        theme.dropdown.inlineWrapper,
                        "w-full rounded-lg p-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700",
                      ),
                    }}
                  >
                    <Dropdown.Item className="border-b py-3 dark:border-gray-600">
                      <svg
                        aria-hidden="true"
                        className="mr-3 h-8 w-8 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="text-left">
                        <div className="mb-0.5 font-semibold leading-none text-gray-900 dark:text-white">
                          Calendar
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          My calendar
                        </div>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item className="py-3">
                      <svg
                        aria-hidden="true"
                        className="mr-3 h-8 w-8 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="text-left">
                        <div className="mb-0.5 font-semibold leading-none text-gray-900 dark:text-white">
                          Collections
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          My collections
                        </div>
                      </div>
                    </Dropdown.Item>
                  </Dropdown>
                </div>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <div className="mb-4 flex items-center justify-between">
                  <a
                    href="#"
                    className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    <svg
                      aria-hidden="true"
                      className="mr-1 h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>
                    Add a task
                  </a>
                  <Dropdown
                    arrowIcon={false}
                    color="none"
                    label={<HiOutlineDotsHorizontal className="h-5 w-5" />}
                    theme={{
                      floating: {
                        target:
                          "w-fit items-center p-0 dark:text-white [&>span]:p-1",
                      },
                    }}
                    className="w-40 [&_span]:py-0"
                  >
                    <Dropdown.Item>Mark all as done</Dropdown.Item>
                    <Dropdown.Item>Remove all items</Dropdown.Item>
                    <Dropdown.Item>Add to my day</Dropdown.Item>
                  </Dropdown>
                </div>
                <ul className="space-y-4">
                  <li>
                    <div className="flex">
                      <Checkbox
                        id="task-1"
                        name="task-1"
                        className="mt-1 rounded-full"
                      />
                      <Label
                        htmlFor="task-1"
                        className="ml-2 text-sm text-gray-500 dark:text-gray-300"
                      >
                        Message from Payoneer's Account Approval Department
                      </Label>
                    </div>
                  </li>
                  <li>
                    <div className="flex">
                      <Checkbox
                        id="task-2"
                        name="task-2"
                        className="mt-1 rounded-full"
                      />
                      <Label
                        htmlFor="task-2"
                        className="ml-2 text-sm text-gray-500 dark:text-gray-300"
                      >
                        Develop and update Bergside Management System
                      </Label>
                    </div>
                  </li>
                  <li>
                    <div className="flex">
                      <Checkbox
                        id="task-3"
                        name="task-3"
                        className="mt-1 rounded-full"
                      />
                      <Label
                        htmlFor="task-3"
                        className="ml-2 text-sm text-gray-500 dark:text-gray-300"
                      >
                        Talk with newcomers about our main office
                      </Label>
                    </div>
                  </li>
                  <li>
                    <div className="flex">
                      <Checkbox
                        id="task-4"
                        name="task-4"
                        className="mt-1 rounded-full"
                      />
                      <Label
                        htmlFor="task-4"
                        className="ml-2 text-sm text-gray-500 dark:text-gray-300"
                      >
                        Design and code new charts for Flowbite library
                      </Label>
                    </div>
                  </li>
                </ul>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-gray-500 dark:text-gray-400">Completed</p>
                  <Dropdown
                    arrowIcon={false}
                    color="none"
                    label={<HiOutlineDotsHorizontal className="h-5 w-5" />}
                    theme={{
                      floating: {
                        target:
                          "w-fit items-center p-0 dark:text-white [&>span]:p-1",
                      },
                    }}
                    className="w-40 [&_span]:py-0"
                  >
                    <Dropdown.Item>Mark all as done</Dropdown.Item>
                    <Dropdown.Item>Remove all items</Dropdown.Item>
                    <Dropdown.Item>Add to my day</Dropdown.Item>
                  </Dropdown>
                </div>
                <ul className="space-y-4">
                  <li>
                    <div className="flex">
                      <Checkbox
                        defaultChecked
                        id="task-5"
                        name="task-5"
                        className="mt-1 rounded-full"
                      />
                      <Label
                        htmlFor="task-5"
                        className="ml-2 text-sm text-gray-500 dark:text-gray-300"
                      >
                        <s>
                          Message from Payoneer's Account Approval Department
                        </s>
                      </Label>
                    </div>
                  </li>
                </ul>
              </Sidebar.ItemGroup>
              <div className="absolute bottom-4 z-20 mr-3.5 justify-center bg-white dark:bg-gray-800">
                <Alert
                  additionalContent={
                    <>
                      <div className="mb-3 text-sm text-green-700 dark:text-white">
                        You have successfully completed your task.
                      </div>
                      <button
                        type="button"
                        className="text-sm font-medium text-green-900 hover:underline dark:text-gray-300"
                      >
                        Undo
                      </button>
                    </>
                  }
                  color="green"
                  onDismiss={() => void 0}
                  theme={{
                    closeButton: {
                      base: twMerge(theme.alert.closeButton.base, "h-7 w-7"),
                      icon: "h-4 w-4",
                    },
                  }}
                  className="border"
                >
                  <Badge color="green" className="font-normal">
                    Task completed
                  </Badge>
                </Alert>
              </div>
            </Sidebar.Items>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
