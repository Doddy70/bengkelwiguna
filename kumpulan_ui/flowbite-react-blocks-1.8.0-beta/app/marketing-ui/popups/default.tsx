import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export function DefaultPopup() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Preview default popup</Button>
      <Modal
        show={show}
        size="lg"
        theme={{
          content: {
            inner:
              "relative flex max-h-[90vh] flex-col rounded-lg bg-white shadow dark:bg-gray-800",
          },
        }}
      >
        <Modal.Body className="p-9">
          <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
            <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
              Privacy info
            </h3>
            <p>
              The backup created with this export functionality may contain some
              sensitive data. We suggest you to save this archive in a secure
              location.
            </p>
          </div>
          <div className="items-center justify-between space-y-4 pt-0 sm:flex sm:space-y-0">
            <a
              href="#"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Learn more about privacy
            </a>
            <div className="items-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
              <Button
                color="gray"
                outline
                onClick={() => setShow(false)}
                size="sm"
                className="w-full dark:bg-gray-700 dark:enabled:hover:bg-gray-600 [&>span]:dark:bg-gray-700 [&>span]:dark:enabled:hover:bg-gray-600"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setShow(false)}
                size="sm"
                className="w-full"
              >
                Confirm
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
