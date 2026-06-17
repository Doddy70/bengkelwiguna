import {
  Checkbox,
  Dropdown,
  Label,
  Tabs,
  TextInput,
  theme,
} from "flowbite-react";
import { twMerge } from "tailwind-merge";

export function DropdownFilterTabsOptions() {
  return (
    <Dropdown
      label="Filter with tabs"
      theme={{
        floating: {
          base: twMerge(
            theme.dropdown.floating.base,
            "z-10 w-72 divide-y divide-gray-100 rounded-lg shadow focus:outline-none",
          ),
        },
      }}
    >
      <div className="p-2">
        <Tabs
          variant="underline"
          theme={{
            tablist: {
              variant: {
                underline:
                  "-mb-px flex-wrap border-b border-gray-200 dark:border-gray-600",
              },
              tabitem: {
                base: "flex items-center justify-center rounded-t-lg p-1 text-sm font-medium first:ml-0 focus:outline-none disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
                variant: {
                  underline: {
                    base: "",
                    active: {
                      on: "active text-blue-700 dark:text-blue-500",
                      off: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",
                    },
                  },
                },
              },
            },
            tabpanel: "px-1 pt-2",
          }}
        >
          <Tabs.Item title="Price">
            <div className="col-span-2 flex items-center justify-between space-x-3">
              <div className="w-full">
                <Label
                  htmlFor="min-experience-input"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  From
                </Label>
                <TextInput
                  defaultValue="300"
                  id="price-from"
                  name="price-from"
                  max="10000"
                  min="1"
                  required
                  type="number"
                  className="[&_input]:py-2 [&_input]:sm:text-xs"
                />
              </div>
              <div className="w-full">
                <Label
                  htmlFor="price-to"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  To
                </Label>
                <TextInput
                  defaultValue="3500"
                  id="max-experience-input"
                  max="10000"
                  min="1"
                  name="max-experience-input"
                  required
                  type="number"
                  className="[&_input]:py-2 [&_input]:sm:text-xs"
                />
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Shipping">
            <ul className="space-y-2">
              <li className="flex items-center">
                <Checkbox id="worldwide" name="worldwide" />
                <Label
                  htmlFor="worldwide"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Worldwide
                </Label>
              </li>
              <li className="flex items-center">
                <Checkbox defaultChecked id="america" name="america" />
                <Label
                  htmlFor="america"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  America
                </Label>
              </li>
              <li className="flex items-center">
                <Checkbox id="europe" name="europe" />
                <Label
                  htmlFor="europe"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Europe
                </Label>
              </li>
              <li className="flex items-center">
                <Checkbox defaultChecked id="asia" name="asia" />
                <Label
                  htmlFor="asia"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Asia
                </Label>
              </li>
              <li className="flex items-center">
                <Checkbox id="australia" name="australia" />
                <Label
                  htmlFor="australia"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Australia/Oceania
                </Label>
              </li>
            </ul>
          </Tabs.Item>
          <Tabs.Item title="Brands">
            <ul className="space-y-2">
              <li className="flex items-center">
                <Checkbox id="apple" name="apple" />
                <Label
                  htmlFor="apple"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Apple (56)
                </Label>
              </li>
              <li className="flex items-center">
                <Checkbox id="dell" name="dell" />
                <Label
                  htmlFor="dell"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Dell (56)
                </Label>
              </li>
              <li className="flex items-center">
                <Checkbox defaultChecked id="asus" name="asus" />
                <Label
                  htmlFor="asus"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Asus (97)
                </Label>
              </li>
              <li className="flex items-center">
                <Checkbox id="logitech" name="logitech" />
                <Label
                  htmlFor="logitech"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Logitech (97)
                </Label>
              </li>
              <li className="flex items-center">
                <Checkbox defaultChecked id="msi" name="msi" />
                <Label
                  htmlFor="msi"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  MSI (97)
                </Label>
              </li>
              <li className="flex items-center">
                <Checkbox id="sony" name="sony" />
                <Label
                  htmlFor="sony"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Sony (234)
                </Label>
              </li>
              <li className="flex items-center">
                <Checkbox id="canon" name="canon" />
                <Label
                  htmlFor="canon"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Canon (49)
                </Label>
              </li>
              <li className="flex items-center">
                <Checkbox defaultChecked id="microsoft" name="microsoft" />
                <Label
                  htmlFor="microsoft"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Microsoft (45)
                </Label>
              </li>
              <li className="flex items-center">
                <Checkbox id="razer" name="razer" />
                <Label
                  htmlFor="razer"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Razer (49)
                </Label>
              </li>
            </ul>
          </Tabs.Item>
        </Tabs>
      </div>
    </Dropdown>
  );
}
