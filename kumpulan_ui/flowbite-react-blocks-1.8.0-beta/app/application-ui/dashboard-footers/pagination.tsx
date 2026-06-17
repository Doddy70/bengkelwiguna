import { Dropdown, Footer, Pagination, theme } from "flowbite-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function FooterWithPagination() {
  const [currentPage, setCurrentPage] = useState(3);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <Footer
      container
      className="md:block xl:flex xl:items-center xl:justify-between"
    >
      <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 xl:mb-0 xl:text-center">
        &copy; 2022&nbsp;
        <a
          href="https://flowbite.com/"
          rel="noreferrer"
          target="_blank"
          className="hover:underline"
        >
          Flowbite
        </a>
        . All rights reserved.
      </p>
      <div className="items-center sm:flex sm:space-x-4 lg:space-x-6">
        <div className="mb-4 text-sm text-gray-500 dark:text-gray-400 sm:mb-0">
          On every page&nbsp;
          <Dropdown
            inline
            label="100"
            theme={{
              inlineWrapper: twMerge(
                theme.dropdown.inlineWrapper,
                "ml-1.5 inline-flex items-center rounded-full p-1.5 text-sm font-semibold text-gray-900 hover:text-primary-600 focus:ring-4 focus:ring-gray-100 dark:text-white dark:hover:text-primary-500 dark:focus:ring-gray-700 md:mr-0",
              ),
              content: twMerge(theme.dropdown.content, "w-24"),
            }}
          >
            <Dropdown.Item>200</Dropdown.Item>
            <Dropdown.Item>500</Dropdown.Item>
            <Dropdown.Item>1000</Dropdown.Item>
          </Dropdown>
        </div>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 sm:mb-0 xl:text-center">
          Show&nbsp;
          <span className="font-semibold text-gray-900 dark:text-white">
            1-15
          </span>
          &nbsp;of&nbsp;
          <span className="font-semibold text-gray-900 dark:text-white">
            987
          </span>
        </p>
        <Pagination
          currentPage={currentPage}
          nextLabel=""
          onPageChange={onPageChange}
          previousLabel=""
          showIcons
          totalPages={100}
          theme={{
            pages: {
              base: twMerge(theme.pagination.pages.base, "mt-0"),
              next: {
                base: twMerge(
                  theme.pagination.pages.next.base,
                  "w-9 px-1.5 py-1.5",
                ),
                icon: "h-6 w-6",
              },
              previous: {
                base: twMerge(
                  theme.pagination.pages.previous.base,
                  "w-9 px-1.5 py-1.5",
                ),
                icon: "h-6 w-6",
              },
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
    </Footer>
  );
}
