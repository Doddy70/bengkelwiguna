import { Button, Label, Radio } from "flowbite-react";
import { CheckCircle } from "flowbite-react-icons/outline";

export default function RefundFormPaymentOptions() {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl space-y-6 lg:space-y-8">
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
                <CheckCircle className="h-5 w-5 text-primary-700 dark:text-primary-500" />
                <p className="text-sm font-medium leading-tight text-primary-700 dark:text-primary-500">
                  Delivery option
                </p>
              </li>
              <div className="hidden h-px w-4 shrink-0 bg-gray-200 dark:bg-gray-700 md:block lg:w-16"></div>
              <li className="flex items-center gap-2 md:flex-1 md:flex-col md:gap-1.5 lg:flex-none">
                <CheckCircle className="h-5 w-5 text-primary-700 dark:text-primary-500" />
                <p className="text-sm font-medium leading-tight text-primary-700 dark:text-primary-500">
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
                4. Select the money back option:
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <Radio
                      aria-describedby="shopping-voucher-text"
                      defaultChecked
                      id="shopping-voucher"
                      name="delivery-method"
                    />
                  </div>
                  <div className="ms-4 text-sm">
                    <Label
                      htmlFor="shopping-voucher"
                      className="font-medium leading-none text-gray-900 dark:text-white"
                    >
                      I want a Shopping Voucher
                    </Label>
                    <p
                      id="shopping-voucher-text"
                      className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                    >
                      Receive an instant voucher that you can use for new
                      orders.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <Radio
                      aria-describedby="money-back-text"
                      id="money-back"
                      name="delivery-method"
                    />
                  </div>
                  <div className="ms-4 text-sm">
                    <Label
                      htmlFor="money-back"
                      className="font-medium leading-none text-gray-900 dark:text-white"
                    >
                      I want my money back
                    </Label>
                    <p
                      id="money-back-text"
                      className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                    >
                      We will transfer the money to your account. This can take
                      up to 5 days.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <Radio
                      aria-describedby="another-product-text"
                      id="another-product"
                      name="delivery-method"
                    />
                  </div>
                  <div className="ms-4 text-sm">
                    <Label
                      htmlFor="another-product"
                      className="font-medium leading-none text-gray-900 dark:text-white"
                    >
                      I want another product
                    </Label>
                    <p
                      id="another-product-text"
                      className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                    >
                      We will replace your product with a new one or one close
                      to the one you returned
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gap-4 sm:flex sm:items-center">
              <button
                type="button"
                className="w-full rounded-lg  border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
              >
                Prev: Delivery
              </button>
              <Button type="submit" className="mt-4 w-full sm:mt-0 sm:w-auto">
                Next: Confirmation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
