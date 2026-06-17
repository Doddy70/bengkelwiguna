import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export function NewsletterPopup() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Preview newsletter popup</Button>
      <Modal
        position="bottom-right"
        show={show}
        size="lg"
        theme={{
          content: {
            inner:
              "relative flex max-h-[90vh] flex-col rounded-lg bg-white shadow dark:bg-gray-800",
          },
        }}
      >
        <Modal.Body>
          <div className="flex items-start">
            <div>
              <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Join the Flowbite community
              </h3>
              <p className="mb-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Be the first to know about all the news and updates
              </p>
            </div>
            <button
              onClick={() => setShow(false)}
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <form action="#">
            <div className="relative z-0 mb-4">
              <input
                type="text"
                id="floating_email"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-primary-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-primary-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary-600 dark:text-gray-400 peer-focus:dark:text-primary-500"
              >
                Email
              </label>
            </div>
            <div className="relative z-0 mb-7">
              <input
                type="text"
                id="floating_name"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-primary-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-primary-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_name"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary-600 dark:text-gray-400 peer-focus:dark:text-primary-500"
              >
                Name
              </label>
            </div>
            <div>
              <Button
                onClick={() => setShow(false)}
                type="submit"
                className="w-full"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
