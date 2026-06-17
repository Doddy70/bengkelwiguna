import { Dropdown, Navbar } from "flowbite-react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export function HeaderWithSubNavbar() {
  return (
    <header>
      <Navbar className="dark:bg-gray-800">
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
        <div className="flex items-center">
          <a
            href="tel:5541251234"
            className="mr-6 hidden text-sm font-medium text-gray-900 hover:underline dark:text-white sm:inline"
          >
            (555) 412-1234
          </a>
          <a
            href="#"
            className="text-sm font-medium text-primary-600 hover:underline dark:text-white sm:mr-6"
          >
            Contact us
          </a>
          <a
            href="#"
            className="hidden text-sm font-medium text-primary-600 hover:underline dark:text-white sm:inline"
          >
            Login
          </a>
        </div>
      </Navbar>
      <Navbar className="bg-gray-50 py-3 dark:bg-gray-700">
        <Navbar.Collapse>
          <Navbar.Link
            href="#"
            className="hover:text-gray-900 hover:underline dark:text-white"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="hover:underline dark:text-white md:hover:text-gray-900"
          >
            Company
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="hover:underline dark:text-white md:hover:text-gray-900"
          >
            Team
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="hover:underline dark:text-white md:hover:text-gray-900"
          >
            Features
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="hover:underline dark:text-white md:hover:text-gray-900"
          >
            Marketplace
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="hover:underline dark:text-white md:hover:text-gray-900"
          >
            Resources
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="hover:underline dark:text-white md:hover:text-gray-900"
          >
            Forum
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="hover:underline dark:text-white md:hover:text-gray-900"
          >
            Support
          </Navbar.Link>
        </Navbar.Collapse>
        <div className="flex items-center gap-5 lg:hidden">
          <a
            href="#"
            className="text-sm hover:underline focus:underline dark:text-white"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm hover:underline focus:underline dark:text-white"
          >
            Company
          </a>
          <a
            href="#"
            className="text-sm hover:underline focus:underline dark:text-white"
          >
            Team
          </a>
          <a
            href="#"
            className="text-sm hover:underline focus:underline dark:text-white"
          >
            Features
          </a>
          <Dropdown
            arrowIcon={false}
            color="none"
            label={<HiOutlineDotsHorizontal className="h-5 w-5" />}
            theme={{
              floating: {
                target: "w-fit items-center p-0 dark:text-white [&>span]:p-1",
              },
            }}
            className="[&_span]:py-0"
          >
            <Dropdown.Item>Marketplace</Dropdown.Item>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Resources</Dropdown.Item>
            <Dropdown.Item>Forum</Dropdown.Item>
            <Dropdown.Item>Support</Dropdown.Item>
          </Dropdown>
        </div>
      </Navbar>
    </header>
  );
}
