import {
  Accordion,
  Button,
  Checkbox,
  Datepicker,
  Label,
  Select,
  TextInput,
  Textarea,
  Tooltip,
} from "flowbite-react";
import { useState } from "react";

export function UpdateFormWithAccordion() {
  const [validityPeriodStart, setValidityPeriodStart] = useState("8/11/2023");
  const [validityPeriodEnd, setValidityPeriodEnd] = useState("3/11/2024");

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-5xl px-4 py-8 lg:py-16">
        <form>
          <Accordion flush className="divide-y-0 border-0">
            <Accordion.Panel>
              <Accordion.Title
                theme={{
                  base: "flex w-full items-center justify-between px-5 py-5 text-left font-medium text-gray-500 dark:text-gray-400",
                  open: {
                    off: "border-b bg-gray-100 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600",
                  },
                }}
              >
                General Information
              </Accordion.Title>
              <Accordion.Content className="px-0">
                <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <Label
                        htmlFor="name"
                        className="mb-2 block dark:text-white"
                      >
                        Product Name
                      </Label>
                      <TextInput
                        defaultValue={`Apple iMac 27"`}
                        id="name"
                        name="name"
                        required
                      />
                    </div>
                    <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                      <div className="w-full">
                        <Label
                          htmlFor="brand"
                          className="mb-2 block dark:text-white"
                        >
                          Brand
                        </Label>
                        <TextInput
                          defaultValue="Apple"
                          id="brand"
                          name="brand"
                          required
                        />
                      </div>
                      <div className="w-full">
                        <Label
                          htmlFor="price"
                          className="mb-2 block dark:text-white"
                        >
                          Price
                        </Label>
                        <TextInput
                          defaultValue="2999"
                          id="price"
                          name="price"
                          required
                          type="number"
                        />
                      </div>
                    </div>
                    <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                      <div className="w-full">
                        <Label
                          htmlFor="category"
                          className="mb-2 block dark:text-white"
                        >
                          Category
                        </Label>
                        <Select id="category">
                          <option selected value="EC">
                            Electronics
                          </option>
                          <option value="TV">TV/Monitors</option>
                          <option value="PC">PC</option>
                          <option value="GA">Gaming/Console</option>
                          <option value="PH">Phones</option>
                        </Select>
                      </div>
                      <div className="w-full">
                        <Label
                          htmlFor="return-policy"
                          className="mb-2 block dark:text-white"
                        >
                          Return Policy
                        </Label>
                        <Select id="return-policy">
                          <option selected>30 days</option>
                          <option value="10">10 days</option>
                          <option value="NO">None</option>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                      <div className="w-full">
                        <Label
                          htmlFor="shipping"
                          className="mb-2 block dark:text-white"
                        >
                          Ships From
                        </Label>
                        <TextInput
                          defaultValue="Bergside Inc."
                          id="shipping"
                          name="shipping"
                          required
                        />
                      </div>
                      <div className="w-full">
                        <Label
                          htmlFor="sold-by"
                          className="mb-2 block dark:text-white"
                        >
                          Sold By
                        </Label>
                        <TextInput
                          defaultValue="Flowbite LLC"
                          id="sold-by"
                          name="sold-by"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                      <div className="w-full">
                        <Label
                          htmlFor="import-fees"
                          className="mb-2 block dark:text-white"
                        >
                          Import Fees
                        </Label>
                        <TextInput
                          defaultValue="10"
                          id="import-fees"
                          name="import-fees"
                          required
                          type="number"
                        />
                      </div>
                      <div className="w-full">
                        <Label
                          htmlFor="product-state"
                          className="mb-2 block dark:text-white"
                        >
                          Product State
                        </Label>
                        <Select id="product-state">
                          <option selected>New</option>
                          <option value="RE">Refurbished</option>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label
                        htmlFor="description"
                        className="mb-2 block dark:text-white"
                      >
                        Description
                      </Label>
                      <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-gray-700">
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
                        <div className="rounded-b-lg bg-gray-50 px-4 py-2 dark:bg-gray-700">
                          <Textarea
                            defaultValue="Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US"
                            id="description"
                            required
                            rows={8}
                            className="border-0 px-0 text-sm focus:ring-0"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Checkbox
                        defaultChecked
                        id="product-options"
                        name="product-options"
                      />
                      <Label
                        htmlFor="product-options"
                        className="ml-2 text-sm text-gray-500 dark:text-gray-300"
                      >
                        Product has multiple options, like different colors or
                        sizes
                      </Label>
                    </div>
                  </div>
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <Label
                        htmlFor="tags"
                        className="mb-2 block dark:text-white"
                      >
                        Tags
                      </Label>
                      <TextInput
                        defaultValue="react, tailwind"
                        name="tags"
                        id="tags"
                        required
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="item-weight"
                        className="mb-2 block dark:text-white"
                      >
                        Item Weight (kg)
                      </Label>
                      <TextInput
                        defaultValue="12"
                        id="item-weight"
                        name="item-weight"
                        required
                        type="number"
                      />
                    </div>
                    <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                      <div className="w-full">
                        <Label
                          htmlFor="length"
                          className="mb-2 block dark:text-white"
                        >
                          Length (cm)
                        </Label>
                        <TextInput
                          defaultValue="105"
                          id="length"
                          name="length"
                          required
                          type="number"
                        />
                      </div>
                      <div className="w-full">
                        <Label
                          htmlFor="breadth"
                          className="mb-2 block dark:text-white"
                        >
                          Breadth (cm)
                        </Label>
                        <TextInput
                          defaultValue="15"
                          id="breadth"
                          name="breadth"
                          required
                          type="number"
                        />
                      </div>
                      <div className="w-full">
                        <Label
                          htmlFor="width"
                          className="mb-2 block dark:text-white"
                        >
                          Width (cm)
                        </Label>
                        <TextInput
                          defaultValue="23"
                          id="width"
                          name="width"
                          required
                          type="number"
                        />
                      </div>
                    </div>
                    <div>
                      <Label
                        htmlFor="dropzone-file"
                        className="mb-2 block dark:text-white"
                      >
                        Product Images
                      </Label>
                      <div className="mb-4 grid grid-cols-3 gap-4">
                        <div className="relative rounded-lg bg-gray-100 p-2 dark:bg-gray-700 xl:h-36 xl:w-36">
                          <img
                            src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                            alt="iMac"
                          />
                          <button
                            type="button"
                            className="absolute bottom-1 left-1 text-red-600 hover:text-red-500 dark:text-red-500 dark:hover:text-red-400"
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
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="sr-only">Remove image</span>
                          </button>
                        </div>
                        <div className="relative rounded-lg bg-gray-100 p-2 dark:bg-gray-700 xl:h-36 xl:w-36">
                          <img
                            alt="iMac"
                            src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                          />
                          <button className="absolute bottom-1 left-1 text-red-600 hover:text-red-500 dark:text-red-500 dark:hover:text-red-400">
                            <svg
                              aria-hidden
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="sr-only">Remove image</span>
                          </button>
                        </div>
                        <div className="relative rounded-lg bg-gray-100 p-2 dark:bg-gray-700 xl:h-36 xl:w-36">
                          <img
                            alt="iMac"
                            src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                          />
                          <button className="absolute bottom-1 left-1 text-red-600 hover:text-red-500 dark:text-red-500 dark:hover:text-red-400">
                            <svg
                              aria-hidden
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="sr-only">Remove image</span>
                          </button>
                        </div>
                        <div className="relative rounded-lg bg-gray-100 p-2 dark:bg-gray-700 xl:h-36 xl:w-36">
                          <img
                            alt="iMac"
                            src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                          />
                          <button
                            type="button"
                            className="absolute bottom-1 left-1 text-red-600 hover:text-red-500 dark:text-red-500 dark:hover:text-red-400"
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
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="sr-only">Remove image</span>
                          </button>
                        </div>
                      </div>
                      <div className="flex w-full items-center justify-center">
                        <Label
                          htmlFor="dropzone-file"
                          className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <div className="flex flex-col items-center justify-center pb-6 pt-5">
                            <svg
                              aria-hidden
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="mb-3 h-10 w-10 text-gray-400"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>
                              &nbsp;or drag and drop
                            </p>
                            <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">
                              Max. File Size: 30MB
                            </p>
                            <Button size="xs">Extra small</Button>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                          />
                        </Label>
                      </div>
                    </div>
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
                Discount
              </Accordion.Title>
              <Accordion.Content className="px-0 pb-0">
                <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                      <div className="w-full">
                        <Label
                          htmlFor="discount"
                          className="mb-2 block dark:text-white"
                        >
                          Discount Type
                        </Label>
                        <Select id="discount">
                          <option selected>Percent off</option>
                          <option value="SU">Sum</option>
                        </Select>
                      </div>
                      <div className="w-full">
                        <Label
                          htmlFor="minimum-order"
                          className="mb-2 block dark:text-white"
                        >
                          Minimum Order Amount
                        </Label>
                        <TextInput
                          defaultValue="400"
                          icon={() => (
                            <svg
                              aria-hidden
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-500 dark:text-gray-400"
                            >
                              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                          id="minimum-order"
                          name="minimum-order"
                          type="number"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <Label
                        htmlFor="discount-worth"
                        className="mb-2 block dark:text-white"
                      >
                        Discount worth
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
                              d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <TextInput
                          defaultValue="15"
                          icon={() => (
                            <svg
                              aria-hidden
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-500 dark:text-gray-400"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                          id="discount-worth"
                          type="number"
                        />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Checkbox
                        defaultChecked
                        id="offer-checkbox"
                        name="offer-checkbox"
                      />
                      <Label
                        htmlFor="offer-checkbox"
                        className="ml-2 text-sm text-gray-500 dark:text-gray-300"
                      >
                        I understand that the discount given in this offer will
                        be borne by me
                      </Label>
                    </div>
                  </div>
                  <div>
                    <Label
                      htmlFor="datepicker"
                      className="mb-2 block dark:text-white"
                    >
                      Offer Validity Period
                    </Label>
                    <div className="w-full items-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                      <div className="relative w-full">
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
                        <Datepicker
                          id="datepicker"
                          name="datepicker"
                          onSelectedDateChanged={(date) => {
                            setValidityPeriodStart(date.toLocaleDateString());
                          }}
                          value={validityPeriodStart}
                        />
                      </div>
                      <div className="relative w-full">
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
                        <Datepicker
                          id="datepicker"
                          name="datepicker"
                          onSelectedDateChanged={(date) => {
                            setValidityPeriodEnd(date.toLocaleDateString());
                          }}
                          value={validityPeriodEnd}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
          <div className="mt-6 flex items-center space-x-4">
            <Button type="submit" className="[&>span]:px-5 [&>span]:py-2.5">
              Update product
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
