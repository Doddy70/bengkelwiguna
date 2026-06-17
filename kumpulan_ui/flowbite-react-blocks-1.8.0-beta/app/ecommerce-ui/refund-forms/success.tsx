import { Check, CheckCircle } from "flowbite-react-icons/outline";
import { Eye } from "flowbite-react-icons/solid";

export default function RefundFormRequestSuccess() {
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
                <CheckCircle className="h-5 w-5 text-primary-700 dark:text-primary-500" />
                <p className="text-sm font-medium leading-tight text-primary-700 dark:text-primary-500">
                  Confirmation
                </p>
              </li>
            </ol>
          </div>
          <div className="space-y-6">
            <Check className="h-8 w-8 text-green-500" />
            <div>
              <h3 className="mb-2.5 text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                Your request has been successfully registered
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                I have successfully received your request to return this
                product, until we resolve this case you can track the status of
                your order.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
            >
              <Eye className="h-4 w-4" />
              View status
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
