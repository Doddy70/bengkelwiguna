import {
  Accordion,
  Button,
  Checkbox,
  Label,
  Modal,
  Select,
  TextInput,
  ToggleSwitch,
  Tooltip,
  theme,
} from "flowbite-react";
import { useState } from "react";
import { HiInformationCircle, HiPlus, HiX } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export function CreateModalWithAccordion() {
  const [showModal, setShowModal] = useState(false);
  const [userStatus, setUserStatus] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)} className="mx-auto">
        Create user
      </Button>
      <Modal
        onClose={() => setShowModal(false)}
        popup
        show={showModal}
        size="2xl"
      >
        <Modal.Body className="relative rounded-lg bg-white p-0 shadow dark:bg-gray-800">
          <div className="flex items-center justify-between rounded-t p-5">
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
                      <Label
                        htmlFor="user-permissions"
                        className="mb-2 inline-flex items-center"
                      >
                        User Permissions
                        <Tooltip
                          content="User permissions, part of the overall user management process, are access granted to users to specific resources such as files, applications, networks, or devices."
                          theme={{
                            base: twMerge(theme.tooltip.base, "w-96 text-xs"),
                          }}
                        >
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
                        id="job-title"
                        name="job-title"
                        placeholder="e.g. React Native Developer"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="languages" className="mb-2 block">
                        Languages
                      </Label>
                      <TextInput
                        id="languages"
                        name="languages"
                        placeholder="e.g. English"
                        required
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="account"
                        className="mb-2 inline-flex items-center"
                      >
                        Account
                        <Tooltip
                          content="Choose here your account type."
                          theme={{
                            base: twMerge(theme.tooltip.base, "text-xs"),
                          }}
                        >
                          <button className="ml-1">
                            <HiInformationCircle className="ml-1 h-4 w-4 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
                            <span className="sr-only">Account details</span>
                          </button>
                        </Tooltip>
                      </Label>
                      <Select id="account" name="account">
                        <option selected>Choose account type</option>
                        <option value="DF">Default Account</option>
                        <option value="pro">PRO Account</option>
                      </Select>
                    </div>
                    <div>
                      <Label
                        htmlFor="user-role"
                        className="mb-2 inline-flex items-center"
                      >
                        User Role
                        <Tooltip
                          content="Flowbite provides 7 predefined roles: Owner, Admin, Editor, Contributor and Viewer. Assign the most suitable role to each user, giving them the most appropriate level of control."
                          theme={{
                            base: twMerge(theme.tooltip.base, "w-96 text-xs"),
                          }}
                        >
                          <button className="ml-1">
                            <HiInformationCircle className="ml-1 h-4 w-4 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
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
                        <Tooltip
                          content="As an administrator, you can view the status of a user's email. The status indicates whether a user's email is verified or not."
                          theme={{
                            base: twMerge(theme.tooltip.base, "w-96 text-xs"),
                          }}
                        >
                          <button className="ml-1">
                            <HiInformationCircle className="ml-1 h-4 w-4 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />

                            <span className="sr-only">
                              Email status details
                            </span>
                          </button>
                        </Tooltip>
                      </Label>
                      <Select id="email-status" name="email-status">
                        <option selected value="NV">
                          Not verified
                        </option>
                        <option value="V">Verified</option>
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
                        checked={userStatus}
                        id="status"
                        label={userStatus ? "Active" : "Inactive"}
                        name="status"
                        onChange={() => setUserStatus(!userStatus)}
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
                        id="skills"
                        name="skills"
                        placeholder="e.g. Figma, HTML, Javascript"
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="phone-number" className="mb-2 block">
                        Phone Number
                      </Label>
                      <TextInput
                        id="phone-number"
                        name="phone-number"
                        placeholder="Add a phone number"
                        required
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="linkedin" className="mb-2 block">
                        Linkedin URL
                      </Label>
                      <TextInput
                        id="linkedin"
                        name="linkedin"
                        placeholder="Linkedin Profile"
                        required
                        type="url"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="facebook" className="mb-2 block">
                        Facebook
                      </Label>
                      <TextInput
                        id="facebook"
                        name="facebook"
                        placeholder="Facebook Profile"
                        required
                        type="url"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="twitter" className="mb-2 block">
                        Twitter
                      </Label>
                      <TextInput
                        id="instagram"
                        name="instagram"
                        placeholder="Instagram Username"
                        required
                        type="url"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="personal-website" className="mb-2 block">
                        Personal Website
                      </Label>
                      <TextInput
                        id="personal-website"
                        name="personal-website"
                        placeholder="www.example.com"
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
                        id="address"
                        name="address"
                        placeholder="Your Location"
                        required
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="timezone" className="mb-2 block">
                        Timezone
                      </Label>
                      <TextInput
                        id="timezone"
                        name="timezone"
                        placeholder="e.g. GMT-6"
                        required
                      />
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <div className="flex items-center space-x-4 px-4 py-6">
              <Button
                size="lg"
                type="submit"
                className="inline-flex w-full [&>span]:text-sm"
              >
                <HiPlus className="mr-2 h-4 w-4" />
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
