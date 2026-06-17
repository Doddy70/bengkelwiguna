import {
  Avatar,
  Button,
  Checkbox,
  FileInput,
  Label,
  Select,
  TextInput,
  Textarea,
  Tooltip,
} from "flowbite-react";

export function AdvancedUpdateUserForm() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
        <form>
          <h2 className="mb-4 text-xl font-semibold leading-none text-gray-900 dark:text-white">
            General Information
          </h2>
          <div className="mb-4 grid gap-4 sm:mb-8 md:grid-cols-2 md:gap-6">
            <div className="sm:col-span-2">
              <Label
                htmlFor="file_input"
                className="mb-2 block dark:text-white"
              >
                Upload avatar
              </Label>
              <div className="w-full items-center sm:flex">
                <Avatar
                  alt="Helene avatar"
                  img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                  rounded
                  size="lg"
                  className="mb-4 justify-start sm:mb-0 sm:mr-4 sm:justify-center [&_img]:max-w-none"
                />
                <div className="w-full">
                  <FileInput
                    aria-describedby="file_input_help"
                    id="file_input"
                    name="file_input"
                    className="w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400"
                  />
                  <Label
                    htmlFor="file_input"
                    className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-300"
                  >
                    SVG, PNG, JPG or GIF (MAX. 800x400px).
                  </Label>
                </div>
              </div>
            </div>
            <div>
              <Label
                htmlFor="first-name"
                className="mb-2 block dark:text-white"
              >
                First Name
              </Label>
              <TextInput
                defaultValue="Helene"
                id="first-name"
                name="first-name"
                required
              />
            </div>
            <div>
              <Label htmlFor="last-name" className="mb-2 block dark:text-white">
                Last Name
              </Label>
              <TextInput
                defaultValue="Engels"
                id="last-name"
                name="last-name"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="mb-2 block dark:text-white">
                Email
              </Label>
              <TextInput
                defaultValue="helene@company.com"
                id="email"
                name="email"
                required
                type="email"
              />
            </div>
            <div>
              <Label
                htmlFor="user-permissions"
                className="mb-2 inline-flex items-center text-sm font-medium text-gray-900 dark:text-white"
              >
                User Permissions
                <Tooltip
                  content="User permissions, part of the overall user management process, are access granted to users to specific resources such as files, applications, networks, or devices."
                  theme={{
                    base: "absolute z-10 inline-block max-w-xs rounded-lg px-3 py-2 text-xs font-medium shadow-sm",
                  }}
                >
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
                    <span className="sr-only">Show information</span>
                  </button>
                </Tooltip>
              </Label>
              <Select id="user-permissions" name="user-permissions">
                <option selected>Operational</option>
                <option value="NO">Non Operational</option>
              </Select>
            </div>
            <div>
              <Label
                htmlFor="email-status"
                className="mb-2 inline-flex items-center text-sm font-medium text-gray-900 dark:text-white"
              >
                Email Status
                <Tooltip
                  content="As an administrator, you can view the status of a user's email. The status indicates whether a user's email is verified or not."
                  theme={{
                    base: "absolute z-10 inline-block max-w-xs rounded-lg px-3 py-2 text-xs font-medium shadow-sm",
                  }}
                >
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
                    <span className="sr-only">Show information</span>
                  </button>
                </Tooltip>
              </Label>
              <Select id="email-status" name="email-status">
                <option>Not verified</option>
                <option selected value="VE">
                  Verified
                </option>
              </Select>
            </div>
            <div>
              <Label htmlFor="job-title" className="mb-2 block dark:text-white">
                Job Title
              </Label>
              <TextInput
                defaultValue="React Developer"
                id="job-title"
                name="job-title"
                required
              />
            </div>
            <div>
              <Label
                htmlFor="user-role"
                className="mb-2 inline-flex items-center text-sm font-medium text-gray-900 dark:text-white"
              >
                User Role
                <Tooltip
                  content="Flowbite provides 7 predefined roles: Owner, Admin, Editor, Contributor and Viewer. Assign the most suitable role to each user, giving them the most appropriate level of control."
                  theme={{
                    base: "absolute z-10 inline-block max-w-xs rounded-lg px-3 py-2 text-xs font-medium shadow-sm",
                  }}
                >
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
                    <span className="sr-only">Show information</span>
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
            <div>
              <Label
                htmlFor="account"
                className="mb-2 inline-flex items-center text-sm font-medium text-gray-900 dark:text-white"
              >
                Account
                <Tooltip
                  content="Choose here your account type."
                  theme={{
                    base: "absolute z-10 inline-block max-w-xs rounded-lg px-3 py-2 text-xs font-medium shadow-sm",
                  }}
                >
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
                    <span className="sr-only">Show information</span>
                  </button>
                </Tooltip>
              </Label>
              <Select id="account" name="account">
                <option>Choose account type</option>
                <option value="DF">Default Account</option>
                <option selected value="PRO">
                  PRO Account
                </option>
              </Select>
            </div>
            <div>
              <Label htmlFor="password" className="mb-2 block dark:text-white">
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
                className="mb-2 block dark:text-white"
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
              <Label htmlFor="biography" className="mb-2 block dark:text-white">
                Biography
              </Label>
              <div className="w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
                <div className="flex items-center justify-between border-b px-3 py-2 dark:border-gray-600">
                  <div className="flex flex-wrap items-center divide-gray-200 dark:divide-gray-600 sm:divide-x">
                    <div className="flex items-center space-x-1 sm:pr-4">
                      <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
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
                      <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
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
                      <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
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
                      <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
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
                      <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
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
                      <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
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
                      <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
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
                      <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
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
                      <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
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
                    <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:ml-auto">
                      <svg
                        aria-hidden
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
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
                <div className="rounded-b-lg bg-gray-50 px-4 py-2 dark:bg-gray-800 dark:[&>textarea]:bg-gray-800">
                  <Textarea
                    defaultValue="Hello, I'm Helene Engels, USA Designer, Creating things that stand out, Featured by Adobe, Figma, Webflow and others, Daily design tips & resources, Exploring Web3."
                    id="biography"
                    name="biography"
                    required
                    rows={8}
                    className="border-0 px-0 text-sm focus:ring-0"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="mb-2 block dark:text-white">Assign Role</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Checkbox id="inline-checkbox" name="inline-checkbox" />
                  <Label
                    htmlFor="inline-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Administrator
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="inline-2-checkbox" name="inline-2-checkbox" />
                  <Label
                    htmlFor="inline-2-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Member
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    defaultChecked
                    id="inline-checked-checkbox"
                    name="inline-checked-checkbox"
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
          </div>
          <h2 className="mb-4 text-xl font-semibold leading-none text-gray-900 dark:text-white">
            Additional Information
          </h2>
          <div className="mb-4 grid gap-4 sm:mb-8 md:grid-cols-2 md:gap-6">
            <div>
              <Label htmlFor="country" className="mb-2 block dark:text-white">
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
            <div>
              <Label htmlFor="city" className="mb-2 block dark:text-white">
                City
              </Label>
              <Select id="city" name="city">
                <option selected value="LA">
                  Los Angeles
                </option>
                <option value="SF">San Francisco</option>
                <option value="WA">Washington</option>
                <option value="NW">New York</option>
                <option value="SA">Sacramento</option>
              </Select>
            </div>
            <div>
              <Label htmlFor="address" className="mb-2 block dark:text-white">
                Address
              </Label>
              <TextInput
                defaultValue="92 Miles Drive, Newark, NJ 07103..."
                id="adress"
                name="address"
                required
              />
            </div>
            <div>
              <Label htmlFor="zip" className="mb-2 block dark:text-white">
                ZIP
              </Label>
              <TextInput
                defaultValue="2124436"
                id="zip"
                name="zip"
                required
                type="number"
              />
            </div>
            <div>
              <Label htmlFor="timezone" className="mb-2 block dark:text-white">
                Timezone
              </Label>
              <TextInput
                defaultValue="GMT+3"
                id="timezone"
                name="timezone"
                required
                type="text"
              />
            </div>
            <div>
              <Label
                htmlFor="phone-number"
                className="mb-2 block dark:text-white"
              >
                Phone Number
              </Label>
              <TextInput
                defaultValue="3934567890"
                id="phone-number"
                name="phone-number"
                required
                type="number"
              />
            </div>
            <div>
              <Label htmlFor="linkedin" className="mb-2 block dark:text-white">
                Linkedin URL
              </Label>
              <TextInput
                defaultValue="https://www.linkedin.com/in/helene-example/"
                id="linkedin"
                name="linkedin"
                required
                type="url"
              />
            </div>
            <div>
              <Label htmlFor="facebook" className="mb-2 block dark:text-white">
                Facebook
              </Label>
              <TextInput
                defaultValue="@helene.fb"
                id="facebook"
                name="facebook"
                required
                type="url"
              />
            </div>
            <div>
              <Label htmlFor="github" className="mb-2 block dark:text-white">
                Github
              </Label>
              <TextInput
                defaultValue="@helene"
                id="github"
                name="github"
                required
                type="url"
              />
            </div>
            <div>
              <Label htmlFor="dribbble" className="mb-2 block dark:text-white">
                Dribbble
              </Label>
              <TextInput
                defaultValue="@helene.engels"
                id="dribbble"
                name="dribbble"
                required
                type="url"
              />
            </div>
            <div>
              <Label htmlFor="instagram" className="mb-2 block dark:text-white">
                Instagram
              </Label>
              <TextInput
                defaultValue="@helene.insta"
                id="instagram"
                name="instagram"
                required
                type="url"
              />
            </div>
            <div>
              <Label
                htmlFor="personal-website"
                className="mb-2 block dark:text-white"
              >
                Personal Website
              </Label>
              <TextInput
                defaultValue="http://www.example.com"
                id="personal-website"
                name="personal-website"
                required
                type="url"
              />
            </div>
          </div>
          <div className="mt-3 flex items-center space-x-4">
            <Button type="submit" className="[&>span]:px-5 [&>span]:py-2.5">
              Update user
            </Button>
            <Button
              color="failure"
              outline
              theme={{
                color: {
                  failure:
                    "border border-transparent bg-red-600 text-white focus:ring-4 focus:ring-red-300 enabled:hover:bg-red-600 dark:bg-red-600 dark:focus:ring-red-900 dark:enabled:hover:bg-red-500",
                },
                outline: {
                  on: "flex w-full justify-center bg-white text-red-600 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-red-500",
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
      </div>
    </section>
  );
}
