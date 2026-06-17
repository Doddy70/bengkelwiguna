import {
  Button,
  Datepicker,
  Label,
  Modal,
  Radio,
  TextInput,
  theme,
  Tooltip,
} from "flowbite-react";
import { InfoCircle } from "flowbite-react-icons/outline";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function PaymentFormWithModal() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="m-5 flex justify-center">
        <Button onClick={() => setModalOpen(true)}>
          Show order summary modal
        </Button>
      </div>
      <Modal
        show={isModalOpen}
        onClose={() => setModalOpen(false)}
        popup
        size="lg"
      >
        <Modal.Body className="rounded-lg bg-white pt-5 dark:bg-gray-800">
          <form action="#" tabIndex={-1}>
            <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-700 sm:mb-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Payment
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                type="button"
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="mb-4 flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-600 dark:bg-gray-700 md:mb-5">
              <div>
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <Radio
                      aria-describedby="mastercard-text-modal"
                      id="mastercard-modal"
                      name="payment-method"
                    />
                  </div>
                  <div className="ms-4 text-sm">
                    <Label
                      htmlFor="mastercard-modal"
                      className="font-medium text-gray-900 dark:text-white"
                    >
                      MasterCard ending in 8429
                    </Label>
                    <p
                      id="mastercard-text-modal"
                      className="text-xs font-normal text-gray-500 dark:text-gray-400"
                    >
                      Expiry 04/2026
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <button
                    type="button"
                    className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Delete
                  </button>
                  <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-500"></div>
                  <button
                    type="button"
                    className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Edit
                  </button>
                </div>
              </div>
              <div className="shrink-0">
                <img
                  className="h-8 w-auto dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg"
                  alt=""
                />
                <img
                  className="hidden h-8 w-auto dark:flex"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="mb-4 flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-600 dark:bg-gray-700 md:mb-5">
              <div>
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <Radio
                      aria-describedby="paypal-text-modal"
                      id="paypal-modal"
                      name="payment-method"
                    />
                  </div>
                  <div className="ms-4 text-sm">
                    <Label
                      htmlFor="paypal-modal"
                      className="font-medium text-gray-900 dark:text-white"
                    >
                      PayPal account
                    </Label>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <button
                    type="button"
                    className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Delete
                  </button>
                  <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-500"></div>
                  <button
                    type="button"
                    className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Edit
                  </button>
                </div>
              </div>
              <div className="shrink-0">
                <img
                  className="h-8 w-auto dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg"
                  alt=""
                />
                <img
                  className="hidden h-8 w-auto dark:flex"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-dark.svg"
                  alt=""
                />
              </div>
            </div>
            <h3 className="mb-4 text-gray-500 dark:text-gray-400 md:mb-5">
              Use a new payment method
            </h3>
            <div className="mb-6 grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Label
                  htmlFor="full_name-3"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full name (as displayed on card)*
                </Label>
                <TextInput
                  id="full_name-3"
                  name="full_name-3"
                  placeholder="Bonnie Green"
                  required
                />
              </div>
              <div className="col-span-2">
                <Label
                  htmlFor="card-number-input-3"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Card number*
                </Label>
                <TextInput
                  id="card-number-input-3"
                  name="card-number-input-3"
                  pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="card-expiration-input-3"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Card expiration*
                </Label>
                <Datepicker
                  id="card-expiration-input-3"
                  name="card-expiration-input-3"
                  theme={{
                    popup: {
                      root: {
                        base: twMerge(
                          theme.datepicker.popup.root.base,
                          "-top-96",
                        ),
                      },
                    },
                  }}
                />
              </div>
              <div>
                <Label
                  htmlFor="cvv-input-2"
                  className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  CVV*
                  <Tooltip content="The last 3 digits on back of card">
                    <InfoCircle className="flex h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
                  </Tooltip>
                </Label>
                <TextInput
                  aria-describedby="helper-text-explanation"
                  id="cvv-input-2"
                  name="cvv-input-2"
                  placeholder="•••"
                  required
                  rightIcon={() => (
                    <>
                      <img
                        className="z-10 h-4 dark:hidden"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/cvv-image-light.svg"
                        alt=""
                      />
                      <img
                        className="hidden h-4 dark:flex"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/cvv-image-dark.svg"
                        alt=""
                      />
                    </>
                  )}
                  type="number"
                />
              </div>
            </div>
            <div className="mt-4 items-center space-x-0 space-y-4 border-t border-gray-200 pt-4 dark:border-gray-700 sm:flex sm:space-x-4 sm:space-y-0 md:mt-5 md:pt-5">
              <Button type="submit" className="flex w-full sm:mt-0 sm:w-auto">
                Pay now
              </Button>
              <button
                onClick={() => setModalOpen(false)}
                type="button"
                className="w-full rounded-lg border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
              >
                Close
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
