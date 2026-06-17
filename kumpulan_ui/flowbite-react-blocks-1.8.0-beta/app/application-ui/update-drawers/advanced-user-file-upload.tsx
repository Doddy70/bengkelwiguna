"use client";

import {
  Avatar,
  Button,
  Checkbox,
  Drawer,
  Label,
  TextInput,
} from "flowbite-react";
import { useState } from "react";

export function AdvancedUpdateUserDrawer() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center">
        <Button onClick={() => setOpen(true)}>Update user</Button>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setOpen(false)}
        className="w-full max-w-xs"
      >
        <Drawer.Header title="UPDATE USER" titleIcon={() => <></>} />
        <Drawer.Items>
          <form action="#" className="mt-5">
            <div className="space-y-4">
              <div>
                <Label className="mb-2 block" htmlFor="file_TextInput">
                  Upload avatar
                </Label>
                <div>
                  <Avatar
                    alt="Helene avatar"
                    img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                    rounded
                    size="lg"
                    className="mb-4 justify-start"
                  />
                  <div className="w-full">
                    <input
                      className="w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400"
                      aria-describedby="file_TextInput_help"
                      id="file_TextInput"
                      name="file_TextInput"
                      type="file"
                    />
                    <p
                      className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                      id="file_TextInput_help"
                    >
                      SVG, PNG, JPG or GIF (MAX. 800x400px).
                    </p>
                  </div>
                  <div className="mt-4 flex items-center space-x-2.5">
                    <Button
                      size="sm"
                      className="inline-flex items-center [&>span]:text-xs"
                    >
                      <svg
                        aria-hidden
                        className="-ml-1 mr-1 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Upload new picture
                    </Button>
                    <Button
                      color="alt"
                      size="sm"
                      className="border border-gray-200 bg-white text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 [&>span]:text-xs"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor="first-name" className="mb-2 block">
                  First Name
                </Label>
                <TextInput
                  defaultValue="Helene"
                  id="first-name"
                  name="first-name"
                  placeholder="John"
                  required
                  type="text"
                />
              </div>
              <div>
                <Label htmlFor="last-name" className="mb-2 block">
                  Last Name
                </Label>
                <TextInput
                  defaultValue="Engels"
                  id="last-name"
                  name="last-name"
                  placeholder="Doe"
                  required
                  type="text"
                />
              </div>
              <div>
                <Label htmlFor="email" className="mb-2 block">
                  Email
                </Label>
                <TextInput
                  defaultValue="helene@company.com"
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  required
                  type="email"
                />
              </div>
              <div>
                <Label htmlFor="password" className="mb-2 block">
                  Password
                </Label>
                <TextInput
                  id="password"
                  name="password"
                  placeholder="•••••••••"
                  required
                  type="password"
                />
              </div>
              <div>
                <Label htmlFor="confirm-password" className="mb-2 block">
                  Confirm password
                </Label>
                <TextInput
                  id="confirm-password"
                  name="confirm-password"
                  placeholder="•••••••••"
                  required
                  type="password"
                />
              </div>
              <div>
                <Label className="mb-2 block" htmlFor="user_role">
                  Assign Role
                </Label>
                <div className="space-y-3">
                  <div className="mr-4 flex items-center">
                    <Checkbox id="inline-checkbox" name="user_role" />
                    <Label
                      htmlFor="inline-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Administrator
                    </Label>
                  </div>
                  <div className="mr-4 flex items-center">
                    <Checkbox id="inline-2-checkbox" name="user_role" />
                    <Label
                      htmlFor="inline-2-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Member
                    </Label>
                  </div>
                  <div className="mr-4 flex items-center">
                    <Checkbox
                      defaultChecked
                      id="inline-3-checkbox"
                      name="user_role"
                    />
                    <Label
                      htmlFor="inline-3-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Viewer
                    </Label>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-0 left-0 mt-4 flex w-full justify-center space-x-4 pb-4 sm:absolute sm:mt-0 sm:px-4">
              <Button type="submit" className="w-full">
                Update user
              </Button>
              <Button
                color="alt"
                onClick={() => setOpen(false)}
                className="inline-flex w-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900"
              >
                <svg
                  aria-hidden
                  className="-ml-1 mr-1 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Delete
              </Button>
            </div>
          </form>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
