"use client";

import { Button, Drawer, Label, TextInput } from "flowbite-react";
import { useState } from "react";

export function CreateUserDrawer() {
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
        <Drawer.Items className="mt-5">
          <form action="#">
            <div className="space-y-4">
              <div>
                <Label htmlFor="username" className="mb-2 block">
                  Username
                </Label>
                <TextInput
                  id="username"
                  name="username"
                  placeholder="Username"
                  required
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
              <div className="bottom-0 left-0 flex w-full justify-center space-x-4 pb-4 sm:absolute sm:px-4">
                <Button type="submit" className="inline-flex w-full">
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
            </div>
          </form>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
