import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export function SuccessMessageWithRepository() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)} className="mx-auto">
        Show success message
      </Button>
      <Modal
        onClose={() => setShowModal(false)}
        popup
        size="lg"
        show={showModal}
      >
        <Modal.Body className="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-semibold leading-none text-gray-900 dark:text-white">
              Awesome!
            </h3>
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                aria-hidden
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <p className="text-left text-gray-500 dark:text-gray-400">
            The following repositories have been successfully deleted:
          </p>
          <div className="mb-4 mt-2 flex items-center space-x-1.5 border-y border-green-200 bg-green-100 p-4 text-green-700 dark:border-gray-600 dark:bg-gray-700 dark:text-green-300 sm:mb-5">
            <svg
              aria-hidden
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="font-medium leading-none">
              bergside/flowbite-library
            </p>
          </div>
          <Button
            onClick={() => setShowModal(false)}
            className="w-full"
            size="sm"
          >
            Continue
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
