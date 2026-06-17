import { Button, Dropdown, Select, Tooltip, theme } from "flowbite-react";
import { HiInformationCircle, HiPlus, HiRefresh } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export function TableHeaderWithComparison() {
  return (
    <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col items-start justify-between space-y-3 p-4 dark:bg-gray-800 md:flex-row md:items-center md:space-x-4 md:space-y-0">
            <div className="flex items-center">
              <h5 className="mr-3 font-semibold dark:text-white">
                Compare Products
              </h5>
              <Tooltip content="Selected Xbox Series S, PlayStation 5, and Xbox Series X">
                <span className="sr-only">More info</span>
                <HiInformationCircle className="h-4 w-4 text-gray-400" />
              </Tooltip>
            </div>
            <div className="flex w-auto shrink-0 flex-row items-center justify-end space-x-3">
              <Button>
                <HiPlus className="mr-2 h-3.5 w-3.5" />
                Add new product
              </Button>
              <Button color="gray">
                <HiRefresh className="mr-2 h-4 w-4 text-gray-500" />
                Reset all
              </Button>
            </div>
          </div>
          <div className="mx-4 border-t dark:mx-0 dark:border-gray-700 dark:bg-gray-800"></div>
          <div className="flex flex-col items-center justify-between space-y-3 px-4 pb-4 dark:bg-gray-800 md:mt-4 md:flex-row md:space-x-4 md:space-y-0 md:pb-0">
            <ul className="hidden flex-wrap text-center text-sm font-medium text-gray-500 dark:text-gray-400 md:flex">
              <li className="mb-4 mr-2 lg:mr-4">
                <Button
                  color="gray"
                  pill
                  className="dark:bg-gray-700 dark:enabled:hover:bg-gray-800 [&>span]:text-gray-500 [&>span]:hover:text-gray-900 dark:[&>span]:text-gray-400 dark:[&>span]:enabled:hover:text-gray-100"
                >
                  General Information
                </Button>
              </li>
              <li className="mb-4 mr-2 lg:mr-4">
                <Button
                  color="gray"
                  pill
                  className="dark:bg-gray-700 dark:enabled:hover:bg-gray-800 [&>span]:text-gray-500 [&>span]:hover:text-gray-900 dark:[&>span]:text-gray-400 dark:[&>span]:enabled:hover:text-gray-100"
                >
                  Technical Information
                </Button>
              </li>
              <li className="mb-4 mr-2 lg:mr-4">
                <Button pill>Delivery Information</Button>
              </li>
              <li className="mb-4 mr-2 lg:mr-4">
                <Button
                  color="gray"
                  pill
                  className="dark:bg-gray-700 dark:enabled:hover:bg-gray-800 [&>span]:text-gray-500 [&>span]:hover:text-gray-900 dark:[&>span]:text-gray-400 dark:[&>span]:enabled:hover:text-gray-100"
                >
                  Ratings
                </Button>
              </li>
            </ul>
            <div className="flex w-full items-center space-x-4 md:w-auto">
              <Select
                id="list-navigation"
                name="list-navigation"
                className="w-full md:hidden [&_select]:py-2"
              >
                <option selected>Overview</option>
                <option value="general">General Information</option>
                <option value="technical">Technical Information</option>
                <option value="delivery">Delivery Information</option>
                <option value="ratings">Ratings</option>
              </Select>
              <Dropdown
                color="gray"
                label="Actions"
                placement="bottom"
                theme={{
                  content: twMerge(theme.dropdown.content, "w-48"),
                  floating: {
                    target: twMerge(
                      theme.dropdown.floating.target,
                      "flex-1 md:mb-4",
                    ),
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
    </section>
  );
}
