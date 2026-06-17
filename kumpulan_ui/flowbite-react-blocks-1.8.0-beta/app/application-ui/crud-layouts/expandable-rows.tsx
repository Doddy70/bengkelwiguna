import {
  Badge,
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
  Tooltip,
  theme,
} from "flowbite-react";
import { useState } from "react";
import { HiCalendar, HiCloudUpload, HiX } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export function CRUDLayoutWithExpandableRows() {
  const [isShowAddNewProductModal, setShowAddNewProductModal] = useState(false);

  return (
    <section className="bg-gray-50 py-3 dark:bg-gray-900 sm:py-5">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col items-center justify-between space-y-3 border-b p-4 dark:border-gray-700 md:flex-row md:space-x-4 md:space-y-0">
            <div className="flex w-full items-center space-x-3">
              <h5 className="font-semibold dark:text-white">
                Flowbite Products
              </h5>
              <div className="font-medium text-gray-400">6,560 results</div>
              <Tooltip content="Showing 1-10 of 6,560 results">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">More info</span>
              </Tooltip>
            </div>
            <div className="flex w-full flex-col items-center justify-end gap-3 md:w-fit md:flex-row">
              <Button
                onClick={() => setShowAddNewProductModal(true)}
                className="w-full whitespace-nowrap"
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
                Add new product
              </Button>
              <Modal
                onClose={() => setShowAddNewProductModal(false)}
                show={isShowAddNewProductModal}
                size="3xl"
              >
                <Modal.Body className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
                  <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600 sm:mb-5">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Add Product
                    </h3>
                    <button
                      onClick={() => setShowAddNewProductModal(false)}
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
                          htmlFor="name"
                          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Product Name
                        </Label>
                        <TextInput
                          id="name"
                          name="name"
                          placeholder="Type product name"
                          required
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="category"
                          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Category
                        </Label>
                        <Select id="category" name="category">
                          <option selected>Select category</option>
                          <option value="TV">TV/Monitors</option>
                          <option value="PC">PC</option>
                          <option value="GA">Gaming/Console</option>
                          <option value="PH">Phones</option>
                        </Select>
                      </div>
                      <div>
                        <Label
                          htmlFor="brand"
                          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Brand
                        </Label>
                        <TextInput
                          id="brand"
                          name="brand"
                          placeholder="Product brand"
                          required
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="price"
                          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Price
                        </Label>
                        <TextInput
                          id="price"
                          name="price"
                          placeholder="$2999"
                          required
                          type="number"
                        />
                      </div>
                      <div className="grid gap-4 sm:col-span-2 sm:grid-cols-4 md:gap-6">
                        <div>
                          <Label
                            htmlFor="weight"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Item weight (kg)
                          </Label>
                          <TextInput
                            id="weight"
                            name="weight"
                            placeholder="12"
                            required
                            type="number"
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="length"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Lenght (cm)
                          </Label>
                          <TextInput
                            id="length"
                            name="length"
                            placeholder="105"
                            required
                            type="number"
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="breadth"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Breadth (cm)
                          </Label>
                          <TextInput
                            id="breadth"
                            name="breadth"
                            placeholder="15"
                            required
                            type="number"
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="width"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Width (cm)
                          </Label>
                          <TextInput
                            id="width"
                            name="width"
                            placeholder="23"
                            required
                            type="number"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <Label
                          htmlFor="description"
                          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Description
                        </Label>
                        <Textarea
                          id="description"
                          placeholder="Write product description here"
                          required
                          rows={4}
                        />
                      </div>
                    </div>
                    <div className="mb-4 space-y-4 sm:flex sm:space-y-0">
                      <div className="mr-4 flex items-center">
                        <Checkbox id="inline-checkbox" name="sellingType" />
                        <Label
                          htmlFor="inline-checkbox"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          In-store only
                        </Label>
                      </div>
                      <div className="mr-4 flex items-center">
                        <Checkbox
                          id="inline-2-checkbox"
                          name="sellingType"
                          required
                        />
                        <Label
                          htmlFor="inline-2-checkbox"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Online selling only
                        </Label>
                      </div>
                      <div className="mr-4 flex items-center">
                        <Checkbox
                          defaultChecked
                          id="inline-checked-checkbox"
                          name="sellingType"
                        />
                        <Label
                          htmlFor="inline-checked-checkbox"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Both in-store and online
                        </Label>
                      </div>
                    </div>
                    <div className="mb-4">
                      <span className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                        Product Images
                      </span>
                      <div className="flex w-full items-center justify-center">
                        <Label
                          htmlFor="dropzone-file"
                          className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <div className="flex flex-col items-center justify-center pb-6 pt-5">
                            <HiCloudUpload className="mb-3 h-10 w-10 text-gray-400" />
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                          />
                        </Label>
                      </div>
                    </div>
                    <div className="items-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full md:w-fit [&>span]:text-sm"
                      >
                        Add product
                      </Button>
                      <Button
                        size="lg"
                        className="w-full md:w-fit [&>span]:text-sm"
                      >
                        <HiCalendar className="-ml-1 mr-1 h-5 w-5" />
                        Schedule
                      </Button>
                      <Button
                        color="gray"
                        onClick={() => setShowAddNewProductModal(false)}
                        size="lg"
                        className="w-full dark:bg-gray-700 dark:enabled:hover:bg-gray-600 md:w-fit [&>span]:text-sm [&>span]:text-gray-200 hover:[&>span]:text-gray-900 dark:[&>span]:enabled:hover:text-white"
                      >
                        <HiX className="-ml-1 mr-1 h-5 w-5" />
                        Discard
                      </Button>
                    </div>
                  </form>
                </Modal.Body>
              </Modal>
              <Dropdown
                color="gray"
                label="Table settings"
                theme={{
                  floating: {
                    target: "w-full whitespace-nowrap",
                  },
                }}
              >
                <div className="p-3">
                  <h6 className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Columns
                  </h6>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center rounded-md px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                      <Checkbox id="product" name="product" />
                      <Label htmlFor="product" className="ml-2">
                        Product
                      </Label>
                    </li>
                    <li className="flex items-center rounded-md px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                      <Checkbox id="category" name="category" />
                      <Label htmlFor="category" className="ml-2">
                        Category
                      </Label>
                    </li>
                    <li className="flex items-center rounded-md px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                      <Checkbox id="brand" name="brand" />
                      <Label htmlFor="brand" className="ml-2">
                        Brand
                      </Label>
                    </li>
                    <li className="flex items-center rounded-md px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                      <Checkbox id="price" name="price" />
                      <Label htmlFor="price" className="ml-2">
                        Price
                      </Label>
                    </li>
                    <li className="flex items-center rounded-md px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                      <Checkbox defaultChecked id="stock" name="stock" />
                      <Label htmlFor="stock" className="ml-2">
                        Stock
                      </Label>
                    </li>
                    <li className="flex items-center rounded-md px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                      <Checkbox id="status" name="status" />
                      <Label htmlFor="status" className="ml-2">
                        Status
                      </Label>
                    </li>
                  </ul>
                  <h6 className="mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">
                    Additional settings
                  </h6>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center rounded-md px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                      <Checkbox
                        defaultChecked
                        id="showAdditionalInfo"
                        name="showAdditionalInfo"
                      />
                      <Label htmlFor="showAdditionalInfo" className="ml-2">
                        Show additional info
                      </Label>
                    </li>
                    <li className="flex items-center rounded-md px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                      <Checkbox
                        defaultChecked
                        id="showImages"
                        name="showImages"
                      />
                      <Label
                        htmlFor="showImages"
                        className="rounded-md px-2 py-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Show images
                      </Label>
                    </li>
                  </ul>
                  <h6 className="mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">
                    Export
                  </h6>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center rounded-md px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                      <Checkbox id="exportCSV" name="exportCSV" />
                      <Label htmlFor="exportCSV" className="ml-2">
                        Export CSV
                      </Label>
                    </li>
                  </ul>
                  <h6 className="mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">
                    Row height
                  </h6>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center rounded-md px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                      <Radio defaultChecked id="normal" name="row-height" />
                      <Label htmlFor="normal" className="ml-2">
                        Normal
                      </Label>
                    </li>
                    <li className="flex items-center rounded-md px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                      <Radio id="compact" name="row-height" />
                      <Label htmlFor="compact" className="ml-2">
                        Compact
                      </Label>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="ml-1.5 mt-4 flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Apply to all
                  </a>
                </div>
              </Dropdown>
            </div>
          </div>
          <div className="flex flex-col-reverse items-start justify-between border-b p-4 dark:border-gray-700 md:flex-row md:items-center md:space-x-4">
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
            <div className="grid w-full grid-cols-1 md:grid-cols-4 md:gap-4 lg:w-2/3">
              <div className="w-full">
                <Label htmlFor="brand" className="sr-only">
                  Brand
                </Label>
                <Select
                  id="brand"
                  name="brand"
                  theme={{
                    field: {
                      select: {
                        base: "peer block w-full appearance-none border-0 border-b-2 border-gray-200 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
                        colors: {
                          gray: "bg-transparent text-gray-500",
                        },
                        sizes: {
                          md: "px-0 py-2.5 text-sm",
                        },
                        withAddon: {
                          off: "rounded-none",
                        },
                      },
                    },
                  }}
                >
                  <option selected>Brand</option>
                  <option value="purple">Samsung</option>
                  <option value="primary">Apple</option>
                  <option value="pink">Pink</option>
                  <option value="green">Green</option>
                </Select>
              </div>
              <div className="w-full">
                <Label htmlFor="price" className="sr-only">
                  Price
                </Label>
                <Select
                  id="price"
                  name="price"
                  theme={{
                    field: {
                      select: {
                        base: "peer block w-full appearance-none border-0 border-b-2 border-gray-200 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
                        colors: {
                          gray: "bg-transparent text-gray-500",
                        },
                        sizes: {
                          md: "px-0 py-2.5 text-sm",
                        },
                        withAddon: {
                          off: "rounded-none",
                        },
                      },
                    },
                  }}
                >
                  <option selected>Price</option>
                  <option value="below-100">$ 1-100</option>
                  <option value="below-500">$ 101-500</option>
                  <option value="below-1000">$ 501-1000</option>
                  <option value="over-1000">$ 1001+</option>
                </Select>
              </div>
              <div className="w-full">
                <Label htmlFor="category" className="sr-only">
                  Category
                </Label>
                <Select
                  id="category"
                  name="category"
                  theme={{
                    field: {
                      select: {
                        base: "peer block w-full appearance-none border-0 border-b-2 border-gray-200 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
                        colors: {
                          gray: "bg-transparent text-gray-500",
                        },
                        sizes: {
                          md: "px-0 py-2.5 text-sm",
                        },
                        withAddon: {
                          off: "rounded-none",
                        },
                      },
                    },
                  }}
                >
                  <option selected>Category</option>
                  <option value="pc">PC</option>
                  <option value="phone">Phone</option>
                  <option value="tablet">Tablet</option>
                  <option value="console">Gaming/Console</option>
                </Select>
              </div>
              <div className="w-full">
                <Label htmlFor="color" className="sr-only">
                  Color
                </Label>
                <Select
                  id="color"
                  name="color"
                  theme={{
                    field: {
                      select: {
                        base: "peer block w-full appearance-none border-0 border-b-2 border-gray-200 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
                        colors: {
                          gray: "bg-transparent text-gray-500",
                        },
                        sizes: {
                          md: "px-0 py-2.5 text-sm",
                        },
                        withAddon: {
                          off: "rounded-none",
                        },
                      },
                    },
                  }}
                >
                  <option selected>Color</option>
                  <option value="purple">Purple</option>
                  <option value="primary">primary</option>
                  <option value="pink">Pink</option>
                  <option value="green">Green</option>
                </Select>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <Table.Head className="bg-gray-50 text-xs uppercase dark:bg-gray-700">
                <Table.HeadCell scope="col" className="p-4">
                  <div className="flex items-center">
                    <Checkbox
                      id="checkbox-all"
                      name="checkbox-all"
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                    />
                    <Label htmlFor="checkbox-all" className="sr-only">
                      Select all products
                    </Label>
                  </div>
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="px-4 py-3">
                  <span className="sr-only">Expand/Collapse Row</span>
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="min-w-56 px-4 py-3">
                  Product
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="min-w-40 px-4 py-3">
                  Category
                  <svg
                    className="ml-1 inline-block h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                    />
                  </svg>
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="min-w-24 px-4 py-3">
                  Brand
                  <svg
                    className="ml-1 inline-block h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                    />
                  </svg>
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="min-w-24 px-4 py-3">
                  Price
                  <svg
                    className="ml-1 inline-block h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                    />
                  </svg>
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="min-w-24 px-4 py-3">
                  Stock
                  <svg
                    className="ml-1 inline-block h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                    />
                  </svg>
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="min-w-48 px-4 py-3">
                  Total Sales
                  <svg
                    className="ml-1 inline-block h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                    />
                  </svg>
                </Table.HeadCell>
                <Table.HeadCell scope="col" className="min-w-28 px-4 py-3">
                  Status
                  <svg
                    className="ml-1 inline-block h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                    />
                  </svg>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body data-accordion="table-column">
                <Table.Row
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-700"
                  id="table-column-header-0"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-0")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-0"
                >
                  <Table.Cell className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="w-4 p-3">
                    <svg
                      data-accordion-icon=""
                      className="h-6 w-6 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Table.Cell>
                  <Table.Cell
                    scope="row"
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Apple iMac 27&#34;
                  </Table.Cell>
                  <Table.Cell className="px-4 py-3">PC</Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    Apple
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    $2999
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    200
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    245
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3">
                    <Badge color="success" className="w-fit">
                      Active
                    </Badge>
                  </Table.Cell>
                </Table.Row>
                <Table.Row
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-0"
                  aria-labelledby="table-column-header-0"
                >
                  <Table.Cell
                    className="border-b p-4 dark:border-gray-700"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="-mt-0.5 mr-1 h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-1 h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="h-6 w-6 rounded-full bg-purple-600"></div>
                          <div className="h-6 w-6 rounded-full bg-indigo-400"></div>
                          <div className="h-6 w-6 rounded-full bg-primary-600"></div>
                          <div className="h-6 w-6 rounded-full bg-pink-400"></div>
                          <div className="h-6 w-6 rounded-full bg-teal-300"></div>
                          <div className="h-6 w-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Flowbite
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Flowbite
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <EditProductModal />
                      <PreviewProductModal />
                      <DeleteProductModal />
                    </div>
                  </Table.Cell>
                </Table.Row>
                <Table.Row
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-700"
                  id="table-column-header-1"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-1")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-1"
                >
                  <Table.Cell className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="w-4 p-3">
                    <svg
                      data-accordion-icon=""
                      className="h-6 w-6 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Table.Cell>
                  <Table.Cell
                    scope="row"
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Apple iMac 20&quot;
                  </Table.Cell>
                  <Table.Cell className="px-4 py-3">PC</Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    Apple
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    $1499
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    1237
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    2000
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3">
                    <Badge color="success" className="w-fit">
                      Active
                    </Badge>
                  </Table.Cell>
                </Table.Row>
                <Table.Row
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-1"
                  aria-labelledby="table-column-header-1"
                >
                  <Table.Cell
                    className="border-b p-4 dark:border-gray-700"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="-mt-0.5 mr-1 h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-1 h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="h-6 w-6 rounded-full bg-purple-600"></div>
                          <div className="h-6 w-6 rounded-full bg-indigo-400"></div>
                          <div className="h-6 w-6 rounded-full bg-primary-600"></div>
                          <div className="h-6 w-6 rounded-full bg-pink-400"></div>
                          <div className="h-6 w-6 rounded-full bg-teal-300"></div>
                          <div className="h-6 w-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Flowbite
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Flowbite
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <EditProductModal />
                      <PreviewProductModal />
                      <DeleteProductModal />
                    </div>
                  </Table.Cell>
                </Table.Row>
                <Table.Row
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-700"
                  id="table-column-header-2"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-2")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-2"
                >
                  <Table.Cell className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="w-4 p-3">
                    <svg
                      data-accordion-icon=""
                      className="h-6 w-6 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Table.Cell>
                  <Table.Cell
                    scope="row"
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Apple iPhone 14
                  </Table.Cell>
                  <Table.Cell className="px-4 py-3">Phone</Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    Apple
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    $999
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    300
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    466
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3">
                    <Badge color="success" className="w-fit">
                      Active
                    </Badge>
                  </Table.Cell>
                </Table.Row>
                <Table.Row
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-2"
                  aria-labelledby="table-column-header-2"
                >
                  <Table.Cell
                    className="border-b p-4 dark:border-gray-700"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="-mt-0.5 mr-1 h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-1 h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="h-6 w-6 rounded-full bg-purple-600"></div>
                          <div className="h-6 w-6 rounded-full bg-indigo-400"></div>
                          <div className="h-6 w-6 rounded-full bg-primary-600"></div>
                          <div className="h-6 w-6 rounded-full bg-pink-400"></div>
                          <div className="h-6 w-6 rounded-full bg-teal-300"></div>
                          <div className="h-6 w-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Flowbite
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Flowbite
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <EditProductModal />
                      <PreviewProductModal />
                      <DeleteProductModal />
                    </div>
                  </Table.Cell>
                </Table.Row>
                <Table.Row
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-700"
                  id="table-column-header-3"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-3")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-3"
                >
                  <Table.Cell className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="w-4 p-3">
                    <svg
                      data-accordion-icon=""
                      className="h-6 w-6 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Table.Cell>
                  <Table.Cell
                    scope="row"
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Apple iPad Air
                  </Table.Cell>
                  <Table.Cell className="px-4 py-3">Tablet</Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    Apple
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    $1199
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    4576
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    90
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3">
                    <Badge color="success" className="w-fit">
                      Active
                    </Badge>
                  </Table.Cell>
                </Table.Row>
                <Table.Row
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-3"
                  aria-labelledby="table-column-header-3"
                >
                  <Table.Cell
                    className="border-b p-4 dark:border-gray-700"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="-mt-0.5 mr-1 h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-1 h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="h-6 w-6 rounded-full bg-purple-600"></div>
                          <div className="h-6 w-6 rounded-full bg-indigo-400"></div>
                          <div className="h-6 w-6 rounded-full bg-primary-600"></div>
                          <div className="h-6 w-6 rounded-full bg-pink-400"></div>
                          <div className="h-6 w-6 rounded-full bg-teal-300"></div>
                          <div className="h-6 w-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Flowbite
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Flowbite
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <EditProductModal />
                      <PreviewProductModal />
                      <DeleteProductModal />
                    </div>
                  </Table.Cell>
                </Table.Row>
                <Table.Row
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-700"
                  id="table-column-header-4"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-4")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-4"
                >
                  <Table.Cell className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="w-4 p-3">
                    <svg
                      data-accordion-icon=""
                      className="h-6 w-6 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Table.Cell>
                  <Table.Cell
                    scope="row"
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Xbox Series S
                  </Table.Cell>
                  <Table.Cell className="px-4 py-3">Gaming/Console</Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    Microsoft
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    $299
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    56
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    3087
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3">
                    <Badge color="success" className="w-fit">
                      Active
                    </Badge>
                  </Table.Cell>
                </Table.Row>
                <Table.Row
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-4"
                  aria-labelledby="table-column-header-4"
                >
                  <Table.Cell
                    className="border-b p-4 dark:border-gray-700"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="-mt-0.5 mr-1 h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-1 h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="h-6 w-6 rounded-full bg-purple-600"></div>
                          <div className="h-6 w-6 rounded-full bg-indigo-400"></div>
                          <div className="h-6 w-6 rounded-full bg-primary-600"></div>
                          <div className="h-6 w-6 rounded-full bg-pink-400"></div>
                          <div className="h-6 w-6 rounded-full bg-teal-300"></div>
                          <div className="h-6 w-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Flowbite
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Flowbite
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <EditProductModal />
                      <PreviewProductModal />
                      <DeleteProductModal />
                    </div>
                  </Table.Cell>
                </Table.Row>
                <Table.Row
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-700"
                  id="table-column-header-5"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-5")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-5"
                >
                  <Table.Cell className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="w-4 p-3">
                    <svg
                      data-accordion-icon=""
                      className="h-6 w-6 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Table.Cell>
                  <Table.Cell
                    scope="row"
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    PlayStation 5
                  </Table.Cell>
                  <Table.Cell className="px-4 py-3">Gaming/Console</Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    Sony
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    $799
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    78
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    2999
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3">
                    <Badge color="success" className="w-fit">
                      Active
                    </Badge>
                  </Table.Cell>
                </Table.Row>
                <Table.Row
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-5"
                  aria-labelledby="table-column-header-5"
                >
                  <Table.Cell
                    className="border-b p-4 dark:border-gray-700"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="-mt-0.5 mr-1 h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-1 h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="h-6 w-6 rounded-full bg-purple-600"></div>
                          <div className="h-6 w-6 rounded-full bg-indigo-400"></div>
                          <div className="h-6 w-6 rounded-full bg-primary-600"></div>
                          <div className="h-6 w-6 rounded-full bg-pink-400"></div>
                          <div className="h-6 w-6 rounded-full bg-teal-300"></div>
                          <div className="h-6 w-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Flowbite
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Flowbite
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <EditProductModal />
                      <PreviewProductModal />
                      <DeleteProductModal />
                    </div>
                  </Table.Cell>
                </Table.Row>
                <Table.Row
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-700"
                  id="table-column-header-6"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-6")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-6"
                >
                  <Table.Cell className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="w-4 p-3">
                    <svg
                      data-accordion-icon=""
                      className="h-6 w-6 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Table.Cell>
                  <Table.Cell
                    scope="row"
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Xbox Series X
                  </Table.Cell>
                  <Table.Cell className="px-4 py-3">Gaming/Console</Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    Microsoft
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    $699
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    200
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white">
                    1870
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap px-4 py-3">
                    <Badge color="success" className="w-fit">
                      Active
                    </Badge>
                  </Table.Cell>
                </Table.Row>
                <Table.Row
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-6"
                  aria-labelledby="table-column-header-6"
                >
                  <Table.Cell
                    className="border-b p-4 dark:border-gray-700"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-full">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="-mt-0.5 mr-1 h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-1 h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="h-6 w-6 rounded-full bg-purple-600"></div>
                          <div className="h-6 w-6 rounded-full bg-indigo-400"></div>
                          <div className="h-6 w-6 rounded-full bg-primary-600"></div>
                          <div className="h-6 w-6 rounded-full bg-pink-400"></div>
                          <div className="h-6 w-6 rounded-full bg-teal-300"></div>
                          <div className="h-6 w-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Flowbite
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Flowbite
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                        <h6 className="mb-2 text-base font-medium leading-none text-gray-900 dark:text-white">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <EditProductModal />
                      <PreviewProductModal />
                      <DeleteProductModal />
                    </div>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
          <div
            className="flex flex-col items-start justify-between space-y-3 px-4 pb-4 pt-3 md:flex-row md:items-center md:space-y-0"
            aria-label="Table navigation"
          >
            <div className="flex items-center space-x-5 text-xs">
              <div>
                <div className="mb-1 text-gray-500 dark:text-gray-400">
                  Purchase price
                </div>
                <div className="font-medium dark:text-white">$ 3,567,890</div>
              </div>
              <div>
                <div className="mb-1 text-gray-500 dark:text-gray-400">
                  Total selling price
                </div>
                <div className="font-medium dark:text-white">$ 8,489,400</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center rounded-lg py-1.5 text-center text-sm font-medium text-primary-700 hover:text-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:text-primary-500 dark:hover:text-primary-600 dark:focus:ring-primary-800">
                Print barcodes
              </button>
              <button className="flex items-center rounded-lg py-1.5 text-center text-sm font-medium text-primary-700 hover:text-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:text-primary-500 dark:hover:text-primary-600 dark:focus:ring-primary-800">
                Duplicate
              </button>
              <Button size="sm" className="[&_span]:text-xs">
                Export CSV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EditProductModal() {
  const [isShowModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-1 h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
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
      <Modal
        onClose={() => setShowModal(false)}
        popup
        show={isShowModal}
        size="3xl"
      >
        <Modal.Body className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
          <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600 sm:mb-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Update Product
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
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name" className="mb-2 block">
                  Product Name
                </Label>
                <TextInput
                  defaultValue="Apple iPad 5th Gen Wi-Fi"
                  id="name"
                  name="name"
                  placeholder="Ex. Apple iMac 27&ldquo;"
                  required
                />
              </div>
              <div>
                <Label htmlFor="category" className="mb-2 block">
                  Category
                </Label>
                <Select id="category" name="category">
                  <option selected>Electronics</option>
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </Select>
              </div>
              <div>
                <Label htmlFor="brand" className="mb-2 block">
                  Brand
                </Label>
                <TextInput
                  defaultValue="Tesla"
                  id="brand"
                  name="brand"
                  placeholder="Ex. Apple"
                  required
                />
              </div>
              <div>
                <Label htmlFor="price" className="mb-2 block">
                  Price
                </Label>
                <TextInput
                  defaultValue="259"
                  id="price"
                  name="price"
                  placeholder="$2999"
                  required
                  type="number"
                />
              </div>
              <div className="grid gap-4 sm:col-span-2 sm:grid-cols-4 md:gap-6">
                <div>
                  <Label htmlFor="weight" className="mb-2 block">
                    Item weight (kg)
                  </Label>
                  <TextInput
                    defaultValue="32"
                    id="weight"
                    name="weight"
                    placeholder="Ex. 12"
                    required
                    type="number"
                  />
                </div>
                <div>
                  <Label htmlFor="length" className="mb-2 block">
                    Lenght (cm)
                  </Label>
                  <TextInput
                    defaultValue="126"
                    id="length"
                    name="length"
                    placeholder="Ex. 105"
                    required
                    type="number"
                  />
                </div>
                <div>
                  <Label htmlFor="breadth" className="mb-2 block">
                    Breadth (cm)
                  </Label>
                  <TextInput
                    defaultValue="121"
                    id="breadth"
                    name="breadth"
                    placeholder="Ex. 15"
                    required
                    type="number"
                  />
                </div>
                <div>
                  <Label htmlFor="width" className="mb-2 block">
                    Width (cm)
                  </Label>
                  <TextInput
                    defaultValue="953"
                    id="width"
                    name="width"
                    placeholder="Ex. 23"
                    required
                    type="number"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="description" className="mb-2 block">
                  Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="Write your description..."
                >
                  Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7
                  processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
                  Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD
                  storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US
                </Textarea>
              </div>
            </div>
            <div className="mb-4 space-y-4 sm:flex sm:space-y-0">
              <div className="mr-4 flex items-center">
                <Checkbox id="inline-checkbox" name="sellingType" />
                <Label
                  htmlFor="inline-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  In-store only
                </Label>
              </div>
              <div className="mr-4 flex items-center">
                <Checkbox
                  id="inline-2-checkbox"
                  name="sellingType"
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                />
                <Label
                  htmlFor="inline-2-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Online selling only
                </Label>
              </div>
              <div className="mr-4 flex items-center">
                <Checkbox
                  defaultChecked
                  id="inline-checked-checkbox"
                  name="sellingType"
                />
                <Label
                  htmlFor="inline-checked-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Both in-store and online
                </Label>
              </div>
            </div>
            <div className="mb-4">
              <span className="mb-2 block dark:text-white">Product Images</span>
              <div className="mb-4 grid grid-cols-3 gap-4 sm:grid-cols-4">
                <div className="relative rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-36">
                  <img
                    alt="iMac Side"
                    src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
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
                    <span className="sr-only">Delete image</span>
                  </button>
                </div>
                <div className="relative rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-36">
                  <img
                    alt="iMac Front"
                    src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
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
                    <span className="sr-only">Delete image</span>
                  </button>
                </div>
                <div className="relative rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-36">
                  <img
                    alt="iMac Back"
                    src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
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
                    <span className="sr-only">Delete image</span>
                  </button>
                </div>
                <div className="relative rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:h-36 sm:w-36">
                  <img
                    alt="iMac Back"
                    src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
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
                    <span className="sr-only">Delete image</span>
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
                      className="mb-3 h-10 w-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </Label>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button size="lg" type="submit" className="[&>span]:text-sm">
                Update product
              </Button>
              <Button
                color="failure"
                outline
                size="lg"
                className="enabled:hover:bg-red-600 [&>span]:border-red-600 [&>span]:text-sm [&>span]:text-red-600"
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
    </>
  );
}

function PreviewProductModal() {
  const [isShowModal, setShowModal] = useState(false);

  return (
    <>
      <Button color="gray" onClick={() => setShowModal(true)}>
        Preview
      </Button>
      <Modal
        onClose={() => setShowModal(false)}
        popup
        size="3xl"
        show={isShowModal}
      >
        <Modal.Body className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
          <div className="mb-4 flex justify-between rounded-t sm:mb-5">
            <div className="text-lg text-gray-900 dark:text-white md:text-xl">
              <h3 className="font-semibold ">Apple iMac 27”</h3>
              <p className="font-bold">$2999</p>
            </div>
            <div>
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
          </div>
          <div className="mb-4 grid grid-cols-3 gap-4 sm:mb-5 sm:grid-cols-4">
            <div className="rounded-lg bg-gray-100 p-2 dark:bg-gray-700 md:h-36 md:w-36">
              <img
                alt="iMac Side"
                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
              />
            </div>
            <div className="rounded-lg bg-gray-100 p-2 dark:bg-gray-700 md:h-36 md:w-36">
              <img
                alt="iMac Front"
                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
              />
            </div>
            <div className="rounded-lg bg-gray-100 p-2 dark:bg-gray-700 md:h-36 md:w-36">
              <img
                alt="iMac Back"
                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
              />
            </div>
            <div className="rounded-lg bg-gray-100 p-2 dark:bg-gray-700 md:h-36 md:w-36">
              <img
                alt="iMac Back"
                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
              />
            </div>
          </div>
          <dl className="sm:mb-5">
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              Details
            </dt>
            <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
              Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
              processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
              Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
              Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
            </dd>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              Colors
            </dt>
            <dd className="mb-4 flex items-center space-x-2 text-gray-500 dark:text-gray-400">
              <div className="h-6 w-6 rounded-full bg-purple-600"></div>
              <div className="h-6 w-6 rounded-full bg-indigo-400"></div>
              <div className="h-6 w-6 rounded-full bg-primary-600"></div>
              <div className="h-6 w-6 rounded-full bg-pink-400"></div>
              <div className="h-6 w-6 rounded-full bg-teal-300"></div>
              <div className="h-6 w-6 rounded-full bg-green-300"></div>
            </dd>
          </dl>
          <dl className="mb-4 grid grid-cols-2 gap-4 sm:mb-5 sm:grid-cols-3">
            <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Sold by
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">Flowbite</dd>
            </div>
            <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Ships from
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">Flowbite</dd>
            </div>
            <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Product State
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">
                <Badge className="inline-flex [&>span]:flex [&>span]:items-center">
                  <svg
                    aria-hidden
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 h-3 w-3"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  New
                </Badge>
              </dd>
            </div>
            <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Shipping
              </dt>
              <dd className="flex items-center text-gray-500 dark:text-gray-400">
                <svg
                  className="mr-1.5 h-4 w-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Worldwide
              </dd>
            </div>
            <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Dimensions (cm)
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">
                105 x 15 x 23
              </dd>
            </div>
            <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Item weight
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">12kg</dd>
            </div>
          </dl>
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
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                  <path
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clipRule="evenodd"
                  />
                </svg>
                Edit
              </Button>
              <Button
                color="gray"
                outline
                size="lg"
                className="dark:border-gray-600 [&>span]:text-sm dark:[&>span]:bg-gray-800 dark:[&>span]:text-gray-400"
              >
                Preview
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
    </>
  );
}

function DeleteProductModal() {
  const [isShowModal, setShowModal] = useState(false);

  return (
    <>
      <Button color="failure" onClick={() => setShowModal(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-1 h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        Delete
      </Button>
      <Modal
        onClose={() => setShowModal(false)}
        popup
        size="md"
        show={isShowModal}
      >
        <Modal.Body className="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5">
          <button
            onClick={() => setShowModal(false)}
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
          <svg
            aria-hidden
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-3.5 h-11 w-11 text-gray-400 dark:text-gray-500"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <p className="mb-4 text-gray-500 dark:text-gray-300">
            Are you sure you want to delete this item?
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Button
              color="gray"
              onClick={() => setShowModal(false)}
              outline
              className="hover:text-gray-900 focus:ring-blue-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600 [&>span]:text-gray-500 dark:[&>span]:bg-gray-700 dark:[&>span]:text-gray-300"
            >
              No, cancel
            </Button>
            <Button color="failure" type="submit">
              Yes, I'm sure
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
