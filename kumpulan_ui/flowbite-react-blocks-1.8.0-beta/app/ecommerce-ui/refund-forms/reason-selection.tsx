import {
  Button,
  Checkbox,
  Label,
  Modal,
  Radio,
  Textarea,
} from "flowbite-react";
import { CheckCircle } from "flowbite-react-icons/outline";
import { useState } from "react";

export default function RefundFormReasonSelection() {
  const [isConditionModalOpen, setConditionModalOpen] = useState(false);
  const [isReasonModalOpen, setReasonModalOpen] = useState(false);

  return (
    <>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <form action="#" className="mx-auto max-w-5xl space-y-6 lg:space-y-8">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                Product return form
              </h2>
              <ol className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 sm:justify-center md:flex-row md:items-center lg:gap-6">
                <li className="flex items-center gap-2 md:flex-1 md:flex-col md:gap-1.5 lg:flex-none">
                  <CheckCircle className="h-5 w-5 text-primary-700 dark:text-primary-500" />
                  <p className="text-sm font-medium leading-tight text-primary-700 dark:text-primary-500">
                    My products
                  </p>
                </li>
                <div className="hidden h-px w-4 shrink-0 bg-gray-200 dark:bg-gray-700 md:block lg:w-16"></div>
                <li className="flex items-center gap-2 md:flex-1 md:flex-col md:gap-1.5 lg:flex-none">
                  <CheckCircle className="h-5 w-5 text-primary-700 dark:text-primary-500" />
                  <p className="text-sm font-medium leading-tight text-primary-700 dark:text-primary-500">
                    Return reason
                  </p>
                </li>
                <div className="hidden h-px w-4 shrink-0 bg-gray-200 dark:bg-gray-700 md:block lg:w-16"></div>
                <li className="flex items-center gap-2 md:flex-1 md:flex-col md:gap-1.5 lg:flex-none">
                  <CheckCircle className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <p className="text-sm font-medium leading-tight text-gray-500 dark:text-gray-400">
                    Delivery option
                  </p>
                </li>
                <div className="hidden h-px w-4 shrink-0 bg-gray-200 dark:bg-gray-700 md:block lg:w-16"></div>
                <li className="flex items-center gap-2 md:flex-1 md:flex-col md:gap-1.5 lg:flex-none">
                  <CheckCircle className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <p className="text-sm font-medium leading-tight text-gray-500 dark:text-gray-400">
                    Refund choice
                  </p>
                </li>
                <div className="hidden h-px w-4 shrink-0 bg-gray-200 dark:bg-gray-700 md:block lg:w-16"></div>
                <li className="flex items-center gap-2 md:flex-1 md:flex-col md:gap-1.5 lg:flex-none">
                  <CheckCircle className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <p className="text-sm font-medium leading-tight text-gray-500 dark:text-gray-400">
                    Confirmation
                  </p>
                </li>
              </ol>
            </div>
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  2. Select the reason for returning:
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  To help us solve your request as quickly as possible, please
                  answer the following questions.
                </p>
              </div>
              <div className="divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800">
                <div className="gap-14 p-6 md:flex md:items-center">
                  <div className="min-w-0 max-w-2xl flex-1 gap-6 sm:flex sm:items-center">
                    <a
                      href="#"
                      className="mb-4 flex aspect-square h-14 w-14 shrink-0 items-center sm:mb-0"
                    >
                      <img
                        className="h-auto max-h-full w-full dark:hidden"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                        alt=""
                      />
                      <img
                        className="hidden h-auto max-h-full w-full dark:block"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                        alt=""
                      />
                    </a>
                    <a
                      href="#"
                      className="mt-4 font-medium text-gray-900 hover:underline dark:text-white sm:mt-0"
                    >
                      PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple
                      M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Silver
                    </a>
                  </div>
                  <div className="mt-4 flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between md:mt-0 md:flex-col md:items-start">
                    <dl className="flex items-center gap-2.5">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400 lg:w-36">
                        Order Number:
                      </dt>
                      <dd className="text-base font-normal text-gray-500 dark:text-gray-400">
                        <a href="#" className="hover:underline">
                          #737423642
                        </a>
                      </dd>
                    </dl>
                    <dl className="flex items-center gap-2.5">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400 lg:w-36">
                        Return Term:
                      </dt>
                      <dd className="text-base font-normal text-gray-500 dark:text-gray-400">
                        21.07.2023
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-8">
                  <p className="text-base font-medium text-gray-900 dark:text-white">
                    What is the condition of the product?
                  </p>
                  <div className="space-y-4">
                    <div className="mb-4 flex items-center">
                      <Radio id="condition-1" name="product-condition" />
                      <Label
                        htmlFor="condition-1"
                        className="ms-2 text-gray-500 dark:text-gray-400"
                      >
                        I want to return a sealed product
                      </Label>
                    </div>
                    <div className="flex items-center">
                      <Radio
                        defaultChecked
                        id="condition-2"
                        name="product-condition"
                      />
                      <Label
                        htmlFor="condition-2"
                        className="ms-2 text-gray-500 dark:text-gray-400"
                      >
                        I want to return an mistaken order
                      </Label>
                    </div>
                    <div className="mb-4 flex items-center">
                      <Radio id="condition-3" name="product-condition" />
                      <Label
                        htmlFor="condition-3"
                        className="ms-2 text-gray-500 dark:text-gray-400"
                      >
                        I want to return a functional but unsealed product
                      </Label>
                    </div>
                    <div className="mb-4 flex items-center">
                      <Radio id="condition-4" name="product-condition" />
                      <Label
                        htmlFor="condition-4"
                        className="ms-2 text-gray-500 dark:text-gray-400"
                      >
                        I want to return a non-functional but unsealed product
                      </Label>
                    </div>
                    <div className="mb-4 flex items-center">
                      <Radio id="condition-5" name="product-condition" />
                      <Label
                        htmlFor="condition-5"
                        className="ms-2 text-gray-500 dark:text-gray-400"
                      >
                        The product was not delivered
                      </Label>
                    </div>
                  </div>
                  <button
                    onClick={() => setConditionModalOpen(true)}
                    type="button"
                    className="w-full rounded-lg  border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
                  >
                    Other condition
                  </button>
                </div>
                <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-8">
                  <p className="font-medium text-gray-900 dark:text-white">
                    What is the main reason for returning the product?
                  </p>
                  <div className="space-y-4">
                    <div className="mb-4 flex items-center">
                      <Checkbox id="reason-1" name="reason-1" />
                      <Label
                        htmlFor="reason-1"
                        className="ms-2 text-gray-500 dark:text-gray-400"
                      >
                        Defective or Damaged Product
                      </Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox defaultChecked id="reason-2" name="reason-2" />
                      <Label
                        htmlFor="reason-2"
                        className="ms-2 text-gray-500 dark:text-gray-400"
                      >
                        Incorrect Product Received
                      </Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox defaultChecked id="reason-3" name="reason-3" />
                      <Label
                        htmlFor="reason-3"
                        className="ms-2 text-gray-500 dark:text-gray-400"
                      >
                        Unsatisfactory Quality
                      </Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="reason-4" name="reason-4" />
                      <Label
                        htmlFor="reason-4"
                        className="ms-2 text-gray-500 dark:text-gray-400"
                      >
                        Changed Mind/Not as Expected
                      </Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="reason-5" name="reason-5" />
                      <Label
                        htmlFor="reason-5"
                        className="ms-2 text-gray-500 dark:text-gray-400"
                      >
                        Misleading Product Information
                      </Label>
                    </div>
                  </div>
                  <button
                    onClick={() => setReasonModalOpen(true)}
                    type="button"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
                  >
                    <svg
                      className="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 7V2.221a2 2 0 0 0-.5.365L3.586 6.5a2 2 0 0 0-.365.5H8Zm2 0V2h7a2 2 0 0 1 2 2v.126a5.087 5.087 0 0 0-4.74 1.368v.001l-6.642 6.642a3 3 0 0 0-.82 1.532l-.74 3.692a3 3 0 0 0 3.53 3.53l3.694-.738a3 3 0 0 0 1.532-.82L19 15.149V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M17.447 8.08a1.087 1.087 0 0 1 1.187.238l.002.001a1.088 1.088 0 0 1 0 1.539l-.377.377-1.54-1.542.373-.374.002-.001c.1-.102.22-.182.353-.237Zm-2.143 2.027-4.644 4.644-.385 1.924 1.925-.385 4.644-4.642-1.54-1.54Zm2.56-4.11a3.087 3.087 0 0 0-2.187.909l-6.645 6.645a1 1 0 0 0-.274.51l-.739 3.693a1 1 0 0 0 1.177 1.176l3.693-.738a1 1 0 0 0 .51-.274l6.65-6.646a3.088 3.088 0 0 0-2.185-5.275Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    I have another reason
                  </button>
                </div>
              </div>
              <div
                className="mb-4 rounded-lg bg-primary-50 p-4 text-sm text-primary-800 dark:bg-gray-800 dark:text-primary-400 sm:text-base"
                role="alert"
              >
                Kindly select your reasons for returning the product
                thoughtfully, as this will aid us in expediting your request
                resolution and ensuring your utmost satisfaction with the
                overall purchase experience.
              </div>
              <div className="gap-4 sm:flex sm:items-center">
                <button
                  type="button"
                  className="w-full rounded-lg  border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
                >
                  Prev: Choose the product
                </button>
                <Button type="submit" className="mt-4 w-full sm:mt-0 sm:w-auto">
                  Next: Delivery method
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Modal
        show={isConditionModalOpen}
        onClose={() => setConditionModalOpen(false)}
        size="md"
      >
        <Modal.Body className="bg-white dark:bg-gray-800">
          <Label
            htmlFor="reason-message"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Write here the condition of the product
          </Label>
          <Textarea
            id="reason-message"
            name="reason-message"
            placeholder="e.g. I used the product for 10 months and it has fine scratches"
            rows={4}
            className="mb-5"
          />
          <div className="flex items-center justify-center space-x-4">
            <Button type="button" className="w-full">
              Add condition
            </Button>
            <button
              onClick={() => setConditionModalOpen(false)}
              type="button"
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Close
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={isReasonModalOpen}
        onClose={() => setReasonModalOpen(false)}
        size="md"
      >
        <Modal.Body className="bg-white dark:bg-gray-800">
          <Label
            htmlFor="reason-message"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Write the reason why you want the refund
          </Label>
          <Textarea
            id="reason-message"
            name="reason-message"
            placeholder="e.g. Product malfunction"
            rows={4}
            className="mb-5"
          />
          <div className="flex items-center justify-center space-x-4">
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-lg border border-primary-700 bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:border-primary-800 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-primary-600 dark:bg-primary-600 dark:hover:border-primary-700  dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Add your reason
            </button>
            <button
              onClick={() => setReasonModalOpen(false)}
              type="button"
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Close
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
