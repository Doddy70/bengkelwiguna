"use client";

import { Avatar, Drawer, Dropdown, Sidebar } from "flowbite-react";
import { useState } from "react";
import { HiMenuAlt1, HiOutlineDotsHorizontal } from "react-icons/hi";

export default function SecondarySidenavWithUserContacts() {
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
        className="max-w-64"
      >
        <Drawer.Items className="h-full">
          <Sidebar
            aria-label="Default side navigation"
            className="w-full [&>div]:bg-transparent [&>div]:p-0 [&_*]:font-medium"
          >
            <Sidebar.Items className="py-1">
              <Sidebar.ItemGroup>
                <div className="mb-4 flex items-center justify-between text-sm font-medium text-gray-500 dark:text-gray-400">
                  <h3 className="uppercase">Contacts</h3>
                  <div className="flex items-center space-x-1">
                    <a
                      href="#"
                      className="inline-flex rounded-lg p-1.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                      </svg>
                      <span className="sr-only">Video call</span>
                    </a>
                    <a
                      href="#"
                      className="inline-flex rounded-lg p-1.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Search contacts</span>
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
                      <Dropdown.Item>Dashboard</Dropdown.Item>
                      <Dropdown.Item>Settings</Dropdown.Item>
                      <Dropdown.Item>Earnings</Dropdown.Item>
                      <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                  </div>
                </div>
                <ul className="space-y-4 dark:border-gray-700">
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white"
                    >
                      <div className="relative mr-2.5">
                        <img
                          className="h-8 w-8 rounded-full"
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
                          className="h-8 w-8 rounded-full"
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
                          className="h-8 w-8 rounded-full"
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
                          className="h-8 w-8 rounded-full"
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
                          className="h-8 w-8 rounded-full"
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
                          className="h-8 w-8 rounded-full"
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
                          className="h-8 w-8 rounded-full"
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
                          className="h-8 w-8 rounded-full"
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
                          className="h-8 w-8 rounded-full"
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
                          className="h-8 w-8 rounded-full"
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
              <Sidebar.ItemGroup>
                <div className="mb-4 flex items-center justify-between text-sm font-medium text-gray-500 dark:text-gray-400">
                  <h3 className="uppercase">Group conversations</h3>
                  <a
                    href="#"
                    className="mr-1 inline-flex rounded-lg p-1.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
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
                    <span className="sr-only">Create new group</span>
                  </a>
                </div>
                <ul className="space-y-4">
                  <li className="flex cursor-pointer items-center space-x-2 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                    <Avatar.Group className="[&_img]:ring-white dark:[&_img]:ring-gray-800">
                      <Avatar
                        img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                        rounded
                        size="sm"
                        stacked
                      />
                      <Avatar
                        img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                        rounded
                        size="sm"
                        stacked
                      />
                    </Avatar.Group>
                    <div>
                      <div className="font-medium leading-tight text-gray-900 dark:text-white">
                        Business Group
                      </div>
                      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Bonnie: Wait! What test?
                      </span>
                    </div>
                  </li>
                  <li className="flex cursor-pointer items-center space-x-2 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                    <Avatar.Group className="[&_img]:ring-white dark:[&_img]:ring-gray-800">
                      <Avatar
                        img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                        rounded
                        size="sm"
                        stacked
                      />
                      <Avatar
                        img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                        rounded
                        size="sm"
                        stacked
                      />
                    </Avatar.Group>
                    <div>
                      <div className="font-medium leading-tight text-gray-900 dark:text-white">
                        Funny Week
                      </div>
                      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Jese: Beautiful day!
                      </span>
                    </div>
                  </li>
                </ul>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
