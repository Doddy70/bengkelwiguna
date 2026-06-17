import {
  Badge,
  Button,
  Checkbox,
  Dropdown,
  Label,
  Modal,
  Pagination,
  Radio,
  RangeSlider,
  Select,
  TextInput,
  Textarea,
  theme,
} from "flowbite-react";
import { useState } from "react";
import { HiPlus, HiX } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export function CRUDLayoutWithHorizontalCards() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isShowCreateModal, setShowCreateModal] = useState(false);
  const [isShowReadModal, setShowReadModal] = useState(false);
  const [isShowUpdateModal, setShowUpdateModal] = useState(false);
  const [isShowDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <section className="bg-gray-50 py-3 antialiased dark:bg-gray-900 sm:py-5">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
        <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col justify-between space-y-3 p-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <Label htmlFor="simple-search" className="sr-only">
                  Search
                </Label>
                <div className="relative w-full">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Search"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="flex shrink-0 flex-row items-center justify-between md:justify-end md:space-x-3">
              <div className="flex items-center space-x-3">
                <Button
                  onClick={() => setShowCreateModal(true)}
                  className="whitespace-nowrap"
                >
                  <svg
                    className="mr-2 hidden h-3.5 w-3.5 shrink-0 md:inline"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    />
                  </svg>
                  Add product
                </Button>
                <Dropdown
                  color="gray"
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="mr-2 h-4 w-4 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                        />
                      </svg>
                      Filter
                    </>
                  }
                  theme={{
                    floating: {
                      base: twMerge(theme.dropdown.floating.base, "rounded-lg"),
                    },
                  }}
                >
                  <form className="space-y-4 p-3">
                    <p className="inline-flex items-center text-gray-500 dark:text-gray-400">
                      Filter
                    </p>
                    <div className="mt-4">
                      <span className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                        Price Range
                      </span>
                      <div className="grid grid-cols-2 gap-3">
                        <RangeSlider
                          defaultValue={300}
                          id="min-price"
                          max={7000}
                          min={0}
                          name="min-price"
                          className="[&_input]:dark:bg-gray-600"
                        />
                        <RangeSlider
                          defaultValue={3500}
                          id="max-price"
                          max={7000}
                          min={0}
                          name="max-price"
                          className="[&_input]:dark:bg-gray-600"
                        />
                        <div className="flex items-center justify-between space-x-2 md:col-span-2">
                          <div className="w-full">
                            <Label
                              htmlFor="min-price-input"
                              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                            >
                              From
                            </Label>
                            <TextInput
                              defaultValue="300"
                              id="min-price-input"
                              name="min-price-input"
                              max="7000"
                              min="0"
                              type="number"
                              className="[&_input]:py-2 [&_input]:sm:text-xs"
                            />
                          </div>
                          <div className="w-full">
                            <Label
                              htmlFor="max-price-input"
                              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                            >
                              To
                            </Label>
                            <TextInput
                              defaultValue="3500"
                              id="max-price-input"
                              name="max-price-input"
                              max="7000"
                              min="0"
                              type="number"
                              className="[&_input]:py-2 [&_input]:sm:text-xs"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                        Sales
                      </span>
                      <div className="grid grid-cols-2 gap-3">
                        <RangeSlider
                          defaultValue={300}
                          id="min-sales"
                          max={7000}
                          min={0}
                          name="min-sales"
                          step={1}
                          className="[&_input]:dark:bg-gray-600"
                        />
                        <RangeSlider
                          defaultValue={3500}
                          id="max-sales"
                          max={7000}
                          min={0}
                          name="max-sales"
                          step={1}
                          className="[&_input]:dark:bg-gray-600"
                        />
                      </div>
                      <div className="flex items-center justify-between space-x-2 md:col-span-2">
                        <div className="w-full">
                          <Label
                            htmlFor="min-sales-input"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                          >
                            From
                          </Label>
                          <TextInput
                            defaultValue="1"
                            id="min-sales-input"
                            max="300"
                            min="0"
                            name="min-sales-input"
                            type="number"
                            className="[&_input]:py-2 [&_input]:sm:text-xs"
                          />
                        </div>
                        <div className="w-full">
                          <Label
                            htmlFor="max-sales-input"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                          >
                            To
                          </Label>
                          <TextInput
                            defaultValue="100"
                            id="max-sales-input"
                            max="300"
                            min="0"
                            name="max-sales-input"
                            type="number"
                            className="[&_input]:py-2 [&_input]:sm:text-xs"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                        Category
                      </span>
                      <ul className="grid w-full grid-cols-2 gap-3">
                        <li>
                          <Checkbox
                            id="gaming"
                            name="gaming"
                            className="peer hidden"
                          />
                          <Label
                            htmlFor="gaming"
                            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-gray-100 p-2 text-center text-sm font-medium text-gray-500 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:bg-primary-600"
                          >
                            Gaming
                          </Label>
                        </li>
                        <li>
                          <Checkbox
                            id="electronics"
                            name="electronics"
                            className="peer hidden"
                          />
                          <Label
                            htmlFor="electronics"
                            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-gray-100 p-2 text-center text-sm font-medium text-gray-500 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:bg-primary-600"
                          >
                            Electronics
                          </Label>
                        </li>
                        <li>
                          <Checkbox
                            defaultChecked
                            id="phone"
                            name="phone"
                            className="peer hidden"
                          />
                          <Label
                            htmlFor="phone"
                            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-gray-100 p-2 text-center text-sm font-medium text-gray-500 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:bg-primary-600"
                          >
                            Phone
                          </Label>
                        </li>
                        <li>
                          <Checkbox
                            id="tv-monitor"
                            name="tv-monitor"
                            className="peer hidden"
                          />
                          <Label
                            htmlFor="tv-monitor"
                            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-gray-100 p-2 text-center text-sm font-medium text-gray-500 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:bg-primary-600"
                          >
                            TV/Monitor
                          </Label>
                        </li>
                        <li>
                          <Checkbox
                            id="laptop"
                            name="laptop"
                            className="peer hidden"
                          />
                          <Label
                            htmlFor="laptop"
                            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-gray-100 p-2 text-center text-sm font-medium text-gray-500 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:bg-primary-600"
                          >
                            Laptop
                          </Label>
                        </li>
                        <li>
                          <Checkbox
                            defaultChecked
                            id="watch"
                            name="watch"
                            className="peer hidden"
                          />
                          <Label
                            htmlFor="watch"
                            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-gray-100 p-2 text-center text-sm font-medium text-gray-500 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:bg-primary-600"
                          >
                            Watch
                          </Label>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <span className="mb-2 block text-sm font-medium text-black dark:text-white">
                        State
                      </span>
                      <ul className="flex w-full flex-col items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                        <li className="w-full border-b border-gray-200 dark:border-gray-600">
                          <div className="flex items-center pl-3">
                            <Radio defaultChecked id="state-all" name="state" />
                            <Label
                              htmlFor="state-all"
                              className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              All
                            </Label>
                          </div>
                        </li>
                        <li className="w-full border-b border-gray-200 dark:border-gray-600">
                          <div className="flex items-center pl-3">
                            <Radio id="state-new" name="state" />
                            <Label
                              htmlFor="state-new"
                              className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              New
                            </Label>
                          </div>
                        </li>
                        <li className="w-full">
                          <div className="flex items-center pl-3">
                            <Radio id="state-used" name="state" />
                            <Label
                              htmlFor="state-used"
                              className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Refurbished
                            </Label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4 flex space-x-4">
                      <Button type="submit">Show 32 Results</Button>
                      <Button type="reset">Reset</Button>
                    </div>
                  </form>
                </Dropdown>
              </div>
              <div className="flex items-center space-x-1">
                <button
                  className="flex items-center justify-center rounded-lg bg-white p-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  className="flex items-center justify-center rounded-lg bg-white p-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="mx-4 space-y-4 overflow-x-auto">
            <div className="relative flex w-full cursor-pointer flex-col rounded-lg border border-gray-200 bg-white p-3 shadow hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 md:flex-row md:items-center md:space-x-6">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                alt=""
                className="h-auto w-20"
              />
              <div className="flex flex-col md:justify-between">
                <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-6">
                  <div className="col-span-3 flex h-full flex-col justify-between">
                    <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-white md:mb-3">
                      Apple iMac 27&#34;
                    </h3>
                    <div>
                      <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Category
                      </h6>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        PC/Desktop PC
                      </p>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Price
                    </h6>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      $2999
                    </p>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Stock
                    </h6>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      300
                    </p>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Total Sales
                    </h6>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      466
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute right-3 top-3 dark:text-gray-400">
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
                  <Dropdown.Item onClick={() => setShowUpdateModal(true)}>
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
                  <Dropdown.Item onClick={() => setShowReadModal(true)}>
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
                    onClick={() => setShowDeleteModal(true)}
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
              </div>
            </div>
            <div className="relative flex w-full cursor-pointer flex-col rounded-lg border border-gray-200 bg-white p-3 shadow hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 md:flex-row md:items-center md:space-x-6">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/xbox-series-s.png"
                alt=""
                className="h-auto w-20"
              />
              <div className="flex flex-col md:justify-between">
                <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-6">
                  <div className="col-span-3 flex h-full flex-col justify-between">
                    <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-white md:mb-3">
                      Xbox Series S
                    </h3>
                    <div>
                      <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Category
                      </h6>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        Gaming/Console
                      </p>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Price
                    </h6>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      $299
                    </p>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Stock
                    </h6>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      56
                    </p>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Total Sales
                    </h6>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      3040
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute right-3 top-3 dark:text-gray-400">
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
                  <Dropdown.Item onClick={() => setShowUpdateModal(true)}>
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
                  <Dropdown.Item onClick={() => setShowReadModal(true)}>
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
                    onClick={() => setShowDeleteModal(true)}
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
              </div>
            </div>
            <div className="relative flex w-full cursor-pointer flex-col rounded-lg border border-gray-200 bg-white p-3 shadow hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 md:flex-row md:items-center md:space-x-6">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/playstation-5.png"
                alt=""
                className="h-auto w-20"
              />
              <div className="flex flex-col md:justify-between">
                <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-6">
                  <div className="col-span-3 flex h-full flex-col justify-between">
                    <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-white md:mb-3">
                      PlayStation 5
                    </h3>
                    <div>
                      <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Category
                      </h6>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        Gaming/Console
                      </p>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Price
                    </h6>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      $799
                    </p>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Stock
                    </h6>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      78
                    </p>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Total Sales
                    </h6>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      2999
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute right-3 top-3 dark:text-gray-400">
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
                  <Dropdown.Item onClick={() => setShowUpdateModal(true)}>
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
                  <Dropdown.Item onClick={() => setShowReadModal(true)}>
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
                    onClick={() => setShowDeleteModal(true)}
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
              </div>
            </div>
            <div className="relative flex w-full cursor-pointer flex-col rounded-lg border border-gray-200 bg-white p-3 shadow hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 md:flex-row md:items-center md:space-x-6">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/benq-ex2710q.png"
                alt=""
                className="h-auto w-20"
              />
              <div className="flex flex-col md:justify-between">
                <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-6">
                  <div className="col-span-3 flex h-full flex-col justify-between">
                    <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-white md:mb-3">
                      Monitor BenQ EX2710Q
                    </h3>
                    <div>
                      <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Category
                      </h6>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        TV/Monitor
                      </p>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Price
                    </h6>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      $499
                    </p>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Stock
                    </h6>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      354
                    </p>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Total Sales
                    </h6>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      76
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute right-3 top-3 dark:text-gray-400">
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
                  <Dropdown.Item onClick={() => setShowUpdateModal(true)}>
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
                  <Dropdown.Item onClick={() => setShowReadModal(true)}>
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
                    onClick={() => setShowDeleteModal(true)}
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
              </div>
            </div>
            <div className="relative flex w-full cursor-pointer flex-col rounded-lg border border-gray-200 bg-white p-3 shadow hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 md:flex-row md:items-center md:space-x-6">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/apple-iphone-14.png"
                alt=""
                className="h-auto w-20"
              />
              <div className="flex flex-col md:justify-between">
                <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-6">
                  <div className="col-span-3 flex h-full flex-col justify-between">
                    <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-white md:mb-3">
                      Apple iPhone 14
                    </h3>
                    <div>
                      <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Category
                      </h6>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        Phone
                      </p>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Price
                    </h6>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      $999
                    </p>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Stock
                    </h6>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      1237
                    </p>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Total Sales
                    </h6>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      2000
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute right-3 top-3 dark:text-gray-400">
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
                  <Dropdown.Item onClick={() => setShowUpdateModal(true)}>
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
                  <Dropdown.Item onClick={() => setShowReadModal(true)}>
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
                    onClick={() => setShowDeleteModal(true)}
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
              </div>
            </div>
            <div className="flex items-center justify-center py-6">
              <Pagination
                currentPage={currentPage}
                layout="table"
                onPageChange={(page) => setCurrentPage(page)}
                totalPages={100}
                previousLabel="Prev"
                theme={{
                  layout: {
                    table: {
                      base: twMerge(
                        theme.pagination.layout.table.base,
                        "text-xs",
                      ),
                    },
                  },
                  pages: {
                    next: {
                      base: twMerge(
                        theme.pagination.pages.next.base,
                        "w-20 py-1.5 text-sm",
                      ),
                    },
                    previous: {
                      base: twMerge(
                        theme.pagination.pages.previous.base,
                        "w-20 py-1.5 text-sm",
                      ),
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        onClose={() => setShowUpdateModal(false)}
        popup
        show={isShowUpdateModal}
        size="3xl"
      >
        <Modal.Body className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
          <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600 sm:mb-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Update Product
            </h3>
            <button
              onClick={() => setShowUpdateModal(false)}
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
      <Modal
        onClose={() => setShowReadModal(false)}
        popup
        size="3xl"
        show={isShowReadModal}
      >
        <Modal.Body className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
          <div className="mb-4 flex justify-between rounded-t sm:mb-5">
            <div className="text-lg text-gray-900 dark:text-white md:text-xl">
              <h3 className="font-semibold ">Apple iMac 27”</h3>
              <p className="font-bold">$2999</p>
            </div>
            <div>
              <button
                onClick={() => setShowReadModal(false)}
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
      <Modal
        onClose={() => setShowDeleteModal(false)}
        popup
        size="md"
        show={isShowDeleteModal}
      >
        <Modal.Body className="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5">
          <button
            onClick={() => setShowDeleteModal(false)}
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
              onClick={() => setShowDeleteModal(false)}
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
      <Modal
        onClose={() => setShowCreateModal(false)}
        popup
        show={isShowCreateModal}
      >
        <Modal.Body className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
          <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600 sm:mb-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Add Product
            </h3>
            <button
              onClick={() => setShowCreateModal(false)}
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
                  Name
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
                  htmlFor="brand"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Brand
                </Label>
                <TextInput
                  id="brand"
                  name="brand"
                  placeholder="Product brand"
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
                  type="number"
                />
              </div>
              <div>
                <Label
                  htmlFor="category"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </Label>
                <Select id="category">
                  <option selected>Select category</option>
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </Select>
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
                  name="description"
                  placeholder="Write product description here"
                  rows={4}
                />
              </div>
            </div>
            <Button size="lg" className="[&>span]:text-sm">
              <HiPlus className="-ml-1 mr-2 h-4 w-4" />
              Add new product
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </section>
  );
}
