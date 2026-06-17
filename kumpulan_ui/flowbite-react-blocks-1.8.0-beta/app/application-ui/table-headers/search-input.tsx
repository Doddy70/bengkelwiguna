import {
  Button,
  Checkbox,
  Dropdown,
  Label,
  TextInput,
  Tooltip,
  theme,
} from "flowbite-react";
import { FaFilter } from "react-icons/fa";
import { HiCog, HiInformationCircle, HiPlus, HiSearch } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export function TableHeaderWithSearchInput() {
  return (
    <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="divide-y px-4 dark:divide-gray-700">
            <div className="flex flex-col space-y-3 py-3 md:flex-row md:items-center md:justify-between md:space-x-4 md:space-y-0">
              <div className="flex flex-1 items-center space-x-2">
                <h5>
                  <span className="dark:text-white">Rankings Overview</span>
                  <span className="ml-1 text-gray-500 dark:text-gray-400">
                    1-100 (436)
                  </span>
                </h5>
                <Tooltip content="Showing 1-100 of 436 results">
                  <span className="sr-only">More info</span>
                  <HiInformationCircle className="h-4 w-4 text-gray-400" />
                </Tooltip>
              </div>
              <div className="flex shrink-0 flex-col items-start space-y-3 md:flex-row md:items-center md:space-x-3 md:space-y-0 lg:justify-end">
                <Button color="gray" className="[&>span]:text-xs">
                  <HiCog className="mr-2 h-4 w-4" />
                  Table settings
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-stretch justify-between space-y-3 py-4 md:flex-row md:items-center md:space-x-3 md:space-y-0">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <Label htmlFor="simple-search" className="sr-only">
                    Search
                  </Label>
                  <TextInput
                    icon={() => (
                      <HiSearch className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    )}
                    id="simple-search"
                    name="simple-search"
                    placeholder="Search for products"
                    type="search"
                    className="w-full [&_input]:py-2"
                  />
                </form>
              </div>
              <div className="flex w-full shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
                <Button>
                  <HiPlus className="-ml-1 mr-1.5 h-3.5 w-3.5" />
                  <span className="whitespace-nowrap">Add product</span>
                </Button>
                <Dropdown
                  color="gray"
                  label={
                    <>
                      <FaFilter className="mr-3 h-3 w-3 text-gray-400" />
                      <span className="whitespace-nowrap">Filter options</span>
                    </>
                  }
                  placement="bottom"
                  theme={{
                    content: twMerge(theme.dropdown.content, "w-56 p-3"),
                    floating: {
                      target: twMerge(theme.dropdown.floating.target, "w-full"),
                    },
                  }}
                >
                  <span className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                    Category
                  </span>
                  <ul className="space-y-2 pt-2">
                    <li className="flex items-center">
                      <Checkbox id="apple" name="apple" />
                      <Label
                        htmlFor="apple"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Apple (56)
                      </Label>
                    </li>
                    <li className="flex items-center">
                      <Checkbox id="fitbit" name="fitbit" />
                      <Label
                        htmlFor="fitbit"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Microsoft (16)
                      </Label>
                    </li>
                    <li className="flex items-center">
                      <Checkbox id="razer" name="razer" />
                      <Label
                        htmlFor="razer"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Razer (49)
                      </Label>
                    </li>
                  </ul>
                </Dropdown>
                <Dropdown
                  color="gray"
                  label="Actions"
                  placement="bottom"
                  theme={{
                    content: twMerge(theme.dropdown.content, "w-48"),
                    floating: {
                      target: twMerge(theme.dropdown.floating.target, "w-full"),
                    },
                  }}
                >
                  <Dropdown.Item>Mass Edit</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Delete All</Dropdown.Item>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
