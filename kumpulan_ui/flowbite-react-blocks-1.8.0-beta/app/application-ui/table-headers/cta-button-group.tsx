import { Button } from "flowbite-react";
import { HiPlus } from "react-icons/hi";

export function TableHeaderWithCTAAndButtonGroup() {
  return (
    <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 md:rounded-lg">
          <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
            <Button className="w-full md:w-fit">
              <HiPlus className="-ml-1 mr-2 h-3.5 w-3.5" />
              Add product
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
    </section>
  );
}
