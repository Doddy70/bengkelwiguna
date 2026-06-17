"use client";

import { Button, Drawer, Label, TextInput } from "flowbite-react";
import { useState } from "react";

export function UpdateUserDrawer() {
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
        <Drawer.Items className="mt-5">
          <form action="#">
            <div className="space-y-4">
              <div>
                <Label htmlFor="username" className="mb-2 block">
                  Username
                </Label>
                <TextInput
                  defaultValue="bonnie.green"
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
                  defaultValue="bonnie.green@company.com"
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
            </div>
          </form>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
