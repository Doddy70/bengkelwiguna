import { Checkbox, Dropdown, Label, Radio, theme } from "flowbite-react";
import { twMerge } from "tailwind-merge";

export function DropdownFilterCategory() {
  return (
    <Dropdown
      label="Filter by categories"
      theme={{
        floating: {
          base: twMerge(theme.dropdown.floating.base, "w-72 rounded-lg"),
        },
      }}
    >
      <div className="p-3">
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          Columns
        </p>
        <ul className="mb-4 mt-2 space-y-2 text-sm">
          <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
            <Checkbox id="intent" name="intent" />
            <Label htmlFor="intent">Intent</Label>
          </li>
          <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
            <Checkbox id="serp" name="serp" />
            <Label htmlFor="serp">SERP</Label>
          </li>
          <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
            <Checkbox id="serp_features" name="serp_features" />
            <Label htmlFor="serp_features">SERP features</Label>
          </li>
          <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
            <Checkbox id="position" name="position" />
            <Label htmlFor="position">Position on the start date</Label>
          </li>
          <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
            <Checkbox defaultChecked id="volume" name="volume" />
            <Label htmlFor="volume">Volume</Label>
          </li>
          <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
            <Checkbox id="cpc" name="cpc" />
            <Label htmlFor="cpc">CPC</Label>
          </li>
        </ul>
        <p className="text-sm text-gray-900 dark:text-white">
          Additional settings
        </p>
        <ul className="mb-4 mt-2 space-y-2 text-sm">
          <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
            <Checkbox defaultChecked id="show_tags" name="show_tags" />
            <Label htmlFor="show_tags">Show tags in keywords</Label>
          </li>
          <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
            <Checkbox defaultChecked id="show_serp" name="show_serp" />
            <Label htmlFor="show_serp">Show SERP feature icons</Label>
          </li>
        </ul>
        <p className="text-sm text-gray-900 dark:text-white">Positions chart</p>
        <ul className="mb-4 mt-2 space-y-2 text-sm">
          <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
            <Checkbox id="smart_zoom" name="smart_zoom" />
            <Label htmlFor="smart_zoom">Smart zoom</Label>
          </li>
        </ul>
        <p className="text-sm text-gray-900 dark:text-white">Row height</p>
        <ul className="mb-4 mt-2 space-y-2 text-sm">
          <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
            <Radio defaultChecked id="row_height_show_tags" name="row_height" />
            <Label htmlFor="row_height_show_tags">Show tags in keywords</Label>
          </li>
          <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
            <Radio id="row_height_show_serp" name="row_height" />
            <Label htmlFor="row_height_show_serp">
              Show SERP feature icons
            </Label>
          </li>
        </ul>
        <a
          href="#"
          className="ml-1.5 mt-4 flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Apply to all projects
        </a>
      </div>
    </Dropdown>
  );
}
