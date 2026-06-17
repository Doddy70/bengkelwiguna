import { Button, Navbar } from "flowbite-react";

export function HeaderWithCenteredLogo() {
  return (
    <header>
      <div className="flex items-center justify-end gap-1 bg-gray-50 p-2 dark:bg-gray-700 md:hidden">
        <a
          href="#"
          className="mr-2 text-sm font-medium text-gray-500 hover:underline dark:text-gray-400"
        >
          Talk to sales
        </a>
        <Button
          color="gray"
          href="#"
          className="border-0 bg-gray-50 text-gray-600 [&>*]:px-1"
        >
          <span className="sr-only">Our locations</span>
          <svg
            aria-hidden
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
        <Button
          color="gray"
          href="tel:5541251234"
          className="border-0 bg-gray-50 text-gray-600 [&>*]:px-1"
        >
          <span className="sr-only">Call us</span>
          <svg
            aria-hidden
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </Button>
      </div>
      <Navbar fluid>
        <Navbar.Brand href="https://flowbite.com" className="lg:order-2">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <div className="flex items-center gap-3 lg:order-3">
          <a
            href="#"
            className="hidden text-sm font-medium text-gray-500 hover:underline dark:text-gray-400 md:block"
          >
            Talk to sales
          </a>
          <div className="-mr-2 flex items-center justify-center">
            <Button
              color="gray"
              href="#"
              size="xs"
              className="hidden border-0 text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 md:block"
            >
              <span className="sr-only">Our locations</span>
              <svg
                aria-hidden
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
            <Button
              color="gray"
              href="tel:5541251234"
              size="xs"
              className="hidden border-0 text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 md:block"
            >
              <span className="sr-only">Call us</span>
              <svg
                aria-hidden
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </Button>
          </div>
          <Button
            color="gray"
            href="#"
            className="-mr-1 border-0 hover:bg-gray-50 focus:outline-none focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Login
          </Button>
          <Button color="info" href="#">
            Sign up
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
            active
            href="#"
            className="border-b bg-transparent dark:border-gray-700 md:border-0"
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="#">Resources</Navbar.Link>
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
