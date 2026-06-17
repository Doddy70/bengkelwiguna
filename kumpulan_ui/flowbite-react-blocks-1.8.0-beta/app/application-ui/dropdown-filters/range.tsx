import { Button, Dropdown, TextInput, theme } from "flowbite-react";
import { twMerge } from "tailwind-merge";

export function DropdownFilterRange() {
  return (
    <Dropdown
      label="Filter by range"
      theme={{
        floating: {
          base: twMerge(
            theme.dropdown.floating.base,
            "z-10 w-56 divide-y divide-gray-100 rounded-lg shadow focus:outline-none",
          ),
        },
      }}
    >
      <form action="#" className="p-3">
        <ul className="space-y-2 text-sm">
          <li className="flex items-center">
            <button className="flex w-full items-center rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-600">
              100,001+
            </button>
          </li>
          <li className="flex items-center">
            <button className="flex w-full items-center rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-600">
              10,001-100,000
            </button>
          </li>
          <li className="flex items-center">
            <button className="flex w-full items-center rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-600">
              1001-10,000
            </button>
          </li>
          <li className="flex items-center">
            <button className="flex w-full items-center rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-600">
              101-1,000
            </button>
          </li>
          <li className="flex items-center">
            <button className="flex w-full items-center rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-600">
              11-100
            </button>
          </li>
          <li className="flex items-center">
            <button className="flex w-full items-center rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-600">
              1-10
            </button>
          </li>
        </ul>
        <div className="my-2 border-t border-gray-200 py-2 dark:border-gray-600">
          <span className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Custom range
          </span>
          <div className="flex items-center space-x-3">
            <TextInput
              defaultValue="300"
              id="price-from"
              name="price-from"
              max="10000"
              min="1"
              required
              type="number"
              className="w-1/2 [&_input]:py-2 [&_input]:sm:text-xs"
            />
            <TextInput
              defaultValue="3500"
              id="max-experience-input"
              max="10000"
              min="1"
              name="max-experience-input"
              required
              type="number"
              className="w-1/2 [&_input]:py-2 [&_input]:sm:text-xs"
            />
          </div>
        </div>
        <Button type="submit" className="w-full">
          Apply
        </Button>
      </form>
    </Dropdown>
  );
}
