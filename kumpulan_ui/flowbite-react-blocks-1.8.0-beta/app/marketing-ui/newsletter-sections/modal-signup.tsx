import { Button, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

export function ModalEmailSignUpNewsletterSection() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex justify-center">
      <Button color="info" onClick={() => setShow(true)}>
        Open newsletter modal
      </Button>
      <Modal onClose={() => setShow(false)} show={show}>
        <div className="relative flex items-center rounded-lg bg-white shadow dark:bg-gray-800">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/newsletter/people-at-office.png"
            className="hidden h-64 rounded-l-lg md:flex"
            alt="office"
          />
          <div>
            <button
              type="button"
              className="absolute right-3 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              id="close-modal"
              onClick={() => setShow(false)}
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
            <div className="p-6 pt-4">
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Join our Newsletter
              </h3>
              <p className="mb-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Get started with our monthly newsletter for helpful tips on how
                to run your business smoothly.
              </p>
              <form action="#">
                <div className="mx-auto max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0">
                  <div className="relative mr-3 w-full">
                    <label
                      htmlFor="email"
                      className="sr-only mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Email address
                    </label>
                    <TextInput
                      icon={() => (
                        <svg
                          className="h-5 w-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      )}
                      id="email"
                      placeholder="Enter your email"
                      required
                      type="email"
                      className="[&_input]:w-full [&_input]:py-3"
                    />
                  </div>
                  <div>
                    <Button
                      color="info"
                      type="submit"
                      className="w-full [&>span]:py-3"
                    >
                      Subscribe
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
