import { Checkbox, Dropdown, theme } from "flowbite-react";
import { twMerge } from "tailwind-merge";

export function DropdownFilterStatus() {
  return (
    <Dropdown
      label="Filter by status"
      theme={{
        floating: {
          base: twMerge(
            theme.dropdown.floating.base,
            "z-10 w-72 divide-y divide-gray-100 rounded-lg shadow focus:outline-none",
          ),
        },
      }}
    >
      <ul className="space-y-2 p-2 text-sm">
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <Checkbox id="all" name="all" />
            <div className="ml-2 h-3 w-3 rounded-full border-2"></div>
            <label
              htmlFor="all"
              className="ml-1.5 flex items-center text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              All
            </label>
          </div>
          <div className="text-gray-400">244</div>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <Checkbox id="admitted" name="admitted" />
            <div className="ml-2 h-3 w-3 rounded-full border-2 border-green-400 bg-green-400"></div>
            <label
              htmlFor="admitted"
              className="ml-1.5 flex items-center text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Admitted
            </label>
          </div>
          <div className="text-gray-400">123</div>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <Checkbox
              defaultChecked
              id="temporarily-admitted"
              name="temporarily-admitted"
            />
            <div className="ml-2 h-3 w-3 rounded-full border-2 border-primary-500 bg-primary-500"></div>
            <label
              htmlFor="temporarily-admitted"
              className="ml-1.5 flex items-center text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Temporarily admitted
            </label>
          </div>
          <div className="text-gray-400">22</div>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <Checkbox id="awaiting-verification" name="awaiting-verification" />
            <div className="ml-2 h-3 w-3 rounded-full border-2 border-gray-200 bg-gray-200"></div>
            <label
              htmlFor="awaiting-verification"
              className="ml-1.5 flex items-center text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Awaiting verification
            </label>
          </div>
          <div className="text-gray-400">12</div>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <Checkbox id="requires-recheck" name="requires-recheck" />
            <div className="ml-2 h-3 w-3 rounded-full border-2 border-orange-300 bg-orange-300"></div>
            <label
              htmlFor="requires-recheck"
              className="ml-1.5 flex items-center text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Requires recheck
            </label>
          </div>
          <div className="text-gray-400">56</div>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <Checkbox id="rejected" name="rejected" />
            <div className="ml-2 h-3 w-3 rounded-full border-2 border-red-500 bg-red-500"></div>
            <label
              htmlFor="rejected"
              className="ml-1.5 flex items-center text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Rejected
            </label>
          </div>
          <div className="text-gray-400">6</div>
        </li>
      </ul>
    </Dropdown>
  );
}
