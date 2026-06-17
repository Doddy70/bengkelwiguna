import { Button } from "flowbite-react";
import { HiUserAdd } from "react-icons/hi";

export function TableHeaderWithTextAndButton() {
  return (
    <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex-row items-center justify-between space-y-3 p-4 sm:flex sm:space-x-4 sm:space-y-0">
            <div>
              <h5 className="mr-3 font-semibold dark:text-white">
                Flowbite Users
              </h5>
              <p className="text-gray-500 dark:text-gray-400">
                Manage all your existing users or add a new one
              </p>
            </div>
            <Button>
              <HiUserAdd className="-ml-1 mr-2 h-3.5 w-3.5" />
              Add new user
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
