import { Button, Datepicker, Label, TextInput, Tooltip } from "flowbite-react";
import { InfoCircle } from "flowbite-react-icons/solid";

export default function PaymentFormWithStepper() {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <form action="#" className="mx-auto max-w-3xl space-y-8">
          <ol className="flex w-full items-center text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
            <li className="flex items-center text-primary-600 after:mx-4 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-4">
              <span className="flex items-center whitespace-nowrap after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                <svg
                  className="me-2.5 h-3.5 w-3.5 sm:h-4 sm:w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Cart
              </span>
            </li>
            <li className="flex items-center text-primary-600 after:mx-4 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-4">
              <span className="flex items-center whitespace-nowrap after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                <svg
                  className="me-2.5 h-3.5 w-3.5 sm:h-4 sm:w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Checkout
              </span>
            </li>
            <li className="hidden items-center text-primary-600 after:mx-4 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:flex sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-4">
              <span className="flex items-center whitespace-nowrap after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                <svg
                  className="me-2.5 h-3.5 w-3.5 sm:h-4 sm:w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Order summary
              </span>
            </li>
            <li className="flex items-center text-primary-600 dark:text-primary-500">
              <svg
                className="me-2.5 h-3.5 w-3.5 sm:h-4 sm:w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Payment
            </li>
          </ol>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div>
              <h2 className="text-base font-normal text-gray-500 dark:text-gray-400">
                Pay with your Credit Card
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <Label
                    htmlFor="full_name-2"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Full name (as displayed on card)*
                  </Label>
                  <TextInput
                    id="full_name-2"
                    name="full_name-2"
                    placeholder="Bonnie Green"
                    required
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <Label
                    htmlFor="card-number-input-2"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Card number*
                  </Label>
                  <TextInput
                    id="card-number-input-2"
                    name="card-number-input-2"
                    pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="card-expiration-input-2"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Card expiration*
                  </Label>
                  <Datepicker
                    id="card-expiration-input-2"
                    name="card-expiration-input-2"
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
            <div className="flex items-center">
              <div className="h-px w-full bg-gray-200 dark:bg-gray-800"></div>
              <div className="px-5 text-center text-gray-500 dark:text-gray-400">
                or
              </div>
              <div className="h-px w-full bg-gray-200 dark:bg-gray-800"></div>
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600  dark:focus:ring-gray-800"
              >
                <img
                  className="h-4 w-4"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/google-symbol.svg"
                  alt=""
                />
                Google Pay
              </button>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-300 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-200"
              >
                <img
                  className="h-4 w-4"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-symbol.svg"
                  alt=""
                />
                Paypal
              </button>
            </div>
          </div>
          <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
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
            <Button type="submit" className="flex w-full">
              Pay now
            </Button>
          </div>
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
