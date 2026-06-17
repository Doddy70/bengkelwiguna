import { Button } from "flowbite-react";
import { HiPlus, HiRefresh, HiUpload } from "react-icons/hi";

export function TableHeaderWithStatistics() {
  return (
    <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col space-y-3 px-4 py-3 lg:flex-row lg:items-center lg:justify-between lg:space-x-4 lg:space-y-0">
            <div className="flex flex-1 items-center space-x-4">
              <h5>
                <span className="text-gray-500">All keywords:&nbsp;</span>
                <span className="dark:text-white">146</span>
              </h5>
              <h5>
                <span className="text-gray-500">Total volume:&nbsp;</span>
                <span className="dark:text-white">88.4k</span>
              </h5>
            </div>
            <div className="flex shrink-0 flex-col space-y-3 md:flex-row md:items-center md:space-x-3 md:space-y-0 lg:justify-end">
              <Button>
                <HiPlus className="-ml-1 mr-2 h-3.5 w-3.5" />
                Add to keyword list
              </Button>
              <Button color="gray">
                <HiRefresh className="mr-2 h-4 w-4" />
                Update metrics 1/250
              </Button>
              <Button color="gray">
                <HiUpload className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
