import { Button, Tooltip } from "flowbite-react";
import { HiCog, HiInformationCircle, HiPlus } from "react-icons/hi";

export function TableHeaderWithSettings() {
  return (
    <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
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
            <div className="flex flex-col items-stretch justify-between space-y-3 py-4 md:flex-row md:items-center md:space-y-0">
              <Button>
                <HiPlus className="mr-2 h-3.5 w-3.5" />
                Add more keywords
              </Button>
              <Button.Group className="w-full flex-col md:w-auto md:flex-row">
                <Button
                  color="gray"
                  className="rounded-b-none rounded-tr-lg dark:bg-gray-700 dark:text-white dark:enabled:hover:bg-gray-600 md:rounded-b-lg md:rounded-r-none"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
