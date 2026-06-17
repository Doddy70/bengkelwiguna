import { Progress } from "flowbite-react";
import { HiEye } from "react-icons/hi";

export function TableFooterWithProgressBar() {
  return (
    <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden rounded-b-lg bg-white shadow-md dark:bg-gray-800">
          <nav
            className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0"
            aria-label="Table navigation"
          >
            <div className="w-full max-w-xs">
              <div className="mb-1 flex justify-between">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  3.24 GB of 15 GB used
                </span>
              </div>
              <Progress progress={25} size="sm" />
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-sm">
                <span className="font-normal text-gray-500 dark:text-gray-400">
                  Last account activity:&nbsp;
                </span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  2 hours ago
                </span>
              </p>
              <HiEye className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
