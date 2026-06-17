"use client";

import {
  Checkbox,
  Dropdown,
  DropdownItem,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Select,
  Textarea,
  TextInput,
  theme,
  Tooltip,
} from "flowbite-react";
import { InfoCircle } from "flowbite-react-icons/outline";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function DefaultOrderSummary() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isOrderAsACompany, setOrderAsACompany] = useState(false);

  return (
    <>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Order summary
            </h2>

            <div className="mt-6 space-y-4 border-b border-t border-gray-200 py-8 dark:border-gray-700 sm:mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Billing & Delivery information
              </h4>

              <dl>
                <dt className="text-base font-medium text-gray-900 dark:text-white">
                  Individual
                </dt>
                <dd className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                  Bonnie Green - +1 234 567 890, San Francisco, California,
                  United States, 3454, Scott Street
                </dd>
              </dl>

              <button
                onClick={() => setModalOpen(true)}
                className="text-base font-medium text-primary-700 hover:underline dark:text-primary-500"
              >
                Edit
              </button>
            </div>

            <div className="mt-6 sm:mt-8">
              <div className="relative overflow-x-auto border-b border-gray-200 dark:border-gray-800">
                <table className="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    <tr>
                      <td className="whitespace-nowrap py-4 md:w-[384px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex aspect-square h-10 w-10 shrink-0 items-center"
                          >
                            <img
                              className="h-auto max-h-full w-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                              alt="imac image"
                            />
                            <img
                              className="hidden h-auto max-h-full w-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                              alt="imac image"
                            />
                          </a>
                          <a href="#" className="hover:underline">
                            Apple iMac 27”
                          </a>
                        </div>
                      </td>

                      <td className="p-4 text-base font-normal text-gray-900 dark:text-white">
                        x1
                      </td>

                      <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                        $1,499
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 md:w-[384px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex aspect-square h-10 w-10 shrink-0 items-center"
                          >
                            <img
                              className="h-auto max-h-full w-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg"
                              alt="imac image"
                            />
                            <img
                              className="hidden h-auto max-h-full w-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg"
                              alt="imac image"
                            />
                          </a>
                          <a href="#" className="hover:underline">
                            Apple iPhone 14
                          </a>
                        </div>
                      </td>

                      <td className="p-4 text-base font-normal text-gray-900 dark:text-white">
                        x2
                      </td>

                      <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                        $1,998
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 md:w-[384px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex aspect-square h-10 w-10 shrink-0 items-center"
                          >
                            <img
                              className="h-auto max-h-full w-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg"
                              alt="ipad image"
                            />
                            <img
                              className="hidden h-auto max-h-full w-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg"
                              alt="ipad image"
                            />
                          </a>
                          <a href="#" className="hover:underline">
                            Apple iPad Air
                          </a>
                        </div>
                      </td>

                      <td className="p-4 text-base font-normal text-gray-900 dark:text-white">
                        x1
                      </td>

                      <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                        $898
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 md:w-[384px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex aspect-square h-10 w-10 shrink-0 items-center"
                          >
                            <img
                              className="h-auto max-h-full w-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-light.svg"
                              alt="xbox image"
                            />
                            <img
                              className="hidden h-auto max-h-full w-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-dark.svg"
                              alt="xbox image"
                            />
                          </a>
                          <a href="#" className="hover:underline">
                            Xbox Series X
                          </a>
                        </div>
                      </td>

                      <td className="p-4 text-base font-normal text-gray-900 dark:text-white">
                        x4
                      </td>

                      <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                        $4,499
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 md:w-[384px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex aspect-square h-10 w-10 shrink-0 items-center"
                          >
                            <img
                              className="h-auto max-h-full w-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg"
                              alt="playstation image"
                            />
                            <img
                              className="hidden h-auto max-h-full w-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg"
                              alt="playstation image"
                            />
                          </a>
                          <a href="#" className="hover:underline">
                            PlayStation 5
                          </a>
                        </div>
                      </td>

                      <td className="p-4 text-base font-normal text-gray-900 dark:text-white">
                        x1
                      </td>

                      <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                        $499
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 md:w-[384px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex aspect-square h-10 w-10 shrink-0 items-center"
                          >
                            <img
                              className="h-auto max-h-full w-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg"
                              alt="macbook image"
                            />
                            <img
                              className="hidden h-auto max-h-full w-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg"
                              alt="macbook image"
                            />
                          </a>
                          <a href="#" className="hover:underline">
                            MacBook Pro 16"
                          </a>
                        </div>
                      </td>

                      <td className="p-4 text-base font-normal text-gray-900 dark:text-white">
                        x1
                      </td>

                      <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                        $499
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap py-4 md:w-[384px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex aspect-square h-10 w-10 shrink-0 items-center"
                          >
                            <img
                              className="h-auto max-h-full w-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg"
                              alt="watch image"
                            />
                            <img
                              className="hidden h-auto max-h-full w-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg"
                              alt="watch image"
                            />
                          </a>
                          <a href="#" className="hover:underline">
                            Apple Watch SE
                          </a>
                        </div>
                      </td>

                      <td className="p-4 text-base font-normal text-gray-900 dark:text-white">
                        x2
                      </td>

                      <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                        $799
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 space-y-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Order summary
                </h4>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400">
                        Original price
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        $6,592.00
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400">
                        Savings
                      </dt>
                      <dd className="text-base font-medium text-green-500">
                        -$299.00
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400">
                        Store Pickup
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        $99
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400">Tax</dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        $799
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-lg font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-lg font-bold text-gray-900 dark:text-white">
                      $7,191.00
                    </dd>
                  </dl>
                </div>
                <Label
                  htmlFor="terms-checkbox-2"
                  className="flex items-start text-sm font-medium text-gray-900 dark:text-gray-300 sm:items-center"
                >
                  <Checkbox
                    id="terms-checkbox-2"
                    name="terms-checkbox-2"
                    className="me-2"
                  />
                  <span>
                    I agree with the&nbsp;
                    <a
                      href="#"
                      title=""
                      className="text-primary-700 underline hover:no-underline dark:text-primary-500"
                    >
                      Terms and Conditions
                    </a>
                    &nbsp;of use of the Flowbite marketplace
                  </span>
                </Label>
                <div className="gap-4 sm:flex sm:items-center">
                  <button
                    type="button"
                    className="w-full rounded-lg  border border-gray-200 bg-white px-5  py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  >
                    Return to Shopping
                  </button>
                  <button
                    type="submit"
                    className="mt-4 flex w-full items-center justify-center rounded-lg bg-primary-700  px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0"
                  >
                    Send the order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        onClose={() => setModalOpen(false)}
        popup
        show={isModalOpen}
        size="lg"
        theme={{
          content: {
            base: twMerge(theme.modal.content.base, "p-0"),
            inner: twMerge(theme.modal.content.inner, "dark:bg-gray-800"),
          },
          body: {
            popup: twMerge(theme.modal.body.popup, "pt-6"),
          },
          header: {
            base: twMerge(
              theme.modal.header.base,
              "items-center py-6 dark:border-gray-700",
            ),
            title: twMerge(theme.modal.header.title, "text-lg"),
          },
        }}
      >
        <ModalHeader className="border-b px-6 py-4">
          Billing Information
        </ModalHeader>
        <ModalBody>
          <form>
            <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-4 sm:col-span-2">
                <div className="flex items-center">
                  <Checkbox
                    aria-expanded={isOrderAsACompany}
                    id="company_address_billing_modal"
                    name="address-type-modal"
                    onClick={() => setOrderAsACompany(!isOrderAsACompany)}
                  />
                  <Label
                    htmlFor="company_address_billing_modal"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Order as a company
                  </Label>
                </div>
              </div>
              <div
                className={twMerge(
                  isOrderAsACompany ? "grid" : "hidden",
                  "grid-cols-2 gap-4 sm:col-span-2",
                )}
              >
                <div>
                  <Label
                    htmlFor="company_name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Company name
                  </Label>
                  <TextInput
                    id="company_name"
                    name="company_name"
                    placeholder="Flowbite LLC"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="vat_number"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    VAT number
                  </Label>
                  <TextInput
                    id="vat_number"
                    name="vat_number"
                    placeholder="DE42313253"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="mb-2 flex items-center gap-1">
                  <Label
                    htmlFor="saved-address-modal"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Saved Address
                  </Label>
                  <Tooltip content="Choose one of your saved addresses">
                    <InfoCircle className="h-4 w-4 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
                  </Tooltip>
                </div>
                <Select id="saved-address-modal" name="saved-address-modal">
                  <option selected>Choose one of your saved address</option>
                  <option value="address-1">
                    San Francisco, California, United States, 3454, Scott Street
                  </option>
                  <option value="address-2">
                    New York, United States, Broadway 10012
                  </option>
                </Select>
              </div>

              <div>
                <Label
                  htmlFor="first_name_billing_modal"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name*
                </Label>
                <TextInput
                  id="first_name_billing_modal"
                  name="first_name_billing_modal"
                  placeholder="Enter your first name"
                  required
                />
              </div>

              <div>
                <Label
                  htmlFor="last_name_billing_modal"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name*
                </Label>
                <TextInput
                  id="last_name_billing_modal"
                  name="last_name_billing_modal"
                  placeholder="Enter your last name"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <Label
                  htmlFor="phone-input_billing_modal"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number*
                </Label>
                <div className="flex items-center">
                  <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                      <span className="items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <svg
                          fill="none"
                          aria-hidden
                          className="me-2 h-4 w-4"
                          viewBox="0 0 20 15"
                        >
                          <rect
                            width="19.6"
                            height="14"
                            y=".5"
                            fill="#fff"
                            rx="2"
                          />
                          <mask
                            id="a"
                            style={{ maskType: "luminance" }}
                            width="20"
                            height="15"
                            x="0"
                            y="0"
                            maskUnits="userSpaceOnUse"
                          >
                            <rect
                              width="19.6"
                              height="14"
                              y=".5"
                              fill="#fff"
                              rx="2"
                            />
                          </mask>
                          <g mask="url(#a)">
                            <path
                              fill="#D02F44"
                              fill-rule="evenodd"
                              d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                              clip-rule="evenodd"
                            />
                            <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                            <g filter="url(#filter0_d_343_121520)">
                              <path
                                fill="url(#paint0_linear_343_121520)"
                                fill-rule="evenodd"
                                d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                clip-rule="evenodd"
                              />
                            </g>
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_343_121520"
                              x1=".933"
                              x2=".933"
                              y1="1.433"
                              y2="6.1"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#fff" />
                              <stop offset="1" stop-color="#F0F0F0" />
                            </linearGradient>
                            <filter
                              id="filter0_d_343_121520"
                              width="6.533"
                              height="5.667"
                              x=".933"
                              y="1.433"
                              color-interpolation-filters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset dy="1" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_343_121520"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_343_121520"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                        +1
                        <svg
                          className="-me-0.5 ms-2 h-4 w-4"
                          aria-hidden
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 9-7 7-7-7"
                          />
                        </svg>
                      </span>
                    }
                    theme={{
                      floating: {
                        base: twMerge(
                          theme.dropdown.floating.base,
                          "rounded-lg px-2 py-1",
                        ),
                      },
                    }}
                  >
                    <DropdownItem className="rounded-lg">
                      <span className="inline-flex items-center">
                        <svg
                          fill="none"
                          aria-hidden
                          className="me-2 h-4 w-4"
                          viewBox="0 0 20 15"
                        >
                          <rect
                            width="19.6"
                            height="14"
                            y=".5"
                            fill="#fff"
                            rx="2"
                          />
                          <mask
                            id="a"
                            style={{ maskType: "luminance" }}
                            width="20"
                            height="15"
                            x="0"
                            y="0"
                            maskUnits="userSpaceOnUse"
                          >
                            <rect
                              width="19.6"
                              height="14"
                              y=".5"
                              fill="#fff"
                              rx="2"
                            />
                          </mask>
                          <g mask="url(#a)">
                            <path
                              fill="#D02F44"
                              fill-rule="evenodd"
                              d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                              clip-rule="evenodd"
                            />
                            <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                            <g filter="url(#filter0_d_343_121520)">
                              <path
                                fill="url(#paint0_linear_343_121520)"
                                fill-rule="evenodd"
                                d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                clip-rule="evenodd"
                              />
                            </g>
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_343_121520"
                              x1=".933"
                              x2=".933"
                              y1="1.433"
                              y2="6.1"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#fff" />
                              <stop offset="1" stop-color="#F0F0F0" />
                            </linearGradient>
                            <filter
                              id="filter0_d_343_121520"
                              width="6.533"
                              height="5.667"
                              x=".933"
                              y="1.433"
                              color-interpolation-filters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset dy="1" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_343_121520"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_343_121520"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                        United States (+1)
                      </span>
                    </DropdownItem>
                    <DropdownItem className="rounded-lg">
                      <span className="inline-flex items-center">
                        <svg
                          className="me-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 20 15"
                        >
                          <rect
                            width="19.6"
                            height="14"
                            y=".5"
                            fill="#fff"
                            rx="2"
                          />
                          <mask
                            id="a"
                            style={{ maskType: "luminance" }}
                            width="20"
                            height="15"
                            x="0"
                            y="0"
                            maskUnits="userSpaceOnUse"
                          >
                            <rect
                              width="19.6"
                              height="14"
                              y=".5"
                              fill="#fff"
                              rx="2"
                            />
                          </mask>
                          <g mask="url(#a)">
                            <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                            <path
                              fill="#fff"
                              fill-rule="evenodd"
                              d="M-.898-.842L7.467 4.8V-.433h4.667V4.8l8.364-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.043-1.548 6.613-4.46H0V5.166h4.672L-1.941.706-.898-.842z"
                              clip-rule="evenodd"
                            />
                            <path
                              stroke="#DB1F35"
                              stroke-linecap="round"
                              stroke-width=".667"
                              d="M13.067 4.933L21.933-.9M14.009 10.088l7.947 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.189 6.093"
                            />
                            <path
                              fill="#E6273E"
                              fill-rule="evenodd"
                              d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z"
                              clip-rule="evenodd"
                            />
                          </g>
                        </svg>
                        United Kingdom (+44)
                      </span>
                    </DropdownItem>
                    <DropdownItem className="rounded-lg">
                      <span className="inline-flex items-center">
                        <svg
                          className="me-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 20 15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="19.6"
                            height="14"
                            y=".5"
                            fill="#fff"
                            rx="2"
                          />
                          <mask
                            id="a"
                            style={{ maskType: "luminance" }}
                            width="20"
                            height="15"
                            x="0"
                            y="0"
                            maskUnits="userSpaceOnUse"
                          >
                            <rect
                              width="19.6"
                              height="14"
                              y=".5"
                              fill="#fff"
                              rx="2"
                            />
                          </mask>
                          <g mask="url(#a)">
                            <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                            <path
                              fill="#fff"
                              stroke="#fff"
                              stroke-width=".667"
                              d="M0 .167h-.901l.684.586 3.15 2.7v.609L-.194 6.295l-.14.1v1.24l.51-.319L3.83 5.033h.73L7.7 7.276a.488.488 0 00.601-.767L5.467 4.08v-.608l2.987-2.134a.667.667 0 00.28-.543V-.1l-.51.318L4.57 2.5h-.73L.66.229.572.167H0z"
                            />
                            <path
                              fill="url(#paint0_linear_374_135177)"
                              fill-rule="evenodd"
                              d="M0 2.833V4.7h3.267v2.133c0 .369.298.667.666.667h.534a.667.667 0 00.666-.667V4.7H8.2a.667.667 0 00.667-.667V3.5a.667.667 0 00-.667-.667H5.133V.5H3.267v2.333H0z"
                              clip-rule="evenodd"
                            />
                            <path
                              fill="url(#paint1_linear_374_135177)"
                              fill-rule="evenodd"
                              d="M0 3.3h3.733V.5h.934v2.8H8.4v.933H4.667v2.8h-.934v-2.8H0V3.3z"
                              clip-rule="evenodd"
                            />
                            <path
                              fill="#fff"
                              fill-rule="evenodd"
                              d="M4.2 11.933l-.823.433.157-.916-.666-.65.92-.133.412-.834.411.834.92.134-.665.649.157.916-.823-.433zm9.8.7l-.66.194.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm0-8.866l-.66.193.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.193zm2.8 2.8l-.66.193.193-.66-.193-.66.66.193.66-.193-.193.66.193.66-.66-.193zm-5.6.933l-.66.193.193-.66-.193-.66.66.194.66-.194-.193.66.193.66-.66-.193zm4.2 1.167l-.33.096.096-.33-.096-.33.33.097.33-.097-.097.33.097.33-.33-.096z"
                              clip-rule="evenodd"
                            />
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_374_135177"
                              x1="0"
                              x2="0"
                              y1=".5"
                              y2="7.5"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#fff" />
                              <stop offset="1" stop-color="#F0F0F0" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_374_135177"
                              x1="0"
                              x2="0"
                              y1=".5"
                              y2="7.033"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#FF2E3B" />
                              <stop offset="1" stop-color="#FC0D1B" />
                            </linearGradient>
                          </defs>
                        </svg>
                        Australia (+61)
                      </span>
                    </DropdownItem>
                    <DropdownItem className="rounded-lg">
                      <span className="inline-flex items-center">
                        <svg
                          className="me-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 20 15"
                        >
                          <rect
                            width="19.6"
                            height="14"
                            y=".5"
                            fill="#fff"
                            rx="2"
                          />
                          <mask
                            id="a"
                            style={{ maskType: "luminance" }}
                            width="20"
                            height="15"
                            x="0"
                            y="0"
                            maskUnits="userSpaceOnUse"
                          >
                            <rect
                              width="19.6"
                              height="14"
                              y=".5"
                              fill="#fff"
                              rx="2"
                            />
                          </mask>
                          <g mask="url(#a)">
                            <path
                              fill="#262626"
                              fill-rule="evenodd"
                              d="M0 5.167h19.6V.5H0v4.667z"
                              clip-rule="evenodd"
                            />
                            <g filter="url(#filter0_d_374_135180)">
                              <path
                                fill="#F01515"
                                fill-rule="evenodd"
                                d="M0 9.833h19.6V5.167H0v4.666z"
                                clip-rule="evenodd"
                              />
                            </g>
                            <g filter="url(#filter1_d_374_135180)">
                              <path
                                fill="#FFD521"
                                fill-rule="evenodd"
                                d="M0 14.5h19.6V9.833H0V14.5z"
                                clip-rule="evenodd"
                              />
                            </g>
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_374_135180"
                              width="19.6"
                              height="4.667"
                              x="0"
                              y="5.167"
                              color-interpolation-filters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_374_135180"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_374_135180"
                                result="shape"
                              />
                            </filter>
                            <filter
                              id="filter1_d_374_135180"
                              width="19.6"
                              height="4.667"
                              x="0"
                              y="9.833"
                              color-interpolation-filters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_374_135180"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_374_135180"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                        Germany (+49)
                      </span>
                    </DropdownItem>
                    <DropdownItem className="rounded-lg">
                      <span className="inline-flex items-center">
                        <svg
                          className="me-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 20 15"
                        >
                          <rect
                            width="19.1"
                            height="13.5"
                            x=".25"
                            y=".75"
                            fill="#fff"
                            stroke="#F5F5F5"
                            stroke-width=".5"
                            rx="1.75"
                          />
                          <mask
                            id="a"
                            style={{ maskType: "luminance" }}
                            width="20"
                            height="15"
                            x="0"
                            y="0"
                            maskUnits="userSpaceOnUse"
                          >
                            <rect
                              width="19.1"
                              height="13.5"
                              x=".25"
                              y=".75"
                              fill="#fff"
                              stroke="#fff"
                              stroke-width=".5"
                              rx="1.75"
                            />
                          </mask>
                          <g mask="url(#a)">
                            <path
                              fill="#F44653"
                              d="M13.067.5H19.6v14h-6.533z"
                            />
                            <path
                              fill="#1035BB"
                              fill-rule="evenodd"
                              d="M0 14.5h6.533V.5H0v14z"
                              clip-rule="evenodd"
                            />
                          </g>
                        </svg>
                        France (+33)
                      </span>
                    </DropdownItem>
                    <DropdownItem className="rounded-lg">
                      <span className="inline-flex items-center">
                        <svg
                          className="me-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 20 15"
                        >
                          <rect
                            width="19.6"
                            height="14"
                            y=".5"
                            fill="#fff"
                            rx="2"
                          />
                          <mask
                            id="a"
                            style={{ maskType: "luminance" }}
                            width="20"
                            height="15"
                            x="0"
                            y="0"
                            maskUnits="userSpaceOnUse"
                          >
                            <rect
                              width="19.6"
                              height="14"
                              y=".5"
                              fill="#fff"
                              rx="2"
                            />
                          </mask>
                          <g mask="url(#a)">
                            <path
                              fill="#262626"
                              fill-rule="evenodd"
                              d="M0 5.167h19.6V.5H0v4.667z"
                              clip-rule="evenodd"
                            />
                            <g filter="url(#filter0_d_374_135180)">
                              <path
                                fill="#F01515"
                                fill-rule="evenodd"
                                d="M0 9.833h19.6V5.167H0v4.666z"
                                clip-rule="evenodd"
                              />
                            </g>
                            <g filter="url(#filter1_d_374_135180)">
                              <path
                                fill="#FFD521"
                                fill-rule="evenodd"
                                d="M0 14.5h19.6V9.833H0V14.5z"
                                clip-rule="evenodd"
                              />
                            </g>
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_374_135180"
                              width="19.6"
                              height="4.667"
                              x="0"
                              y="5.167"
                              color-interpolation-filters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_374_135180"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_374_135180"
                                result="shape"
                              />
                            </filter>
                            <filter
                              id="filter1_d_374_135180"
                              width="19.6"
                              height="4.667"
                              x="0"
                              y="9.833"
                              color-interpolation-filters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_374_135180"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_374_135180"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                        Germany (+49)
                      </span>
                    </DropdownItem>
                  </Dropdown>
                  <TextInput
                    id="phone-input"
                    name="phone-input"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="123-456-7890"
                    required
                    className="flex-1 [&_input]:rounded-l-none"
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Label
                    htmlFor="select_country_input_billing_modal"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Country*
                  </Label>
                </div>
                <Select
                  id="select_country_input_billing_modal"
                  name="select_country_input_billing_modal"
                >
                  <option selected>United States</option>
                  <option value="AS">Australia</option>
                  <option value="FR">France</option>
                  <option value="ES">Spain</option>
                  <option value="UK">United Kingdom</option>
                </Select>
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Label
                    htmlFor="select_city_input_billing_modal"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    City*
                  </Label>
                </div>
                <Select
                  id="select_city_input_billing_modal"
                  name="select_city_input_billing_modal"
                >
                  <option selected>San Francisco</option>
                  <option value="NY">New York</option>
                  <option value="LA">Los Angeles</option>
                  <option value="CH">Chicago</option>
                  <option value="HU">Houston</option>
                </Select>
              </div>

              <div className="sm:col-span-2">
                <Label
                  htmlFor="address_billing_modal"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Shipping Address*
                </Label>
                <Textarea
                  id="address_billing_modal"
                  name="address_billing_modal"
                  placeholder="Enter here your address"
                  rows={4}
                />
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
              <button
                type="submit"
                className="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Save information
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
}
