import { Label, Pagination, Select, theme } from "flowbite-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function TableFooterWithSelectInputPagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden rounded-b-lg bg-white shadow-md dark:bg-gray-800">
          <div className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0">
            <div className="flex items-center space-x-3">
              <Label
                htmlFor="rows"
                className="text-sm font-normal text-gray-500 dark:text-gray-400"
              >
                Rows per page
              </Label>
              <Select
                id="rows"
                name="rows"
                className="[&_select]:py-2 [&_select]:pr-6"
              >
                <option selected value="10">
                  10
                </option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </Select>
              <div className="text-xs font-normal text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  1-10
                </span>
                &nbsp;of&nbsp;
                <span className="font-semibold text-gray-900 dark:text-white">
                  100
                </span>
              </div>
            </div>
            <Pagination
              currentPage={currentPage}
              layout="navigation"
              onPageChange={onPageChange}
              totalPages={100}
              theme={{
                pages: {
                  previous: {
                    base: twMerge(
                      theme.pagination.pages.previous.base,
                      "w-20 py-1.5 text-sm enabled:hover:bg-blue-100 enabled:hover:text-blue-800",
                    ),
                  },
                  next: {
                    base: twMerge(
                      theme.pagination.pages.next.base,
                      "w-20 py-1.5 text-sm enabled:hover:bg-blue-100 enabled:hover:text-blue-800",
                    ),
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
