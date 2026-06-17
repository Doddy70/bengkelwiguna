import { Button, Select, Tabs, theme } from "flowbite-react";
import {
  FaBriefcase,
  FaClipboard,
  FaCreditCard,
  FaUserCircle,
} from "react-icons/fa";
import { HiLocationMarker, HiPlus } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export function TableHeaderWithTabs() {
  return (
    <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="divide-y px-4 dark:divide-gray-700">
            <div className="flex flex-col space-y-3 py-3 md:flex-row md:items-center md:justify-between md:space-x-4 md:space-y-0">
              <div>
                <h5 className="mb-1 font-semibold dark:text-white">
                  Bonnie Green
                </h5>
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <HiLocationMarker className="mr-1 h-4 w-4" />
                  <p className="text-sm">New York, United States</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div>
                  <h5 className="mb-1 text-gray-500 dark:text-gray-400">
                    Pending payments
                  </h5>
                  <p className="text-lg font-bold text-orange-600">$832</p>
                </div>
                <div>
                  <h5 className="mb-1 text-gray-500 dark:text-gray-400">
                    Received payments
                  </h5>
                  <p className="text-lg font-bold text-green-500">$1956</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-3 py-4 md:flex-row md:items-center md:justify-between md:space-x-4 md:space-y-0 md:py-0">
              <Select
                id="list-navigation"
                name="list-navigation"
                className="md:hidden"
              >
                <option selected>Overview</option>
                <option value="works">Works</option>
                <option value="payments">Payments</option>
                <option value="clients">Clients</option>
              </Select>
              <Tabs
                variant="underline"
                theme={{
                  tablist: {
                    tabitem: {
                      base: twMerge(
                        theme.tabs.tablist.tabitem.base,
                        "dark:focus:ring-0",
                      ),
                    },
                  },
                }}
                className="-mb-2.5 hidden md:flex [&>button]:dark:focus:ring-transparent"
              >
                <Tabs.Item
                  icon={() => <FaUserCircle className="mr-2 h-3 w-3" />}
                  title="Overview"
                />
                <Tabs.Item
                  active
                  icon={() => <FaClipboard className="mr-2 h-3 w-3" />}
                  title="Works"
                />
                <Tabs.Item
                  icon={() => <FaCreditCard className="mr-2 h-3 w-3" />}
                  title="Payments"
                />
                <Tabs.Item
                  icon={() => <FaBriefcase className="mr-2 h-3 w-3" />}
                  title="Clients"
                />
              </Tabs>
              <Button>
                <HiPlus className="mr-2 h-3.5 w-3.5" />
                Add new item
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
