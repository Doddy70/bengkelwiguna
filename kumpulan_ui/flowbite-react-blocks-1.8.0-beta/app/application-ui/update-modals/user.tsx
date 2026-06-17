import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

export function UpdateUserModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)} className="mx-auto">
        Update user
      </Button>
      <Modal
        onClose={() => setShowModal(false)}
        popup
        show={showModal}
        size="xl"
      >
        <Modal.Body className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
          <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600 sm:mb-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Update user
            </h3>
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-5 top-[18px] ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
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
          <form action="#">
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="username" className="mb-2 block">
                  Username
                </Label>
                <TextInput
                  defaultValue="leslie.linvingston"
                  id="username"
                  name="username"
                  placeholder="Ex. bonnie.green"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="mb-2 block">
                  Email
                </Label>
                <TextInput
                  defaultValue="leslie@company.com"
                  id="email"
                  name="email"
                  placeholder="bonnie@company.com"
                  required
                  type="email"
                />
              </div>
              <div>
                <Label htmlFor="password" className="mb-2 block">
                  Password
                </Label>
                <TextInput
                  id="password"
                  name="password"
                  placeholder="•••••••••"
                  required
                  type="password"
                />
              </div>
              <div>
                <Label htmlFor="confirm-password" className="mb-2 block">
                  Confirm password
                </Label>
                <TextInput
                  id="confirm-password"
                  name="confirm-password"
                  placeholder="•••••••••"
                  required
                  type="password"
                />
              </div>
            </div>
            <Button
              onClick={() => setShowModal(false)}
              size="lg"
              type="submit"
              className="mt-4 [&>span]:text-sm"
            >
              Update user
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
