import {
  Button,
  Dropdown,
  Label,
  Select,
  Tooltip,
  theme,
} from "flowbite-react";
import { FaChevronDown } from "react-icons/fa";
import { HiInformationCircle, HiPlus } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export function TableHeaderWithTooltipAndSelectFilters() {
  return (
    <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="mx-4 flex flex-col items-center justify-between space-y-3 border-b py-4 dark:border-gray-700 md:flex-row md:space-x-4 md:space-y-0">
            <div className="flex w-full items-center space-x-3">
              <h5 className="font-semibold dark:text-white">
                Flowbite Products
              </h5>
              <div className="font-medium text-gray-500 dark:text-gray-400">
                6,560 results
              </div>
              <Tooltip content="Showing 1-10 of 6,560 results">
                <span className="sr-only">More info</span>
                <HiInformationCircle className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </Tooltip>
            </div>
            <div className="flex w-full flex-row items-center justify-end space-x-3">
              <Button className="flex-1 md:flex-none">
                <HiPlus className="mr-2 h-3.5 w-3.5" />
                Add new product
              </Button>
              <Button color="gray" className="flex-1 md:flex-none">
                <svg
                  aria-hidden
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  stroke="currentColor"
                  viewBox="0 0 12 13"
                  className="mr-2 h-3 w-3"
                >
                  <path d="M1 2V1h10v3H1V2Zm0 4h5v6H1V6Zm8 0h2v6H9V6Z" />
                </svg>
                Manage Columns
              </Button>
            </div>
          </div>
          <div className="flex flex-col-reverse items-start justify-between border-b p-4 dark:border-gray-700 md:flex-row md:items-center md:space-x-4">
            <div className="mt-3 md:mt-0">
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
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-4 md:gap-4 lg:w-2/3">
              <div className="w-full">
                <Label htmlFor="brand" className="sr-only">
                  Brand
                </Label>
                <Select
                  id="brand"
                  name="brand"
                  className="[&_select]:rounded-b-none [&_select]:border-0 [&_select]:border-b-2 [&_select]:border-gray-200 [&_select]:bg-transparent [&_select]:px-0 [&_select]:text-gray-500 [&_select]:dark:bg-transparent [&_select]:dark:text-gray-400"
                >
                  <option selected>Brand</option>
                  <option value="purple">Samsung</option>
                  <option value="primary">Apple</option>
                  <option value="pink">Pink</option>
                  <option value="green">Green</option>
                </Select>
              </div>
              <div className="w-full">
                <Label htmlFor="price" className="sr-only">
                  Price
                </Label>
                <Select
                  id="price"
                  name="price"
                  className="[&_select]:rounded-b-none [&_select]:border-0 [&_select]:border-b-2 [&_select]:border-gray-200 [&_select]:bg-transparent [&_select]:px-0 [&_select]:text-gray-500 [&_select]:dark:bg-transparent [&_select]:dark:text-gray-400"
                >
                  <option selected>Price</option>
                  <option value="below-100">$ 1-100</option>
                  <option value="below-500">$ 101-500</option>
                  <option value="below-1000">$ 501-1000</option>
                  <option value="over-1000">$ 1001+</option>
                </Select>
              </div>
              <div className="w-full">
                <Label htmlFor="category" className="sr-only">
                  Category
                </Label>
                <Select
                  id="category"
                  name="category"
                  className="[&_select]:rounded-b-none [&_select]:border-0 [&_select]:border-b-2 [&_select]:border-gray-200 [&_select]:bg-transparent [&_select]:px-0 [&_select]:text-gray-500 [&_select]:dark:bg-transparent [&_select]:dark:text-gray-400"
                >
                  <option selected>Category</option>
                  <option value="pc">PC</option>
                  <option value="phone">Phone</option>
                  <option value="tablet">Tablet</option>
                  <option value="console">Gaming/Console</option>
                </Select>
              </div>
              <div className="w-full">
                <Label htmlFor="color" className="sr-only">
                  Color
                </Label>
                <Select
                  id="color"
                  name="color"
                  className="[&_select]:rounded-b-none [&_select]:border-0 [&_select]:border-b-2 [&_select]:border-gray-200 [&_select]:bg-transparent [&_select]:px-0 [&_select]:text-gray-500 [&_select]:dark:bg-transparent [&_select]:dark:text-gray-400"
                >
                  <option selected>Color</option>
                  <option value="purple">Purple</option>
                  <option value="primary">primary</option>
                  <option value="pink">Pink</option>
                  <option value="green">Green</option>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
