import { Dropdown, theme } from "flowbite-react";
import { HiChevronRight } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export function TableFooterWithDropdownAndLink() {
  return (
    <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative rounded-b-lg bg-white shadow-md dark:bg-gray-800">
          <nav className="flex flex-row items-center justify-between p-4">
            <Dropdown
              inline
              label="Last 7 days"
              placement="bottom"
              theme={{
                floating: {
                  item: {
                    base: twMerge(
                      theme.dropdown.floating.item.base,
                      "hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white",
                    ),
                  },
                },
                inlineWrapper: twMerge(
                  theme.dropdown.inlineWrapper,
                  "text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white",
                ),
              }}
            >
              <Dropdown.Header className="font-medium text-gray-900 dark:text-white">
                Sep 16, 2021 - Sep 22, 2021
              </Dropdown.Header>
              <Dropdown.Item>Yesterday</Dropdown.Item>
              <Dropdown.Item>Today</Dropdown.Item>
              <Dropdown.Item>Last 7 days</Dropdown.Item>
              <Dropdown.Item>Last 30 days</Dropdown.Item>
              <Dropdown.Item>Last 90 days</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Custom...</Dropdown.Item>
            </Dropdown>
            <a
              href="#"
              className="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm"
            >
              Transactions Report
              <HiChevronRight className="ml-2 h-5 w-5" />
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
