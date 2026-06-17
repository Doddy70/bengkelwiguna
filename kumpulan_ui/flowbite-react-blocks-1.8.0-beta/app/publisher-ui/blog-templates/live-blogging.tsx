"use client";

import {
  Avatar,
  Button,
  Carousel,
  Dropdown,
  Footer,
  Popover,
  TextInput,
  theme,
} from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export default function LiveBloggingBlogTemplate() {
  return (
    <>
      <main className="bg-white pb-8 antialiased dark:bg-gray-900 lg:pb-16">
        <header className="mx-auto w-full max-w-screen-xl py-8 lg:py-12">
          <div className="w-full max-w-screen-lg px-4">
            <div className="mb-4 flex items-center text-lg text-red-600 dark:text-white">
              <div className="mr-2 h-3 w-3 rounded-full bg-red-600"></div>Live
              Reporting
            </div>
            <h1 className="mb-4 max-w-2xl text-2xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">
              Flowbite Blocks Tutorial - Learn how to get started with custom
              sections using the Flowbite Blocks
            </h1>
            <div className="flex items-center">
              <svg
                className="mr-2 h-3 w-3 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
              </svg>
              <time className="font-normal text-gray-500 dark:text-gray-400">
                August 3, 2022, 2:20am EDT
              </time>
            </div>
          </div>
        </header>
        <div className="relative z-20 mx-auto flex max-w-screen-xl justify-between rounded bg-white px-4 dark:bg-gray-900">
          <article className="format format-sm format-blue w-full max-w-none dark:format-invert sm:format-base lg:format-lg xl:w-[828px]">
            <div className="not-format mb-6 flex items-center justify-between border-b border-t border-gray-200 py-6 dark:border-gray-700">
              <span className="text-sm font-bold text-gray-900 dark:text-white lg:mb-0">
                15 Posts
              </span>
              <div className="flex items-center">
                <span className="mr-2 text-xs font-semibold uppercase text-gray-900 dark:text-white">
                  Sort by
                </span>
                <Dropdown
                  color="gray"
                  inline
                  label={
                    <>
                      <span className="sr-only">Open user menu</span>
                      Latest
                      <svg
                        className="ml-1.5 h-2.5 w-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </>
                  }
                  theme={{
                    arrowIcon: "hidden",
                    floating: {
                      base: twMerge(theme.dropdown.floating.base, "w-32"),
                    },
                    inlineWrapper: twMerge(
                      theme.dropdown.inlineWrapper,
                      "inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                    ),
                  }}
                >
                  <Dropdown.Item>Latest</Dropdown.Item>
                  <Dropdown.Item>Trending</Dropdown.Item>
                  <Dropdown.Item>Oldest</Dropdown.Item>
                </Dropdown>
              </div>
            </div>
            <div className="mb-4 border-b border-gray-200 pb-3 dark:border-gray-700 lg:mb-8">
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-red-600">
                  45 min ago
                </span>
                <Popover
                  content={
                    <div className="not-format">
                      <div className="rounded-t-lg border-b border-gray-200 bg-gray-50 px-3 py-1.5 dark:border-gray-600 dark:bg-gray-700">
                        <h3 className="!text-sm font-semibold text-gray-900 dark:text-white">
                          Share this post
                        </h3>
                      </div>
                      <div className="p-3">
                        <ul className="list-none space-y-2.5">
                          <li>
                            <a
                              className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              href="#"
                            >
                              <svg
                                className="mr-2 h-4 w-4"
                                aria-hidden="true"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.03168 15.0005C11.0694 15.0005 14.3718 9.99823 14.3718 5.66031C14.3718 5.51823 14.3718 5.37679 14.3622 5.23599C15.0047 4.77129 15.5593 4.19591 16 3.53679C15.4009 3.80239 14.7654 3.97649 14.1146 4.05327C14.7999 3.64306 15.3128 2.99779 15.5578 2.23759C14.9134 2.61999 14.2084 2.88947 13.4733 3.03439C12.9783 2.5081 12.3237 2.15961 11.6108 2.04284C10.8978 1.92607 10.1663 2.04753 9.52931 2.38842C8.89234 2.72931 8.38548 3.27064 8.08716 3.92862C7.78884 4.5866 7.71569 5.32456 7.87904 6.02831C6.57393 5.96284 5.29717 5.62366 4.13164 5.03279C2.9661 4.44192 1.93784 3.61256 1.1136 2.59855C0.693819 3.32121 0.565248 4.1767 0.754066 4.99083C0.942885 5.80496 1.43489 6.51652 2.12992 6.98063C1.60749 6.96532 1.09643 6.82438 0.64 6.56975V6.61135C0.640207 7.36925 0.902567 8.10374 1.38258 8.69026C1.86259 9.27677 2.53071 9.67919 3.2736 9.82927C2.79032 9.96109 2.28325 9.98036 1.79136 9.88559C2.00121 10.5378 2.40962 11.1081 2.95949 11.5169C3.50937 11.9256 4.17322 12.1523 4.85824 12.1653C4.17763 12.7003 3.39821 13.0958 2.56458 13.3293C1.73096 13.5627 0.859476 13.6296 0 13.5259C1.50122 14.4893 3.24795 15.0002 5.03168 14.9979"
                                  fill="#1DA1F2"
                                />
                              </svg>
                              Tweet this post
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              href="#"
                            >
                              <svg
                                className="mr-2 h-4 w-4"
                                aria-hidden="true"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g>
                                  <path
                                    d="M16 8.4436C16 4.02532 12.4183 0.443604 8 0.443604C3.58172 0.443604 0 4.02532 0 8.4436C0 12.4366 2.92547 15.7463 6.75 16.3464V10.7561H4.71875V8.4436H6.75V6.6811C6.75 4.6761 7.94438 3.5686 9.77172 3.5686C10.6467 3.5686 11.5625 3.72485 11.5625 3.72485V5.6936H10.5538C9.56 5.6936 9.25 6.31032 9.25 6.9436V8.4436H11.4688L11.1141 10.7561H9.25V16.3464C13.0745 15.7463 16 12.4366 16 8.4436Z"
                                    fill="#1877F2"
                                  />
                                  <path
                                    d="M11.1141 10.7561L11.4688 8.4436H9.25V6.9436C9.25 6.31095 9.56 5.6936 10.5538 5.6936H11.5625V3.72485C11.5625 3.72485 10.647 3.5686 9.77172 3.5686C7.94438 3.5686 6.75 4.6761 6.75 6.6811V8.4436H4.71875V10.7561H6.75V16.3464C7.5783 16.476 8.4217 16.476 9.25 16.3464V10.7561H11.1141Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_13664_80011">
                                    <rect
                                      width="16"
                                      height="16"
                                      fill="white"
                                      transform="translate(0 0.443604)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              Share to Facebook
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              href="#"
                            >
                              <svg
                                className="mr-2 h-4 w-4"
                                aria-hidden="true"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g>
                                  <path
                                    d="M8 16.4436C12.4183 16.4436 16 12.8619 16 8.4436C16 4.02533 12.4183 0.443604 8 0.443604C3.58172 0.443604 0 4.02533 0 8.4436C0 12.8619 3.58172 16.4436 8 16.4436Z"
                                    fill="#FF4500"
                                  />
                                  <path
                                    d="M13.3335 8.44363C13.3335 7.79801 12.8095 7.27404 12.1639 7.27404C11.8458 7.27404 11.5651 7.39567 11.3592 7.60152C10.5639 7.03076 9.45982 6.65649 8.24344 6.60971L8.77677 4.11146L10.5078 4.47638C10.5265 4.91614 10.8914 5.2717 11.3405 5.2717C11.799 5.2717 12.1733 4.89743 12.1733 4.43895C12.1733 3.98047 11.799 3.6062 11.3405 3.6062C11.013 3.6062 10.7323 3.79334 10.6013 4.07404L8.66449 3.66234C8.60835 3.65299 8.55221 3.66234 8.50543 3.69041C8.45865 3.71848 8.43058 3.76527 8.41186 3.82141L7.82239 6.60971C6.57794 6.64714 5.46449 7.01205 4.65982 7.60152C4.45397 7.40503 4.16391 7.27404 3.85514 7.27404C3.20952 7.27404 2.68555 7.79801 2.68555 8.44363C2.68555 8.92082 2.96625 9.32316 3.37794 9.5103C3.35923 9.62258 3.34987 9.74421 3.34987 9.86585C3.34987 11.6623 5.43642 13.1126 8.01888 13.1126C10.6013 13.1126 12.6879 11.6623 12.6879 9.86585C12.6879 9.74421 12.6785 9.63193 12.6598 9.51965C13.0434 9.33252 13.3335 8.92082 13.3335 8.44363ZM5.3335 9.27638C5.3335 8.8179 5.70777 8.44363 6.16625 8.44363C6.62473 8.44363 6.999 8.8179 6.999 9.27638C6.999 9.73486 6.62473 10.1091 6.16625 10.1091C5.70777 10.1091 5.3335 9.73486 5.3335 9.27638ZM9.98379 11.4752C9.41303 12.046 8.32765 12.0834 8.00952 12.0834C7.69139 12.0834 6.59666 12.0366 6.03525 11.4752C5.95104 11.391 5.95104 11.2506 6.03525 11.1664C6.11946 11.0822 6.25982 11.0822 6.34403 11.1664C6.69958 11.522 7.46683 11.653 8.01888 11.653C8.57093 11.653 9.32882 11.522 9.69373 11.1664C9.77794 11.0822 9.9183 11.0822 10.0025 11.1664C10.068 11.26 10.068 11.391 9.98379 11.4752ZM9.83408 10.1091C9.37561 10.1091 9.00134 9.73486 9.00134 9.27638C9.00134 8.8179 9.37561 8.44363 9.83408 8.44363C10.2926 8.44363 10.6668 8.8179 10.6668 9.27638C10.6668 9.73486 10.2926 10.1091 9.83408 10.1091Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_13664_80014">
                                    <rect
                                      width="16"
                                      height="16"
                                      fill="white"
                                      transform="translate(0 0.443604)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              Share to Reddit
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              href="#"
                            >
                              <svg
                                className="mr-2 h-4 w-4"
                                aria-hidden="true"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g>
                                  <path
                                    d="M14.8189 0.443604H1.18111C0.867861 0.443604 0.567441 0.568042 0.34594 0.789543C0.124438 1.01104 0 1.31146 0 1.62471V15.2625C0 15.5757 0.124438 15.8762 0.34594 16.0977C0.567441 16.3192 0.867861 16.4436 1.18111 16.4436H14.8189C15.1321 16.4436 15.4326 16.3192 15.6541 16.0977C15.8756 15.8762 16 15.5757 16 15.2625V1.62471C16 1.31146 15.8756 1.01104 15.6541 0.789543C15.4326 0.568042 15.1321 0.443604 14.8189 0.443604ZM4.76889 14.0736H2.36333V6.43249H4.76889V14.0736ZM3.56445 5.3736C3.29158 5.37207 3.02528 5.28973 2.79916 5.137C2.57304 4.98426 2.39723 4.76796 2.29392 4.5154C2.19061 4.26284 2.16443 3.98533 2.21869 3.71791C2.27294 3.45048 2.4052 3.20512 2.59877 3.01279C2.79234 2.82046 3.03854 2.68978 3.30631 2.63724C3.57408 2.58471 3.85141 2.61267 4.1033 2.71759C4.35519 2.82252 4.57036 2.99971 4.72164 3.22681C4.87293 3.45391 4.95355 3.72073 4.95333 3.9936C4.95591 4.17629 4.92167 4.35763 4.85267 4.52681C4.78368 4.69598 4.68132 4.84954 4.55171 4.97831C4.42211 5.10709 4.2679 5.20846 4.09828 5.27637C3.92867 5.34428 3.74711 5.37735 3.56445 5.3736ZM13.6356 14.0803H11.2311V9.90583C11.2311 8.67472 10.7078 8.29472 10.0322 8.29472C9.31889 8.29472 8.61889 8.83249 8.61889 9.93694V14.0803H6.21333V6.43805H8.52667V7.49694H8.55778C8.79 7.02694 9.60333 6.2236 10.8444 6.2236C12.1867 6.2236 13.6367 7.02027 13.6367 9.3536L13.6356 14.0803Z"
                                    fill="#0A66C2"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_13664_80017">
                                    <rect
                                      width="16"
                                      height="16"
                                      fill="white"
                                      transform="translate(0 0.443604)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              Share to Linkedin
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  }
                  trigger="hover"
                >
                  <button className="rounded-lg px-2 py-1 text-gray-400 hover:bg-gray-50 hover:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300">
                    <svg
                      className="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m5.953 7.467 6.094-2.612m.096 8.114L5.857 9.676m.305-1.192a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0ZM17 3.84a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Zm0 10.322a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Z"
                      />
                    </svg>
                    <span className="sr-only">Share social media</span>
                  </button>
                </Popover>
              </div>
              <h2>Getting started with Flowbite</h2>
              <p className="lead">
                Flowbite is an open-source library of UI components built with
                the utility-first classes from Tailwind CSS. It also includes
                interactive elements such as dropdowns, modals, datepickers.
              </p>
              <p>
                Before going digital, you might benefit from scribbling down
                some ideas in a sketchbook. This way, you can think things
                through before committing to an actual design project.
              </p>
              <p>
                But then I found a{" "}
                <a href="https://flowbite.com">
                  component library based on Tailwind CSS called Flowbite
                </a>
                . It comes with the most commonly used UI components, such as
                buttons, navigation bars, cards, form elements, and more which
                are conveniently built with the utility classes from Tailwind
                CSS.
              </p>
            </div>
            <div className="mb-4 border-b border-gray-200 pb-3 dark:border-gray-700 lg:mb-8">
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-red-600">
                  55 min ago
                </span>
                <Popover
                  content={
                    <div className="not-format">
                      <div className="rounded-t-lg border-b border-gray-200 bg-gray-50 px-3 py-1.5 dark:border-gray-600 dark:bg-gray-700">
                        <h3 className="!text-sm font-semibold text-gray-900 dark:text-white">
                          Share this post
                        </h3>
                      </div>
                      <div className="p-3">
                        <ul className="list-none space-y-2.5">
                          <li>
                            <a
                              className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              href="#"
                            >
                              <svg
                                className="mr-2 h-4 w-4"
                                aria-hidden="true"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.03168 15.0005C11.0694 15.0005 14.3718 9.99823 14.3718 5.66031C14.3718 5.51823 14.3718 5.37679 14.3622 5.23599C15.0047 4.77129 15.5593 4.19591 16 3.53679C15.4009 3.80239 14.7654 3.97649 14.1146 4.05327C14.7999 3.64306 15.3128 2.99779 15.5578 2.23759C14.9134 2.61999 14.2084 2.88947 13.4733 3.03439C12.9783 2.5081 12.3237 2.15961 11.6108 2.04284C10.8978 1.92607 10.1663 2.04753 9.52931 2.38842C8.89234 2.72931 8.38548 3.27064 8.08716 3.92862C7.78884 4.5866 7.71569 5.32456 7.87904 6.02831C6.57393 5.96284 5.29717 5.62366 4.13164 5.03279C2.9661 4.44192 1.93784 3.61256 1.1136 2.59855C0.693819 3.32121 0.565248 4.1767 0.754066 4.99083C0.942885 5.80496 1.43489 6.51652 2.12992 6.98063C1.60749 6.96532 1.09643 6.82438 0.64 6.56975V6.61135C0.640207 7.36925 0.902567 8.10374 1.38258 8.69026C1.86259 9.27677 2.53071 9.67919 3.2736 9.82927C2.79032 9.96109 2.28325 9.98036 1.79136 9.88559C2.00121 10.5378 2.40962 11.1081 2.95949 11.5169C3.50937 11.9256 4.17322 12.1523 4.85824 12.1653C4.17763 12.7003 3.39821 13.0958 2.56458 13.3293C1.73096 13.5627 0.859476 13.6296 0 13.5259C1.50122 14.4893 3.24795 15.0002 5.03168 14.9979"
                                  fill="#1DA1F2"
                                />
                              </svg>
                              Tweet this post
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              href="#"
                            >
                              <svg
                                className="mr-2 h-4 w-4"
                                aria-hidden="true"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g>
                                  <path
                                    d="M16 8.4436C16 4.02532 12.4183 0.443604 8 0.443604C3.58172 0.443604 0 4.02532 0 8.4436C0 12.4366 2.92547 15.7463 6.75 16.3464V10.7561H4.71875V8.4436H6.75V6.6811C6.75 4.6761 7.94438 3.5686 9.77172 3.5686C10.6467 3.5686 11.5625 3.72485 11.5625 3.72485V5.6936H10.5538C9.56 5.6936 9.25 6.31032 9.25 6.9436V8.4436H11.4688L11.1141 10.7561H9.25V16.3464C13.0745 15.7463 16 12.4366 16 8.4436Z"
                                    fill="#1877F2"
                                  />
                                  <path
                                    d="M11.1141 10.7561L11.4688 8.4436H9.25V6.9436C9.25 6.31095 9.56 5.6936 10.5538 5.6936H11.5625V3.72485C11.5625 3.72485 10.647 3.5686 9.77172 3.5686C7.94438 3.5686 6.75 4.6761 6.75 6.6811V8.4436H4.71875V10.7561H6.75V16.3464C7.5783 16.476 8.4217 16.476 9.25 16.3464V10.7561H11.1141Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_13664_80011">
                                    <rect
                                      width="16"
                                      height="16"
                                      fill="white"
                                      transform="translate(0 0.443604)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              Share to Facebook
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              href="#"
                            >
                              <svg
                                className="mr-2 h-4 w-4"
                                aria-hidden="true"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g>
                                  <path
                                    d="M8 16.4436C12.4183 16.4436 16 12.8619 16 8.4436C16 4.02533 12.4183 0.443604 8 0.443604C3.58172 0.443604 0 4.02533 0 8.4436C0 12.8619 3.58172 16.4436 8 16.4436Z"
                                    fill="#FF4500"
                                  />
                                  <path
                                    d="M13.3335 8.44363C13.3335 7.79801 12.8095 7.27404 12.1639 7.27404C11.8458 7.27404 11.5651 7.39567 11.3592 7.60152C10.5639 7.03076 9.45982 6.65649 8.24344 6.60971L8.77677 4.11146L10.5078 4.47638C10.5265 4.91614 10.8914 5.2717 11.3405 5.2717C11.799 5.2717 12.1733 4.89743 12.1733 4.43895C12.1733 3.98047 11.799 3.6062 11.3405 3.6062C11.013 3.6062 10.7323 3.79334 10.6013 4.07404L8.66449 3.66234C8.60835 3.65299 8.55221 3.66234 8.50543 3.69041C8.45865 3.71848 8.43058 3.76527 8.41186 3.82141L7.82239 6.60971C6.57794 6.64714 5.46449 7.01205 4.65982 7.60152C4.45397 7.40503 4.16391 7.27404 3.85514 7.27404C3.20952 7.27404 2.68555 7.79801 2.68555 8.44363C2.68555 8.92082 2.96625 9.32316 3.37794 9.5103C3.35923 9.62258 3.34987 9.74421 3.34987 9.86585C3.34987 11.6623 5.43642 13.1126 8.01888 13.1126C10.6013 13.1126 12.6879 11.6623 12.6879 9.86585C12.6879 9.74421 12.6785 9.63193 12.6598 9.51965C13.0434 9.33252 13.3335 8.92082 13.3335 8.44363ZM5.3335 9.27638C5.3335 8.8179 5.70777 8.44363 6.16625 8.44363C6.62473 8.44363 6.999 8.8179 6.999 9.27638C6.999 9.73486 6.62473 10.1091 6.16625 10.1091C5.70777 10.1091 5.3335 9.73486 5.3335 9.27638ZM9.98379 11.4752C9.41303 12.046 8.32765 12.0834 8.00952 12.0834C7.69139 12.0834 6.59666 12.0366 6.03525 11.4752C5.95104 11.391 5.95104 11.2506 6.03525 11.1664C6.11946 11.0822 6.25982 11.0822 6.34403 11.1664C6.69958 11.522 7.46683 11.653 8.01888 11.653C8.57093 11.653 9.32882 11.522 9.69373 11.1664C9.77794 11.0822 9.9183 11.0822 10.0025 11.1664C10.068 11.26 10.068 11.391 9.98379 11.4752ZM9.83408 10.1091C9.37561 10.1091 9.00134 9.73486 9.00134 9.27638C9.00134 8.8179 9.37561 8.44363 9.83408 8.44363C10.2926 8.44363 10.6668 8.8179 10.6668 9.27638C10.6668 9.73486 10.2926 10.1091 9.83408 10.1091Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_13664_80014">
                                    <rect
                                      width="16"
                                      height="16"
                                      fill="white"
                                      transform="translate(0 0.443604)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              Share to Reddit
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              href="#"
                            >
                              <svg
                                className="mr-2 h-4 w-4"
                                aria-hidden="true"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g>
                                  <path
                                    d="M14.8189 0.443604H1.18111C0.867861 0.443604 0.567441 0.568042 0.34594 0.789543C0.124438 1.01104 0 1.31146 0 1.62471V15.2625C0 15.5757 0.124438 15.8762 0.34594 16.0977C0.567441 16.3192 0.867861 16.4436 1.18111 16.4436H14.8189C15.1321 16.4436 15.4326 16.3192 15.6541 16.0977C15.8756 15.8762 16 15.5757 16 15.2625V1.62471C16 1.31146 15.8756 1.01104 15.6541 0.789543C15.4326 0.568042 15.1321 0.443604 14.8189 0.443604ZM4.76889 14.0736H2.36333V6.43249H4.76889V14.0736ZM3.56445 5.3736C3.29158 5.37207 3.02528 5.28973 2.79916 5.137C2.57304 4.98426 2.39723 4.76796 2.29392 4.5154C2.19061 4.26284 2.16443 3.98533 2.21869 3.71791C2.27294 3.45048 2.4052 3.20512 2.59877 3.01279C2.79234 2.82046 3.03854 2.68978 3.30631 2.63724C3.57408 2.58471 3.85141 2.61267 4.1033 2.71759C4.35519 2.82252 4.57036 2.99971 4.72164 3.22681C4.87293 3.45391 4.95355 3.72073 4.95333 3.9936C4.95591 4.17629 4.92167 4.35763 4.85267 4.52681C4.78368 4.69598 4.68132 4.84954 4.55171 4.97831C4.42211 5.10709 4.2679 5.20846 4.09828 5.27637C3.92867 5.34428 3.74711 5.37735 3.56445 5.3736ZM13.6356 14.0803H11.2311V9.90583C11.2311 8.67472 10.7078 8.29472 10.0322 8.29472C9.31889 8.29472 8.61889 8.83249 8.61889 9.93694V14.0803H6.21333V6.43805H8.52667V7.49694H8.55778C8.79 7.02694 9.60333 6.2236 10.8444 6.2236C12.1867 6.2236 13.6367 7.02027 13.6367 9.3536L13.6356 14.0803Z"
                                    fill="#0A66C2"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_13664_80017">
                                    <rect
                                      width="16"
                                      height="16"
                                      fill="white"
                                      transform="translate(0 0.443604)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              Share to Linkedin
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  }
                  trigger="hover"
                >
                  <button className="rounded-lg px-2 py-1 text-gray-400 hover:bg-gray-50 hover:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300">
                    <svg
                      className="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m5.953 7.467 6.094-2.612m.096 8.114L5.857 9.676m.305-1.192a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0ZM17 3.84a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Zm0 10.322a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Z"
                      />
                    </svg>
                    <span className="sr-only">Share social media</span>
                  </button>
                </Popover>
              </div>
              <h2>Best practices for setting up your prototype</h2>
              <p>
                <strong>Low fidelity or high fidelity?</strong> Fidelity refers
                to how close a prototype will be to the real deal. If you’re
                simply preparing a quick visual aid for a presentation, a
                low-fidelity prototype — like a wireframe with placeholder
                images and some basic text — would be more than enough. But if
                you’re going for more intricate usability testing, a
                high-fidelity prototype — with on-brand colors, fonts and
                imagery — could help get more pointed results.
              </p>
              <p>
                <strong>Consider your user</strong>. To create an intuitive user
                flow, try to think as your user would when interacting with your
                product. While you can fine-tune this during beta testing,
                considering your user’s needs and habits early on will save you
                time by setting you on the right path.
              </p>
              <p>
                <strong>Start from the inside out</strong>. A nice way to both
                organize your tasks and create more user-friendly prototypes is
                by building your prototypes ‘inside out’. Start by focusing on
                what will be important to your user, like a Buy now button or an
                image gallery, and list each element by order of priority. This
                way, you’ll be able to create a prototype that puts your users’
                needs at the heart of your design.
              </p>
              <p>
                And there you have it! Everything you need to design and share
                prototypes — right in Flowbite Figma.
              </p>
            </div>
            <div className="mb-4 border-b border-gray-200 pb-3 dark:border-gray-700 lg:mb-8">
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-red-600">
                  1 hr ago
                </span>
                <Popover
                  content={
                    <div className="not-format">
                      <div className="rounded-t-lg border-b border-gray-200 bg-gray-50 px-3 py-1.5 dark:border-gray-600 dark:bg-gray-700">
                        <h3 className="!text-sm font-semibold text-gray-900 dark:text-white">
                          Share this post
                        </h3>
                      </div>
                      <div className="p-3">
                        <ul className="list-none space-y-2.5">
                          <li>
                            <a
                              className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              href="#"
                            >
                              <svg
                                className="mr-2 h-4 w-4"
                                aria-hidden="true"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.03168 15.0005C11.0694 15.0005 14.3718 9.99823 14.3718 5.66031C14.3718 5.51823 14.3718 5.37679 14.3622 5.23599C15.0047 4.77129 15.5593 4.19591 16 3.53679C15.4009 3.80239 14.7654 3.97649 14.1146 4.05327C14.7999 3.64306 15.3128 2.99779 15.5578 2.23759C14.9134 2.61999 14.2084 2.88947 13.4733 3.03439C12.9783 2.5081 12.3237 2.15961 11.6108 2.04284C10.8978 1.92607 10.1663 2.04753 9.52931 2.38842C8.89234 2.72931 8.38548 3.27064 8.08716 3.92862C7.78884 4.5866 7.71569 5.32456 7.87904 6.02831C6.57393 5.96284 5.29717 5.62366 4.13164 5.03279C2.9661 4.44192 1.93784 3.61256 1.1136 2.59855C0.693819 3.32121 0.565248 4.1767 0.754066 4.99083C0.942885 5.80496 1.43489 6.51652 2.12992 6.98063C1.60749 6.96532 1.09643 6.82438 0.64 6.56975V6.61135C0.640207 7.36925 0.902567 8.10374 1.38258 8.69026C1.86259 9.27677 2.53071 9.67919 3.2736 9.82927C2.79032 9.96109 2.28325 9.98036 1.79136 9.88559C2.00121 10.5378 2.40962 11.1081 2.95949 11.5169C3.50937 11.9256 4.17322 12.1523 4.85824 12.1653C4.17763 12.7003 3.39821 13.0958 2.56458 13.3293C1.73096 13.5627 0.859476 13.6296 0 13.5259C1.50122 14.4893 3.24795 15.0002 5.03168 14.9979"
                                  fill="#1DA1F2"
                                />
                              </svg>
                              Tweet this post
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              href="#"
                            >
                              <svg
                                className="mr-2 h-4 w-4"
                                aria-hidden="true"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g>
                                  <path
                                    d="M16 8.4436C16 4.02532 12.4183 0.443604 8 0.443604C3.58172 0.443604 0 4.02532 0 8.4436C0 12.4366 2.92547 15.7463 6.75 16.3464V10.7561H4.71875V8.4436H6.75V6.6811C6.75 4.6761 7.94438 3.5686 9.77172 3.5686C10.6467 3.5686 11.5625 3.72485 11.5625 3.72485V5.6936H10.5538C9.56 5.6936 9.25 6.31032 9.25 6.9436V8.4436H11.4688L11.1141 10.7561H9.25V16.3464C13.0745 15.7463 16 12.4366 16 8.4436Z"
                                    fill="#1877F2"
                                  />
                                  <path
                                    d="M11.1141 10.7561L11.4688 8.4436H9.25V6.9436C9.25 6.31095 9.56 5.6936 10.5538 5.6936H11.5625V3.72485C11.5625 3.72485 10.647 3.5686 9.77172 3.5686C7.94438 3.5686 6.75 4.6761 6.75 6.6811V8.4436H4.71875V10.7561H6.75V16.3464C7.5783 16.476 8.4217 16.476 9.25 16.3464V10.7561H11.1141Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_13664_80011">
                                    <rect
                                      width="16"
                                      height="16"
                                      fill="white"
                                      transform="translate(0 0.443604)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              Share to Facebook
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              href="#"
                            >
                              <svg
                                className="mr-2 h-4 w-4"
                                aria-hidden="true"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g>
                                  <path
                                    d="M8 16.4436C12.4183 16.4436 16 12.8619 16 8.4436C16 4.02533 12.4183 0.443604 8 0.443604C3.58172 0.443604 0 4.02533 0 8.4436C0 12.8619 3.58172 16.4436 8 16.4436Z"
                                    fill="#FF4500"
                                  />
                                  <path
                                    d="M13.3335 8.44363C13.3335 7.79801 12.8095 7.27404 12.1639 7.27404C11.8458 7.27404 11.5651 7.39567 11.3592 7.60152C10.5639 7.03076 9.45982 6.65649 8.24344 6.60971L8.77677 4.11146L10.5078 4.47638C10.5265 4.91614 10.8914 5.2717 11.3405 5.2717C11.799 5.2717 12.1733 4.89743 12.1733 4.43895C12.1733 3.98047 11.799 3.6062 11.3405 3.6062C11.013 3.6062 10.7323 3.79334 10.6013 4.07404L8.66449 3.66234C8.60835 3.65299 8.55221 3.66234 8.50543 3.69041C8.45865 3.71848 8.43058 3.76527 8.41186 3.82141L7.82239 6.60971C6.57794 6.64714 5.46449 7.01205 4.65982 7.60152C4.45397 7.40503 4.16391 7.27404 3.85514 7.27404C3.20952 7.27404 2.68555 7.79801 2.68555 8.44363C2.68555 8.92082 2.96625 9.32316 3.37794 9.5103C3.35923 9.62258 3.34987 9.74421 3.34987 9.86585C3.34987 11.6623 5.43642 13.1126 8.01888 13.1126C10.6013 13.1126 12.6879 11.6623 12.6879 9.86585C12.6879 9.74421 12.6785 9.63193 12.6598 9.51965C13.0434 9.33252 13.3335 8.92082 13.3335 8.44363ZM5.3335 9.27638C5.3335 8.8179 5.70777 8.44363 6.16625 8.44363C6.62473 8.44363 6.999 8.8179 6.999 9.27638C6.999 9.73486 6.62473 10.1091 6.16625 10.1091C5.70777 10.1091 5.3335 9.73486 5.3335 9.27638ZM9.98379 11.4752C9.41303 12.046 8.32765 12.0834 8.00952 12.0834C7.69139 12.0834 6.59666 12.0366 6.03525 11.4752C5.95104 11.391 5.95104 11.2506 6.03525 11.1664C6.11946 11.0822 6.25982 11.0822 6.34403 11.1664C6.69958 11.522 7.46683 11.653 8.01888 11.653C8.57093 11.653 9.32882 11.522 9.69373 11.1664C9.77794 11.0822 9.9183 11.0822 10.0025 11.1664C10.068 11.26 10.068 11.391 9.98379 11.4752ZM9.83408 10.1091C9.37561 10.1091 9.00134 9.73486 9.00134 9.27638C9.00134 8.8179 9.37561 8.44363 9.83408 8.44363C10.2926 8.44363 10.6668 8.8179 10.6668 9.27638C10.6668 9.73486 10.2926 10.1091 9.83408 10.1091Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_13664_80014">
                                    <rect
                                      width="16"
                                      height="16"
                                      fill="white"
                                      transform="translate(0 0.443604)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              Share to Reddit
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              href="#"
                            >
                              <svg
                                className="mr-2 h-4 w-4"
                                aria-hidden="true"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g>
                                  <path
                                    d="M14.8189 0.443604H1.18111C0.867861 0.443604 0.567441 0.568042 0.34594 0.789543C0.124438 1.01104 0 1.31146 0 1.62471V15.2625C0 15.5757 0.124438 15.8762 0.34594 16.0977C0.567441 16.3192 0.867861 16.4436 1.18111 16.4436H14.8189C15.1321 16.4436 15.4326 16.3192 15.6541 16.0977C15.8756 15.8762 16 15.5757 16 15.2625V1.62471C16 1.31146 15.8756 1.01104 15.6541 0.789543C15.4326 0.568042 15.1321 0.443604 14.8189 0.443604ZM4.76889 14.0736H2.36333V6.43249H4.76889V14.0736ZM3.56445 5.3736C3.29158 5.37207 3.02528 5.28973 2.79916 5.137C2.57304 4.98426 2.39723 4.76796 2.29392 4.5154C2.19061 4.26284 2.16443 3.98533 2.21869 3.71791C2.27294 3.45048 2.4052 3.20512 2.59877 3.01279C2.79234 2.82046 3.03854 2.68978 3.30631 2.63724C3.57408 2.58471 3.85141 2.61267 4.1033 2.71759C4.35519 2.82252 4.57036 2.99971 4.72164 3.22681C4.87293 3.45391 4.95355 3.72073 4.95333 3.9936C4.95591 4.17629 4.92167 4.35763 4.85267 4.52681C4.78368 4.69598 4.68132 4.84954 4.55171 4.97831C4.42211 5.10709 4.2679 5.20846 4.09828 5.27637C3.92867 5.34428 3.74711 5.37735 3.56445 5.3736ZM13.6356 14.0803H11.2311V9.90583C11.2311 8.67472 10.7078 8.29472 10.0322 8.29472C9.31889 8.29472 8.61889 8.83249 8.61889 9.93694V14.0803H6.21333V6.43805H8.52667V7.49694H8.55778C8.79 7.02694 9.60333 6.2236 10.8444 6.2236C12.1867 6.2236 13.6367 7.02027 13.6367 9.3536L13.6356 14.0803Z"
                                    fill="#0A66C2"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_13664_80017">
                                    <rect
                                      width="16"
                                      height="16"
                                      fill="white"
                                      transform="translate(0 0.443604)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              Share to Linkedin
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  }
                  trigger="hover"
                >
                  <button className="rounded-lg px-2 py-1 text-gray-400 hover:bg-gray-50 hover:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300">
                    <svg
                      className="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m5.953 7.467 6.094-2.612m.096 8.114L5.857 9.676m.305-1.192a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0ZM17 3.84a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Zm0 10.322a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Z"
                      />
                    </svg>
                    <span className="sr-only">Share social media</span>
                  </button>
                </Popover>
              </div>
              <h2>Getting started with Flowbite</h2>
              <p className="lead">
                Flowbite is an open-source library of UI components built with
                the utility-first classes from Tailwind CSS. It also includes
                interactive elements such as dropdowns, modals, datepickers.
              </p>
              <p>
                Before going digital, you might benefit from scribbling down
                some ideas in a sketchbook. This way, you can think things
                through before committing to an actual design project.
              </p>
              <p>
                But then I found a{" "}
                <a href="https://flowbite.com">
                  component library based on Tailwind CSS called Flowbite
                </a>
                . It comes with the most commonly used UI components, such as
                buttons, navigation bars, cards, form elements, and more which
                are conveniently built with the utility classes from Tailwind
                CSS.
              </p>
              <figure>
                <img
                  src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
                  alt=""
                  className="mx-auto"
                />
                <figcaption>Digital art by Anonymous</figcaption>
              </figure>
              <p>
                Before going digital, you might benefit from scribbling down
                some ideas in a sketchbook. This way, you can think things
                through before committing to an actual design project.
              </p>
              <p>
                But then I found a{" "}
                <a href="https://flowbite.com">
                  component library based on Tailwind CSS called Flowbite
                </a>
                . It comes with the most commonly used UI components, such as
                buttons, navigation bars, cards, form elements, and more which
                are conveniently built with the utility classes from Tailwind
                CSS.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-red-600">
                  2 hr 5 min ago
                </span>
                <Popover
                  content={
                    <div className="not-format">
                      <div className="rounded-t-lg border-b border-gray-200 bg-gray-50 px-3 py-1.5 dark:border-gray-600 dark:bg-gray-700">
                        <h3 className="!text-sm font-semibold text-gray-900 dark:text-white">
                          Share this post
                        </h3>
                      </div>
                      <div className="p-3">
                        <ul className="list-none space-y-2.5">
                          <li>
                            <a
                              className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              href="#"
                            >
                              <svg
                                className="mr-2 h-4 w-4"
                                aria-hidden="true"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.03168 15.0005C11.0694 15.0005 14.3718 9.99823 14.3718 5.66031C14.3718 5.51823 14.3718 5.37679 14.3622 5.23599C15.0047 4.77129 15.5593 4.19591 16 3.53679C15.4009 3.80239 14.7654 3.97649 14.1146 4.05327C14.7999 3.64306 15.3128 2.99779 15.5578 2.23759C14.9134 2.61999 14.2084 2.88947 13.4733 3.03439C12.9783 2.5081 12.3237 2.15961 11.6108 2.04284C10.8978 1.92607 10.1663 2.04753 9.52931 2.38842C8.89234 2.72931 8.38548 3.27064 8.08716 3.92862C7.78884 4.5866 7.71569 5.32456 7.87904 6.02831C6.57393 5.96284 5.29717 5.62366 4.13164 5.03279C2.9661 4.44192 1.93784 3.61256 1.1136 2.59855C0.693819 3.32121 0.565248 4.1767 0.754066 4.99083C0.942885 5.80496 1.43489 6.51652 2.12992 6.98063C1.60749 6.96532 1.09643 6.82438 0.64 6.56975V6.61135C0.640207 7.36925 0.902567 8.10374 1.38258 8.69026C1.86259 9.27677 2.53071 9.67919 3.2736 9.82927C2.79032 9.96109 2.28325 9.98036 1.79136 9.88559C2.00121 10.5378 2.40962 11.1081 2.95949 11.5169C3.50937 11.9256 4.17322 12.1523 4.85824 12.1653C4.17763 12.7003 3.39821 13.0958 2.56458 13.3293C1.73096 13.5627 0.859476 13.6296 0 13.5259C1.50122 14.4893 3.24795 15.0002 5.03168 14.9979"
                                  fill="#1DA1F2"
                                />
                              </svg>
                              Tweet this post
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              href="#"
                            >
                              <svg
                                className="mr-2 h-4 w-4"
                                aria-hidden="true"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g>
                                  <path
                                    d="M16 8.4436C16 4.02532 12.4183 0.443604 8 0.443604C3.58172 0.443604 0 4.02532 0 8.4436C0 12.4366 2.92547 15.7463 6.75 16.3464V10.7561H4.71875V8.4436H6.75V6.6811C6.75 4.6761 7.94438 3.5686 9.77172 3.5686C10.6467 3.5686 11.5625 3.72485 11.5625 3.72485V5.6936H10.5538C9.56 5.6936 9.25 6.31032 9.25 6.9436V8.4436H11.4688L11.1141 10.7561H9.25V16.3464C13.0745 15.7463 16 12.4366 16 8.4436Z"
                                    fill="#1877F2"
                                  />
                                  <path
                                    d="M11.1141 10.7561L11.4688 8.4436H9.25V6.9436C9.25 6.31095 9.56 5.6936 10.5538 5.6936H11.5625V3.72485C11.5625 3.72485 10.647 3.5686 9.77172 3.5686C7.94438 3.5686 6.75 4.6761 6.75 6.6811V8.4436H4.71875V10.7561H6.75V16.3464C7.5783 16.476 8.4217 16.476 9.25 16.3464V10.7561H11.1141Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_13664_80011">
                                    <rect
                                      width="16"
                                      height="16"
                                      fill="white"
                                      transform="translate(0 0.443604)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              Share to Facebook
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              href="#"
                            >
                              <svg
                                className="mr-2 h-4 w-4"
                                aria-hidden="true"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g>
                                  <path
                                    d="M8 16.4436C12.4183 16.4436 16 12.8619 16 8.4436C16 4.02533 12.4183 0.443604 8 0.443604C3.58172 0.443604 0 4.02533 0 8.4436C0 12.8619 3.58172 16.4436 8 16.4436Z"
                                    fill="#FF4500"
                                  />
                                  <path
                                    d="M13.3335 8.44363C13.3335 7.79801 12.8095 7.27404 12.1639 7.27404C11.8458 7.27404 11.5651 7.39567 11.3592 7.60152C10.5639 7.03076 9.45982 6.65649 8.24344 6.60971L8.77677 4.11146L10.5078 4.47638C10.5265 4.91614 10.8914 5.2717 11.3405 5.2717C11.799 5.2717 12.1733 4.89743 12.1733 4.43895C12.1733 3.98047 11.799 3.6062 11.3405 3.6062C11.013 3.6062 10.7323 3.79334 10.6013 4.07404L8.66449 3.66234C8.60835 3.65299 8.55221 3.66234 8.50543 3.69041C8.45865 3.71848 8.43058 3.76527 8.41186 3.82141L7.82239 6.60971C6.57794 6.64714 5.46449 7.01205 4.65982 7.60152C4.45397 7.40503 4.16391 7.27404 3.85514 7.27404C3.20952 7.27404 2.68555 7.79801 2.68555 8.44363C2.68555 8.92082 2.96625 9.32316 3.37794 9.5103C3.35923 9.62258 3.34987 9.74421 3.34987 9.86585C3.34987 11.6623 5.43642 13.1126 8.01888 13.1126C10.6013 13.1126 12.6879 11.6623 12.6879 9.86585C12.6879 9.74421 12.6785 9.63193 12.6598 9.51965C13.0434 9.33252 13.3335 8.92082 13.3335 8.44363ZM5.3335 9.27638C5.3335 8.8179 5.70777 8.44363 6.16625 8.44363C6.62473 8.44363 6.999 8.8179 6.999 9.27638C6.999 9.73486 6.62473 10.1091 6.16625 10.1091C5.70777 10.1091 5.3335 9.73486 5.3335 9.27638ZM9.98379 11.4752C9.41303 12.046 8.32765 12.0834 8.00952 12.0834C7.69139 12.0834 6.59666 12.0366 6.03525 11.4752C5.95104 11.391 5.95104 11.2506 6.03525 11.1664C6.11946 11.0822 6.25982 11.0822 6.34403 11.1664C6.69958 11.522 7.46683 11.653 8.01888 11.653C8.57093 11.653 9.32882 11.522 9.69373 11.1664C9.77794 11.0822 9.9183 11.0822 10.0025 11.1664C10.068 11.26 10.068 11.391 9.98379 11.4752ZM9.83408 10.1091C9.37561 10.1091 9.00134 9.73486 9.00134 9.27638C9.00134 8.8179 9.37561 8.44363 9.83408 8.44363C10.2926 8.44363 10.6668 8.8179 10.6668 9.27638C10.6668 9.73486 10.2926 10.1091 9.83408 10.1091Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_13664_80014">
                                    <rect
                                      width="16"
                                      height="16"
                                      fill="white"
                                      transform="translate(0 0.443604)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              Share to Reddit
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                              href="#"
                            >
                              <svg
                                className="mr-2 h-4 w-4"
                                aria-hidden="true"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g>
                                  <path
                                    d="M14.8189 0.443604H1.18111C0.867861 0.443604 0.567441 0.568042 0.34594 0.789543C0.124438 1.01104 0 1.31146 0 1.62471V15.2625C0 15.5757 0.124438 15.8762 0.34594 16.0977C0.567441 16.3192 0.867861 16.4436 1.18111 16.4436H14.8189C15.1321 16.4436 15.4326 16.3192 15.6541 16.0977C15.8756 15.8762 16 15.5757 16 15.2625V1.62471C16 1.31146 15.8756 1.01104 15.6541 0.789543C15.4326 0.568042 15.1321 0.443604 14.8189 0.443604ZM4.76889 14.0736H2.36333V6.43249H4.76889V14.0736ZM3.56445 5.3736C3.29158 5.37207 3.02528 5.28973 2.79916 5.137C2.57304 4.98426 2.39723 4.76796 2.29392 4.5154C2.19061 4.26284 2.16443 3.98533 2.21869 3.71791C2.27294 3.45048 2.4052 3.20512 2.59877 3.01279C2.79234 2.82046 3.03854 2.68978 3.30631 2.63724C3.57408 2.58471 3.85141 2.61267 4.1033 2.71759C4.35519 2.82252 4.57036 2.99971 4.72164 3.22681C4.87293 3.45391 4.95355 3.72073 4.95333 3.9936C4.95591 4.17629 4.92167 4.35763 4.85267 4.52681C4.78368 4.69598 4.68132 4.84954 4.55171 4.97831C4.42211 5.10709 4.2679 5.20846 4.09828 5.27637C3.92867 5.34428 3.74711 5.37735 3.56445 5.3736ZM13.6356 14.0803H11.2311V9.90583C11.2311 8.67472 10.7078 8.29472 10.0322 8.29472C9.31889 8.29472 8.61889 8.83249 8.61889 9.93694V14.0803H6.21333V6.43805H8.52667V7.49694H8.55778C8.79 7.02694 9.60333 6.2236 10.8444 6.2236C12.1867 6.2236 13.6367 7.02027 13.6367 9.3536L13.6356 14.0803Z"
                                    fill="#0A66C2"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_13664_80017">
                                    <rect
                                      width="16"
                                      height="16"
                                      fill="white"
                                      transform="translate(0 0.443604)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              Share to Linkedin
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  }
                  trigger="hover"
                >
                  <button className="rounded-lg px-2 py-1 text-gray-400 hover:bg-gray-50 hover:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300">
                    <svg
                      className="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m5.953 7.467 6.094-2.612m.096 8.114L5.857 9.676m.305-1.192a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0ZM17 3.84a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Zm0 10.322a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Z"
                      />
                    </svg>
                    <span className="sr-only">Share social media</span>
                  </button>
                </Popover>
              </div>
              <h2>When does design come in handy?</h2>
              <p>
                First of all you need to understand how Flowbite works. This
                library is not another framework. Rather, it is a set of
                components based on Tailwind CSS that you can just copy-paste
                from the documentation.
              </p>
              <p>
                It also includes a JavaScript file that enables interactive
                components, such as modals, dropdowns, and datepickers which you
                can optionally include into your project via CDN or NPM.
              </p>
              <p>
                You can check out the{" "}
                <a href="https://flowbite.com/docs/getting-started/quickstart/">
                  quickstart guide
                </a>{" "}
                to explore the elements by including the CDN files into your
                project. But if you want to build a project with Flowbite I
                recommend you to follow the build tools steps so that you can
                purge and minify the generated CSS.
              </p>
              <p>
                You'll also receive a lot of useful application UI, marketing
                UI, and e-commerce pages that can help you get started with your
                projects even faster. You can check out this{" "}
                <a href="https://flowbite.com/docs/components/tables/">
                  comparison table
                </a>{" "}
                to better understand the differences between the open-source and
                pro version of Flowbite.
              </p>
            </div>
          </article>
          <aside className="hidden xl:block" aria-labelledby="sidebar-label">
            <div className="sticky top-6 xl:w-[336px]">
              <h3 id="sidebar-label" className="sr-only">
                Sidebar
              </h3>
              <div className="mb-6 rounded-lg">
                <h4 className="mb-2 text-sm font-bold uppercase text-gray-900 dark:text-white">
                  Flowbite News morning headlines
                </h4>
                <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                  Get all the stories you need-to-know from the most powerful
                  name in news delivered first thing every morning to your inbox
                </p>
                <form action="#">
                  <label htmlFor="email-address-icon" className="sr-only">
                    Your Email
                  </label>
                  <TextInput
                    icon={HiMail}
                    id="email-address-icon"
                    name="email-address-icon"
                    placeholder="name@company.com"
                    required
                    type="text"
                    className="mb-3"
                  />
                  <Button type="submit" className="w-full [&>span]:py-2.5">
                    Subscribe
                  </Button>
                </form>
              </div>
              <div className="mb-12">
                <h4 className="mb-4 text-sm font-bold uppercase text-gray-900 dark:text-white">
                  Latest news
                </h4>
                <div className="mb-6 flex items-center">
                  <a href="#" className="shrink-0">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png"
                      className="mr-4 h-24 w-24 max-w-full rounded-full"
                      alt=""
                    />
                  </a>
                  <div>
                    <h5 className="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white">
                      Constructing Search & Filter with Flowbite
                    </h5>
                    <a
                      href="#"
                      className="inline-flex items-center font-medium text-primary-600 underline underline-offset-4 hover:no-underline dark:text-primary-500"
                    >
                      Read in 9 minutes
                    </a>
                  </div>
                </div>
                <div className="mb-6 flex items-center">
                  <a href="#" className="shrink-0">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png"
                      className="mr-4 h-24 w-24 max-w-full rounded-full"
                      alt=""
                    />
                  </a>
                  <div>
                    <h5 className="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white">
                      "No-Build Required" React Framework
                    </h5>
                    <a
                      href="#"
                      className="inline-flex items-center font-medium text-primary-600 underline underline-offset-4 hover:no-underline dark:text-primary-500"
                    >
                      Read in 14 minutes
                    </a>
                  </div>
                </div>
                <div className="mb-6 flex items-center">
                  <a href="#" className="shrink-0">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png"
                      className="mr-4 h-24 w-24 max-w-full rounded-full"
                      alt=""
                    />
                  </a>
                  <div>
                    <h5 className="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white">
                      "Using Flowbite to improve app performance
                    </h5>
                    <a
                      href="#"
                      className="inline-flex items-center font-medium text-primary-600 underline underline-offset-4 hover:no-underline dark:text-primary-500"
                    >
                      Read in 14 minutes
                    </a>
                  </div>
                </div>
                <div className="mb-6 flex items-center">
                  <a href="#" className="shrink-0">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-3.png"
                      className="mr-4 h-24 w-24 max-w-full rounded-full"
                      alt=""
                    />
                  </a>
                  <div>
                    <h5 className="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white">
                      Solid hooks system for Javascript and NodeJS
                    </h5>
                    <a
                      href="#"
                      className="inline-flex items-center font-medium text-primary-600 underline underline-offset-4 hover:no-underline dark:text-primary-500"
                    >
                      Read in 9 minutes
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-3 flex h-48 w-full items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                  <svg
                    aria-hidden="true"
                    className="h-8 w-8 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p className="mb-2 text-sm  text-gray-500 dark:text-gray-400">
                  Students and Teachers, save up to 60% on Flowbite Creative
                  Cloud.
                </p>
                <p className="text-xs  uppercase text-gray-400 dark:text-gray-500">
                  Ads placeholder
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <aside
        aria-label="Related articles"
        className="bg-gray-50 py-8 antialiased dark:bg-gray-800 lg:py-16"
      >
        <div className="mx-auto w-full max-w-screen-xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            Trending on Flowbite
          </h2>
          <div className="h-[32rem]">
            <Carousel
              indicators={false}
              leftControl={
                <span className="group mr-4 flex h-full cursor-pointer items-center justify-center focus:outline-none">
                  <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 5H1m0 0 4 4M1 5l4-4"
                      />
                    </svg>
                    <span className="hidden">Previous</span>
                  </span>
                </span>
              }
              rightControl={
                <span className="group flex h-full cursor-pointer items-center justify-center focus:outline-none">
                  <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                    <span className="hidden">Next</span>
                  </span>
                </span>
              }
              theme={{
                root: {
                  leftControl: "mx-auto inline",
                  rightControl: "mx-auto inline",
                },
              }}
              className="text-center first:[&>div]:text-left"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <article className="mx-auto max-w-sm rounded-lg bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-900">
                  <a href="#">
                    <img
                      className="mb-5 rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png"
                      alt="office laptop working"
                    />
                  </a>
                  <Avatar
                    img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    rounded
                    size="sm"
                    className="mb-3 justify-start"
                  >
                    <div className="font-medium dark:text-white">
                      <div>Jese Leos</div>
                      <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Aug 15, 2021 · 16 min read
                      </div>
                    </div>
                  </Avatar>
                  <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-2xl">
                    <a href="#">Our first office</a>
                  </h3>
                  <p className="mb-3 text-gray-500 dark:text-gray-400">
                    Over the past year, Volosoft has undergone many changes!
                    After months of preparation and some hard work, we moved to
                    our new office.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 hover:no-underline dark:text-primary-500"
                  >
                    Read more{" "}
                    <svg
                      className="ml-1 mt-px h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </article>
                <article className="mx-auto hidden max-w-sm rounded-lg bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-900 sm:block">
                  <a href="#">
                    <img
                      className="mb-5 rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png"
                      alt="google hq"
                    />
                  </a>
                  <Avatar
                    img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                    rounded
                    size="sm"
                    className="mb-3 justify-start"
                  >
                    <div className="font-medium dark:text-white">
                      <div>Roberta Casas</div>
                      <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Aug 15, 2021 · 16 min read
                      </div>
                    </div>
                  </Avatar>
                  <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-2xl">
                    <a href="#">We partnered up with Google</a>
                  </h3>
                  <p className="mb-3 text-gray-500 dark:text-gray-400">
                    Over the past year, Volosoft has undergone many changes!
                    After months of preparation and some hard work, we moved to
                    our new office.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 hover:no-underline dark:text-primary-500"
                  >
                    Read more{" "}
                    <svg
                      className="ml-1 mt-px h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </article>
                <article className="mx-auto hidden max-w-sm rounded-lg bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-900 xl:block">
                  <a href="#">
                    <img
                      className="mb-5 rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png"
                      alt="office laptop working"
                    />
                  </a>
                  <div className="mb-3 flex items-center space-x-2">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                      alt=""
                    />
                    <div className="font-medium dark:text-white">
                      <div>Sofia McGuire</div>
                      <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Aug 15, 2021 · 16 min read
                      </div>
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-2xl">
                    <a href="#">Our first project with React</a>
                  </h3>
                  <p className="mb-3 text-gray-500 dark:text-gray-400">
                    Over the past year, Volosoft has undergone many changes!
                    After months of preparation and some hard work, we moved to
                    our new office.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 hover:no-underline dark:text-primary-500"
                  >
                    Read more{" "}
                    <svg
                      className="ml-1 mt-px h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </article>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <article className="mx-auto max-w-sm rounded-lg bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-900">
                  <a href="#">
                    <img
                      className="mb-5 rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png"
                      alt="office laptop working"
                    />
                  </a>
                  <Avatar
                    img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    rounded
                    size="sm"
                    className="mb-3 justify-start"
                  >
                    <div className="font-medium dark:text-white">
                      <div>Jese Leos</div>
                      <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Aug 15, 2021 · 16 min read
                      </div>
                    </div>
                  </Avatar>
                  <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-2xl">
                    <a href="#">Our first office</a>
                  </h3>
                  <p className="mb-3 text-gray-500 dark:text-gray-400">
                    Over the past year, Volosoft has undergone many changes!
                    After months of preparation and some hard work, we moved to
                    our new office.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 hover:no-underline dark:text-primary-500"
                  >
                    Read more{" "}
                    <svg
                      className="ml-1 mt-px h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </article>
                <article className="mx-auto hidden max-w-sm rounded-lg bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-900 sm:block">
                  <a href="#">
                    <img
                      className="mb-5 rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png"
                      alt="google hq"
                    />
                  </a>
                  <Avatar
                    img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                    rounded
                    size="sm"
                    className="mb-3 justify-start"
                  >
                    <div className="font-medium dark:text-white">
                      <div>Roberta Casas</div>
                      <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Aug 15, 2021 · 16 min read
                      </div>
                    </div>
                  </Avatar>
                  <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-2xl">
                    <a href="#">We partnered up with Google</a>
                  </h3>
                  <p className="mb-3 text-gray-500 dark:text-gray-400">
                    Over the past year, Volosoft has undergone many changes!
                    After months of preparation and some hard work, we moved to
                    our new office.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 hover:no-underline dark:text-primary-500"
                  >
                    Read more{" "}
                    <svg
                      className="ml-1 mt-px h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </article>
                <article className="mx-auto hidden max-w-sm rounded-lg bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-900 xl:block">
                  <a href="#">
                    <img
                      className="mb-5 rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png"
                      alt="office laptop working"
                    />
                  </a>
                  <div className="mb-3 flex items-center space-x-2">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                      alt=""
                    />
                    <div className="font-medium dark:text-white">
                      <div>Sofia McGuire</div>
                      <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Aug 15, 2021 · 16 min read
                      </div>
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-2xl">
                    <a href="#">Our first project with React</a>
                  </h3>
                  <p className="mb-3 text-gray-500 dark:text-gray-400">
                    Over the past year, Volosoft has undergone many changes!
                    After months of preparation and some hard work, we moved to
                    our new office.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 hover:no-underline dark:text-primary-500"
                  >
                    Read more{" "}
                    <svg
                      className="ml-1 mt-px h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </article>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <article className="mx-auto max-w-sm rounded-lg bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-900">
                  <a href="#">
                    <img
                      className="mb-5 rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png"
                      alt="office laptop working"
                    />
                  </a>
                  <Avatar
                    img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    rounded
                    size="sm"
                    className="mb-3 justify-start"
                  >
                    <div className="font-medium dark:text-white">
                      <div>Jese Leos</div>
                      <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Aug 15, 2021 · 16 min read
                      </div>
                    </div>
                  </Avatar>
                  <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-2xl">
                    <a href="#">Our first office</a>
                  </h3>
                  <p className="mb-3 text-gray-500 dark:text-gray-400">
                    Over the past year, Volosoft has undergone many changes!
                    After months of preparation and some hard work, we moved to
                    our new office.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 hover:no-underline dark:text-primary-500"
                  >
                    Read more{" "}
                    <svg
                      className="ml-1 mt-px h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </article>
                <article className="mx-auto hidden max-w-sm rounded-lg bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-900 sm:block">
                  <a href="#">
                    <img
                      className="mb-5 rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png"
                      alt="google hq"
                    />
                  </a>
                  <Avatar
                    img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                    rounded
                    size="sm"
                    className="mb-3 justify-start"
                  >
                    <div className="font-medium dark:text-white">
                      <div>Roberta Casas</div>
                      <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Aug 15, 2021 · 16 min read
                      </div>
                    </div>
                  </Avatar>
                  <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-2xl">
                    <a href="#">We partnered up with Google</a>
                  </h3>
                  <p className="mb-3 text-gray-500 dark:text-gray-400">
                    Over the past year, Volosoft has undergone many changes!
                    After months of preparation and some hard work, we moved to
                    our new office.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 hover:no-underline dark:text-primary-500"
                  >
                    Read more{" "}
                    <svg
                      className="ml-1 mt-px h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </article>
                <article className="mx-auto hidden max-w-sm rounded-lg bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-900 xl:block">
                  <a href="#">
                    <img
                      className="mb-5 rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png"
                      alt="office laptop working"
                    />
                  </a>
                  <div className="mb-3 flex items-center space-x-2">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                      alt=""
                    />
                    <div className="font-medium dark:text-white">
                      <div>Sofia McGuire</div>
                      <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Aug 15, 2021 · 16 min read
                      </div>
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-2xl">
                    <a href="#">Our first project with React</a>
                  </h3>
                  <p className="mb-3 text-gray-500 dark:text-gray-400">
                    Over the past year, Volosoft has undergone many changes!
                    After months of preparation and some hard work, we moved to
                    our new office.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 hover:no-underline dark:text-primary-500"
                  >
                    Read more{" "}
                    <svg
                      className="ml-1 mt-px h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </article>
              </div>
            </Carousel>
          </div>
        </div>
      </aside>
      <section className="bg-white antialiased dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Live news. Innovative interviews.
            </h2>
            <p className="mb-6 text-gray-500 dark:text-gray-400 md:text-lg">
              As a subscriber, you can stay informed with the live news, stream
              exclusive films and unique interactive interviews.
            </p>
            <Button size="lg" className="mx-auto">
              Subscribe Now
            </Button>
          </div>
        </div>
      </section>
      <Footer className="rounded-none bg-gray-50 antialiased dark:bg-gray-800">
        <div className="mx-auto w-full p-4 py-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
            <div>
              <Footer.Title title="New York" className="text-gray-900" />
              <address className="not-italic">
                <p className="mb-3 text-gray-500 dark:text-gray-400">
                  Huntersville,
                  <br /> 957 Hill Hills Suite 491, United States
                </p>
                <ul className="space-y-3 text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 14 20"
                    >
                      <path d="M12 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.5 17.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2ZM12 13H2V4h10v9Z" />
                    </svg>
                    Office: +12(3) 456 7890 1234
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                    Support:{" "}
                    <a
                      href="mailto:company@name.com"
                      className="ml-2 hover:underline"
                    >
                      company@name.com
                    </a>
                  </li>
                </ul>
              </address>
            </div>
            <div>
              <Footer.Title title="Rome" className="text-gray-900" />
              <address className="not-italic">
                <p className="mb-3 text-gray-500 dark:text-gray-400">
                  Piazza di Spagna,
                  <br /> 00187 Roma RM, Italy
                </p>
                <ul className="space-y-3 text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 14 20"
                    >
                      <path d="M12 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.5 17.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2ZM12 13H2V4h10v9Z" />
                    </svg>
                    Office: +12(3) 456 7890 1234
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                    Support:{" "}
                    <a
                      href="mailto:company@name.com"
                      className="ml-2 hover:underline"
                    >
                      company@name.it
                    </a>
                  </li>
                </ul>
              </address>
            </div>
            <div>
              <Footer.Title title="London" className="text-gray-900" />
              <address className="not-italic">
                <p className="mb-3 text-gray-500 dark:text-gray-400">
                  Fulham Rd,
                  <br />
                  London SW6 1HS, United Kingdom
                </p>
                <ul className="space-y-3 text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 14 20"
                    >
                      <path d="M12 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.5 17.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2ZM12 13H2V4h10v9Z" />
                    </svg>
                    Office: +12(3) 456 7890 1234
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                    Support:{" "}
                    <a
                      href="mailto:company@name.com"
                      className="ml-2 hover:underline"
                    >
                      company@name.co.uk
                    </a>
                  </li>
                </ul>
              </address>
            </div>
          </div>
          <div className="mx-auto mt-6 max-w-screen-md items-center justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-700 sm:flex lg:mt-16">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Sign up to our newsletter
            </p>
            <form action="#" className="ml-0 mt-4 w-full sm:ml-5 sm:mt-0">
              <div className="mx-auto max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <TextInput
                    placeholder="Enter your email"
                    type="email"
                    icon={HiMail}
                    id="email"
                    name="email"
                    required
                    className="[&_input]:bg-white [&_input]:py-3 md:[&_input]:rounded-r-none"
                  />
                </div>
                <Button
                  size="lg"
                  type="submit"
                  className="w-full md:w-fit md:rounded-l-none [&>span]:py-3 [&>span]:text-sm"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
          <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <div className="flex w-full flex-col items-center justify-between md:flex-row">
            <a
              href="#"
              className="mb-5 flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <svg
                className="mr-2 h-8"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.2696 13.126C25.1955 13.6364 24.8589 14.3299 24.4728 14.9328C23.9856 15.6936 23.2125 16.2264 22.3276 16.4114L18.43 17.2265C17.8035 17.3575 17.2355 17.6853 16.8089 18.1621L14.2533 21.0188C13.773 21.5556 13.4373 21.4276 13.4373 20.7075C13.4315 20.7342 12.1689 23.9903 15.5149 25.9202C16.8005 26.6618 18.6511 26.3953 19.9367 25.6538L26.7486 21.7247C29.2961 20.2553 31.0948 17.7695 31.6926 14.892C31.7163 14.7781 31.7345 14.6639 31.7542 14.5498L25.2696 13.126Z"
                  fill="url(#paint0_linear_11430_22515)"
                />
                <path
                  d="M23.5028 9.20133C24.7884 9.94288 25.3137 11.0469 25.3137 12.53C25.3137 12.7313 25.2979 12.9302 25.2694 13.1261L28.0141 14.3051L31.754 14.5499C32.2329 11.7784 31.2944 8.92561 29.612 6.65804C28.3459 4.9516 26.7167 3.47073 24.7581 2.34097C23.167 1.42325 21.5136 0.818599 19.8525 0.486816L17.9861 2.90382L17.3965 5.67918L23.5028 9.20133Z"
                  fill="url(#paint1_linear_11430_22515)"
                />
                <path
                  d="M1.5336 11.2352C1.5329 11.2373 1.53483 11.238 1.53556 11.2358C1.67958 10.8038 1.86018 10.3219 2.08564 9.80704C3.26334 7.11765 5.53286 5.32397 8.32492 4.40943C11.117 3.49491 14.1655 3.81547 16.7101 5.28323L17.3965 5.67913L19.8525 0.486761C12.041 -1.07341 4.05728 3.51588 1.54353 11.2051C1.54233 11.2087 1.53796 11.2216 1.5336 11.2352Z"
                  fill="url(#paint2_linear_11430_22515)"
                />
                <path
                  d="M19.6699 25.6538C18.3843 26.3953 16.8003 26.3953 15.5147 25.6538C15.3402 25.5531 15.1757 25.4399 15.0201 25.3174L12.7591 26.8719L10.8103 30.0209C12.9733 31.821 15.7821 32.3997 18.589 32.0779C20.7013 31.8357 22.7995 31.1665 24.7582 30.0368C26.3492 29.1191 27.7 27.9909 28.8182 26.7195L27.6563 23.8962L25.7762 22.1316L19.6699 25.6538Z"
                  fill="url(#paint3_linear_11430_22515)"
                />
                <path
                  d="M15.0201 25.3175C14.0296 24.5373 13.4371 23.3406 13.4371 22.0588V21.931V11.2558C13.4371 10.6521 13.615 10.5494 14.1384 10.8513C13.3323 10.3864 11.4703 8.79036 9.17118 10.1165C7.88557 10.858 6.8269 12.4949 6.8269 13.978V21.8362C6.8269 24.775 8.34906 27.8406 10.5445 29.7966C10.6313 29.874 10.7212 29.9469 10.8103 30.0211L15.0201 25.3175Z"
                  fill="url(#paint4_linear_11430_22515)"
                />
                <path
                  d="M28.6604 5.49565C28.6589 5.49395 28.6573 5.49532 28.6589 5.49703C28.9613 5.83763 29.2888 6.23485 29.6223 6.68734C31.3648 9.05099 32.0158 12.0447 31.4126 14.9176C30.8093 17.7906 29.0071 20.2679 26.4625 21.7357L25.7761 22.1316L28.8181 26.7195C34.0764 20.741 34.09 11.5388 28.6815 5.51929C28.6789 5.51641 28.67 5.50622 28.6604 5.49565Z"
                  fill="url(#paint5_linear_11430_22515)"
                />
                <path
                  d="M7.09355 13.978C7.09354 12.4949 7.88551 11.1244 9.17113 10.3829C9.34564 10.2822 9.52601 10.1965 9.71002 10.1231L9.49304 7.38962L7.96861 4.26221C5.32671 5.23364 3.1897 7.24125 2.06528 9.83067C1.2191 11.7793 0.75001 13.9294 0.75 16.1888C0.75 18.0243 1.05255 19.7571 1.59553 21.3603L4.62391 21.7666L7.09355 21.0223V13.978Z"
                  fill="url(#paint6_linear_11430_22515)"
                />
                <path
                  d="M9.71016 10.1231C10.8817 9.65623 12.2153 9.74199 13.3264 10.3829L13.4372 10.4468L22.3326 15.5777C22.9566 15.9376 22.8999 16.2918 22.1946 16.4392L22.7078 16.332C23.383 16.1908 23.9999 15.8457 24.4717 15.3428C25.2828 14.4782 25.5806 13.4351 25.5806 12.5299C25.5806 11.0468 24.7886 9.67634 23.503 8.93479L16.6911 5.00568C14.1436 3.53627 11.0895 3.22294 8.29622 4.14442C8.18572 4.18087 8.07756 4.2222 7.96875 4.26221L9.71016 10.1231Z"
                  fill="url(#paint7_linear_11430_22515)"
                />
                <path
                  d="M20.0721 31.8357C20.0744 31.8352 20.0739 31.8332 20.0717 31.8337C19.6252 31.925 19.1172 32.0097 18.5581 32.0721C15.638 32.3978 12.7174 31.4643 10.5286 29.5059C8.33986 27.5474 7.09347 24.7495 7.09348 21.814L7.09347 21.0222L1.59546 21.3602C4.1488 28.8989 12.1189 33.5118 20.0411 31.8421C20.0449 31.8413 20.0582 31.8387 20.0721 31.8357Z"
                  fill="url(#paint8_linear_11430_22515)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_11430_22515"
                    x1="20.8102"
                    y1="23.9532"
                    x2="23.9577"
                    y2="12.9901"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1724C9" />
                    <stop offset="1" stop-color="#1C64F2" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_11430_22515"
                    x1="28.0593"
                    y1="10.5837"
                    x2="19.7797"
                    y2="2.33321"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1C64F2" />
                    <stop offset="1" stop-color="#0092FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_11430_22515"
                    x1="16.9145"
                    y1="5.2045"
                    x2="4.42432"
                    y2="5.99375"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0092FF" />
                    <stop offset="1" stop-color="#45B2FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_11430_22515"
                    x1="16.0698"
                    y1="28.846"
                    x2="27.2866"
                    y2="25.8192"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1C64F2" />
                    <stop offset="1" stop-color="#0092FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_11430_22515"
                    x1="8.01881"
                    y1="15.8661"
                    x2="15.9825"
                    y2="24.1181"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1724C9" />
                    <stop offset="1" stop-color="#1C64F2" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_11430_22515"
                    x1="26.2004"
                    y1="21.8189"
                    x2="31.7569"
                    y2="10.6178"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0092FF" />
                    <stop offset="1" stop-color="#45B2FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_11430_22515"
                    x1="6.11387"
                    y1="9.31427"
                    x2="3.14054"
                    y2="20.4898"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1C64F2" />
                    <stop offset="1" stop-color="#0092FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint7_linear_11430_22515"
                    x1="21.2932"
                    y1="8.78271"
                    x2="10.4278"
                    y2="11.488"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1724C9" />
                    <stop offset="1" stop-color="#1C64F2" />
                  </linearGradient>
                  <linearGradient
                    id="paint8_linear_11430_22515"
                    x1="7.15667"
                    y1="21.5399"
                    x2="14.0824"
                    y2="31.9579"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0092FF" />
                    <stop offset="1" stop-color="#45B2FF" />
                  </linearGradient>
                </defs>
              </svg>
              Flowbite
            </a>
            <span className="mb-3 block text-center text-sm text-gray-500 dark:text-gray-400">
              &copy; 2021-2022&nbsp;
              <a href="#" className="hover:underline">
                Flowbite&trade;
              </a>
              . All Rights Reserved.
            </span>
            <div>
              <Dropdown
                inline
                label={
                  <span className="inline-flex items-center text-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white sm:mt-0">
                    <svg
                      className="mr-1 h-4 w-4"
                      viewBox="0 0 21 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.75"
                        y="0.466187"
                        width="20"
                        height="13.3137"
                        rx="2"
                        fill="white"
                      ></rect>
                      <mask
                        id="mask0_3422_20233"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="21"
                        height="14"
                      >
                        <rect
                          x="0.75"
                          y="0.466187"
                          width="20"
                          height="13.3137"
                          rx="2"
                          fill="white"
                        ></rect>
                      </mask>
                      <g mask="url(#mask0_3422_20233)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M20.75 0.466187H0.75V1.35377H20.75V0.466187ZM20.75 2.24134H0.75V3.12892H20.75V2.24134ZM0.75 4.0165H20.75V4.90408H0.75V4.0165ZM20.75 5.79166H0.75V6.67924H20.75V5.79166ZM0.75 7.56682H20.75V8.4544H0.75V7.56682ZM20.75 9.34198H0.75V10.2296H20.75V9.34198ZM0.75 11.1171H20.75V12.0047H0.75V11.1171ZM20.75 12.8923H0.75V13.7799H20.75V12.8923Z"
                          fill="#D02F44"
                        ></path>
                        <rect
                          x="0.75"
                          y="0.466187"
                          width="8.57143"
                          height="6.21305"
                          fill="#46467F"
                        ></rect>
                        <g filter="url(#filter0_d_3422_20233)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.65477 1.79755C2.65477 2.04265 2.44158 2.24134 2.17858 2.24134C1.91559 2.24134 1.70239 2.04265 1.70239 1.79755C1.70239 1.55245 1.91559 1.35376 2.17858 1.35376C2.44158 1.35376 2.65477 1.55245 2.65477 1.79755ZM4.55954 1.79755C4.55954 2.04265 4.34634 2.24134 4.08334 2.24134C3.82035 2.24134 3.60715 2.04265 3.60715 1.79755C3.60715 1.55245 3.82035 1.35376 4.08334 1.35376C4.34634 1.35376 4.55954 1.55245 4.55954 1.79755ZM5.98811 2.24134C6.2511 2.24134 6.4643 2.04265 6.4643 1.79755C6.4643 1.55245 6.2511 1.35376 5.98811 1.35376C5.72511 1.35376 5.51192 1.55245 5.51192 1.79755C5.51192 2.04265 5.72511 2.24134 5.98811 2.24134ZM8.36906 1.79755C8.36906 2.04265 8.15586 2.24134 7.89287 2.24134C7.62988 2.24134 7.41668 2.04265 7.41668 1.79755C7.41668 1.55245 7.62988 1.35376 7.89287 1.35376C8.15586 1.35376 8.36906 1.55245 8.36906 1.79755ZM3.13096 3.12892C3.39396 3.12892 3.60715 2.93023 3.60715 2.68513C3.60715 2.44003 3.39396 2.24134 3.13096 2.24134C2.86797 2.24134 2.65477 2.44003 2.65477 2.68513C2.65477 2.93023 2.86797 3.12892 3.13096 3.12892ZM5.51192 2.68513C5.51192 2.93023 5.29872 3.12892 5.03573 3.12892C4.77273 3.12892 4.55954 2.93023 4.55954 2.68513C4.55954 2.44003 4.77273 2.24134 5.03573 2.24134C5.29872 2.24134 5.51192 2.44003 5.51192 2.68513ZM6.94049 3.12892C7.20348 3.12892 7.41668 2.93023 7.41668 2.68513C7.41668 2.44003 7.20348 2.24134 6.94049 2.24134C6.6775 2.24134 6.4643 2.44003 6.4643 2.68513C6.4643 2.93023 6.6775 3.12892 6.94049 3.12892ZM8.36906 3.57271C8.36906 3.81781 8.15586 4.0165 7.89287 4.0165C7.62988 4.0165 7.41668 3.81781 7.41668 3.57271C7.41668 3.32761 7.62988 3.12892 7.89287 3.12892C8.15586 3.12892 8.36906 3.32761 8.36906 3.57271ZM5.98811 4.0165C6.2511 4.0165 6.4643 3.81781 6.4643 3.57271C6.4643 3.32761 6.2511 3.12892 5.98811 3.12892C5.72511 3.12892 5.51192 3.32761 5.51192 3.57271C5.51192 3.81781 5.72511 4.0165 5.98811 4.0165ZM4.55954 3.57271C4.55954 3.81781 4.34634 4.0165 4.08334 4.0165C3.82035 4.0165 3.60715 3.81781 3.60715 3.57271C3.60715 3.32761 3.82035 3.12892 4.08334 3.12892C4.34634 3.12892 4.55954 3.32761 4.55954 3.57271ZM2.17858 4.0165C2.44158 4.0165 2.65477 3.81781 2.65477 3.57271C2.65477 3.32761 2.44158 3.12892 2.17858 3.12892C1.91559 3.12892 1.70239 3.32761 1.70239 3.57271C1.70239 3.81781 1.91559 4.0165 2.17858 4.0165ZM3.60715 4.46029C3.60715 4.70538 3.39396 4.90408 3.13096 4.90408C2.86797 4.90408 2.65477 4.70538 2.65477 4.46029C2.65477 4.21519 2.86797 4.0165 3.13096 4.0165C3.39396 4.0165 3.60715 4.21519 3.60715 4.46029ZM5.03573 4.90408C5.29872 4.90408 5.51192 4.70538 5.51192 4.46029C5.51192 4.21519 5.29872 4.0165 5.03573 4.0165C4.77273 4.0165 4.55954 4.21519 4.55954 4.46029C4.55954 4.70538 4.77273 4.90408 5.03573 4.90408ZM7.41668 4.46029C7.41668 4.70538 7.20348 4.90408 6.94049 4.90408C6.6775 4.90408 6.4643 4.70538 6.4643 4.46029C6.4643 4.21519 6.6775 4.0165 6.94049 4.0165C7.20348 4.0165 7.41668 4.21519 7.41668 4.46029ZM7.89287 5.79166C8.15586 5.79166 8.36906 5.59296 8.36906 5.34787C8.36906 5.10277 8.15586 4.90408 7.89287 4.90408C7.62988 4.90408 7.41668 5.10277 7.41668 5.34787C7.41668 5.59296 7.62988 5.79166 7.89287 5.79166ZM6.4643 5.34787C6.4643 5.59296 6.2511 5.79166 5.98811 5.79166C5.72511 5.79166 5.51192 5.59296 5.51192 5.34787C5.51192 5.10277 5.72511 4.90408 5.98811 4.90408C6.2511 4.90408 6.4643 5.10277 6.4643 5.34787ZM4.08334 5.79166C4.34634 5.79166 4.55954 5.59296 4.55954 5.34787C4.55954 5.10277 4.34634 4.90408 4.08334 4.90408C3.82035 4.90408 3.60715 5.10277 3.60715 5.34787C3.60715 5.59296 3.82035 5.79166 4.08334 5.79166ZM2.65477 5.34787C2.65477 5.59296 2.44158 5.79166 2.17858 5.79166C1.91559 5.79166 1.70239 5.59296 1.70239 5.34787C1.70239 5.10277 1.91559 4.90408 2.17858 4.90408C2.44158 4.90408 2.65477 5.10277 2.65477 5.34787Z"
                            fill="url(#paint0_linear_3422_20233)"
                          ></path>
                        </g>
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_3422_20233"
                          x="1.70239"
                          y="1.35376"
                          width="6.66675"
                          height="5.43787"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          ></feColorMatrix>
                          <feOffset dy="1"></feOffset>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                          ></feColorMatrix>
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_3422_20233"
                          ></feBlend>
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_3422_20233"
                            result="shape"
                          ></feBlend>
                        </filter>
                        <linearGradient
                          id="paint0_linear_3422_20233"
                          x1="1.70239"
                          y1="1.35376"
                          x2="1.70239"
                          y2="5.79166"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white"></stop>
                          <stop offset="1" stop-color="#F0F0F0"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                    &nbsp;English (US)
                  </span>
                }
                theme={{
                  arrowIcon: twMerge(
                    theme.dropdown.arrowIcon,
                    "dark:text-gray-200",
                  ),
                }}
              >
                <ul className="py-1" role="none">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <div className="inline-flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 rounded-full"
                          xmlns="http://www.w3.org/2000/svg"
                          id="flag-icon-css-us"
                          viewBox="0 0 512 512"
                        >
                          <g fillRule="evenodd">
                            <g strokeWidth="1pt">
                              <path
                                fill="#bd3d44"
                                d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                transform="scale(3.9385)"
                              />
                              <path
                                fill="#fff"
                                d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                transform="scale(3.9385)"
                              />
                            </g>
                            <path
                              fill="#192f5d"
                              d="M0 0h98.8v70H0z"
                              transform="scale(3.9385)"
                            />
                            <path
                              fill="#fff"
                              d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                              transform="scale(3.9385)"
                            />
                          </g>
                        </svg>
                        <span className="whitespace-nowrap">English (US)</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <div className="inline-flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 rounded-full"
                          xmlns="http://www.w3.org/2000/svg"
                          id="flag-icon-css-de"
                          viewBox="0 0 512 512"
                        >
                          <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                          <path d="M0 0h512v170.7H0z" />
                          <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                        </svg>
                        Deutsch
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <div className="inline-flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 rounded-full"
                          xmlns="http://www.w3.org/2000/svg"
                          id="flag-icon-css-it"
                          viewBox="0 0 512 512"
                        >
                          <g fillRule="evenodd" strokeWidth="1pt">
                            <path fill="#fff" d="M0 0h512v512H0z" />
                            <path fill="#009246" d="M0 0h170.7v512H0z" />
                            <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                          </g>
                        </svg>
                        Italiano
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <div className="inline-flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 rounded-full"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          id="flag-icon-css-cn"
                          viewBox="0 0 512 512"
                        >
                          <defs>
                            <path
                              id="a"
                              fill="#ffde00"
                              d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                            />
                          </defs>
                          <path fill="#de2910" d="M0 0h512v512H0z" />
                          <use
                            width="30"
                            height="20"
                            transform="matrix(76.8 0 0 76.8 128 128)"
                            xlinkHref="#a"
                          />
                          <use
                            width="30"
                            height="20"
                            transform="rotate(-121 142.6 -47) scale(25.5827)"
                            xlinkHref="#a"
                          />
                          <use
                            width="30"
                            height="20"
                            transform="rotate(-98.1 198 -82) scale(25.6)"
                            xlinkHref="#a"
                          />
                          <use
                            width="30"
                            height="20"
                            transform="rotate(-74 272.4 -114) scale(25.6137)"
                            xlinkHref="#a"
                          />
                          <use
                            width="30"
                            height="20"
                            transform="matrix(16 -19.968 19.968 16 256 230.4)"
                            xlinkHref="#a"
                          />
                        </svg>
                        <span className="whitespace-nowrap">中文 (繁體)</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </Dropdown>
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
}
