"use client";

import {
  Avatar,
  Button,
  Checkbox,
  Datepicker,
  Drawer,
  Label,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useState } from "react";

export function UpdateEventDrawer() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center">
        <Button onClick={() => setOpen(true)}>Update event</Button>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setOpen(false)}
        className="w-full max-w-xs"
      >
        <Drawer.Header title="UPDATE EVENT" titleIcon={() => <></>} />
        <Drawer.Items>
          <form action="#">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title" className="mb-2 block">
                  Title
                </Label>
                <TextInput
                  defaultValue="The 4th Digital Transformation"
                  id="title"
                  name="title"
                  placeholder="Add title here"
                  required
                />
              </div>
              <div>
                <Label htmlFor="description" className="mb-2 block">
                  Description
                </Label>
                <Textarea
                  defaultValue="The 4th Digital Transformation and Industry 4.0 Free Online Conference Organized by Flowbite and Themesberg, Live on Saturday 26th Nov at 02:00 pm GMT | 04:00 pm EET on Zoom Webinars"
                  id="description"
                  name="description"
                  rows={6}
                />
              </div>
              <div>
                <Label htmlFor="start-date" className="mb-2 block">
                  Start date
                </Label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      aria-hidden
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <Datepicker id="start-date" />
                </div>
              </div>
              <div>
                <Label htmlFor="end-date" className="mb-2 block">
                  End date
                </Label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      aria-hidden
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <Datepicker id="end-date" />
                </div>
              </div>
              <div>
                <Label htmlFor="location" className="mb-2 block">
                  Location
                </Label>
                <TextInput
                  defaultValue="Florida, USA"
                  icon={() => (
                    <svg
                      aria-hidden
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  id="location"
                  name="location"
                  placeholder="Enter location"
                />
              </div>
              <div>
                <Label htmlFor="add-guests" className="mb-2 block">
                  Add guests
                </Label>
                <TextInput
                  id="add-guests"
                  name="add-guests"
                  placeholder="Add guest email"
                  required
                  rightIcon={() => (
                    <Button
                      size="xs"
                      className="[&>span]:flex [&>span]:items-center"
                    >
                      <svg
                        aria-hidden
                        className="-ml-0.5 mr-0.5 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Add
                    </Button>
                  )}
                  type="search"
                />
                <div className="mb-5 mt-3 flex space-x-1">
                  <div className="relative">
                    <Avatar
                      alt="helene avatar"
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                      rounded
                      size="sm"
                      className="rounded-full border-white dark:border-gray-800 [&>img]:rounded-full"
                    />
                    <a
                      href="#"
                      className="absolute left-5 top-0 flex h-3.5 w-3.5  items-center justify-center rounded-full border-2 border-white bg-gray-400 hover:bg-gray-500 dark:border-gray-800"
                    >
                      <svg
                        aria-hidden
                        className="h-2 w-2 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Remove user</span>
                    </a>
                  </div>
                  <div className="relative">
                    <Avatar
                      alt="bonnie avatar"
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                      rounded
                      size="sm"
                      className="rounded-full border-white dark:border-gray-800 [&>img]:rounded-full"
                    />
                    <button
                      type="button"
                      className="absolute left-5 top-0 flex h-3.5 w-3.5  items-center justify-center rounded-full border-2 border-white bg-gray-400 hover:bg-gray-500 dark:border-gray-800"
                    >
                      <svg
                        aria-hidden
                        className="h-2 w-2 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Remove user</span>
                    </button>
                  </div>
                  <div className="relative">
                    <Avatar
                      alt="robert avatar"
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                      rounded
                      size="sm"
                      className="border-white dark:border-gray-800 [&>img]:rounded-full"
                    />
                    <button
                      type="button"
                      className="absolute left-5 top-0 flex h-3.5 w-3.5  items-center justify-center rounded-full border-2 border-white bg-gray-400 hover:bg-gray-500 dark:border-gray-800"
                    >
                      <svg
                        aria-hidden
                        className="h-2 w-2 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Remove user</span>
                    </button>
                  </div>
                  <div className="relative">
                    <Avatar
                      alt="jese avatar"
                      img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                      rounded
                      size="sm"
                      className="border-white dark:border-gray-800 [&>img]:rounded-full"
                    />
                    <button
                      type="button"
                      className="absolute left-5 top-0 flex h-3.5 w-3.5  items-center justify-center rounded-full border-2 border-white bg-gray-400 hover:bg-gray-500 dark:border-gray-800"
                    >
                      <svg
                        aria-hidden
                        className="h-2 w-2 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Remove user</span>
                    </button>
                  </div>
                  <Avatar.Counter
                    total={7}
                    className="h-8 w-8 cursor-pointer border-white bg-gray-700 ring-0 hover:bg-gray-600 dark:border-gray-800 dark:bg-gray-600"
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 block dark:text-white">Tag Color</div>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    className="h-6 w-6 rounded-sm bg-purple-500"
                  ></button>
                  <button
                    type="button"
                    className="h-6 w-6 rounded-sm bg-indigo-500"
                  ></button>
                  <button
                    type="button"
                    className="h-6 w-6 rounded-sm bg-primary-600"
                  ></button>
                  <button
                    type="button"
                    className="h-6 w-6 rounded-sm bg-pink-500"
                  ></button>
                  <button
                    type="button"
                    className="h-6 w-6 rounded-sm bg-teal-400"
                  ></button>
                  <button
                    type="button"
                    className="h-6 w-6 rounded-sm bg-green-400"
                  ></button>
                  <button
                    type="button"
                    className="h-6 w-6 rounded-sm bg-yellow-300"
                  ></button>
                  <button
                    type="button"
                    className="h-6 w-6 rounded-sm bg-orange-400"
                  ></button>
                  <button
                    type="button"
                    className="h-6 w-6 rounded-sm bg-red-500"
                  ></button>
                </div>
              </div>
              <div>
                <Label
                  className="mb-2 block"
                  htmlFor="guest-permission-checkbox"
                >
                  Guest Permissions
                </Label>
                <div className="space-y-3">
                  <div className="mr-4 flex items-center">
                    <Checkbox
                      id="guest-permission-1-checkbox"
                      name="guest-permission-checkbox"
                    />
                    <Label
                      htmlFor="guest-permission-1-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Modify event
                    </Label>
                  </div>
                  <div className="mr-4 flex items-center">
                    <Checkbox
                      id="guest-permission-2-checkbox"
                      name="guest-permission-checkbox"
                    />
                    <Label
                      htmlFor="guest-permission-2-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Invite others
                    </Label>
                  </div>
                  <div className="mr-4 flex items-center">
                    <Checkbox
                      defaultChecked
                      id="guest-permission-3-checkbox"
                      name="guest-permission-checkbox"
                    />
                    <Label
                      htmlFor="guest-permission-3-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      See guest list
                    </Label>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-0 left-0 mt-4 flex w-full justify-center space-x-4 pb-4 sm:absolute sm:mt-0 sm:px-4">
              <Button type="submit" className="w-full">
                Update event
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
