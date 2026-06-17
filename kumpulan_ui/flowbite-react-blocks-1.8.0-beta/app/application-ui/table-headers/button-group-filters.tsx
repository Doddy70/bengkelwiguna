import { Button, Dropdown, Select, Tooltip, theme } from "flowbite-react";
import { HiInformationCircle, HiUpload } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export function TableHeaderWithButtonGroupFiltersAndExport() {
  return (
    <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="divide-y px-4 dark:divide-gray-700">
            <div className="flex flex-col space-y-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:space-x-4 sm:space-y-0">
              <div className="flex flex-1 items-center space-x-2">
                <h5>
                  <span className="font-semibold dark:text-white">
                    SERP Analysis
                  </span>
                  <span className="ml-2 text-gray-500 dark:text-gray-400">
                    6,560,067 Results
                  </span>
                </h5>
                <Tooltip content="Showing 1-100 of 436 results">
                  <span className="sr-only">More info</span>
                  <HiInformationCircle className="h-4 w-4 text-gray-400" />
                </Tooltip>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z" />
                    <path
                      fillRule="evenodd"
                      d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View SERP
                </a>
                <Button color="gray">
                  <HiUpload className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-stretch justify-between space-y-3 py-4 sm:flex-row sm:items-center sm:space-y-0">
              <div className="block items-center space-y-2 sm:flex sm:space-y-0">
                <div className="shrink-0 font-semibold dark:text-white">
                  Filter by:
                </div>
                <div className="flex items-center">
                  <Select
                    id="compare"
                    name="compare"
                    className="mr-4 w-full md:hidden"
                  >
                    <option selected>Current year</option>
                    <option value="past_month">Past month</option>
                    <option value="last_30_days">Last 30 days</option>
                    <option value="last_7_days">Last 7 days</option>
                  </Select>
                  <Button.Group className="mx-4 hidden w-full flex-col md:flex md:w-auto md:flex-row">
                    <Button
                      color="gray"
                      className="rounded-b-none rounded-r-lg dark:bg-gray-700 dark:text-white dark:enabled:hover:bg-gray-600 md:rounded-b-lg md:rounded-r-none"
                    >
                      Positions
                    </Button>
                    <Button
                      color="gray"
                      className="border-l dark:bg-gray-700 dark:text-white dark:enabled:hover:bg-gray-600 md:border-l-0"
                    >
                      Estimated Traffic
                    </Button>
                    <Button
                      color="gray"
                      className="border-l dark:bg-gray-700 dark:text-white dark:enabled:hover:bg-gray-600 md:border-l-0"
                    >
                      Visibility
                    </Button>
                    <Button
                      color="gray"
                      className="rounded-t-none rounded-bl-lg border-l dark:bg-gray-700 dark:text-white dark:enabled:hover:bg-gray-600 md:rounded-bl-none md:rounded-tr-lg"
                    >
                      All for flowbite.com
                    </Button>
                  </Button.Group>
                  <a
                    href="#"
                    className="flex shrink-0 items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-1 h-4 w-4"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    More options
                  </a>
                </div>
              </div>
              <div className="flex w-full shrink-0 flex-col items-stretch justify-end space-y-2 sm:w-auto sm:flex-row sm:items-center sm:space-x-3 sm:space-y-0">
                <div className="flex w-full items-center space-x-3 sm:w-auto">
                  <Dropdown
                    color="gray"
                    label="Actions"
                    placement="bottom"
                    theme={{
                      content: twMerge(theme.dropdown.content, "w-40"),
                      floating: {
                        target: twMerge(
                          theme.dropdown.floating.target,
                          "flex-1",
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
        </div>
      </div>
    </section>
  );
}
