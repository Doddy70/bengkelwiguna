import {
  Accordion,
  Avatar,
  Breadcrumb,
  Button,
  Checkbox,
  Dropdown,
  Label,
  Modal,
  Radio,
  Select,
  Table,
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
  HiExclamationCircle,
  HiInformationCircle,
  HiLocationMarker,
  HiPaperClip,
  HiPhotograph,
  HiPlus,
  HiX,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export function CRUDLayoutForUserManagement() {
  const [isShowNewUserModal, setShowNewUserModal] = useState(false);
  const [isShowUpdateUserModal, setShowUpdateUserModal] = useState(false);
  const [isShowReadUserModal, setShowReadUserModal] = useState(false);
  const [isShowDeleteUserModal, setShowDeleteUserModal] = useState(false);

  return (
    <section className="bg-gray-50 py-3 dark:bg-gray-900 sm:py-5">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col px-4 pb-3 pt-4 md:flex-row md:items-center md:justify-between">
            <div>
              <Breadcrumb className="mb-2 flex w-fit rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-gray-700 dark:border-gray-600 dark:bg-gray-700">
                <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item href="#">2022</Breadcrumb.Item>
                <Breadcrumb.Item aria-current="page">All Users</Breadcrumb.Item>
              </Breadcrumb>
              <span className="dark:text-white">All Users</span>
            </div>
            <Button
              onClick={() => setShowNewUserModal(true)}
              className="mt-3 md:m-0"
            >
              <svg
                className="mr-2 h-3.5 w-3.5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                />
              </svg>
              Add new user
            </Button>
            <Modal
              onClose={() => setShowNewUserModal(false)}
              show={isShowNewUserModal}
            >
              <Modal.Body className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
                <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600 sm:mb-5">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Add new user
                  </h3>
                  <button
                    onClick={() => setShowNewUserModal(false)}
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
                        checked={false}
                        label="Inactive"
                        onChange={() => {}}
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
                      onClick={() => setShowNewUserModal(false)}
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
          </div>
          <div className="grid w-full grid-cols-2 gap-4 px-4 pb-4 md:grid-cols-3 lg:grid-cols-5">
            <Select>
              <option selected>User Role</option>
              <option value="viewer">Viewer</option>
              <option value="moderator">Moderator</option>
              <option value="administrator">Administrator</option>
            </Select>
            <Select>
              <option selected>Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </Select>
            <Select>
              <option selected>Account Type</option>
              <option value="pro">PRO</option>
              <option value="basic">Basic</option>
            </Select>
            <Select>
              <option selected>Rating</option>
              <option value="5">5</option>
              <option value="4">4+</option>
              <option value="3">3+</option>
              <option value="2">2+</option>
            </Select>
            <Select>
              <option selected>Country</option>
              <option value="united-states">United States</option>
              <option value="germany">Germany</option>
              <option value="france">France</option>
              <option value="canada">Canada</option>
              <option value="england">England</option>
              <option value="australia">Australia</option>
            </Select>
          </div>
          <div className="block w-full items-center justify-between border-t px-4 py-3 dark:border-gray-700 md:flex">
            <div className="flex flex-wrap">
              <div className="mr-4 flex items-center text-sm font-medium text-gray-900 dark:text-white">
                Show:
              </div>
              <div className="mr-4 flex items-center">
                <Radio defaultChecked id="all-users" name="show-only" />
                <label
                  htmlFor="all-users"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  All
                </label>
              </div>
              <div className="mr-4 flex items-center">
                <Radio id="sort-role" name="show-only" />
                <label
                  htmlFor="sort-role"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  User Role
                </label>
              </div>
              <div className="mr-4 flex items-center">
                <Radio id="sort-type" name="show-only" />
                <label
                  htmlFor="sort-type"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Account Type
                </label>
              </div>
              <div className="mr-4 flex items-center">
                <Radio id="sort-status" name="show-only" />
                <label
                  htmlFor="sort-status"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Status
                </label>
              </div>
              <div className="mr-4 flex items-center">
                <Radio id="sort-rating" name="show-only" />
                <label
                  htmlFor="sort-rating"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Rating
                </label>
              </div>
            </div>
            <div className="mt-3 md:mt-0">
              <Dropdown
                color="gray"
                label={
                  <>
                    <svg
                      className="-ml-1 mr-1.5 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      />
                    </svg>
                    Actions
                  </>
                }
                theme={{
                  arrowIcon: "hidden",
                  floating: {
                    base: twMerge(theme.dropdown.floating.base, "w-40"),
                  },
                }}
              >
                <Dropdown.Item>Mass Edit</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Delete All</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table
              theme={{
                root: {
                  wrapper: "static",
                },
              }}
              className="w-full text-left text-sm text-gray-500 dark:text-gray-400"
            >
              <Table.Head className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <Table.HeadCell scope="col" className="p-4">
                  <div className="flex items-center">
                    <Checkbox id="checkbox-all" name="checkbox-all" />
                    <Label htmlFor="checkbox-all" className="sr-only">
                      Select all
                    </Label>
                  </div>
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="p-4">
                  User
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="p-4">
                  User Role
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="p-4">
                  Email
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="whitespace-nowrap p-4">
                  Account type
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="p-4">
                  Rating
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="p-4">
                  Country
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="whitespace-nowrap p-4">
                  Status
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="p-4">
                  <span className="sr-only">Actions</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body>
                <Table.Row className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <Table.Cell className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this user
                      </Label>
                    </div>
                  </Table.Cell>
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
                  >
                    <div className="mr-3 flex items-center">
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png"
                        alt="iMac Front"
                        className="mr-3 h-8 w-auto rounded-full"
                      />
                      Jese Leos
                    </div>
                  </th>
                  <Table.Cell className="px-4 py-3">
                    <div
                      data-tooltip-target="tooltip-role-1"
                      className="inline-flex items-center rounded bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                        />
                      </svg>
                      Administrator
                    </div>
                    <div
                      id="tooltip-role-1"
                      role="tooltip"
                      className="tooltip invisible absolute z-10 inline-block max-w-56 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                    >
                      <h6 className="mb-1 text-sm font-medium leading-none dark:text-white">
                        Administrator
                      </h6>
                      <p className="text-xs font-medium leading-tight text-gray-500 dark:text-gray-400">
                        Administrators are responsible for managing the entire
                        system.
                      </p>
                      <div className="tooltip-arrow" data-popper-arrow=""></div>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3">
                    <div className="flex items-center space-x-1.5">
                      jese@example.com
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    PRO
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 h-4 w-4 text-green-500"
                        aria-hidden
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                      4.7
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3">
                    United States
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
                      Active
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <Dropdown
                      dismissOnClick={false}
                      inline
                      label={
                        <>
                          <span className="sr-only">Manage entry</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                        </>
                      }
                      theme={{
                        arrowIcon: "hidden",
                        floating: {
                          base: twMerge(theme.dropdown.floating.base, "w-40"),
                        },
                      }}
                    >
                      <Dropdown.Item
                        onClick={() => setShowUpdateUserModal(true)}
                      >
                        <svg
                          className="mr-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          />
                        </svg>
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setShowReadUserModal(true)}>
                        <svg
                          className="mr-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        Preview
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setShowDeleteUserModal(true)}
                        className="text-red-600 dark:text-red-600"
                      >
                        <svg
                          className="mr-2 h-4 w-4"
                          viewBox="0 0 14 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="currentColor"
                            d="M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z"
                          />
                        </svg>
                        Delete
                      </Dropdown.Item>
                    </Dropdown>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <Table.Cell className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this user
                      </Label>
                    </div>
                  </Table.Cell>
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
                  >
                    <div className="mr-3 flex items-center">
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-1.png"
                        alt="iMac Front"
                        className="mr-3 h-8 w-auto rounded-full"
                      />
                      Bonnie Green
                    </div>
                  </th>
                  <Table.Cell className="px-4 py-3">
                    <div
                      data-tooltip-target="tooltip-role-2"
                      className="mr-2 inline-flex items-center rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      Viewer
                    </div>
                    <div
                      id="tooltip-role-2"
                      role="tooltip"
                      className="tooltip invisible absolute z-10 inline-block max-w-56 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                    >
                      <h6 className="mb-1 text-sm font-medium leading-none dark:text-white">
                        Viewer
                      </h6>
                      <p className="text-xs font-medium leading-tight text-gray-500 dark:text-gray-400">
                        Viewers are responsible for observing and consuming the
                        content of a discussion or a debate.
                      </p>
                      <div className="tooltip-arrow" data-popper-arrow=""></div>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3">
                    <div className="flex items-center space-x-1.5">
                      bonnie@example.com
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    PRO
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 h-4 w-4 text-red-500"
                        aria-hidden
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                      3.9
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3">
                    United States
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
                      Active
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <Dropdown
                      dismissOnClick={false}
                      inline
                      label={
                        <>
                          <span className="sr-only">Manage entry</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                        </>
                      }
                      theme={{
                        arrowIcon: "hidden",
                        floating: {
                          base: twMerge(theme.dropdown.floating.base, "w-40"),
                        },
                      }}
                    >
                      <Dropdown.Item
                        onClick={() => setShowUpdateUserModal(true)}
                      >
                        <svg
                          className="mr-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          />
                        </svg>
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setShowReadUserModal(true)}>
                        <svg
                          className="mr-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        Preview
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setShowDeleteUserModal(true)}
                        className="text-red-600 dark:text-red-600"
                      >
                        <svg
                          className="mr-2 h-4 w-4"
                          viewBox="0 0 14 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="currentColor"
                            d="M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z"
                          />
                        </svg>
                        Delete
                      </Dropdown.Item>
                    </Dropdown>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <Table.Cell className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this user
                      </Label>
                    </div>
                  </Table.Cell>
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
                  >
                    <div className="mr-3 flex items-center">
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-2.png"
                        alt="iMac Front"
                        className="mr-3 h-8 w-auto rounded-full"
                      />
                      Leslie Livingston
                    </div>
                  </th>
                  <Table.Cell className="px-4 py-3">
                    <div
                      data-tooltip-target="tooltip-role-3"
                      className="mr-2 inline-flex items-center rounded bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                        />
                      </svg>
                      Moderator
                    </div>
                    <div
                      id="tooltip-role-3"
                      role="tooltip"
                      className="tooltip invisible absolute z-10 inline-block max-w-56 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                    >
                      <h6 className="mb-1 text-sm font-medium leading-none dark:text-white">
                        Moderator
                      </h6>
                      <p className="text-xs font-medium leading-tight text-gray-500 dark:text-gray-400">
                        Moderators are responsible for the facilitation, review,
                        and guidance of a discussion or a debate.
                      </p>
                      <div className="tooltip-arrow" data-popper-arrow=""></div>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3">
                    <div className="flex items-center space-x-1.5">
                      leslie@example.com
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    PRO
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 h-4 w-4 text-green-500"
                        aria-hidden
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                      4.8
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3">
                    United States
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
                      Inactive
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <Dropdown
                      dismissOnClick={false}
                      inline
                      label={
                        <>
                          <span className="sr-only">Manage entry</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                        </>
                      }
                      theme={{
                        arrowIcon: "hidden",
                        floating: {
                          base: twMerge(theme.dropdown.floating.base, "w-40"),
                        },
                      }}
                    >
                      <Dropdown.Item
                        onClick={() => setShowUpdateUserModal(true)}
                      >
                        <svg
                          className="mr-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          />
                        </svg>
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setShowReadUserModal(true)}>
                        <svg
                          className="mr-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        Preview
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setShowDeleteUserModal(true)}
                        className="text-red-600 dark:text-red-600"
                      >
                        <svg
                          className="mr-2 h-4 w-4"
                          viewBox="0 0 14 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="currentColor"
                            d="M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z"
                          />
                        </svg>
                        Delete
                      </Dropdown.Item>
                    </Dropdown>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <Table.Cell className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this user
                      </Label>
                    </div>
                  </Table.Cell>
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
                  >
                    <div className="mr-3 flex items-center">
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-3.png"
                        alt="iMac Front"
                        className="mr-3 h-8 w-auto rounded-full"
                      />
                      Micheal Gough
                    </div>
                  </th>
                  <Table.Cell className="px-4 py-3">
                    <div
                      data-tooltip-target="tooltip-role-4"
                      className="mr-2 inline-flex items-center rounded bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                        />
                      </svg>
                      Moderator
                    </div>
                    <div
                      id="tooltip-role-4"
                      role="tooltip"
                      className="tooltip invisible absolute z-10 inline-block max-w-56 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                    >
                      <h6 className="mb-1 text-sm font-medium leading-none dark:text-white">
                        Moderator
                      </h6>
                      <p className="text-xs font-medium leading-tight text-gray-500 dark:text-gray-400">
                        Moderators are responsible for the facilitation, review,
                        and guidance of a discussion or a debate.
                      </p>
                      <div className="tooltip-arrow" data-popper-arrow=""></div>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3">
                    <div className="flex items-center space-x-1.5">
                      michael@example.com
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    Basic
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 h-4 w-4 text-green-500"
                        aria-hidden
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                      5
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3">
                    France
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
                      Active
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <Dropdown
                      dismissOnClick={false}
                      inline
                      label={
                        <>
                          <span className="sr-only">Manage entry</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                        </>
                      }
                      theme={{
                        arrowIcon: "hidden",
                        floating: {
                          base: twMerge(theme.dropdown.floating.base, "w-40"),
                        },
                      }}
                    >
                      <Dropdown.Item
                        onClick={() => setShowUpdateUserModal(true)}
                      >
                        <svg
                          className="mr-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          />
                        </svg>
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setShowReadUserModal(true)}>
                        <svg
                          className="mr-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        Preview
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setShowDeleteUserModal(true)}
                        className="text-red-600 dark:text-red-600"
                      >
                        <svg
                          className="mr-2 h-4 w-4"
                          viewBox="0 0 14 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="currentColor"
                            d="M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z"
                          />
                        </svg>
                        Delete
                      </Dropdown.Item>
                    </Dropdown>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <Table.Cell className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this user
                      </Label>
                    </div>
                  </Table.Cell>
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
                  >
                    <div className="mr-3 flex items-center">
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-4.png"
                        alt="iMac Front"
                        className="mr-3 h-8 w-auto rounded-full"
                      />
                      Joseph McFall
                    </div>
                  </th>
                  <Table.Cell className="px-4 py-3">
                    <div
                      data-tooltip-target="tooltip-role-5"
                      className="mr-2 inline-flex items-center rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      Viewer
                    </div>
                    <div
                      id="tooltip-role-5"
                      role="tooltip"
                      className="tooltip invisible absolute z-10 inline-block max-w-56 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                    >
                      <h6 className="mb-1 text-sm font-medium leading-none dark:text-white">
                        Viewer
                      </h6>
                      <p className="text-xs font-medium leading-tight text-gray-500 dark:text-gray-400">
                        Viewers are responsible for observing and consuming the
                        content of a discussion or a debate.
                      </p>
                      <div className="tooltip-arrow" data-popper-arrow=""></div>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3">
                    <div className="flex items-center space-x-1.5">
                      joseph@example.com
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    Basic
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 h-4 w-4 text-red-500"
                        aria-hidden
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                      4.2
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3">
                    England
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
                      Active
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <Dropdown
                      dismissOnClick={false}
                      inline
                      label={
                        <>
                          <span className="sr-only">Manage entry</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                        </>
                      }
                      theme={{
                        arrowIcon: "hidden",
                        floating: {
                          base: twMerge(theme.dropdown.floating.base, "w-40"),
                        },
                      }}
                    >
                      <Dropdown.Item
                        onClick={() => setShowUpdateUserModal(true)}
                      >
                        <svg
                          className="mr-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          />
                        </svg>
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setShowReadUserModal(true)}>
                        <svg
                          className="mr-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        Preview
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setShowDeleteUserModal(true)}
                        className="text-red-600 dark:text-red-600"
                      >
                        <svg
                          className="mr-2 h-4 w-4"
                          viewBox="0 0 14 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="currentColor"
                            d="M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z"
                          />
                        </svg>
                        Delete
                      </Dropdown.Item>
                    </Dropdown>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <Table.Cell className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this user
                      </Label>
                    </div>
                  </Table.Cell>
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
                  >
                    <div className="mr-3 flex items-center">
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-5.png"
                        alt="iMac Front"
                        className="mr-3 h-8 w-auto rounded-full"
                      />
                      Robert Brown
                    </div>
                  </th>
                  <Table.Cell className="px-4 py-3">
                    <div
                      data-tooltip-target="tooltip-role-6"
                      className="mr-2 inline-flex items-center rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      Viewer
                    </div>
                    <div
                      id="tooltip-role-6"
                      role="tooltip"
                      className="tooltip invisible absolute z-10 inline-block max-w-56 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                    >
                      <h6 className="mb-1 text-sm font-medium leading-none dark:text-white">
                        Viewer
                      </h6>
                      <p className="text-xs font-medium leading-tight text-gray-500 dark:text-gray-400">
                        Viewers are responsible for observing and consuming the
                        content of a discussion or a debate.
                      </p>
                      <div className="tooltip-arrow" data-popper-arrow=""></div>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3">
                    <div className="flex items-center space-x-1.5">
                      robert@example.com
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    Basic
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 h-4 w-4 text-green-500"
                        aria-hidden
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                      4.5
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3">
                    Canada
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
                      Inactive
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <Dropdown
                      dismissOnClick={false}
                      inline
                      label={
                        <>
                          <span className="sr-only">Manage entry</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                        </>
                      }
                      theme={{
                        arrowIcon: "hidden",
                        floating: {
                          base: twMerge(theme.dropdown.floating.base, "w-40"),
                        },
                      }}
                    >
                      <Dropdown.Item
                        onClick={() => setShowUpdateUserModal(true)}
                      >
                        <svg
                          className="mr-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          />
                        </svg>
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setShowReadUserModal(true)}>
                        <svg
                          className="mr-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        Preview
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setShowDeleteUserModal(true)}
                        className="text-red-600 dark:text-red-600"
                      >
                        <svg
                          className="mr-2 h-4 w-4"
                          viewBox="0 0 14 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="currentColor"
                            d="M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z"
                          />
                        </svg>
                        Delete
                      </Dropdown.Item>
                    </Dropdown>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <Table.Cell className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this user
                      </Label>
                    </div>
                  </Table.Cell>
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
                  >
                    <div className="mr-3 flex items-center">
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-6.png"
                        alt="iMac Front"
                        className="mr-3 h-8 w-auto rounded-full"
                      />
                      Karen Nelson
                    </div>
                  </th>
                  <Table.Cell className="px-4 py-3">
                    <div
                      data-tooltip-target="tooltip-role-7"
                      className="mr-2 inline-flex items-center rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      Viewer
                    </div>
                    <div
                      id="tooltip-role-7"
                      role="tooltip"
                      className="tooltip invisible absolute z-10 inline-block max-w-56 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                    >
                      <h6 className="mb-1 text-sm font-medium leading-none dark:text-white">
                        Viewer
                      </h6>
                      <p className="text-xs font-medium leading-tight text-gray-500 dark:text-gray-400">
                        Viewers are responsible for observing and consuming the
                        content of a discussion or a debate.
                      </p>
                      <div className="tooltip-arrow" data-popper-arrow=""></div>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3">
                    <div className="flex items-center space-x-1.5">
                      karen@example.com
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    PRO
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 h-4 w-4 text-red-500"
                        aria-hidden
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                      4.1
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3">
                    Canada
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
                      Inactive
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    <Dropdown
                      dismissOnClick={false}
                      inline
                      label={
                        <>
                          <span className="sr-only">Manage entry</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                        </>
                      }
                      theme={{
                        arrowIcon: "hidden",
                        floating: {
                          base: twMerge(theme.dropdown.floating.base, "w-40"),
                        },
                      }}
                    >
                      <Dropdown.Item
                        onClick={() => setShowUpdateUserModal(true)}
                      >
                        <svg
                          className="mr-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          />
                        </svg>
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setShowReadUserModal(true)}>
                        <svg
                          className="mr-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        Preview
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setShowDeleteUserModal(true)}
                        className="text-red-600 dark:text-red-600"
                      >
                        <svg
                          className="mr-2 h-4 w-4"
                          viewBox="0 0 14 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="currentColor"
                            d="M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z"
                          />
                        </svg>
                        Delete
                      </Dropdown.Item>
                    </Dropdown>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
          <div className="flex items-center justify-between p-4 md:space-y-0">
            <Button>Download CSV</Button>
            <span className="text-sm dark:text-gray-400">
              Total users:&nbsp;
              <span className="font-medium dark:text-white">1867</span>
            </span>
          </div>
        </div>
      </div>
      <Modal
        onClose={() => setShowUpdateUserModal(false)}
        popup
        show={isShowUpdateUserModal}
        size="2xl"
      >
        <Modal.Body className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
          <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600 sm:mb-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Update user
            </h3>
            <button
              onClick={() => setShowUpdateUserModal(false)}
              className="absolute right-5 top-[18px] ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                aria-hidden
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form action="#">
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="firstName" className="mb-2 block">
                  First Name
                </Label>
                <TextInput
                  defaultValue="Leslie"
                  id="firstName"
                  name="firstName"
                  placeholder="Leslie"
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="mb-2 block">
                  Last Name
                </Label>
                <TextInput
                  defaultValue="Livingston"
                  id="lastName"
                  name="lastName"
                  placeholder="Livingston"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="mb-2 block">
                  Email
                </Label>
                <TextInput
                  defaultValue="leslie@company.com"
                  id="email"
                  name="email"
                  placeholder="bonnie@company.com"
                  required
                  type="email"
                />
              </div>
              <div>
                <Label
                  htmlFor="user-permissions"
                  className="mb-2 inline-flex items-center"
                >
                  User Permissions
                  <Tooltip
                    content="User permissions, part of the overall user management process, are access granted to users to specific resources such as files, applications, networks, or devices."
                    theme={{
                      content: "relative z-20 max-w-sm text-xs",
                    }}
                  >
                    <button className="ml-1">
                      <svg
                        aria-hidden
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Details</span>
                    </button>
                  </Tooltip>
                </Label>
                <Select id="user-permissions" name="user-permissions">
                  <option selected>Operational</option>
                  <option value="NO">Non Operational</option>
                </Select>
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
              <div className="sm:col-span-2">
                <Label htmlFor="biography" className="mb-2 block">
                  Biography
                </Label>
                <div className="w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
                  <div className="flex items-center justify-between border-b px-3 py-2 dark:border-gray-600">
                    <div className="flex flex-wrap items-center divide-gray-200 dark:divide-gray-600 sm:divide-x">
                      <div className="flex items-center space-x-1 sm:pr-4">
                        <button
                          type="button"
                          className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg
                            aria-hidden
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="sr-only">Attach file</span>
                        </button>
                        <button
                          type="button"
                          className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg
                            aria-hidden
                            className="h-5 w-5"
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
                          <span className="sr-only">Embed map</span>
                        </button>
                        <button
                          type="button"
                          className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg
                            aria-hidden
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="sr-only">Upload image</span>
                        </button>
                        <button
                          type="button"
                          className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg
                            aria-hidden
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="sr-only">Format code</span>
                        </button>
                        <button
                          type="button"
                          className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg
                            aria-hidden
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="sr-only">Add emoji</span>
                        </button>
                      </div>
                      <div className="hidden flex-wrap items-center space-x-1 sm:flex sm:pl-4">
                        <button
                          type="button"
                          className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg
                            aria-hidden
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="sr-only">Add list</span>
                        </button>
                        <button
                          type="button"
                          className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg
                            aria-hidden
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="sr-only">Settings</span>
                        </button>
                        <button
                          type="button"
                          className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg
                            aria-hidden
                            className="h-5 w-5"
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
                          <span className="sr-only">Timeline</span>
                        </button>
                        <button
                          type="button"
                          className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg
                            aria-hidden
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="sr-only">Download</span>
                        </button>
                      </div>
                    </div>
                    <Tooltip content="Show full screen">
                      <button
                        type="button"
                        data-tooltip-target="tooltip-fullscreen"
                        className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:ml-auto"
                      >
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
                          />
                        </svg>
                        <span className="sr-only">Full screen</span>
                      </button>
                    </Tooltip>
                  </div>
                  <div className="rounded-b-lg bg-white px-4 py-2 dark:bg-gray-800 dark:[&>textarea]:bg-gray-800">
                    <Textarea
                      id="biography"
                      placeholder="Write your biography..."
                      required
                      rows={8}
                      className="border-0 bg-white px-0 text-sm focus:ring-0"
                    >
                      👨‍💻Full-stack web developer. Open-source contributor.
                    </Textarea>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <Label className="mb-2 block" htmlFor="file_input">
                  Upload avatar
                </Label>
                <div className="w-full items-center sm:flex">
                  <img
                    alt="Helene avatar"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                    className="mb-4 h-20 w-20 rounded-full sm:mb-0 sm:mr-4"
                  />
                  <div className="w-full">
                    <input
                      className="w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400"
                      aria-describedby="file_input_help"
                      id="file_input"
                      type="file"
                    />
                    <p
                      className="mb-3 mt-1 text-xs font-normal text-gray-500 dark:text-gray-300"
                      id="file_input_help"
                    >
                      SVG, PNG, JPG or GIF (MAX. 800x400px).
                    </p>
                    <div className="flex items-center space-x-2.5">
                      <Button
                        size="sm"
                        className="inline-flex [&>span]:text-xs"
                      >
                        <svg
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
                        color="gray"
                        outline
                        size="sm"
                        className="inline-flex [&>span]:text-xs"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <Label className="mb-2 block" htmlFor="role">
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
                <div className="mb-2 text-sm dark:text-white">Status</div>
                <ToggleSwitch
                  checked={false}
                  id="status"
                  label="Inactive"
                  name="status"
                  onChange={() => {}}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setShowUpdateUserModal(false)}
                size="lg"
                type="submit"
                className="[&>span]:text-sm"
              >
                Update user
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <Modal
        onClose={() => setShowUpdateUserModal(false)}
        popup
        show={isShowUpdateUserModal}
        size="2xl"
      >
        <Modal.Body className="relative rounded-lg bg-white p-0 shadow dark:bg-gray-800">
          <div className="flex items-center justify-between rounded-t p-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Update user
            </h3>
            <button
              onClick={() => setShowUpdateUserModal(false)}
              className="absolute right-5 top-[18px] ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                aria-hidden
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form action="#">
            <Accordion flush className="divide-y-0 border-0">
              <Accordion.Panel>
                <Accordion.Title
                  theme={{
                    base: "flex w-full items-center justify-between px-5 py-5 text-left font-medium text-gray-500 dark:text-gray-400",
                    open: {
                      off: "border-b bg-gray-100 hover:bg-gray-200 dark:border-0 dark:bg-gray-700 dark:hover:bg-gray-600",
                    },
                  }}
                >
                  General Information
                </Accordion.Title>
                <Accordion.Content className="dark:bg-gray-800">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <Label className="mb-2 block" htmlFor="file_input">
                        Upload avatar
                      </Label>
                      <div className="w-full items-center sm:flex">
                        <img
                          alt="Helene avatar"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                          className="mb-4 h-20 w-20 rounded-full sm:mb-0 sm:mr-4"
                        />
                        <div className="w-full">
                          <input
                            className="w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400"
                            aria-describedby="file_input_help"
                            id="file_input"
                            type="file"
                          />
                          <p
                            className="mb-3 mt-1 text-xs font-normal text-gray-500 dark:text-gray-300"
                            id="file_input_help"
                          >
                            SVG, PNG, JPG or GIF (MAX. 800x400px).
                          </p>
                          <div className="flex items-center space-x-2.5">
                            <Button
                              size="sm"
                              className="inline-flex [&>span]:text-xs"
                            >
                              <svg
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
                              color="gray"
                              outline
                              size="sm"
                              className="inline-flex [&>span]:text-xs"
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="first-name" className="mb-2 block">
                        First Name
                      </Label>
                      <TextInput
                        defaultValue="Bonnie"
                        id="first-name"
                        name="first-name"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="last-name" className="mb-2 block">
                        Last Name
                      </Label>
                      <TextInput
                        defaultValue="Green"
                        id="last-name"
                        name="last-name"
                        placeholder="Doe"
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
                        placeholder="john@company.com"
                        required
                        type="email"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="user-permissions"
                        className="mb-2 inline-flex items-center"
                      >
                        User Permissions
                        <Tooltip content="User permissions, part of the overall user management process, are access granted to users to specific resources such as files, applications, networks, or devices.">
                          <button className="ml-1">
                            <svg
                              aria-hidden
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="sr-only">
                              User permission details
                            </span>
                          </button>
                        </Tooltip>
                      </Label>
                      <Select id="user-permissions" name="user-permissions">
                        <option selected>Operational</option>
                        <option value="NO">Non Operational</option>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="job-title" className="mb-2 block">
                        Job Title
                      </Label>
                      <TextInput
                        defaultValue="Back-end software engineer"
                        id="job-title"
                        name="job-title"
                        placeholder="Ex. React Developer"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="languages" className="mb-2 block">
                        Languages
                      </Label>
                      <TextInput
                        defaultValue="English, German"
                        id="languages"
                        name="languages"
                        placeholder="Ex. English, Spanish"
                        required
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="account"
                        className="mb-2 inline-flex items-center"
                      >
                        Account
                        <Tooltip content="Choose here your account type.">
                          <button className="ml-1">
                            <svg
                              aria-hidden
                              className="h-4 w-4 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="sr-only">Account details</span>
                          </button>
                        </Tooltip>
                      </Label>
                      <Select id="account" name="account">
                        <option selected>PRO Account</option>
                        <option value="DF">Default Account</option>
                      </Select>
                    </div>
                    <div>
                      <Label
                        htmlFor="user-role"
                        className="mb-2 inline-flex items-center"
                      >
                        User Role
                        <Tooltip content="Flowbite provides 7 predefined roles: Owner, Admin, Editor, Contributor and Viewer. Assign the most suitable role to each user, giving them the most appropriate level of control.">
                          <button className="ml-1">
                            <svg
                              aria-hidden
                              className="ml-1 h-4 w-4 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="sr-only">User role details</span>
                          </button>
                        </Tooltip>
                      </Label>
                      <Select id="user-role" name="user-role">
                        <option selected>Owner</option>
                        <option value="AD">Admin</option>
                        <option value="ED">Editor</option>
                        <option value="CO">Contributor</option>
                        <option value="VI">Viewer</option>
                      </Select>
                    </div>
                    <div className="sm:col-span-2">
                      <Label
                        htmlFor="email-status"
                        className="mb-2 inline-flex items-center"
                      >
                        Email Status
                        <Tooltip content="As an administrator, you can view the status of a user's email. The status indicates whether a user's email is verified or not.">
                          <button className="ml-1">
                            <svg
                              aria-hidden
                              className="ml-1 h-4 w-4 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="sr-only">
                              Email status details
                            </span>
                          </button>
                        </Tooltip>
                      </Label>
                      <Select id="email-status" name="email-status">
                        <option selected>Verified</option>
                        <option value="NV">Not verified</option>
                      </Select>
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
                    <div className="sm:col-span-2">
                      <Label className="mb-2 block" htmlFor="role">
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
                      <div className="mb-2 text-sm dark:text-white">Status</div>
                      <ToggleSwitch
                        checked={false}
                        id="status"
                        label="Inactive"
                        name="status"
                        onChange={() => {}}
                      />
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title
                  theme={{
                    base: "flex w-full items-center justify-between px-5 py-5 text-left font-medium text-gray-500 dark:text-gray-400",
                    open: {
                      off: "border-b bg-gray-100 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600",
                    },
                  }}
                >
                  Additional Information
                </Accordion.Title>
                <Accordion.Content className="dark:bg-gray-800">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="col-span-2">
                      <Label htmlFor="skills" className="mb-2 block">
                        Skills
                      </Label>
                      <TextInput
                        defaultValue="Tailwind CSS, Flowbite, React"
                        id="skills"
                        name="skills"
                        placeholder="Ex. Figma, HTML, Javascript"
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="phone-number" className="mb-2 block">
                        Phone Number
                      </Label>
                      <TextInput
                        defaultValue="+1631 442 978"
                        id="phone-number"
                        name="phone-number"
                        placeholder="Ex. +1234 567 890"
                        required
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="linkedin" className="mb-2 block">
                        Linkedin URL
                      </Label>
                      <TextInput
                        defaultValue="https://www.linkedin.com/in/bonniegreen/"
                        id="linkedin"
                        name="linkedin"
                        placeholder="Ex. https://www.linkedin.com/in/example/"
                        required
                        type="url"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="facebook" className="mb-2 block">
                        Facebook
                      </Label>
                      <TextInput
                        defaultValue="https://www.facebook.com/bonniegreen"
                        id="facebook"
                        name="facebook"
                        placeholder="Ex. https://www.facebook.com/example"
                        required
                        type="url"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="twitter" className="mb-2 block">
                        Twitter
                      </Label>
                      <TextInput
                        defaultValue="https://twitter.com/bonniegreen"
                        id="twitter"
                        name="twitter"
                        placeholder="Ex. https://twitter.com/example"
                        required
                        type="url"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="personal-website" className="mb-2 block">
                        Personal Website
                      </Label>
                      <TextInput
                        defaultValue="https://flowbite.com"
                        id="personal-website"
                        name="personal-website"
                        placeholder="Ex. https://website.com"
                        required
                        type="url"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="country" className="mb-2 block">
                        Country
                      </Label>
                      <Select id="country" name="country">
                        <option selected>United States</option>
                        <option value="NO">Australia</option>
                        <option value="NO">United Kingdom</option>
                        <option value="NO">Italy</option>
                        <option value="NO">Germany</option>
                        <option value="NO">Spain</option>
                        <option value="NO">France</option>
                        <option value="NO">Canada</option>
                      </Select>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="address" className="mb-2 block">
                        Address
                      </Label>
                      <TextInput
                        defaultValue="92 Milles Drive, Newark, NJ 07123"
                        id="address"
                        name="address"
                        placeholder="Ex. 92 Milles Drive, Newark, NJ 07123"
                        required
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="timezone" className="mb-2 block">
                        Timezone
                      </Label>
                      <TextInput
                        defaultValue="GMT+3"
                        id="timezone"
                        name="timezone"
                        placeholder="Ex. GMT+2"
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="biography" className="mb-2 block">
                        Biography
                      </Label>
                      <Textarea
                        id="biography"
                        name="biography"
                        placeholder="Write your biography..."
                        rows={4}
                      >
                        Hello, I'm Helene Engels, USA Designer, Creating things
                        that stand out, Featured by Adobe, Figma, Webflow and
                        others, Daily design tips & resources, Exploring Web3.
                      </Textarea>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <div className="flex items-center space-x-4 px-4 py-6">
              <Button size="lg" type="submit" className="[&>span]:text-sm">
                Update user
              </Button>
              <Button
                color="failure"
                outline
                size="lg"
                className="enabled:hover:bg-red-600 [&>span]:border-red-600 [&>span]:text-sm [&>span]:text-red-600 dark:[&>span]:bg-gray-800 dark:[&>span]:text-red-600"
              >
                <svg
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
        </Modal.Body>
      </Modal>
      <Modal
        onClose={() => setShowReadUserModal(false)}
        popup
        size="3xl"
        show={isShowReadUserModal}
      >
        <Modal.Body className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
          <div className="mb-4 flex justify-between rounded-t sm:mb-5">
            <div className="text-lg text-gray-900 dark:text-white md:text-xl">
              <div className="flex items-center">
                <img
                  alt="Helene avatar"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                  className="mr-2 h-12 w-12 rounded-full sm:mr-4"
                ></img>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white md:text-xl">
                    Helene Engels
                  </h3>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    Moderator
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => setShowReadUserModal(false)}
                className="absolute right-5 top-[18px] ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  aria-hidden
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
          </div>
          <div className="mb-4 grid gap-4 sm:mb-5 sm:grid-cols-2 sm:gap-6">
            <dl>
              <dt className="sr-only">Role</dt>
              <dd className="mb-2 flex items-center text-gray-500 dark:text-gray-400">
                <svg
                  className="mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500"
                  aria-hidden
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                Frontend Developer
              </dd>
              <dt className="sr-only">Location</dt>
              <dd className="mb-4 flex items-center text-gray-500 dark:text-gray-400 sm:mb-5">
                <svg
                  className="mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500"
                  aria-hidden
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
                United States of America
              </dd>
              <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
                Email Adress
              </dt>
              <dd className="mb-4 font-medium text-gray-900 dark:text-white sm:mb-5">
                helene@company.com
              </dd>
              <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
                Home Adress
              </dt>
              <dd className="mb-4 font-medium text-gray-900 dark:text-white sm:mb-5">
                92 Miles Drive, Newark, NJ 07103, California, United States of
                America
              </dd>
              <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
                Phone Number
              </dt>
              <dd className="font-medium text-gray-900 dark:text-white">
                +1234 567 890 / +12 345 678{" "}
              </dd>
            </dl>
            <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Biography
              </dt>
              <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                Hello, I'm Helene Engels, USA Designer, Creating things that
                stand out, Featured by Adobe, Figma, Webflow and others, Daily
                design tips & resources, Exploring Web3.
              </dd>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Social
              </dt>
              <dd className="inline-flex items-center space-x-1">
                <a
                  href="#"
                  className="rounded-lg p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="rounded-lg p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="rounded-lg p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="rounded-lg p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </dd>
            </dl>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Button size="lg" className="[&>span]:text-sm">
                <svg
                  aria-hidden
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-ml-1 mr-1 h-5 w-5"
                >
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                  <path
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clipRule="evenodd"
                  />
                </svg>
                Edit
              </Button>
            </div>
            <Button
              color="failure"
              size="lg"
              className="inline-flex [&>span]:text-sm"
            >
              <svg
                aria-hidden
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="-ml-1 mr-1.5 h-5 w-5"
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
        </Modal.Body>
      </Modal>
      <Modal
        onClose={() => setShowDeleteUserModal(false)}
        popup
        size="md"
        show={isShowDeleteUserModal}
      >
        <Modal.Body className="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-700 sm:p-5">
          <button
            onClick={() => setShowDeleteUserModal(false)}
            className="absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              aria-hidden
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <HiExclamationCircle
            aria-hidden
            className="mx-auto mb-3.5 h-14 w-14 text-gray-400 dark:text-gray-200"
          />
          <p className="mb-4 text-gray-500 dark:text-gray-300">
            Are you sure you want to delete this item?
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Button color="failure" type="submit">
              Yes, I'm sure
            </Button>
            <Button
              color="gray"
              onClick={() => setShowDeleteUserModal(false)}
              outline
              className="hover:text-gray-900 focus:ring-blue-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600 [&>span]:text-gray-500 dark:[&>span]:bg-gray-700 dark:[&>span]:text-gray-300"
            >
              No, cancel
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}
