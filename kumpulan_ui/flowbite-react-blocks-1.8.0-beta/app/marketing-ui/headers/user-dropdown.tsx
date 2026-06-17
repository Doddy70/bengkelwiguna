import {
  Avatar,
  Button,
  DarkThemeToggle,
  Dropdown,
  Navbar,
  Tooltip,
  theme,
} from "flowbite-react";
import { twMerge } from "tailwind-merge";

export function HeaderWithUserDropdown() {
  return (
    <header>
      <Navbar fluid>
        <Navbar.Brand href="https://flowbite.com">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <div className="flex items-center gap-1 lg:order-2 lg:gap-3">
          <Tooltip content="Toggle dark mode">
            <DarkThemeToggle />
          </Tooltip>
          <Tooltip content="View analytics">
            <button className="hidden items-center rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-800 lg:inline-flex">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </button>
          </Tooltip>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
                className="[&_img]:h-8 [&_img]:w-8"
              />
            }
            theme={{
              floating: {
                base: twMerge(theme.dropdown.floating.base, "w-56"),
              },
            }}
          >
            <Dropdown.Header>
              <strong className="block text-sm">Neil Sims</strong>
              <span className="block truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item className="text-gray-500 dark:text-gray-400">
              My profile
            </Dropdown.Item>
            <Dropdown.Item className="text-gray-500 dark:text-gray-400">
              Account settings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="text-gray-500 dark:text-gray-400">
              <svg
                className="mr-2 h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              &nbsp;My likes
            </Dropdown.Item>
            <Dropdown.Item className="text-gray-500 dark:text-gray-400">
              <svg
                className="mr-2 h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              &nbsp;Collections
            </Dropdown.Item>
            <Dropdown.Item className="text-gray-500 dark:text-gray-400">
              <span className="flex w-full items-center">
                <svg
                  className="mr-2 h-5 w-5 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                    clipRule="evenodd"
                  />
                </svg>
                &nbsp;Pro version
              </span>
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="text-gray-500 dark:text-gray-400">
              Sign out
            </Dropdown.Item>
          </Dropdown>
          <Button
            color="gray"
            href="#"
            className="border-0 text-blue-600 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-700"
          >
            Log out
          </Button>
          <Navbar.Toggle theme={{ icon: "h-5 w-5 shrink-0" }} />
        </div>
        <Navbar.Collapse
          theme={{
            list: "mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-8 lg:text-base lg:font-medium",
          }}
          className="lg:order-1"
        >
          <Navbar.Link
            href="#"
            active
            className="border-b border-gray-100 bg-transparent text-gray-900 dark:border-gray-700 dark:text-white md:border-0"
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
          <Navbar.Link href="#">Marketplace</Navbar.Link>
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link href="#">Team</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
