import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { FlowbiteLogo } from "~/components/flowbite-logo";

export function CookieConsentModal() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Show cookie consent modal</Button>
      <Modal
        show={show}
        theme={{
          content: {
            inner:
              "relative flex max-h-[90vh] flex-col rounded-lg bg-white shadow dark:bg-gray-800",
          },
        }}
      >
        <Modal.Header className="dark:border-gray-700 [&>button]:hidden [&>h3]:flex [&>h3]:w-full [&>h3]:justify-between">
          <a
            href="#"
            className="flex items-center text-xl font-semibold text-gray-900 dark:text-white sm:mb-0"
          >
            <FlowbiteLogo />
            Flowbite
          </a>
          <div className="flex items-center space-x-3">
            <a
              href="#"
              className="text-gray-800 hover:text-primary-600 dark:text-white dark:hover:text-primary-500"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-primary-600 dark:text-white dark:hover:text-primary-500"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-6 text-gray-500 dark:text-gray-400">
            <p className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Before continuing on our website
            </p>
            <p className="mb-2">Flowbite uses cookies and data to:</p>
            <ul className="mb-4 list-disc space-y-2 pl-4">
              <li>
                Provide and manage services, for example to monitor service
                interruptions and protect you from spam, fraudulent and illegal
                activities.
              </li>
              <li>
                Measure audience engagement and site statistics to understand
                how our services are used.
              </li>
            </ul>
            <p>
              Click "Customize" to review options, such as settings to reject
              the use of cookies for personalization and browser-level
              information about settings to reject some or all cookies for other
              uses. You can also visit g.co/privacytools at any time.
            </p>
          </div>
          <div className="items-center justify-between space-y-4 pt-0 sm:flex sm:space-y-0">
            <div className="items-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
              <Button
                onClick={() => setShow(false)}
                className="inline-flex w-full sm:w-fit [&>span]:px-5 [&>span]:py-2.5"
              >
                I accept
              </Button>
              <Button
                color="gray"
                onClick={() => setShow(false)}
                className="w-full dark:border-gray-500 sm:w-fit [&>span]:px-5 [&>span]:py-2.5 [&>span]:text-gray-500 hover:[&>span]:text-gray-900 dark:[&>span]:bg-gray-700 dark:[&>span]:text-gray-300 dark:hover:[&>span]:bg-gray-600 dark:hover:[&>span]:text-white"
              >
                Block cookies
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <a href="#" className="hover:underline">
                Privacy
              </a>
              <div className="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
              <a href="#" className="hover:underline">
                Terms
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
