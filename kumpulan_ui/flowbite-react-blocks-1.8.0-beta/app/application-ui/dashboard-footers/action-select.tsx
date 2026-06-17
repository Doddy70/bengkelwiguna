import { Button, Dropdown, theme } from "flowbite-react";
import { twMerge } from "tailwind-merge";

export function FooterWithActionSelect() {
  return (
    <footer className="flex items-center justify-between rounded-lg bg-white p-4 shadow dark:bg-gray-800 md:p-6 xl:p-8">
      <div className="flex items-center space-x-3">
        <p className="text-gray-500 dark:text-gray-400 xl:text-center">
          <span className="font-semibold text-gray-900 dark:text-white">
            1/150
          </span>
          &nbsp;items selected
        </p>
      </div>
      <div className="flex items-center space-x-3">
        <Dropdown
          color="gray"
          label="Select action"
          outline
          theme={{
            floating: {
              target: twMerge(
                theme.dropdown.floating.target,
                "whitespace-nowrap border-gray-200 bg-white text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 [&>span]:text-xs dark:[&>span]:bg-gray-800 dark:[&>span]:text-gray-400",
              ),
            },
          }}
        >
          <Dropdown.Item>Select All</Dropdown.Item>
          <Dropdown.Item>Archive</Dropdown.Item>
          <Dropdown.Item>Edit</Dropdown.Item>
          <Dropdown.Item>Delete</Dropdown.Item>
        </Dropdown>
        <Button className="[&>span]:text-xs">Apply</Button>
      </div>
    </footer>
  );
}
