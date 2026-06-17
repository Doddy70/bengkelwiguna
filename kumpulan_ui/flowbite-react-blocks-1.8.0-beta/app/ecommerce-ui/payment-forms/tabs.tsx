import {
  Button,
  Checkbox,
  Datepicker,
  Label,
  Radio,
  Select,
  Table,
  Tabs,
  TextInput,
  Tooltip,
} from "flowbite-react";
import { Eye, InfoCircle } from "flowbite-react-icons/outline";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function PaymentFormWithTabs() {
  const addNewPaymentMethodRef = useRef<HTMLInputElement | null>(null);
  const [isNewPaymentMethodExpanded, setNewPaymentMethodExpanded] =
    useState(false);

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-xl px-4 sm:px-0">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-8">
          Choose payment type
        </h2>
        <form action="#" className="mx-auto max-w-xl space-y-6">
          <Tabs
            variant="pills"
            theme={{
              tablist: {
                tabitem: {
                  variant: {
                    pills: {
                      active: {
                        on: "flex-1 rounded-lg border border-primary-700 bg-white px-5 py-2.5 text-sm font-medium text-primary-700 hover:bg-gray-100 hover:text-primary-700 dark:border-primary-500 dark:bg-gray-800 dark:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700",
                        off: "flex-1 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700",
                      },
                    },
                  },
                },
              },
            }}
          >
            <Tabs.Item active title="Credit card">
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-600 dark:bg-gray-700">
                  <div>
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <Radio
                          aria-describedby="visa-text"
                          id="visa"
                          name="payment-method"
                          defaultChecked
                        />
                      </div>
                      <div className="ms-4 text-sm">
                        <Label
                          htmlFor="visa"
                          className="font-medium text-gray-900 dark:text-white"
                        >
                          Visa ending in 7658
                        </Label>
                        <p
                          id="visa-text"
                          className="text-xs font-normal text-gray-500 dark:text-gray-400"
                        >
                          Expiry 10/2024
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
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
                      alt=""
                    />
                    <img
                      className="hidden h-8 w-auto dark:flex"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-600 dark:bg-gray-700">
                  <div>
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <Radio
                          aria-describedby="mastercard-text"
                          id="mastercard"
                          name="payment-method"
                        />
                      </div>
                      <div className="ms-4 text-sm">
                        <Label
                          htmlFor="mastercard"
                          className="font-medium text-gray-900 dark:text-white"
                        >
                          MasterCard ending in 8429
                        </Label>
                        <p
                          id="mastercard-text"
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
                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-600 dark:bg-gray-700">
                  <div>
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <Radio
                          aria-describedby="paypal-text"
                          id="paypal"
                          name="payment-method"
                        />
                      </div>
                      <div className="ms-4 text-sm">
                        <Label
                          htmlFor="paypal"
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
              </div>
              <div
                onClick={() =>
                  setNewPaymentMethodExpanded(!isNewPaymentMethodExpanded)
                }
                className="my-5 flex items-center"
              >
                <Checkbox
                  aria-expanded={isNewPaymentMethodExpanded}
                  aria-controls="new-payment-method-container"
                  checked={isNewPaymentMethodExpanded}
                  id="payment-method-modal"
                  name="payment-method-modal"
                  ref={addNewPaymentMethodRef}
                />
                <Label
                  htmlFor="payment_method_new_modal"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Add new payment method
                </Label>
              </div>
              <div
                id="new-payment-method-container"
                className={twMerge(
                  "mb-6 grid grid-cols-2 gap-4",
                  !isNewPaymentMethodExpanded && "hidden",
                )}
              >
                <div className="col-span-2 sm:col-span-1">
                  <Label
                    htmlFor="full_name-5"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Full name (as displayed on card)*
                  </Label>
                  <TextInput
                    id="full_name-5"
                    name="full_name-5"
                    placeholder="Bonnie Green"
                    required
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <Label
                    htmlFor="card-number-input-5"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Card number*
                  </Label>
                  <TextInput
                    id="card-number-input-5"
                    name="card-number-input-5"
                    pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="card-expiration-input-5"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Card expiration*
                  </Label>
                  <Datepicker
                    id="card-expiration-input-5"
                    name="card-expiration-input-5"
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
              <Button type="submit" className="flex w-full">
                Pay now
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
            </Tabs.Item>
            <Tabs.Item active title="Monthly fees">
              <div className="items-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                <div className="w-full">
                  <Label
                    htmlFor="installments"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select the number of installments
                  </Label>
                  <Select id="installments" name="installments">
                    <option selected>24 months</option>
                    <option value="12">12 months</option>
                    <option value="24">24 months</option>
                    <option value="48">48 months</option>
                    <option value="64">64 months</option>
                  </Select>
                </div>
                <div className="w-full">
                  <Label
                    htmlFor="occupation"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Occupation
                  </Label>
                  <Select id="occupation" name="occupation">
                    <option selected>Student</option>
                    <option value="freelancer">Freelancer</option>
                    <option value="owner">Business owner</option>
                    <option value="retired">Retired</option>
                  </Select>
                </div>
              </div>
              <div className="relative my-5 overflow-x-auto">
                <Table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
                  <Table.Head className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                    <Table.HeadCell
                      scope="col"
                      className="rounded-tl-md px-6 py-3 font-semibold"
                    >
                      Bank
                    </Table.HeadCell>
                    <Table.HeadCell
                      scope="col"
                      className="shrink-0 px-6 py-3 font-semibold"
                    >
                      <span className="shrink-0">Monthly payment</span>
                    </Table.HeadCell>
                    <Table.HeadCell scope="col" className="rounded-tr-md">
                      <span className="sr-only">Actions</span>
                    </Table.HeadCell>
                  </Table.Head>
                  <Table.Body>
                    <Table.Row className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                      >
                        <div className="flex items-center">
                          <Radio
                            id="credit-method-radio-1"
                            name="credit-method-radio"
                          />
                          <Label
                            htmlFor="credit-method-radio-1"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Flowbite Bank
                          </Label>
                        </div>
                      </th>
                      <Table.Cell className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                        $49/month
                      </Table.Cell>
                      <Table.Cell className="px-6 py-4">
                        <a
                          href="#"
                          className="flex items-center font-medium text-primary-700 hover:underline dark:text-primary-500"
                        >
                          <Eye className="me-2 h-4 w-4 shrink-0" />
                          <span className="shrink-0">View details</span>
                        </a>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                      >
                        <div className="flex items-center">
                          <Radio
                            id="credit-method-radio-2"
                            name="credit-method-radio"
                          />
                          <Label
                            htmlFor="credit-method-radio-2"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            JPMorgan Bank
                          </Label>
                        </div>
                      </th>
                      <Table.Cell className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                        $39/month
                      </Table.Cell>
                      <Table.Cell className="px-6 py-4">
                        <a
                          href="#"
                          className="inline-flex items-center font-medium text-primary-700 hover:underline dark:text-primary-500"
                        >
                          <Eye className="me-2 h-4 w-4 shrink-0" />
                          <span className="shrink-0">View details</span>
                        </a>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                      >
                        <div className="flex items-center">
                          <Radio
                            id="credit-method-radio-3"
                            name="credit-method-radio"
                          />
                          <Label
                            htmlFor="credit-method-radio-3"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Wells Fargo Bank
                          </Label>
                        </div>
                      </th>
                      <Table.Cell className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                        $59/month
                      </Table.Cell>
                      <Table.Cell className="px-6 pt-4">
                        <a
                          href="#"
                          className="inline-flex items-center font-medium text-primary-700 hover:underline dark:text-primary-500"
                        >
                          <Eye className="me-2 h-4 w-4 shrink-0" />
                          <span className="shrink-0">View details</span>
                        </a>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
              <div className="mb-5 flex items-start">
                <Checkbox id="default-checkbox" name="default-checkbox" />
                <Label
                  htmlFor="default-checkbox"
                  className="-mt-0.5 ms-2 text-sm text-gray-500 dark:text-gray-300"
                >
                  I have taken note&nbsp;
                  <a
                    href="#"
                    className="font-medium text-primary-700 hover:underline dark:text-primary-500"
                  >
                    of the information note regarding the processing of personal
                    data
                  </a>
                  &nbsp;by JPMorgan Bank
                </Label>
              </div>
              <Button type="submit" className="flex w-full">
                Pay now
              </Button>
            </Tabs.Item>
            <Tabs.Item active title="Crypto">
              <p className="mb-4 text-sm font-medium text-gray-900 dark:text-white">
                Select payment option
              </p>
              <ul className="mb-4 grid w-full gap-4 md:mb-6 md:grid-cols-2">
                <li>
                  <input
                    type="radio"
                    id="bitcoin-method"
                    name="hosting"
                    value="bitcoin-method"
                    className="peer hidden"
                    required
                  />
                  <Label
                    htmlFor="bitcoin-method"
                    className="inline-flex w-full cursor-pointer items-center rounded-lg border border-gray-200 bg-white p-4 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500"
                  >
                    <svg
                      className="me-2 h-5 w-5"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.0368 12.63C17.8613 17.3448 13.0858 20.2139 8.37044 19.0384C3.65731 17.8629 0.787952 13.0874 1.96369 8.37288C3.13861 3.65754 7.9139 0.787912 12.6279 1.96338C17.3429 3.13884 20.2123 7.91496 19.0368 12.63Z"
                        fill="#F7931A"
                      />
                      <path
                        d="M14.3806 9.24719C14.5555 8.07613 13.6639 7.44659 12.4447 7.02663L12.8402 5.44027L11.8743 5.19963L11.4892 6.74418C11.2357 6.68092 10.9749 6.62124 10.7159 6.56211L11.1037 5.00738L10.1386 4.76673L9.74283 6.35254C9.53271 6.30468 9.32644 6.25738 9.12622 6.2076L9.12732 6.20265L7.79564 5.87014L7.53876 6.90149C7.53876 6.90149 8.25521 7.06568 8.24008 7.07586C8.63117 7.17349 8.70212 7.43229 8.69002 7.63746L8.23953 9.44466C8.26648 9.45154 8.30141 9.46144 8.33991 9.47684L8.23815 9.45154L7.60642 11.9832C7.55856 12.102 7.43728 12.2802 7.1639 12.2125C7.17353 12.2266 6.46203 12.0373 6.46203 12.0373L5.98266 13.1429L7.23953 13.4562C7.4733 13.5148 7.7024 13.5761 7.92765 13.6339L7.52804 15.2387L8.49255 15.4793L8.88859 13.8918C9.15179 13.9634 9.40757 14.0294 9.65784 14.0915L9.26345 15.6715L10.2291 15.9122L10.6287 14.3107C12.2753 14.6223 13.5137 14.4966 14.0343 13.0076C14.4543 11.8085 14.0137 11.1168 13.1474 10.6655C13.7783 10.5195 14.2538 10.1045 14.3806 9.24719ZM12.1741 12.341C11.8754 13.5401 9.85669 12.8921 9.20185 12.7293L9.7321 10.6036C10.3867 10.767 12.4851 11.0904 12.1741 12.341ZM12.4725 9.22987C12.2002 10.3206 10.5198 9.76644 9.9744 9.63058L10.4551 7.70264C11.0005 7.83851 12.7563 8.09208 12.4725 9.22987Z"
                        fill="white"
                      />
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Pay with Bitcoin
                    </div>
                  </Label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="ethereum-method"
                    name="hosting"
                    value="ethereum-method"
                    className="peer hidden"
                    required
                  />
                  <Label
                    htmlFor="ethereum-method"
                    className="inline-flex w-full cursor-pointer items-center rounded-lg border border-gray-200 bg-white p-4 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500"
                  >
                    <svg
                      className="me-2 h-5 w-5"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5Z"
                        fill="#F6F6F6"
                      />
                      <path
                        d="M10.4993 4.07143L10.4109 4.36443V12.8659L10.4993 12.9519L14.5451 10.6193L10.4993 4.07143Z"
                        fill="#343434"
                      />
                      <path
                        d="M10.4983 4.07143L6.45238 10.6193L10.4983 12.9519V8.82556V4.07143Z"
                        fill="#8C8C8C"
                      />
                      <path
                        d="M10.4993 13.699L10.4495 13.7583V16.7867L10.4993 16.9286L14.5476 11.3676L10.4993 13.699Z"
                        fill="#3C3C3B"
                      />
                      <path
                        d="M10.4983 16.9286V13.699L6.45238 11.3676L10.4983 16.9286Z"
                        fill="#8C8C8C"
                      />
                      <path
                        d="M10.4977 12.9518L14.5436 10.6192L10.4977 8.82542V12.9518Z"
                        fill="#141414"
                      />
                      <path
                        d="M6.45238 10.6193L10.4983 12.9519V8.82556L6.45238 10.6193Z"
                        fill="#393939"
                      />
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Pay with Ethereum
                    </div>
                  </Label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="solana-method"
                    name="hosting"
                    value="solana-method"
                    className="peer hidden"
                    required
                  />
                  <Label
                    htmlFor="solana-method"
                    className="inline-flex w-full cursor-pointer items-center rounded-lg border border-gray-200 bg-white p-4 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500"
                  >
                    <svg
                      className="me-2 h-5 w-5"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="20"
                        height="20"
                        rx="10"
                        fill="black"
                      />
                      <path
                        d="M5.09949 14.7104C5.19604 14.5873 5.32879 14.5154 5.46958 14.5154H18.2377C18.471 14.5154 18.5877 14.8747 18.4228 15.0851L15.9005 18.3033C15.804 18.4265 15.6712 18.4983 15.5304 18.4983H2.76229C2.52897 18.4983 2.41231 18.139 2.57724 17.9286L5.09949 14.7104Z"
                        fill="url(#paint0_linear_3843_5825)"
                      />
                      <path
                        d="M5.09949 2.69498C5.20006 2.5718 5.33281 2.49994 5.46958 2.49994H18.2377C18.471 2.49994 18.5877 2.85922 18.4228 3.06966L15.9005 6.28781C15.804 6.411 15.6712 6.48285 15.5304 6.48285H2.76229C2.52897 6.48285 2.41231 6.12357 2.57724 5.91313L5.09949 2.69498Z"
                        fill="url(#paint1_linear_3843_5825)"
                      />
                      <path
                        d="M15.9005 8.66422C15.804 8.54103 15.6712 8.46918 15.5304 8.46918H2.76229C2.52897 8.46918 2.41231 8.82846 2.57724 9.0389L5.09949 12.257C5.19604 12.3802 5.32879 12.4521 5.46958 12.4521H18.2377C18.471 12.4521 18.5877 12.0928 18.4228 11.8824L15.9005 8.66422Z"
                        fill="url(#paint2_linear_3843_5825)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_3843_5825"
                          x1="17.018"
                          y1="-53.4852"
                          x2="-19.1815"
                          y2="-39.9561"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00FFA3" />
                          <stop offset="1" stop-color="#DC1FFF" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_3843_5825"
                          x1="13.1542"
                          y1="-15.5604"
                          x2="-23.0454"
                          y2="-2.03127"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00FFA3" />
                          <stop offset="1" stop-color="#DC1FFF" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_3843_5825"
                          x1="15.0738"
                          y1="-0.717529"
                          x2="2.39382"
                          y2="18.3177"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00FFA3" />
                          <stop offset="1" stop-color="#DC1FFF" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Pay with Solana
                    </div>
                  </Label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="litecoin-method"
                    name="hosting"
                    value="litecoin-method"
                    className="peer hidden"
                    required
                  />
                  <Label
                    htmlFor="litecoin-method"
                    className="inline-flex w-full cursor-pointer items-center rounded-lg border border-gray-200 bg-white p-4 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500"
                  >
                    <svg
                      className="me-2 h-5 w-5"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_3843_5829)">
                        <path
                          d="M20.4999 10.4999C20.4999 16.0228 16.0228 20.5 10.5 20.5C4.97712 20.5 0.5 16.0228 0.5 10.4999C0.5 4.97712 4.97712 0.5 10.5 0.5C16.0228 0.5 20.4999 4.97712 20.4999 10.4999Z"
                          fill="#BEBEBE"
                        />
                        <path
                          d="M18.3768 10.5C18.3768 14.85 14.8502 18.3769 10.5 18.3769C6.14983 18.3769 2.62303 14.85 2.62303 10.5C2.62303 6.1497 6.14983 2.62308 10.5 2.62308C14.8503 2.62308 18.3768 6.14964 18.3768 10.5Z"
                          fill="#BEBEBE"
                        />
                        <path
                          d="M9.91541 13.1714L10.5649 10.7256L12.1027 10.1638L12.4852 8.72645L12.4721 8.69079L10.9584 9.2438L12.0491 5.13708H8.95598L7.52967 10.4964L6.33881 10.9315L5.94531 12.4133L7.13527 11.9786L6.29465 15.1371H14.5266L15.0543 13.1714H9.91541Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3843_5829">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(0.5 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Pay with Litecoin
                    </div>
                  </Label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="dash-method"
                    name="hosting"
                    value="dash-method"
                    className="peer hidden"
                    required
                  />
                  <Label
                    htmlFor="dash-method"
                    className="inline-flex w-full cursor-pointer items-center rounded-lg border border-gray-200 bg-white p-4 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500"
                  >
                    <svg
                      className="me-2 h-5 w-5"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_3843_5834)">
                        <path
                          d="M10.5 20.5C16.0228 20.5 20.5 16.0228 20.5 10.5C20.5 4.97715 16.0228 0.5 10.5 0.5C4.97715 0.5 0.5 4.97715 0.5 10.5C0.5 16.0228 4.97715 20.5 10.5 20.5Z"
                          fill="#2573C2"
                        />
                        <path
                          d="M17.026 7.868C17.0126 7.64391 16.9468 7.42608 16.834 7.232C16.734 7.032 16.556 6.876 16.348 6.796C16.1359 6.69029 15.9009 6.63875 15.664 6.646H6.788L6.152 8.552H14.194L12.924 12.448H4.884L4.248 14.354H13.166C13.4317 14.3463 13.6945 14.2957 13.944 14.204C14.194 14.062 14.48 13.918 14.722 13.718C14.9583 13.5317 15.1717 13.3183 15.358 13.082C15.512 12.8505 15.6432 12.6047 15.75 12.348L16.928 8.644C17.0352 8.40029 17.0692 8.1307 17.026 7.868Z"
                          fill="white"
                        />
                        <path
                          d="M9.322 9.616H4.59L3.954 11.378H8.734L9.322 9.616Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3843_5834">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(0.5 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Pay with Dash
                    </div>
                  </Label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="elrond-method"
                    name="hosting"
                    value="elrond-method"
                    className="peer hidden"
                    required
                  />
                  <Label
                    htmlFor="elrond-method"
                    className="inline-flex w-full cursor-pointer items-center rounded-lg border border-gray-200 bg-white p-4 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500"
                  >
                    <svg
                      className="me-2 h-5 w-5"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="20"
                        height="20"
                        rx="10"
                        fill="#0D022B"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.05866 7.05356C7.1034 7.00892 7.13025 6.96428 7.13025 6.90178C7.13025 6.83928 7.1034 6.79463 7.05866 6.74999C6.96916 6.66963 6.82597 6.66963 6.72752 6.74999C6.68277 6.79463 6.65593 6.83928 6.65593 6.90178C6.65593 6.96428 6.68277 7.00892 6.72752 7.05356C6.77227 7.08928 6.83492 7.11606 6.88861 7.11606C6.95126 7.12499 7.01391 7.10713 7.05866 7.05356Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.63143 7.66963C7.66722 7.62499 7.69407 7.58035 7.69407 7.51785C7.69407 7.45535 7.66722 7.41071 7.63143 7.36606C7.55088 7.28571 7.40769 7.28571 7.32714 7.36606C7.29134 7.41071 7.26449 7.45535 7.26449 7.51785C7.26449 7.58035 7.29134 7.62499 7.32714 7.66963C7.37189 7.70535 7.41664 7.73213 7.47928 7.73213C7.54193 7.73213 7.58668 7.70535 7.63143 7.66963Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.25789 8.25892C8.29369 8.22321 8.32054 8.16963 8.32054 8.10713C8.32054 8.04463 8.29369 7.99999 8.25789 7.95535C8.17735 7.87499 8.03416 7.87499 7.95361 7.95535C7.91781 7.99106 7.89096 8.04463 7.89096 8.10713C7.89096 8.16963 7.91781 8.21428 7.95361 8.25892C7.99836 8.30356 8.04311 8.32142 8.10575 8.32142C8.1684 8.32142 8.2221 8.29463 8.25789 8.25892Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.85751 8.85713C8.90226 8.82142 8.92911 8.76785 8.92911 8.70535C8.92911 8.64285 8.90226 8.59821 8.85751 8.55356C8.76802 8.47321 8.62483 8.47321 8.52638 8.55356C8.48163 8.58928 8.45479 8.64285 8.45479 8.70535C8.45479 8.76785 8.48163 8.82142 8.52638 8.85713C8.57113 8.90178 8.63378 8.91963 8.68747 8.91963C8.75012 8.91963 8.80382 8.91071 8.85751 8.85713Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.43028 9.45535C9.47503 9.41963 9.49293 9.36606 9.49293 9.30356C9.49293 9.24106 9.46608 9.19642 9.43028 9.15178C9.34974 9.07142 9.20655 9.07142 9.126 9.15178C9.08125 9.18749 9.06335 9.24106 9.06335 9.30356C9.06335 9.36606 9.0902 9.41963 9.126 9.45535C9.1618 9.49999 9.2155 9.51785 9.27814 9.51785C9.33184 9.52678 9.39449 9.50892 9.43028 9.45535Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.1194 9.90178C10.1194 9.83928 10.0926 9.79463 10.0568 9.74999C9.97621 9.66963 9.83301 9.66963 9.75247 9.74999C9.70772 9.79463 9.68982 9.83928 9.68982 9.90178C9.68982 9.96428 9.71667 10.0089 9.75247 10.0536C9.78827 10.0893 9.84196 10.1161 9.90461 10.1161C9.96726 10.1161 10.012 10.0893 10.0568 10.0536C10.1015 10.0178 10.1194 9.96428 10.1194 9.90178Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.2381 11.2232C11.2739 11.1875 11.3007 11.1339 11.3007 11.0714C11.3007 11.0089 11.2739 10.9643 11.2381 10.9196C11.1575 10.8393 11.0144 10.8393 10.9338 10.9196C10.8891 10.9643 10.8712 11.0089 10.8712 11.0714C10.8712 11.1339 10.898 11.1786 10.9338 11.2232C10.9696 11.2678 11.0233 11.2857 11.086 11.2857C11.1396 11.2946 11.1933 11.2768 11.2381 11.2232Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.8556 11.8214C11.9004 11.7857 11.9272 11.7321 11.9272 11.6696C11.9272 11.6071 11.9004 11.5625 11.8556 11.5178C11.7661 11.4375 11.6229 11.4375 11.5245 11.5178C11.4797 11.5625 11.4529 11.6071 11.4529 11.6696C11.4529 11.7321 11.4797 11.7768 11.5245 11.8214C11.5692 11.8661 11.6319 11.8839 11.6856 11.8839C11.7572 11.8928 11.8109 11.8661 11.8556 11.8214Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.4373 12.4286C12.4731 12.3928 12.5 12.3393 12.5 12.2768C12.5 12.2143 12.4731 12.1607 12.4373 12.125C12.3568 12.0446 12.2136 12.0446 12.133 12.125C12.0972 12.1607 12.0704 12.2143 12.0704 12.2768C12.0704 12.3393 12.0972 12.3839 12.133 12.4286C12.1778 12.4732 12.2225 12.4911 12.2852 12.4911C12.3478 12.4911 12.3836 12.4643 12.4373 12.4286Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.037 13.0268C13.0817 12.9911 13.0996 12.9375 13.0996 12.875C13.0996 12.8125 13.0728 12.7678 13.037 12.7232C12.9564 12.6428 12.8132 12.6428 12.7327 12.7232C12.6969 12.7678 12.67 12.8125 12.67 12.875C12.67 12.9375 12.6969 12.9911 12.7327 13.0268C12.7774 13.0714 12.8222 13.0893 12.8848 13.0893C12.9385 13.0893 13.0012 13.0714 13.037 13.0268Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.6545 13.625C13.6992 13.5893 13.7261 13.5357 13.7261 13.4732C13.7261 13.4107 13.6992 13.3661 13.6545 13.3214C13.565 13.2411 13.4218 13.2411 13.3412 13.3214C13.2965 13.3661 13.2696 13.4107 13.2696 13.4732C13.2696 13.5357 13.2965 13.5893 13.3412 13.625C13.386 13.6607 13.4486 13.6875 13.5023 13.6875C13.565 13.6875 13.6187 13.6696 13.6545 13.625Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.2451 14.2232C14.2899 14.1786 14.3078 14.1339 14.3078 14.0714C14.3078 14.0089 14.2809 13.9643 14.2451 13.9196C14.1646 13.8393 14.0214 13.8393 13.9409 13.9196C13.8961 13.9643 13.8782 14.0089 13.8782 14.0714C13.8782 14.1339 13.9051 14.1786 13.9409 14.2232C13.9767 14.2589 14.0304 14.2857 14.093 14.2857C14.1377 14.2946 14.1914 14.2678 14.2451 14.2232Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.9409 7.05356C13.9051 7.00892 13.8782 6.96428 13.8782 6.90178C13.8782 6.83928 13.9051 6.79463 13.9409 6.74999C14.0214 6.66963 14.1646 6.66963 14.2451 6.74999C14.2899 6.79463 14.3078 6.83928 14.3078 6.90178C14.3078 6.96428 14.2809 7.00892 14.2451 7.05356C14.2093 7.08928 14.1556 7.11606 14.093 7.11606C14.0304 7.12499 13.9767 7.10713 13.9409 7.05356Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.3412 7.66963C13.2965 7.62499 13.2696 7.58035 13.2696 7.51785C13.2696 7.45535 13.2965 7.41071 13.3412 7.36606C13.4307 7.28571 13.5739 7.28571 13.6724 7.36606C13.7171 7.41071 13.744 7.45535 13.744 7.51785C13.744 7.58035 13.7171 7.62499 13.6724 7.66963C13.6276 7.70535 13.565 7.73213 13.5113 7.73213C13.4486 7.72321 13.386 7.70535 13.3412 7.66963Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.7327 8.25892C12.6969 8.22321 12.67 8.16963 12.67 8.10713C12.67 8.04463 12.6969 7.99999 12.7327 7.95535C12.8132 7.87499 12.9564 7.87499 13.037 7.95535C13.0728 7.99106 13.0996 8.04463 13.0996 8.10713C13.0996 8.16963 13.0728 8.21428 13.037 8.25892C12.9922 8.30356 12.9475 8.32142 12.8848 8.32142C12.8311 8.32142 12.7774 8.29463 12.7327 8.25892Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.133 8.85713C12.0972 8.82142 12.0704 8.76785 12.0704 8.70535C12.0704 8.64285 12.0972 8.59821 12.133 8.55356C12.2136 8.47321 12.3568 8.47321 12.4373 8.55356C12.4731 8.58928 12.5 8.64285 12.5 8.70535C12.5 8.76785 12.4731 8.82142 12.4373 8.85713C12.3926 8.90178 12.3478 8.91963 12.2852 8.91963C12.2315 8.91963 12.1778 8.91071 12.133 8.85713Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.5424 9.45535C11.4976 9.41963 11.4708 9.36606 11.4708 9.30356C11.4708 9.24106 11.4976 9.19642 11.5424 9.15178C11.6229 9.07142 11.7751 9.07142 11.8556 9.15178C11.9004 9.18749 11.9272 9.24106 11.9272 9.30356C11.9272 9.36606 11.9004 9.41963 11.8556 9.45535C11.8109 9.49999 11.7482 9.51785 11.6945 9.51785C11.6408 9.52678 11.5782 9.50892 11.5424 9.45535Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.8712 9.90178C10.8712 9.83928 10.898 9.79463 10.9338 9.74999C11.0144 9.66963 11.1575 9.66963 11.2381 9.74999C11.2828 9.79463 11.3007 9.83928 11.3007 9.90178C11.3007 9.96428 11.2739 10.0089 11.2381 10.0536C11.2023 10.0893 11.1486 10.1161 11.086 10.1161C11.0233 10.1161 10.9786 10.0893 10.9338 10.0536C10.8891 10.0178 10.8712 9.96428 10.8712 9.90178Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.3342 10.6607C10.2894 10.6161 10.2715 10.5714 10.2715 10.5089C10.2715 10.4464 10.2984 10.4018 10.3342 10.3571C10.4147 10.2768 10.5579 10.2768 10.6385 10.3571C10.6832 10.4018 10.7011 10.4464 10.7011 10.5089C10.7011 10.5714 10.6743 10.6161 10.6385 10.6607C10.6027 10.6964 10.549 10.7232 10.4863 10.7232C10.4237 10.7232 10.37 10.6964 10.3342 10.6607Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.73457 11.2232C9.68982 11.1875 9.66297 11.1339 9.66297 11.0714C9.66297 11.0089 9.68982 10.9643 9.73457 10.9196C9.82407 10.8393 9.96726 10.8393 10.0478 10.9196C10.0926 10.9643 10.1194 11.0089 10.1194 11.0714C10.1194 11.1339 10.0926 11.1786 10.0478 11.2232C10.0031 11.2678 9.94041 11.2857 9.88671 11.2857C9.84196 11.2946 9.77932 11.2768 9.73457 11.2232Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.126 11.8214C9.0902 11.7857 9.06335 11.7321 9.06335 11.6696C9.06335 11.6071 9.0902 11.5625 9.126 11.5178C9.20655 11.4375 9.34974 11.4375 9.43028 11.5178C9.46608 11.5625 9.49293 11.6071 9.49293 11.6696C9.49293 11.7321 9.46608 11.7768 9.43028 11.8214C9.38554 11.8661 9.34079 11.8839 9.27814 11.8839C9.2334 11.8928 9.17075 11.8661 9.126 11.8214Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.52638 12.4286C8.49058 12.3928 8.46373 12.3393 8.46373 12.2768C8.46373 12.2143 8.49058 12.1607 8.52638 12.125C8.60693 12.0446 8.75012 12.0446 8.83067 12.125C8.86646 12.1607 8.89331 12.2143 8.89331 12.2768C8.89331 12.3393 8.86646 12.3839 8.83067 12.4286C8.78592 12.4732 8.74117 12.4911 8.67852 12.4911C8.61588 12.4911 8.57113 12.4643 8.52638 12.4286Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.96256 13.0268C7.91781 12.9911 7.89991 12.9375 7.89991 12.875C7.89991 12.8125 7.92676 12.7678 7.96256 12.7232C8.04311 12.6428 8.1863 12.6428 8.26684 12.7232C8.30264 12.7678 8.32949 12.8125 8.32949 12.875C8.32949 12.9375 8.30264 12.9911 8.26684 13.0268C8.2221 13.0714 8.17735 13.0893 8.1147 13.0893C8.061 13.0893 7.99836 13.0714 7.96256 13.0268Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.32714 13.625C7.28239 13.5893 7.26449 13.5357 7.26449 13.4732C7.26449 13.4107 7.29134 13.3661 7.32714 13.3214C7.40769 13.2411 7.55088 13.2411 7.63143 13.3214C7.67617 13.3661 7.69407 13.4107 7.69407 13.4732C7.69407 13.5357 7.66722 13.5893 7.63143 13.625C7.59563 13.6607 7.54193 13.6875 7.47928 13.6875C7.41664 13.6875 7.36294 13.6696 7.32714 13.625Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.72752 14.2232C6.68277 14.1786 6.65593 14.1339 6.65593 14.0714C6.65593 14.0089 6.68277 13.9643 6.72752 13.9196C6.81702 13.8393 6.96021 13.8393 7.04076 13.9196C7.0855 13.9643 7.11235 14.0089 7.11235 14.0714C7.11235 14.1339 7.0855 14.1786 7.04076 14.2232C6.99601 14.2589 6.93336 14.2857 6.87966 14.2857C6.83492 14.2946 6.78122 14.2678 6.72752 14.2232Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.5179 7.22321C11.9093 6.82142 11.2381 6.63392 10.4953 6.62499C9.77037 6.62499 9.09915 6.82142 8.47268 7.22321L7.18395 5.93749C8.19525 5.16963 9.28709 4.78571 10.4953 4.78571C11.7035 4.78571 12.8132 5.16963 13.7977 5.93749L12.5179 7.22321Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.8066 12.5C14.2183 11.875 14.4152 11.2143 14.4152 10.5C14.4152 9.77678 14.2183 9.10713 13.8066 8.49999L15.0864 7.22321C15.8382 8.20535 16.214 9.29463 16.214 10.5089C16.214 11.7053 15.8382 12.8036 15.0774 13.8036L13.8066 12.5Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.48163 13.7768C9.0902 14.1875 9.76142 14.4018 10.4863 14.4107C11.2291 14.4107 11.9093 14.2143 12.5179 13.7857L13.8066 15.0625C12.8132 15.8393 11.7035 16.2232 10.4863 16.2143C9.27814 16.2053 8.1863 15.8125 7.20185 15.0625L8.48163 13.7768Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.21975 8.48213C6.80807 9.10713 6.59328 9.78571 6.61118 10.5178C6.62013 11.2321 6.82597 11.8839 7.21975 12.4821L5.93101 13.7589C5.1703 12.7768 4.77652 11.6875 4.77652 10.4911C4.76757 9.27678 5.1524 8.16963 5.93101 7.17856L7.21975 8.48213Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.87732 14.1786C5.38509 14.1786 4.97341 14.5803 4.97341 15.0803C4.97341 15.5714 5.37614 15.9821 5.87732 15.9821C6.36954 15.9821 6.78122 15.5803 6.78122 15.0803C6.78122 14.5803 6.37849 14.1786 5.87732 14.1786Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.0953 14.1786C14.6031 14.1786 14.2004 14.5803 14.2004 15.0803C14.2004 15.5714 14.6031 15.9821 15.0953 15.9821C15.5876 15.9821 15.9903 15.5803 15.9903 15.0803C15.9903 14.5803 15.5876 14.1786 15.0953 14.1786Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.85942 4.98213C5.36719 4.98213 4.96446 5.38392 4.96446 5.88392C4.96446 6.38392 5.36719 6.78571 5.85942 6.78571C6.35164 6.78571 6.75437 6.38392 6.75437 5.88392C6.75437 5.38392 6.35164 4.98213 5.85942 4.98213Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.1132 4.98213C14.621 4.98213 14.2093 5.38392 14.2093 5.87499C14.2093 6.36606 14.6121 6.76785 15.1132 6.76785C15.6055 6.76785 16.0172 6.36606 16.0172 5.87499C16.0172 5.38392 15.6144 4.98213 15.1132 4.98213Z"
                        fill="white"
                      />
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Pay with Elrond
                    </div>
                  </Label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="bnb-method"
                    name="hosting"
                    value="bnb-method"
                    className="peer hidden"
                    required
                  />
                  <Label
                    htmlFor="bnb-method"
                    className="inline-flex w-full cursor-pointer items-center rounded-lg border border-gray-200 bg-white p-4 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500"
                  >
                    <svg
                      className="me-2 h-5 w-5"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="20"
                        height="20"
                        rx="10"
                        fill="#F3BA2F"
                      />
                      <path
                        d="M11.8897 15.4569V17.1379L10.4242 18L9.00182 17.1379V15.4569L10.4242 16.319L11.8897 15.4569ZM4.04492 9.63793L5.46734 10.5V13.3879L7.92423 14.8534V16.5345L4.04492 14.25V9.63793ZM16.8035 9.63793V14.25L12.8811 16.5345V14.8534L15.338 13.3879V10.5L16.8035 9.63793ZM12.8811 7.35345L14.3466 8.21552V9.89655L11.8897 11.3621V14.2931L10.4673 15.1552L9.04492 14.2931V11.3621L6.50182 9.89655V8.21552L7.96733 7.35345L10.4242 8.81896L12.8811 7.35345ZM6.50182 11.1034L7.92423 11.9655V13.6465L6.50182 12.7845V11.1034ZM14.3466 11.1034V12.7845L12.9242 13.6465V11.9655L14.3466 11.1034ZM5.46734 5.88793L6.93285 6.75L5.46734 7.61207V9.2931L4.04492 8.43103V6.75L5.46734 5.88793ZM15.3811 5.88793L16.8466 6.75V8.43103L15.3811 9.2931V7.61207L13.9587 6.75L15.3811 5.88793ZM10.4242 5.88793L11.8897 6.75L10.4242 7.61207L9.00182 6.75L10.4242 5.88793ZM10.4242 3L14.3466 5.28448L12.9242 6.14655L10.4673 4.68103L7.96733 6.14655L6.54492 5.28448L10.4242 3Z"
                        fill="white"
                      />
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Pay with BNB
                    </div>
                  </Label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="dogecoin-method"
                    name="hosting"
                    value="dogecoin-method"
                    className="peer hidden"
                    required
                  />
                  <Label
                    htmlFor="dogecoin-method"
                    className="inline-flex w-full cursor-pointer items-center rounded-lg border border-gray-200 bg-white p-4 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500"
                  >
                    <svg
                      className="me-2 h-5 w-5"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5Z"
                        fill="#C2A633"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.19318 15.7312H10.6456C10.6456 15.7312 15.5 16.1445 15.5 10.5842C15.5 5.23951 11.0671 5.25847 10.2103 5.26213C10.1903 5.26222 10.1722 5.26229 10.1562 5.26229H7.19309V9.92573H5.97619V11.068H7.19318V15.7312ZM9.13774 7.19735H10.4998C11.0093 7.19735 13.5723 7.40568 13.5764 10.6219C13.5805 13.7999 10.9963 13.7966 10.5806 13.796C10.5756 13.796 10.5709 13.796 10.5666 13.796H9.13774V11.0679H11.2807V9.92563H9.13774V7.19735Z"
                        fill="white"
                      />
                    </svg>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Pay with Dogecoin
                    </div>
                  </Label>
                </li>
              </ul>
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Connect to wallet
              </button>
            </Tabs.Item>
            <Tabs.Item active title="PayPal">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-lg bg-yellow-300 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-yellow-400 focus:outline-none focus:ring-4  focus:ring-yellow-100 dark:focus:ring-yellow-800"
              >
                <svg
                  className="me-2 h-5 w-5"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0573 2.29539C10.4921 1.65119 9.47047 1.375 8.16344 1.375H4.37009C4.24077 1.375 4.1157 1.42114 4.01735 1.50511C3.91901 1.58909 3.85385 1.70539 3.83358 1.83311L2.2541 11.8506C2.2227 12.0481 2.37566 12.227 2.57588 12.227H4.91776L5.50591 8.49645L5.48765 8.61327C5.52955 8.34958 5.75508 8.15508 6.02214 8.15508H7.13499C9.3212 8.15508 11.033 7.2671 11.5331 4.69836C11.5479 4.62238 11.5608 4.54844 11.5719 4.4762C11.5088 4.44278 11.5088 4.44278 11.5719 4.4762C11.7208 3.52677 11.5709 2.8805 11.0573 2.29539Z"
                    fill="white"
                  />
                  <path
                    d="M6.402 4.13418C6.46602 4.1037 6.53605 4.0879 6.60696 4.08794H9.58088C9.93303 4.08794 10.2615 4.11086 10.5617 4.15917C10.6457 4.17256 10.7292 4.18855 10.8122 4.20711C10.9299 4.23307 11.0461 4.26484 11.1606 4.30231C11.3082 4.35159 11.4456 4.40899 11.5719 4.4762C11.7208 3.5264 11.5709 2.8805 11.0573 2.29539C10.4918 1.65119 9.47047 1.375 8.16344 1.375H4.36977C4.10267 1.375 3.87544 1.56945 3.83358 1.83311L2.2541 11.8502C2.2227 12.0481 2.37566 12.2267 2.57555 12.2267H4.91776L6.13798 4.48869C6.14998 4.41263 6.18028 4.34063 6.22627 4.27888C6.27226 4.21712 6.33257 4.16747 6.402 4.13418Z"
                    fill="#27346A"
                  />
                  <path
                    d="M11.5331 4.69836C11.033 7.26674 9.32124 8.15508 7.13499 8.15508H6.02181C5.75475 8.15508 5.52919 8.34958 5.48769 8.61327L4.756 13.2517C4.72866 13.4246 4.86235 13.5812 5.03725 13.5812H7.0114C7.12449 13.5812 7.23385 13.5408 7.31983 13.4674C7.4058 13.3939 7.46275 13.2922 7.48042 13.1805L7.49964 13.0799L7.87172 10.7218L7.89569 10.5915C7.91336 10.4798 7.9703 10.3781 8.05627 10.3046C8.14223 10.2311 8.25159 10.1908 8.36467 10.1907H8.66012C10.5725 10.1907 12.0699 9.4138 12.5075 7.16683C12.6901 6.22782 12.5956 5.44384 12.1125 4.89318C11.9659 4.72639 11.784 4.58864 11.5719 4.4762C11.5605 4.54881 11.548 4.62238 11.5331 4.69836Z"
                    fill="#2790C3"
                  />
                  <path
                    d="M11.0486 4.26755C10.9706 4.24478 10.8919 4.22463 10.8126 4.20711C10.7295 4.18885 10.646 4.17297 10.562 4.15949C10.2615 4.11086 9.93336 4.08794 9.58088 4.08794L6.60728 4.0879C6.53632 4.08774 6.46624 4.10367 6.40232 4.13451C6.33281 4.16769 6.27228 4.2171 6.22627 4.27888C6.18026 4.34065 6.15015 4.41292 6.13827 4.48902L5.48769 8.61327C5.52927 8.34958 5.75508 8.15508 6.02218 8.15508H7.13536C9.32156 8.15508 11.0334 7.2671 11.5334 4.69836C11.5483 4.62238 11.5608 4.54877 11.5723 4.4762C11.4456 4.40935 11.3086 4.35159 11.161 4.30264C11.1237 4.29029 11.0862 4.27859 11.0486 4.26755Z"
                    fill="#1F264F"
                  />
                </svg>
                Pay now with Paypal
              </button>
            </Tabs.Item>
          </Tabs>
        </form>
      </div>
    </section>
  );
}
