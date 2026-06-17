import {
  Button,
  Checkbox,
  Dropdown,
  Label,
  Radio,
  TextInput,
  theme,
} from "flowbite-react";
import { FaCog, FaFilter } from "react-icons/fa";
import { HiPlus, HiSearch, HiUpload } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export function MultiLevelTableHeadersWithFilters() {
  return (
    <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative bg-white px-4 shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex items-center justify-between pt-4 md:pb-4">
            <div className="flex flex-1 items-center space-x-2">
              <h5>
                <span className="dark:text-white">View all products</span>
              </h5>
            </div>
            <div className="flex items-center space-x-3">
              <Button color="gray">View JSON</Button>
              <Button color="gray">
                <HiUpload className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
          <div className="flex flex-col-reverse items-stretch justify-between space-y-3 pb-4 md:flex-row md:items-center md:space-y-0">
            <div className="flex w-full flex-col space-y-3 md:flex-row md:items-center md:space-y-0 lg:w-2/3">
              <form className="w-full flex-1 md:mr-4 md:max-w-sm">
                <Label htmlFor="default-search" className="sr-only">
                  Search
                </Label>
                <div className="flex w-full">
                  <TextInput
                    icon={() => (
                      <HiSearch className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    )}
                    id="default-search"
                    name="default-search"
                    placeholder="Search..."
                    type="search"
                    className="w-full [&_input]:rounded-r-none [&_input]:py-2"
                  />
                  <Button className="rounded-l-none">Search</Button>
                </div>
              </form>
              <div className="flex items-center space-x-4">
                <Dropdown
                  color="gray"
                  label={
                    <>
                      <FaFilter className="mr-3 h-3 w-3 text-gray-400" />
                      Filter
                    </>
                  }
                  placement="bottom"
                  theme={{
                    arrowIcon: "hidden",
                    content: twMerge(theme.dropdown.content, "w-48 p-3"),
                    floating: {
                      target: twMerge(theme.dropdown.floating.target, "flex-1"),
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
                        Fitbit (56)
                      </Label>
                    </li>
                    <li className="flex items-center">
                      <Checkbox id="dell" name="dell" />
                      <Label
                        htmlFor="dell"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Dell (56)
                      </Label>
                    </li>
                    <li className="flex items-center">
                      <Checkbox defaultChecked id="asus" name="asus" />
                      <Label
                        htmlFor="asus"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Asus (97)
                      </Label>
                    </li>
                  </ul>
                </Dropdown>
                <Dropdown
                  color="gray"
                  label={
                    <>
                      <FaCog className="mr-2 h-4 w-4 text-gray-400" />
                      Configurations
                    </>
                  }
                  placement="bottom"
                  theme={{
                    arrowIcon: "hidden",
                    content: twMerge(theme.dropdown.content, "w-48"),
                    floating: {
                      target: twMerge(theme.dropdown.floating.target, "flex-1"),
                    },
                  }}
                >
                  <Dropdown.Item>By Category</Dropdown.Item>
                  <Dropdown.Item>By Brand</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Reset</Dropdown.Item>
                </Dropdown>
              </div>
            </div>
            <div className="flex w-full shrink-0 flex-col items-stretch justify-end pb-4 md:w-auto md:flex-row md:items-center md:space-x-3 md:pb-0">
              <Button>
                <HiPlus className="-ml-1 mr-1.5 h-3.5 w-3.5" />
                Add new product
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap border-t pb-4 pt-1 dark:border-gray-700">
            <div className="mr-4 mt-3 hidden items-center text-sm font-medium text-gray-900 dark:text-white md:flex">
              Show only:
            </div>
            <fieldset className="flex flex-wrap">
              <div className="mr-4 mt-3 flex items-center">
                <Radio id="all-products" name="show-only" />
                <Label
                  htmlFor="all-products"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  All
                </Label>
              </div>
              <div className="mr-4 mt-3 flex items-center">
                <Radio id="active" name="show-only" />
                <Label
                  htmlFor="active"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Active products
                </Label>
              </div>
              <div className="mr-4 mt-3 flex items-center">
                <Radio id="pending" name="show-only" />
                <Label
                  htmlFor="pending"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Pending products
                </Label>
              </div>
              <div className="mr-4 mt-3 flex items-center">
                <Radio id="inactive" name="show-only" />
                <Label
                  htmlFor="inactive"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Inactive products
                </Label>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </section>
  );
}
