import { Button, Label, Radio } from "flowbite-react";
import { CheckCircle } from "flowbite-react-icons/outline";

export default function RefundFormShipmentMethod() {
  return (
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
                <CheckCircle className="h-5 w-5 text-primary-700 dark:text-primary-500" />
                <p className="text-sm font-medium leading-tight text-primary-700 dark:text-primary-500">
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
                3. Select the method of delivery of the product:
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-start justify-between">
                  <div className="flex h-5 items-center">
                    <Radio
                      aria-describedby="express-courier-text"
                      defaultChecked
                      id="express-courier"
                      name="delivery-method"
                    />
                  </div>
                  <div className="mr-auto ms-4 text-sm">
                    <Label
                      htmlFor="express-courier"
                      className="font-medium leading-none text-gray-900 dark:text-white"
                    >
                      Express courier - $19
                    </Label>
                    <p
                      id="express-courier-text"
                      className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                    >
                      Send it by Tommorow
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      className="h-5 w-auto"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/fedex.svg"
                      alt=""
                    />
                    <img
                      className="h-5 w-auto"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/ups.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <Radio
                      aria-describedby="store-pickup-text"
                      id="store-pickup"
                      name="delivery-method"
                    />
                  </div>
                  <div className="ms-4 text-sm">
                    <Label
                      htmlFor="store-pickup"
                      className="font-medium leading-none text-gray-900 dark:text-white"
                    >
                      Store pickup - Free
                    </Label>
                    <p
                      id="store-pickup-text"
                      className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                    >
                      Send it by Today
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <Radio
                      aria-describedby="flowbox-text"
                      id="flowbox"
                      name="delivery-method"
                    />
                  </div>
                  <div className="ms-4 text-sm">
                    <Label
                      htmlFor="flowbox"
                      className="font-medium leading-none text-gray-900 dark:text-white"
                    >
                      Flowbox - $29
                    </Label>
                    <p
                      id="flowbox-text"
                      className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                    >
                      Send it by 2 Jan 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="mb-4 rounded-lg bg-primary-50 p-4 text-sm text-primary-800 dark:bg-gray-800 dark:text-primary-400 sm:text-base"
              role="alert"
            >
              If you choose to send the product through the Flowbox automatic
              pick-up service, make sure that the package fits in the drawer.
            </div>
            <div className="gap-4 sm:flex sm:items-center">
              <button
                type="button"
                className="w-full rounded-lg  border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
              >
                Prev: Return reason
              </button>
              <Button type="submit" className="mt-4 w-full sm:mt-0 sm:w-auto">
                Next: Return option
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
