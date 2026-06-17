import { Card } from "flowbite-react";
import {
  ComputerSpeaker,
  DesktopPc,
  Fingerprint,
  Headphones,
  Keyboard,
  Printer,
  Tablet,
  Tag,
} from "flowbite-react-icons/outline";

export default function ProductCategoriesWithCards() {
  return (
    <section className="bg-gray-50 py-8 antialiased md:py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="sm:flex sm:items-center sm:justify-between sm:gap-4">
          <p className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
            Categories that might interest you
          </p>
          <a
            href="#"
            title=""
            className="hover:text-primary-700 mt-4 hidden rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:mt-0 lg:inline-block dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            role="button"
          >
            See all categories
          </a>
        </div>
        <div className="mb-4 mt-6 grid grid-cols-1 gap-4 text-center sm:mt-8 sm:grid-cols-2 lg:mb-0 lg:grid-cols-4 xl:gap-8">
          <a
            href="#"
            className="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <ComputerSpeaker className="mx-auto h-14 w-14 text-gray-400 dark:text-gray-500" />
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Laptops & Computers
            </p>
          </a>
          <a
            href="#"
            className="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <DesktopPc className="mx-auto h-14 w-14 text-gray-400 dark:text-gray-500" />
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              TV
            </p>
          </a>
          <a
            href="#"
            className="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Tablet className="mx-auto h-14 w-14 text-gray-400 dark:text-gray-500" />
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Tablets
            </p>
          </a>
          <a
            href="#"
            className="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Headphones className="mx-auto h-14 w-14 text-gray-400 dark:text-gray-500" />
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Audio
            </p>
          </a>
          <a
            href="#"
            className="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Printer className="mx-auto h-14 w-14 text-gray-400 dark:text-gray-500" />
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Printers
            </p>
          </a>
          <a
            href="#"
            className="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Keyboard className="mx-auto h-14 w-14 text-gray-400 dark:text-gray-500" />
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Computer Accessories
            </p>
          </a>
          <a
            href="#"
            className="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Fingerprint className="mx-auto h-14 w-14 text-gray-400 dark:text-gray-500" />
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Security & Wi-Fi
            </p>
          </a>
          <a
            href="#"
            className="relative grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Tag className="mx-auto h-14 w-14 text-gray-400 dark:text-gray-500" />
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Deals
            </p>
          </a>
        </div>
        <a
          href="#"
          title=""
          className="hover:text-primary-700 mt-4 block w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:mt-0 lg:hidden dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          role="button"
        >
          See all categories
        </a>
      </div>
    </section>
  );
}
