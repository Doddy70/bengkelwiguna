import { Button, Dropdown, Select, TextInput, theme } from "flowbite-react";
import { twMerge } from "tailwind-merge";

export function DropdownFilterProperties() {
  return (
    <Dropdown
      label="Filter by properties"
      theme={{
        floating: {
          base: twMerge(theme.dropdown.floating.base, "rounded-lg"),
        },
      }}
    >
      <form action="#" className="space-y-3 p-2">
        <div className="flex items-center space-x-3 rounded-lg">
          <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
            <Select id="include" name="include">
              <option value="" selected disabled>
                Include
              </option>
              <option>All</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </Select>
            <Select id="referring-domain" name="referring-domain">
              <option value="" selected disabled>
                Referring domain
              </option>
              <option>Flowbite.com</option>
              <option>Facebook.com</option>
              <option>Twitter.com</option>
              <option>Google.com</option>
            </Select>
            <TextInput id="match" name="match" placeholder="Exactly matching" />
            <TextInput id="domain" name="domain" placeholder="Enter domain" />
          </div>
          <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <svg
              aria-hidden
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                aria-hidden
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              />
            </svg>
            <span className="sr-only">Delete</span>
          </button>
        </div>
        <div className="flex items-center space-x-3 rounded-lg">
          <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
            <Select id="include-1" name="include-1">
              <option value="" selected disabled>
                Include
              </option>
              <option>All</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </Select>
            <Select id="referring-domain-1" name="referring-domain-1">
              <option value="" selected disabled>
                Referring domain
              </option>
              <option>Flowbite.com</option>
              <option>Facebook.com</option>
              <option>Twitter.com</option>
              <option>Google.com</option>
            </Select>
            <TextInput id="match" name="match" placeholder="Exactly matching" />
            <TextInput id="domain" name="domain" placeholder="Enter domain" />
          </div>
          <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <svg
              aria-hidden
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Delete</span>
          </button>
        </div>
        <button
          type="submit"
          className="flex items-center border-b pb-2 text-sm font-medium text-primary-600 hover:underline dark:border-gray-600 dark:text-primary-500"
        >
          <svg
            aria-hidden
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-2 h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Add Property
        </button>
        <div className="flex items-center justify-between">
          <Button type="submit" className="[&>span]:px-5 [&>span]:py-2.5">
            Apply
          </Button>
          <button
            type="reset"
            className="flex items-center rounded-lg px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-black focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mr-1 h-4 w-4"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                aria-hidden="true"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              />
            </svg>
            Clear all
          </button>
        </div>
      </form>
    </Dropdown>
  );
}
