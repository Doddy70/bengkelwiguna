"use client";

import { Badge, Modal, ModalBody, theme } from "flowbite-react";
import { SalePercent, Store, Tag, Truck } from "flowbite-react-icons/outline";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function PricingPlanModal() {
  const [isOpen, setOpen] = useState(true);

  return (
    <Modal
      onClose={() => setOpen(false)}
      popup
      show={isOpen}
      size="2xl"
      theme={{
        content: {
          inner: twMerge(theme.modal.content.inner, "dark:bg-gray-800"),
        },
      }}
    >
      <ModalBody className="p-4">
        <div className="mb-4 flex items-center md:mb-6">
          <a href="https://flowbite.com" className="me-3 flex items-center">
            <img
              alt=""
              src="https://flowbite.com/docs/images/logo.svg"
              className="me-2 sm:h-8"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              Flowbite
            </span>
          </a>
          <Badge
            color="primary"
            className="me-2 bg-primary-100 text-sm uppercase text-primary-800 dark:bg-primary-900 dark:text-primary-300"
          >
            Pro
          </Badge>
        </div>
        <p className="mb-4 border-b border-t border-gray-200 py-4 text-lg text-gray-500 dark:border-gray-700 dark:text-white md:mb-6 md:py-6 md:text-xl">
          Did you know that a&nbsp;
          <span className="font-bold text-gray-900 dark:text-white">
            Flowbite PRO
          </span>
          &nbsp;customer saves more than&nbsp;
          <span className="font-bold text-gray-900 dark:text-white">$200</span>
          &nbsp;on average per year from transport costs?
        </p>
        <h3 className="mb-4 text-xl font-semibold leading-none text-gray-900 dark:text-white md:mb-6">
          PRO plan benefits
        </h3>
        <ul role="list" className="mb-4 space-y-3 md:mb-6">
          <li className="flex items-center space-x-1.5">
            <Truck className="h-5 w-5 shrink-0 text-green-500" />
            <span className="leading-tight text-gray-500 dark:text-gray-400">
              <span className="font-medium text-gray-900 dark:text-white">
                Free delivery
              </span>
              &nbsp;delivery for all products
            </span>
          </li>
          <li className="flex items-center space-x-1.5">
            <SalePercent className="h-5 w-5 shrink-0 text-green-500" />
            <span className="leading-tight text-gray-500 dark:text-gray-400">
              Exlusive discount in Flowbite Store
            </span>
          </li>
          <li className="flex items-center space-x-1.5">
            <Tag className="h-5 w-5 shrink-0 text-green-500" />
            <span className="leading-tight text-gray-500 dark:text-gray-400">
              Up to&nbsp;
              <span className="font-medium text-gray-900 dark:text-white">
                30% extra discount
              </span>
              &nbsp;on premium brands
            </span>
          </li>
          <li className="flex items-center space-x-1.5">
            <Store className="h-5 w-5 shrink-0 text-green-500" />
            <span className="leading-tight text-gray-500 dark:text-gray-400">
              Up to&nbsp;
              <span className="font-medium text-gray-900 dark:text-white">
                40% extra discounts
              </span>
              &nbsp;at thousands of local restaurants
            </span>
          </li>
        </ul>
        <div className="sn:flex items-center space-y-4 sm:space-x-4 sm:space-y-0">
          <a
            href="#"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white  hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
          >
            Try it free for 3 months
          </a>
          <button
            onClick={() => setOpen(false)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
          >
            Not today
          </button>
        </div>
      </ModalBody>
    </Modal>
  );
}
