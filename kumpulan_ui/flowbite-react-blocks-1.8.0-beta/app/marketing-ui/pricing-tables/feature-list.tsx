import { Button } from "flowbite-react";

export function FeatureListPricingCard() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16 xl:gap-16">
        <div className="text-gray-500 sm:text-lg">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Why you should upgrade to Flowbite Pro
          </h2>
          <p className="mb-8 dark:text-gray-400 lg:text-xl">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value.
          </p>
          <div className="grid gap-8 border-t border-gray-200 py-8 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-1">
            <div className="flex">
              <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded bg-white shadow dark:bg-gray-700">
                <svg
                  className="h-7 w-7 text-gray-900 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                  Industry analysis
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Benchmark your company against the industry to inform your
                  growth strategy and analyze market trends.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded bg-white shadow dark:bg-gray-700">
                <svg
                  className="h-7 w-7 text-gray-900 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                  Company analysis
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Uncover competitor digital strategies and deep dive into any
                  company’s digital footprint.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded bg-white shadow dark:bg-gray-700">
                <svg
                  className="h-7 w-7 text-gray-900 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                  App analysis
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Analyze app industry trends and discover audience interests to
                  learn which apps are gaining traction in the app ecosystem.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded bg-white shadow dark:bg-gray-700">
                <svg
                  className="h-7 w-7 text-gray-900 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                  Audience analysis
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Benchmark your company against the industry to inform your
                  growth strategy and analyze market trends.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-lg bg-white p-6 shadow dark:bg-gray-800 xl:p-8">
          <div className="items-center justify-between md:flex">
            <div>
              <div className="mb-2 flex justify-between">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Pro Plan
                </h3>
                <div className="flex items-center md:hidden">
                  <div className="mr-1 text-xl font-extrabold text-gray-900 dark:text-white lg:text-5xl">
                    $599
                  </div>
                  <span className="text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </div>
              </div>
              <p className="text-lg text-gray-500 dark:text-gray-400 md:mr-2">
                Best for large scale uses and extended redistribution rights.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="text-2xl font-extrabold text-gray-900 dark:text-white lg:text-5xl">
                $599
              </div>
              <span className="text-gray-500 dark:text-gray-400">
                per month
              </span>
            </div>
          </div>
          <Button href="#" className="my-6">
            Upgrade now
          </Button>
          <div className="justify-between space-y-4 sm:flex sm:space-y-0">
            <ul className="space-y-4">
              <li className="flex space-x-2.5">
                <svg
                  className="h-5 w-5 shrink-0 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="leading-tight text-gray-500 dark:text-gray-400">
                  A/B Testing
                </span>
              </li>
              <li className="flex space-x-2.5">
                <svg
                  className="h-5 w-5 shrink-0 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="leading-tight text-gray-500 dark:text-gray-400">
                  24/7 Email &amp; Chat Support
                </span>
              </li>
              <li className="flex space-x-2.5">
                <svg
                  className="h-5 w-5 shrink-0 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="leading-tight text-gray-500 dark:text-gray-400">
                  Custom Branding
                </span>
              </li>
              <li className="flex space-x-2.5">
                <svg
                  className="h-5 w-5 shrink-0 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="leading-tight text-gray-500 dark:text-gray-400">
                  Creative Assistant
                </span>
              </li>
              <li className="flex space-x-2.5">
                <svg
                  className="h-5 w-5 shrink-0 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="leading-tight text-gray-500 dark:text-gray-400">
                  Website Builder
                </span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex space-x-2.5">
                <svg
                  className="h-5 w-5 shrink-0 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="leading-tight text-gray-500 dark:text-gray-400">
                  Advanced Segmentation
                </span>
              </li>
              <li className="flex space-x-2.5">
                <svg
                  className="h-5 w-5 shrink-0 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="leading-tight text-gray-500 dark:text-gray-400">
                  Multivariate Testing
                </span>
              </li>
              <li className="flex space-x-2.5">
                <svg
                  className="h-5 w-5 shrink-0 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="leading-tight text-gray-500 dark:text-gray-400">
                  Comparative Reporting
                </span>
              </li>
              <li className="flex space-x-2.5">
                <svg
                  className="h-5 w-5 shrink-0 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="leading-tight text-gray-500 dark:text-gray-400">
                  Custom Templates
                </span>
              </li>
              <li className="flex space-x-2.5">
                <svg
                  className="h-5 w-5 shrink-0 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="leading-tight text-gray-500 dark:text-gray-400">
                  Dynamic Content
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
