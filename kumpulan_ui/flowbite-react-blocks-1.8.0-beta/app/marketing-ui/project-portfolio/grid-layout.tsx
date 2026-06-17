import { Badge, Button } from "flowbite-react";

export function GridLayoutImageCTAPreviewProjectPortfolio() {
  return (
    <section className="bg-white antialiased dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Custom works
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
            Flowbite helps you connect with friends, family and communities of
            people who share your interests.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-12 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-16">
          <div>
            <img
              className="mb-6 w-full rounded-lg object-cover shadow-lg dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page.jpg"
              alt=""
            />
            <img
              className="mb-6 hidden w-full rounded-lg object-cover shadow-lg dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg"
              alt=""
            />
            <div className="mb-6 space-y-3">
              <Badge color="indigo" className="w-fit">
                <svg
                  aria-hidden="true"
                  className="mb-1 mr-1 h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Figma design
              </Badge>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#" className="hover:underline">
                  Agency Landing Page
                </a>
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities
                of people who share your interests.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button href="#">Case study</Button>
              <Button
                color="gray"
                href="#"
                theme={{
                  color: {
                    gray: "border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 hover:text-primary-600 focus:text-primary-700 focus:ring-2 focus:ring-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                  },
                  inner: { base: "flex items-stretch transition-none" },
                }}
                className="w-fit"
              >
                <svg
                  aria-hidden="true"
                  className="-ml-1 mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                Live preview
              </Button>
            </div>
          </div>
          <div>
            <img
              className="mb-6 w-full rounded-lg object-cover shadow-lg dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/analytics-tool.jpg"
              alt=""
            />
            <img
              className="mb-6 hidden w-full rounded-lg object-cover shadow-lg dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/analytics-tool-dark.jpg"
              alt=""
            />
            <div className="mb-6 space-y-3">
              <Badge color="green" className="w-fit">
                <svg
                  aria-hidden="true"
                  className="mb-1 mr-1 h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Front-end
              </Badge>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#" className="hover:underline">
                  Analytics tool
                </a>
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities
                of people who share your interests.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button href="#">Case study</Button>
              <Button
                color="gray"
                href="#"
                theme={{
                  color: {
                    gray: "border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 hover:text-primary-600 focus:text-primary-700 focus:ring-2 focus:ring-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                  },
                  inner: { base: "flex items-stretch transition-none" },
                }}
                className="w-fit"
              >
                <svg
                  aria-hidden="true"
                  className="-ml-1 mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                Live preview
              </Button>
            </div>
          </div>
          <div>
            <img
              className="mb-6 w-full rounded-lg object-cover shadow-lg dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/task-management.jpg"
              alt=""
            />
            <img
              className="mb-6 hidden w-full rounded-lg object-cover shadow-lg dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/task-management-dark.jpg"
              alt=""
            />
            <div className="mb-6 space-y-3">
              <Badge className="w-fit">
                <svg
                  aria-hidden="true"
                  className="mb-1 mr-1 h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                    clipRule="evenodd"
                  />
                </svg>
                Back-end
              </Badge>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#" className="hover:underline">
                  Task management system
                </a>
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities
                of people who share your interests.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button href="#">Case study</Button>
              <Button
                color="gray"
                href="#"
                theme={{
                  color: {
                    gray: "border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 hover:text-primary-600 focus:text-primary-700 focus:ring-2 focus:ring-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                  },
                  inner: { base: "flex items-stretch transition-none" },
                }}
                className="w-fit"
              >
                <svg
                  aria-hidden="true"
                  className="-ml-1 mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                Live preview
              </Button>
            </div>
          </div>
          <div>
            <img
              className="mb-6 w-full rounded-lg object-cover shadow-lg dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/flowbite-dashboard.jpg"
              alt=""
            />
            <img
              className="mb-6 hidden w-full rounded-lg object-cover shadow-lg dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/flowbite-dashboard-dark.jpg"
              alt=""
            />
            <div className="mb-6 space-y-3">
              <Badge color="indigo" className="w-fit">
                <svg
                  aria-hidden="true"
                  className="mb-1 mr-1 h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Figma design
              </Badge>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#" className="hover:underline">
                  Flowbite's dashboard
                </a>
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities
                of people who share your interests.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button href="#">Case study</Button>
              <Button
                color="gray"
                href="#"
                theme={{
                  color: {
                    gray: "border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 hover:text-primary-600 focus:text-primary-700 focus:ring-2 focus:ring-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                  },
                  inner: { base: "flex items-stretch transition-none" },
                }}
                className="w-fit"
              >
                <svg
                  aria-hidden="true"
                  className="-ml-1 mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                Live preview
              </Button>
            </div>
          </div>
          <div>
            <img
              className="mb-6 w-full rounded-lg object-cover shadow-lg dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/landing-page-ngo.jpg"
              alt=""
            />
            <img
              className="mb-6 hidden w-full rounded-lg object-cover shadow-lg dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/landing-page-ngo-dark.jpg"
              alt=""
            />
            <div className="mb-6 space-y-3">
              <Badge color="indigo" className="w-fit">
                <svg
                  aria-hidden="true"
                  className="mb-1 mr-1 h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Figma design
              </Badge>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#" className="hover:underline">
                  NGO Landing Page
                </a>
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities
                of people who share your interests.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button href="#">Case study</Button>
              <Button
                color="gray"
                href="#"
                theme={{
                  color: {
                    gray: "border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 hover:text-primary-600 focus:text-primary-700 focus:ring-2 focus:ring-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                  },
                  inner: { base: "flex items-stretch transition-none" },
                }}
                className="w-fit"
              >
                <svg
                  aria-hidden="true"
                  className="-ml-1 mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                Live preview
              </Button>
            </div>
          </div>
          <div>
            <img
              className="mb-6 w-full rounded-lg object-cover shadow-lg dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system.jpg"
              alt=""
            />
            <img
              className="mb-6 hidden w-full rounded-lg object-cover shadow-lg dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg"
              alt=""
            />
            <div className="mb-6 space-y-3">
              <Badge color="green" className="w-fit">
                <svg
                  aria-hidden="true"
                  className="mb-1 mr-1 h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Front-end
              </Badge>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#" className="hover:underline">
                  Mail management system
                </a>
              </h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                Flowbite helps you connect with friends, family and communities
                of people who share your interests.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button href="#">Case study</Button>
              <Button
                color="gray"
                href="#"
                theme={{
                  color: {
                    gray: "border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 hover:text-primary-600 focus:text-primary-700 focus:ring-2 focus:ring-primary-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                  },
                  inner: { base: "flex items-stretch transition-none" },
                }}
                className="w-fit"
              >
                <svg
                  aria-hidden="true"
                  className="-ml-1 mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                Live preview
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
