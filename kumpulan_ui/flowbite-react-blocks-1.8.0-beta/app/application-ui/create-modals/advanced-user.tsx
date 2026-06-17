import {
  Avatar,
  Button,
  Checkbox,
  Label,
  Modal,
  Select,
  TextInput,
  Textarea,
  ToggleSwitch,
  Tooltip,
  theme,
} from "flowbite-react";
import { useState } from "react";
import {
  HiCalendar,
  HiCode,
  HiCog,
  HiDownload,
  HiEmojiHappy,
  HiInformationCircle,
  HiLocationMarker,
  HiPaperClip,
  HiPhotograph,
  HiPlus,
  HiX,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export function AdvancedCreateUserModal() {
  const [showModal, setShowModal] = useState(false);
  const [isUserStatus, setUserStatus] = useState(false);

  return (
    <>
      <div className="m-5 flex justify-center">
        <Button onClick={() => setShowModal(true)}>Create product</Button>
      </div>
      <Modal onClose={() => setShowModal(false)} show={showModal}>
        <Modal.Body className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
          <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600 sm:mb-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Add new user
            </h3>
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-5 top-[18px] ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <HiX className="h-5 w-5" />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form action="#">
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <div>
                <Label
                  htmlFor="first-name"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </Label>
                <TextInput
                  id="first-name"
                  name="first-name"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="last-name"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </Label>
                <TextInput
                  id="last-name"
                  name="last-name"
                  placeholder="Doe"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
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
                <Label
                  htmlFor="user-permissions"
                  className="mb-2 inline-flex items-center text-sm font-medium text-gray-900 dark:text-white"
                >
                  User Permissions&nbsp;
                  <Tooltip
                    content="User permissions, part of the overall user management process, are access granted to users to specific resources such as files, applications, networks, or devices."
                    theme={{
                      content: twMerge(theme.tooltip.content, "w-64"),
                    }}
                  >
                    <HiInformationCircle className="h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
                    <span className="sr-only">Details</span>
                  </Tooltip>
                </Label>
                <Select id="user-permissions" name="user-permissions">
                  <option selected>Operational</option>
                  <option value="NO">Non Operational</option>
                </Select>
              </div>
              <div>
                <Label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
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
                <Label
                  htmlFor="confirm-password"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
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
              <div className="sm:col-span-2">
                <Label
                  htmlFor="biography"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Biography
                </Label>
                <div className="w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
                  <div className="flex items-center justify-between border-b px-3 py-2 dark:border-gray-600">
                    <div className="flex flex-wrap items-center divide-gray-200 dark:divide-gray-600 sm:divide-x">
                      <div className="flex items-center space-x-1 sm:pr-4">
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiPaperClip className="h-5 w-5" />
                          <span className="sr-only">Attach file</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiLocationMarker className="h-5 w-5" />
                          <span className="sr-only">Embed map</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiPhotograph className="h-5 w-5" />
                          <span className="sr-only">Upload image</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiCode className="h-5 w-5" />
                          <span className="sr-only">Format code</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiEmojiHappy className="h-5 w-5" />
                          <span className="sr-only">Add emoji</span>
                        </button>
                      </div>
                      <div className="hidden flex-wrap items-center space-x-1 sm:flex sm:pl-4">
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <svg
                            aria-hidden
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="sr-only">Add list</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiCog className="h-5 w-5" />
                          <span className="sr-only">Settings</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiCalendar className="h-5 w-5" />
                          <span className="sr-only">Timeline</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiDownload className="h-5 w-5" />
                          <span className="sr-only">Download</span>
                        </button>
                      </div>
                    </div>
                    <Tooltip content="Show full screen">
                      <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:ml-auto">
                        <svg
                          aria-hidden
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Full screen</span>
                      </button>
                    </Tooltip>
                  </div>
                  <div className="rounded-b-lg bg-white px-4 py-2 dark:bg-gray-800">
                    <Textarea
                      id="biography"
                      name="biography"
                      placeholder="Write a message here"
                      required
                      rows={8}
                      className="block w-full border-0 bg-white px-0 text-sm text-gray-800 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <Label
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="file_input"
                >
                  Upload avatar
                </Label>
                <div className="w-full items-center sm:flex">
                  <Avatar
                    alt=""
                    img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                    rounded
                    size="lg"
                    className="mb-4 sm:mb-0 sm:mr-4 [&_img]:max-w-none"
                  />
                  <div className="w-full">
                    <input
                      aria-describedby="file_input_help"
                      id="file_input"
                      name="file_input"
                      type="file"
                      className="w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400"
                    />
                    <p
                      className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-300"
                      id="file_input_help"
                    >
                      SVG, PNG, JPG or GIF (MAX. 800x400px).
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <Label
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="role"
                >
                  Assign Role
                </Label>
                <div className="space-y-4 sm:flex sm:space-y-0">
                  <div className="mr-4 flex items-center">
                    <Checkbox id="inline-checkbox" name="role" />
                    <Label
                      htmlFor="inline-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Administrator
                    </Label>
                  </div>
                  <div className="mr-4 flex items-center">
                    <Checkbox id="inline-2-checkbox" name="role" />
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
                      id="inline-checked-checkbox"
                      name="role"
                    />
                    <Label
                      htmlFor="inline-checked-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Viewer
                    </Label>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Status
                </div>
                <ToggleSwitch
                  checked={isUserStatus}
                  label={isUserStatus ? "Active" : "Inactive"}
                  onChange={() => setUserStatus(!isUserStatus)}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                size="lg"
                type="submit"
                className="inline-flex w-full [&>span]:text-sm"
              >
                <HiPlus className="h-4 w-4 sm:mr-2" />
                Add new user
              </Button>
              <Button
                color="gray"
                onClick={() => setShowModal(false)}
                outline
                size="lg"
                className="inline-flex w-full [&>span]:text-sm [&>span]:text-gray-500 hover:[&>span]:text-gray-900 [&>span]:dark:bg-gray-700 dark:[&>span]:enabled:hover:bg-gray-600"
              >
                Discard
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
