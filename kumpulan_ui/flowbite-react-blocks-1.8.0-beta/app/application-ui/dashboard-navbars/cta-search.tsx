import { Button, Dropdown, Navbar, TextInput } from "flowbite-react";

export function TripleDashboardNavbarWithCTAButtonAndSearchInput() {
  return (
    <header className="flex flex-col antialiased">
      <Navbar
        fluid
        theme={{
          root: {
            base: "",
            inner: {
              base: "flex flex-col",
            },
          },
        }}
      >
        <div className="order-1 border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-900 lg:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <a href="https://flowbite.com" className="mr-6 flex">
                <img
                  src="https://flowbite.s3.amazonaws.com/logo.svg"
                  className="mr-3 h-8"
                  alt=""
                />
                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                  Flowbite
                </span>
              </a>
              <Dropdown
                inline
                label={
                  <>
                    <span className="sr-only">Open user menu</span>
                    <div className="flex items-center">
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                        className="mr-3 h-8 w-8 rounded-full"
                        alt=""
                      />
                      <div className="text-left">
                        <div className="mb-0.5 font-semibold leading-none text-gray-900 dark:text-white">
                          Bonnie <span className="hidden md:inline">Green</span>
                        </div>
                      </div>
                    </div>
                    <svg
                      className="ml-2 h-3 w-3 text-gray-500 dark:text-gray-400"
                      aria-hidden
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5m0 6 4 4 4-4"
                      />
                    </svg>
                  </>
                }
                theme={{
                  arrowIcon: "hidden",
                }}
              >
                <Dropdown.Item>
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    className="mr-3 h-8 w-8 rounded-full"
                    alt=""
                  />
                  <div className="text-left">
                    <div className="mb-0.5 font-semibold leading-none text-gray-900 dark:text-white">
                      Michael Gough
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      michael@company.com
                    </div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                    className="mr-3 h-8 w-8 rounded-full"
                    alt=""
                  />
                  <div className="text-left">
                    <div className="mb-0.5 font-semibold leading-none text-gray-900 dark:text-white">
                      Roberta Casas
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      roberta@company.com
                    </div>
                  </div>
                </Dropdown.Item>
              </Dropdown>
            </div>
            <div className="flex items-center justify-between lg:order-2">
              <ul className="mr-4 mt-0 hidden w-full flex-col text-sm font-medium text-gray-900 dark:text-white md:flex md:flex-row">
                <li>
                  <a
                    href="#"
                    className="px-4 py-3 hover:text-primary-600 dark:hover:text-primary-500"
                    aria-current="page"
                  >
                    Changelog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-3 hover:text-primary-600 dark:hover:text-primary-500"
                    aria-current="page"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-3 hover:text-primary-600 dark:hover:text-primary-500"
                    aria-current="page"
                  >
                    Docs
                  </a>
                </li>
              </ul>
              <Button color="gray" className="hidden md:inline">
                Feedback
              </Button>
              <Navbar.Toggle className="md:hidden" />
            </div>
          </div>
        </div>
        <Navbar.Collapse className="order-3 md:order-2 md:px-6">
          <div className="flex w-full flex-col items-center border-b border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900 lg:flex-row [&_li]:w-full lg:[&_li]:w-auto">
            <Navbar.Link
              aria-current="page"
              href="#"
              className="block border-b p-0 dark:border-gray-700 lg:inline lg:border-b-0"
            >
              <span className="block border-b-2 border-primary-600 px-4 py-3 text-sm font-medium text-primary-600 hover:text-primary-600 dark:border-primary-500 dark:text-primary-500">
                Overview
              </span>
            </Navbar.Link>
            <Navbar.Link
              href="#"
              className="block border-b p-0 dark:border-gray-700 md:inline md:border-b-0"
            >
              <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                Company
              </span>
            </Navbar.Link>
            <Navbar.Link
              href="#"
              className="block border-b p-0 dark:border-gray-700 md:inline md:border-b-0"
            >
              <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                Team
              </span>
            </Navbar.Link>
            <Navbar.Link
              href="#"
              className="block border-b p-0 dark:border-gray-700 md:inline md:border-b-0"
            >
              <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                Features
              </span>
            </Navbar.Link>
            <Navbar.Link
              href="#"
              className="block border-b p-0 dark:border-gray-700 md:inline md:border-b-0"
            >
              <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                Marketplace
              </span>
            </Navbar.Link>
            <Navbar.Link
              href="#"
              className="block border-b p-0 dark:border-gray-700 md:inline md:border-b-0"
            >
              <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                Resources
              </span>
            </Navbar.Link>
            <Navbar.Link
              href="#"
              className="block border-b p-0 dark:border-gray-700 md:inline md:border-b-0"
            >
              <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                Forum
              </span>
            </Navbar.Link>
            <Navbar.Link
              href="#"
              className="block border-b p-0 dark:border-gray-700 md:inline md:border-b-0"
            >
              <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                Support
              </span>
            </Navbar.Link>
          </div>
        </Navbar.Collapse>
        <nav className="order-2 border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 md:order-3">
          <div className="flex flex-col items-center px-4 py-3 md:flex-row lg:px-6">
            <form className="relative mb-4 w-full md:mb-0 md:mr-4 md:max-w-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <TextInput
                icon={() => (
                  <svg
                    aria-hidden
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                id="search"
                name="search"
                placeholder="Search"
                required
                type="search"
                className="[&_input]:py-2"
              />
            </form>
            <div className="grid w-full grid-cols-2 items-center gap-4 md:flex md:w-auto md:gap-3">
              <Button color="gray">
                <svg
                  className="mr-2 h-3.5 w-3.5"
                  aria-hidden
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />{" "}
                </svg>
                Create a Team
              </Button>
              <Button>
                <svg
                  className="mr-2 h-3 w-3"
                  aria-hidden
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
                New Project
              </Button>
            </div>
          </div>
        </nav>
      </Navbar>
    </header>
  );
}
