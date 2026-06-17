import {
  Button,
  Datepicker,
  Drawer,
  Label,
  Radio,
  TextInput,
  theme,
  Tooltip,
} from "flowbite-react";
import { InfoCircle } from "flowbite-react-icons/outline";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function PaymentFormWithDrawer() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div className="m-5 flex justify-center">
        <Button onClick={() => setDrawerOpen(true)}>Show drawer payment</Button>
      </div>
      <Drawer
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        theme={{
          header: {
            inner: {
              titleIcon: "hidden",
            },
          },
        }}
        className="w-full max-w-md"
      >
        <Drawer.Header title="PAYMENT DETAILS" />
        <Drawer.Items className="mt-6">
          <form action="#">
            <div className="flex-1 space-y-4 sm:space-y-6">
              <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-600 dark:bg-gray-700">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Original price
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      $6,592.00
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Savings
                    </dt>
                    <dd className="text-base font-medium text-green-500">
                      -$299.00
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Store Pickup
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      $99
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Tax
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      $799
                    </dd>
                  </dl>
                </div>
                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-600">
                  <dt className="text-base font-bold text-gray-900 dark:text-white">
                    Total
                  </dt>
                  <dd className="text-base font-bold text-gray-900 dark:text-white">
                    $7,191.00
                  </dd>
                </dl>
              </div>
              <div className="w-full space-y-6 lg:max-w-xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-600 dark:bg-gray-700">
                    <div>
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <Radio
                            aria-describedby="visa-text"
                            defaultChecked
                            id="visa-drawer"
                            name="payment-method"
                          />
                        </div>
                        <div className="ms-4 text-sm">
                          <Label
                            htmlFor="visa-drawer"
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
                            id="mastercard-drawer"
                            name="payment-method"
                          />
                        </div>
                        <div className="ms-4 text-sm">
                          <Label
                            htmlFor="mastercard-drawer"
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
                            id="paypal-drawer"
                            name="payment-method"
                          />
                        </div>
                        <div className="ms-4 text-sm">
                          <Label
                            htmlFor="paypal-drawer"
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
                <h3 className="text-gray-500 dark:text-gray-400">
                  Add a new payment payment method
                </h3>
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <Label
                      htmlFor="full_name-4"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Full name (as displayed on card)*
                    </Label>
                    <TextInput
                      id="full_name-4"
                      name="full_name-4"
                      placeholder="Bonnie Green"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <Label
                      htmlFor="card-number-input-4"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Card number*
                    </Label>
                    <TextInput
                      id="card-number-input-4"
                      name="card-number-input-4"
                      pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                      placeholder="xxxx-xxxx-xxxx-xxxx"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="card-expiration-input-4"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Card expiration*
                    </Label>
                    <Datepicker
                      id="card-expiration-input-4"
                      name="card-expiration-input-4"
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
              </div>
            </div>
            <div className="mt-6 gap-4 space-y-4 sm:flex sm:items-center sm:justify-center sm:space-y-0">
              <Button type="submit" className="flex w-full [&>span]:py-2.5">
                Pay now
              </Button>
              <button
                type="button"
                className="block w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:max-w-[48%]"
              >
                Continue Shopping
              </button>
            </div>
          </form>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
