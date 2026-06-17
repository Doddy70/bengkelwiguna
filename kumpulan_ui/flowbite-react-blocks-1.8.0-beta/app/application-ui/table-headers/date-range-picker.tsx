import { Button, Datepicker, Select } from "flowbite-react";
import { HiUpload } from "react-icons/hi";

export function TableHeaderWithDateRangePickerFilter() {
  return (
    <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="divide-y px-4 dark:divide-gray-700">
            <div className="flex items-center justify-between py-3">
              <div className="flex flex-1 items-center space-x-2">
                <h5 className="font-semibold dark:text-white">
                  Total data used
                </h5>
              </div>
              <div className="flex items-center space-x-2 md:space-x-4">
                <Button color="gray">View JSON</Button>
                <Button color="gray">
                  <HiUpload className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-stretch py-4 md:flex-row md:items-center">
              <div className="flex flex-col space-y-3 md:w-2/3 md:flex-row md:items-center md:space-y-0">
                <div className="flex flex-col space-y-1 md:mr-5 md:flex-row md:items-center md:space-y-0">
                  <Datepicker id="start" name="start" />
                  <span className="px-3 text-center text-gray-500 dark:text-gray-200">
                    &nbsp;to&nbsp;
                  </span>
                  <Datepicker id="end" name="end" />
                </div>
                <div className="min-w-40 md:mr-4">
                  <Select
                    id="compare"
                    name="compare"
                    className="[&_select]:py-2"
                  >
                    <option selected>Compare to</option>
                    <option value="last_year">Last Year</option>
                    <option value="last_month">Last Month</option>
                    <option value="yesterday">Yesterday</option>
                  </Select>
                </div>
                <Button className="whitespace-nowrap [&>span]:py-2">
                  Run report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
