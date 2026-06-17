"use client";

import { Modal, ModalBody } from "flowbite-react";
import { ArrowRight, Close } from "flowbite-react-icons/outline";
import { useState } from "react";

export default function DiscountCornerPopup() {
  const [isOpen, setOpen] = useState(true);

  return (
    <Modal
      onClose={() => setOpen(false)}
      popup
      position="bottom-right"
      show={isOpen}
      size="xl"
    >
      <ModalBody className="pt-6">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-1 top-1 inline-flex items-center rounded-lg p-1.5 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <Close className="h-5 w-5" />
        </button>
        <div className="items-center space-y-4 sm:flex sm:space-y-0">
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-with-rocket.svg"
            className="h-28 dark:hidden sm:mx-auto"
          />
          <img
            alt=""
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-with-rocket-dark.svg"
            className="hidden h-28 dark:block sm:mx-auto"
          />
          <div className="sm:ps-6">
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
              Today's deal for gaming weekend
            </h3>
            <p className="mb-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
              You get up to&nbsp;
              <span className="font-medium text-gray-900 dark:text-white">
                -30%
              </span>
              &nbsp;extra on purchase of&nbsp;
              <span className="font-medium text-gray-900 dark:text-white">
                least $100
              </span>
              &nbsp;with the&nbsp;
              <span className="font-medium text-gray-900 dark:text-white">
                crazygaming
              </span>
              &nbsp;code!
            </p>
            <a
              href="#"
              className="inline-flex items-center font-medium text-primary-700 hover:underline dark:text-primary-500"
            >
              See the offer
              <ArrowRight className="ms-1 h-5 w-5" />
            </a>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}
