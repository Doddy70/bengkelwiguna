import { Footer, Tooltip } from "flowbite-react";
import { FaDribbble, FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";

export function DefaultDashboardFooter() {
  return (
    <Footer container>
      <p className="mb-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:mb-0">
        &copy; 2019-2022&nbsp;
        <a
          href="https://flowbite.com/"
          rel="noreferrer"
          target="_blank"
          className="hover:underline"
        >
          Flowbite.com
        </a>
        . All rights reserved.
      </p>
      <div className="flex items-center justify-center space-x-1">
        <Tooltip content="Like us on Facebook" placement="bottom">
          <span className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
            <FaFacebookF className="h-4 w-4" />
          </span>
        </Tooltip>
        <Tooltip content="Follow us on Twitter" placement="bottom">
          <span className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
            <FaTwitter className="h-4 w-4" />
          </span>
        </Tooltip>
        <Tooltip content="Star us on GitHub" placement="bottom">
          <span className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
            <FaGithub className="h-4 w-4" />
          </span>
        </Tooltip>
        <Tooltip content="Follow us on Dribble" placement="bottom">
          <span className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
            <FaDribbble className="h-4 w-4" />
          </span>
        </Tooltip>
      </div>
    </Footer>
  );
}
