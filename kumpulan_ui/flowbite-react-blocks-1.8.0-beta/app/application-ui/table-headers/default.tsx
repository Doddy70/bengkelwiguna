import {
  Button,
  Checkbox,
  Dropdown,
  Label,
  TextInput,
  theme,
} from "flowbite-react";
import { FaChevronDown, FaFilter } from "react-icons/fa";
import { HiPlus, HiSearch } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export function DefaultTableHeader() {
  return (
    <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <Label htmlFor="simple-search" className="sr-only">
                  Search
                </Label>
                <TextInput
                  icon={() => <HiSearch className="h-5 w-5 text-gray-500" />}
                  id="search"
                  name="search"
                  placeholder="Search"
                  required
                  type="search"
                  className="w-full"
                />
              </form>
            </div>
            <div className="flex w-full shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
              <Button>
                <HiPlus className="mr-2 h-4 w-4" />
                Add product
              </Button>
              <div className="flex items-center justify-center gap-3">
                <Dropdown
                  color="gray"
                  label={
                    <>
                      <FaChevronDown className="mr-3 h-3 w-3" />
                      Actions
                    </>
                  }
                  placement="bottom"
                  theme={{
                    arrowIcon: "hidden",
                    content: twMerge(theme.dropdown.content, "w-48"),
                    floating: {
                      target: twMerge(theme.dropdown.floating.target, "flex-1"),
                    },
                  }}
                >
                  <Dropdown.Item>Mass Edit</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Delete All</Dropdown.Item>
                </Dropdown>
                <Dropdown
                  color="gray"
                  label={
                    <>
                      <FaFilter className="mr-3 h-3 w-3 text-gray-400" />
                      Filter
                    </>
                  }
                  placement="bottom"
                  theme={{
                    content: twMerge(theme.dropdown.content, "w-48 p-3"),
                    floating: {
                      target: twMerge(theme.dropdown.floating.target, "flex-1"),
                    },
                  }}
                >
                  <span className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                    Category
                  </span>
                  <ul className="space-y-2 pt-2">
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
                      <Checkbox id="fitbit" name="fitbit" />
                      <Label
                        htmlFor="fitbit"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Fitbit (56)
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
                  </ul>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
