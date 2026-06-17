import {
  Button,
  Datepicker,
  Label,
  Radio,
  TextInput,
  theme,
  Tooltip,
} from "flowbite-react";
import { ArrowRight, SalePercent, Truck } from "flowbite-react-icons/outline";
import { InfoCircle } from "flowbite-react-icons/solid";
import { twMerge } from "tailwind-merge";

export default function PaymentFormWithOptions() {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Payment
          </h2>
          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-8">
            <form action="#" className="w-full space-y-6 lg:max-w-xl">
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
              <div className="flex items-center">
                <div className="h-px w-full bg-gray-200 dark:bg-gray-800"></div>
                <div className="px-5 text-center text-gray-500 dark:text-gray-400">
                  or
                </div>
                <div className="h-px w-full bg-gray-200 dark:bg-gray-800"></div>
              </div>
              <h3 className="text-gray-500 dark:text-gray-400">
                Add a new payment payment method
              </h3>
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
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
                <div className="col-span-2 sm:col-span-1">
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
                            "-left-2 -top-96",
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
              <Button type="submit" className="flex w-full">
                Pay now
              </Button>
            </form>
            <div className="mt-6 grow space-y-6 sm:mt-8 lg:mt-0">
              <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
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
                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="text-base font-bold text-gray-900 dark:text-white">
                    Total
                  </dt>
                  <dd className="text-base font-bold text-gray-900 dark:text-white">
                    $7,191.00
                  </dd>
                </dl>
              </div>
              <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                <div className="gap-4 sm:flex">
                  <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 sm:mb-0">
                    <Truck className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-medium leading-none text-gray-900 dark:text-white">
                      Free shipping
                    </h4>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      You have 3 months to try free shipping and exclusive
                      Genius offers.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center font-medium text-primary-700 hover:underline dark:text-primary-500"
                    >
                      Try Flowbite PRO 3 months free
                      <ArrowRight className="ms-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                <div className="gap-4 sm:flex">
                  <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 sm:mb-0">
                    <SalePercent className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-medium leading-none text-gray-900 dark:text-white">
                      -10% Extra
                    </h4>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      You get 10% extra when purchasing this product, for orders
                      of at least $100!
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center font-medium text-primary-700 hover:underline dark:text-primary-500"
                    >
                      Save the promo code in your account
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400 sm:mt-8 lg:text-left">
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
        </div>
      </div>
    </section>
  );
}
