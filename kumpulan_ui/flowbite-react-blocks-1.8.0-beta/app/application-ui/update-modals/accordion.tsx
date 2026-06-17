import {
  Accordion,
  Button,
  Checkbox,
  Label,
  Modal,
  Select,
  TextInput,
  Textarea,
  ToggleSwitch,
  Tooltip,
} from "flowbite-react";
import { useState } from "react";

export function UpdateModalAccordion() {
  const [showModal, setShowModal] = useState(false);
  const [userStatus, setUserStatus] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)} className="mx-auto">
        Update user
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
              Update user
            </h3>
            <button
              onClick={() => setShowModal(false)}
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
                              className="inline-flex dark:border-gray-600 [&>span]:text-xs dark:[&>span]:bg-gray-800 dark:[&>span]:text-gray-400"
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
                Update product
              </Button>
              <Button
                color="failure"
                outline
                theme={{
                  color: {
                    failure:
                      "border border-transparent bg-red-600 text-white focus:ring-4 focus:ring-red-300 enabled:hover:bg-red-600 dark:bg-red-600 dark:focus:ring-red-900 dark:enabled:hover:bg-red-600",
                  },
                  outline: {
                    on: "flex w-full justify-center bg-white text-red-600 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-800 dark:text-red-500",
                  },
                }}
                className="[&>span]:border-red-600 [&>span]:px-5 [&>span]:py-2.5"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-ml-1 mr-1 h-5 w-5"
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
    </>
  );
}
