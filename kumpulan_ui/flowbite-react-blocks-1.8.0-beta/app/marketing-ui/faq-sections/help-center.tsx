import { Label, TextInput } from "flowbite-react";

export function HelpCenterFAQSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            How can we help you?
          </h2>
          <p className="mb-8 text-gray-500 dark:text-gray-500 sm:text-xl">
            Here are a few of the questions we get the most. If you don't see
            what's on your mind, reach out to us anytime on phone, chat, or
            email.
          </p>
          <Label
            htmlFor="email-adress-icon"
            className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your Email
          </Label>
          <TextInput
            icon={() => (
              <svg
                className="h-6 w-6 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            id="email-adress-icon"
            placeholder="Type keywords to find answers"
            className="[&_input]:p-4 [&_input]:pl-12 [&_input]:text-base [&_input]:placeholder:text-gray-400"
          />
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            You can also browse the topics below to find what you are looking
            for.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="rounded p-4 shadow dark:bg-gray-800">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
              <svg
                className="h-5 w-5 text-primary-600 dark:text-primary-300 lg:h-6 lg:w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold dark:text-white">General</h3>
            <ul className="mb-4 space-y-3 text-gray-500 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline">
                  About forwarding limits
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to update Flowbite?
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to change privacy settings?
                </a>
              </li>
            </ul>
            <a
              href="#"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              See all
            </a>
          </div>
          <div className="rounded p-4 shadow dark:bg-gray-800">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
              <svg
                className="h-5 w-5 text-primary-600 dark:text-primary-300 lg:h-6 lg:w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path
                  fillRule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold dark:text-white">License</h3>
            <ul className="mb-4 space-y-3 text-gray-500 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline">
                  Verifying your number
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to restore your chat history
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to manage your notifications
                </a>
              </li>
            </ul>
            <a
              href="#"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              See all
            </a>
          </div>
          <div className="rounded p-4 shadow dark:bg-gray-800">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
              <svg
                className="h-5 w-5 text-primary-600 dark:text-primary-300 lg:h-6 lg:w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold dark:text-white">
              Refund policy
            </h3>
            <ul className="mb-4 space-y-4 text-gray-500 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline">
                  How to restore your chat history
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to use status
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to manage your notifications
                </a>
              </li>
            </ul>
            <a
              href="#"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              See all
            </a>
          </div>
          <div className="rounded p-4 shadow dark:bg-gray-800">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
              <svg
                className="h-5 w-5 text-primary-600 dark:text-primary-300 lg:h-6 lg:w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold dark:text-white">Account</h3>
            <ul className="mb-4 space-y-3 text-gray-500 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline">
                  About WhatsApp Web and Desktop
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to log in or out
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to manage your notifications
                </a>
              </li>
            </ul>
            <a
              href="#"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              See all
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
