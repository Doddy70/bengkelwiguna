import {
  Button,
  Datepicker,
  Dropdown,
  Label,
  Radio,
  Select,
  Textarea,
  TextInput,
  theme,
} from "flowbite-react";
import { ChevronDown } from "flowbite-react-icons/outline";
import { Envelope } from "flowbite-react-icons/solid";
import { twMerge } from "tailwind-merge";

export default function PaymentFormWithWireTransfer() {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-2xl px-4 2xl:px-0">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-8">
          Wire transfer instructions
        </h2>
        <form action="#" className="mx-auto">
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <Label
                htmlFor="beneficiary"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                To*
              </Label>
              <TextInput
                id="beneficiary"
                name="beneficiary"
                placeholder="Flowbite LLC"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Label
                htmlFor="account_number"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Account Number*
              </Label>
              <TextInput
                id="account_number"
                name="account_number"
                placeholder="e.g FB00 1234 5678 91011"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Label
                htmlFor="address"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Address (optional)
              </Label>
              <TextInput id="address" name="address" required />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Label
                htmlFor="postal_code"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Postal code (optional)
              </Label>
              <TextInput
                id="postal_code"
                name="postal_code"
                placeholder=""
                required
                type="number"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Label
                htmlFor="amount"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Amount
              </Label>
              <div className="flex items-center -space-x-1">
                <div className="relative w-full">
                  <TextInput
                    icon={() => (
                      <svg
                        className="h-4 w-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z"
                          clip-rule="evenodd"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
                          clip-rule="evenodd"
                        />
                        <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                      </svg>
                    )}
                    id="amount"
                    name="amount"
                    placeholder="199"
                    required
                    type="number"
                    className="[&_input]:rounded-r-none"
                  />
                </div>
                <Dropdown
                  inline
                  label={
                    <span className="inline-flex shrink-0 items-center rounded-e-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg
                        fill="none"
                        aria-hidden="true"
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
                      USD
                      <ChevronDown className="-me-0.5 ms-2 h-5 w-5" />
                    </span>
                  }
                  theme={{
                    arrowIcon: "hidden",
                    floating: {
                      base: twMerge(
                        theme.dropdown.floating.base,
                        "z-10 w-36 divide-y divide-gray-100 rounded-lg bg-white p-2 shadow dark:bg-gray-700",
                      ),
                    },
                  }}
                >
                  <Dropdown.Item className="rounded-md">
                    <div className="inline-flex items-center">
                      <svg
                        fill="none"
                        aria-hidden="true"
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
                      USD
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="rounded-md">
                    <div className="inline-flex items-center">
                      <svg
                        fill="none"
                        aria-hidden="true"
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
                          <path fill="#043CAE" d="M0 .5h19.6v14H0z" />
                          <path
                            fill="#FFD429"
                            fill-rule="evenodd"
                            d="M9.14 3.493L9.8 3.3l.66.193-.193-.66.193-.66-.66.194-.66-.194.193.66-.193.66zm0 9.334l.66-.194.66.194-.193-.66.193-.66-.66.193-.66-.193.193.66-.193.66zm5.327-4.86l-.66.193L14 7.5l-.193-.66.66.193.66-.193-.194.66.194.66-.66-.193zm-9.994.193l.66-.193.66.193L5.6 7.5l.193-.66-.66.193-.66-.193.194.66-.194.66zm9.369-2.527l-.66.194.193-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm-8.743 4.86l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.194.193.66-.193.66zm7.034-6.568l-.66.193.194-.66-.194-.66.66.194.66-.193-.193.66.193.66-.66-.194zm-5.326 8.276l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.193.193.66-.193.66zM13.84 10.3l-.66.193.194-.66-.194-.66.66.194.66-.194-.193.66.193.66-.66-.193zM5.1 5.827l.66-.194.66.194-.194-.66.194-.66-.66.193-.66-.193.193.66-.193.66zm7.034 6.181l-.66.193.194-.66-.194-.66.66.194.66-.193-.193.66.193.66-.66-.194zm-5.326-7.89l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.193.193.66-.193.66z"
                            clip-rule="evenodd"
                          />
                        </g>
                      </svg>
                      EUR
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="rounded-md">
                    <div className="inline-flex items-center">
                      <svg
                        fill="none"
                        aria-hidden="true"
                        className="me-2 h-4 w-4"
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
                        <g fill="#FF3131" mask="url(#a)">
                          <path d="M14 .5h5.6v14H14z" />
                          <path
                            fill-rule="evenodd"
                            d="M0 14.5h5.6V.5H0v14zM11.45 6.784a.307.307 0 01-.518-.277l.268-1.34-.933.466-.467-1.4-.467 1.4-.933-.466.268 1.34a.307.307 0 01-.518.277.307.307 0 00-.434 0l-.25.25-.933-.467L7 7.5l-.231.231a.333.333 0 000 .471l1.164 1.165h1.4l.234 1.4h.466l.234-1.4h1.4l1.164-1.165a.333.333 0 000-.471l-.231-.23.467-.934-.934.466-.25-.25a.307.307 0 00-.433 0z"
                            clip-rule="evenodd"
                          />
                        </g>
                      </svg>
                      CAD
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="rounded-md">
                    <div className="inline-flex items-center">
                      <svg
                        fill="none"
                        aria-hidden="true"
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
                          <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                          <path
                            fill="#fff"
                            fill-rule="evenodd"
                            d="M-.898-.842L7.467 4.8V-.433h4.666V4.8l8.365-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.044-1.548 6.614-4.46H0V5.166h4.672L-1.942.706-.898-.842z"
                            clip-rule="evenodd"
                          />
                          <path
                            stroke="#DB1F35"
                            stroke-linecap="round"
                            stroke-width=".667"
                            d="M13.068 4.933L21.933-.9M14.009 10.088l7.948 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.19 6.093"
                          />
                          <path
                            fill="#E6273E"
                            fill-rule="evenodd"
                            d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z"
                            clip-rule="evenodd"
                          />
                        </g>
                      </svg>
                      GBP
                    </div>
                  </Dropdown.Item>
                </Dropdown>
                <div
                  id="dropdown-currency"
                  className="z-10 hidden w-36 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                >
                  <ul
                    className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                    aria-labelledby="dropdown-currency-button"
                  >
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Label
                htmlFor="bic_swift"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                BIC/SWIFT
              </Label>
              <TextInput
                id="bic_swift"
                name="bic_swift"
                required
                type="number"
              />
            </div>
            <div className="col-span-2">
              <Label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Payment purpose
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="e.g. Payment for professional consulting services provided"
                rows={4}
              />
            </div>
            <div className="col-span-2">
              <Label
                htmlFor="fees"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Fees (optional)
              </Label>
              <Select id="fees" name="fees">
                <option selected>
                  SHA-Fees are splitted between sender and receipt
                </option>
                <option value="option-1">Fees are paid by sender</option>
                <option value="option-2">Fees are paid by beneficiary</option>
              </Select>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Label
                htmlFor="card-expiration-input-3"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Send on*
              </Label>
              <Datepicker
                id="card-expiration-input-3"
                name="card-expiration-input-3"
                theme={{
                  popup: {
                    root: {
                      base: twMerge(
                        theme.datepicker.popup.root.base,
                        "-top-96 left-2",
                      ),
                    },
                  },
                }}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Email confirmation (optional)
              </Label>
              <TextInput
                icon={() => (
                  <Envelope className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                )}
                id="emai1"
                name="emai1"
                placeholder="name@flowbite.com"
                type="email"
              />
            </div>
          </div>
          <div className="mb-4 mt-6 flex items-center gap-4 md:mb-6">
            <div className="flex items-center">
              <Radio
                defaultChecked
                id="urgent-payment"
                name="payment-method-type"
              />
              <Label
                htmlFor="urgent-payment"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Urgent (within 24 hours)
              </Label>
            </div>
            <div className="flex items-center">
              <Radio id="instant-payment" name="payment-method-type" />
              <Label
                htmlFor="instant-payment"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Instant (today)
              </Label>
            </div>
          </div>
          <Button type="submit" className="flex w-full">
            Continue
          </Button>
          <p className="mt-6 text-center text-base font-normal text-gray-500 dark:text-gray-400 sm:mt-8 lg:text-left">
            Payment processed by&nbsp;
            <a
              href="#"
              title=""
              className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
            >
              Paddle
            </a>
            &nbsp;for&nbsp;
            <a
              href="#"
              title=""
              className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
            >
              Flowbite LLC
            </a>
            &nbsp;- United States Of America
          </p>
        </form>
      </div>
    </section>
  );
}
