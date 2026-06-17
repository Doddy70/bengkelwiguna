import { Pagination, theme } from "flowbite-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function DefaultTableFooterWithPagination() {
  const [currentPage, setCurrentPage] = useState(3);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden rounded-b-lg bg-white shadow-md dark:bg-gray-800">
          <div className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Showing&nbsp;
              <strong className="text-gray-900 dark:text-white">1-10</strong>
              &nbsp;of&nbsp;
              <strong className="text-gray-900 dark:text-white">1000</strong>
            </span>
            <Pagination
              currentPage={currentPage}
              nextLabel=""
              onPageChange={onPageChange}
              previousLabel=""
              showIcons
              totalPages={100}
              theme={{
                pages: {
                  selector: {
                    base: twMerge(
                      theme.pagination.pages.selector.base,
                      "w-9 py-2 text-sm focus:border-blue-300",
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
