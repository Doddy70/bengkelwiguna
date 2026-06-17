import { Footer } from "flowbite-react";
import { FaExternalLinkAlt } from "react-icons/fa";

export function FooterWithCTAAndLinks() {
  return (
    <Footer
      container
      className="md:block xl:flex xl:items-center xl:justify-between"
    >
      <div className="mb-3 flex flex-row text-gray-500 dark:text-gray-400 md:items-center xl:mb-0">
        <p>Looking for language selection?</p>
        <a
          href="#"
          className="ml-1 flex shrink-0 items-center font-medium text-gray-900 hover:underline dark:text-white"
        >
          Unified Settings
          <FaExternalLinkAlt className="ml-1 h-3.5 w-3.5" />
        </a>
      </div>
      <div className="space-y-4 sm:flex sm:items-center sm:justify-between sm:space-y-0">
        <ul className="flex flex-wrap items-center">
          <li>
            <a
              href="#"
              className="mr-4 text-gray-900 underline hover:no-underline dark:text-white md:mr-6"
            >
              Terms
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 text-gray-900 underline hover:no-underline dark:text-white md:mr-6"
            >
              Privacy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 text-gray-900 underline hover:no-underline dark:text-white md:mr-6"
            >
              Cookies
            </a>
          </li>
        </ul>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Copyright &copy; 2022&nbsp;
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
      </div>
    </Footer>
  );
}
