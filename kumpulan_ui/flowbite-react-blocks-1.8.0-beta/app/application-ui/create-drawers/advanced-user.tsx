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

export function AdvancedCreateUserDrawer() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center">
        <Button onClick={() => setOpen(true)}>Create user</Button>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setOpen(false)}
        className="w-full max-w-xs"
      >
        <Drawer.Header title="NEW USER" titleIcon={() => <></>} />
        <Drawer.Items>
          <form action="#" className="mt-5">
            <div className="space-y-4">
              <div>
                <Label className="mb-2 block" htmlFor="file_TextInput">
                  Upload avatar
                </Label>
                <div>
                  <Avatar
                    alt="Joseph avatar"
                    img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
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
                </div>
              </div>
              <div>
                <Label htmlFor="first-name" className="mb-2 block">
                  First Name
                </Label>
                <TextInput
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
                Add user
              </Button>
              <Button
                color="alt"
                onClick={() => setOpen(false)}
                className="inline-flex w-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-primary-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
              >
                <svg
                  aria-hidden
                  className="-ml-1 mr-1 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Close
              </Button>
            </div>
          </form>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
