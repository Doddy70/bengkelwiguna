"use client";

import {
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  Label,
  TextInput,
  theme,
  Tooltip,
} from "flowbite-react";
import {
  FaceGrin,
  FileImage,
  Indent,
  List,
  OrderedList,
  Outdent,
  PaperClip,
  Paragraph,
  Quote,
  Redo,
  Undo,
} from "flowbite-react-icons/outline";
import { twMerge } from "tailwind-merge";

export default function CustomerServiceWithWYSIWYG() {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-lg px-4 2xl:px-0">
        <h1 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          “This will be our first computer believe that or not. We have a
          10-year-old who needs it for school. With this package is everything
          included that we need to plug it in and go?”
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Asked 3 days ago by&nbsp;
          <a
            href="#"
            className="font-medium text-gray-900 hover:underline dark:text-white"
          >
            Bonnie Green
          </a>
        </p>

        <div className="mb-4 mt-4 border-t border-gray-200 pt-4 dark:border-gray-700 md:mb-8 md:mt-8 md:pt-8">
          <article className="mb-4 rounded-lg border border-gray-100 bg-gray-50 p-4 text-base dark:border-gray-700 dark:bg-gray-800 lg:p-6">
            <div className="flex flex-col sm:flex-row">
              <div className="order-2 mt-4 sm:order-1 sm:mr-4 sm:mt-0">
                <div className="flex w-24 items-center justify-center rounded-lg border border-gray-200 bg-gray-100 font-medium dark:border-gray-600 dark:bg-gray-700 sm:w-9 sm:flex-col">
                  <button
                    type="button"
                    className="w-full rounded-l-md py-1 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-600 sm:rounded-b-none sm:rounded-t-md"
                  >
                    +
                  </button>
                  <span className="px-2 py-1 text-xs font-medium text-gray-900 dark:text-white lg:px-0 lg:text-sm">
                    65
                  </span>
                  <button
                    type="button"
                    className="w-full  rounded-r-md py-1 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-600 sm:rounded-b-md sm:rounded-t-none"
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="order-1 text-gray-500 dark:text-gray-400 sm:order-2">
                <Badge color="green" className="w-fit">
                  Best answer
                </Badge>
                <p className="my-4 md:mb-5">
                  Certainly! Embracing the significance of your first computer
                  acquisition, particularly in catering to your 10-year-old's
                  educational needs, underscores the importance of a
                  comprehensive package. In the case of an iMac, Apple offering
                  is meticulously crafted to encompass all requisite components
                  for immediate functionality upon unboxing.
                </p>
                <p className="mb-4 md:mb-5">
                  Within this package, you will find not only the iMac itself,
                  boasting its sleek design and powerful performance, but also a
                  suite of complementary peripherals essential for seamless
                  operation. These include a Magic Keyboard and a Magic Mouse,
                  ensuring intuitive interaction with the system right out of
                  the box. Furthermore, all necessary cables, including the
                  power cord and Thunderbolt 3 cables for peripheral
                  connectivity, are thoughtfully included, eliminating any need
                  for additional purchases or compatibility concerns.
                </p>
                <img
                  className="mb-4 max-w-full dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/complete-imac-light.svg"
                  alt=""
                />
                <img
                  className="mb-4 hidden max-w-full dark:block"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/complete-imac-dark.svg"
                  alt=""
                />
                <p className="mb-4 md:mb-5">
                  Moreover, recognizing the pivotal role of software in
                  enhancing productivity and enabling educational pursuits, this
                  iMac package comes preloaded with macOS, Apple's robust
                  operating system. Additionally, essential productivity
                  applications such as Pages, Numbers, and Keynote are readily
                  available, facilitating tasks ranging from document creation
                  to presentations with utmost efficiency.
                </p>
                <p className="mb-4 md:mb-5">
                  Beyond hardware and software provisions, Apple commitment
                  extends to ensuring a seamless setup experience. Clear and
                  concise setup instructions accompany the package, guiding you
                  through the initial configuration process effortlessly. Should
                  you encounter any queries or require further assistance, our
                  dedicated support channels stand ready to provide prompt
                  resolution, ensuring your transition into the world of iMac
                  computing is smooth and gratifying.
                </p>
                <p className="mb-4 md:mb-5">
                  Thus, with our iMac package, you can confidently plug in your
                  new computer, empowered with the knowledge that every element
                  essential for immediate use is meticulously curated and
                  readily accessible.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Asked 1 day ago by&nbsp;
                  <a
                    href="#"
                    className="font-medium text-gray-900 hover:underline dark:text-white"
                  >
                    Roberta Casas
                  </a>
                </p>
              </div>
            </div>
          </article>
          <article className="mb-4 rounded-lg border border-gray-100 bg-gray-50 p-4 text-base dark:border-gray-700 dark:bg-gray-800 lg:p-6">
            <div className="flex flex-col sm:flex-row">
              <div className="order-2 mt-4 sm:order-1 sm:mr-4 sm:mt-0">
                <div className="flex w-24 items-center justify-center rounded-lg border border-gray-200 bg-gray-100 font-medium dark:border-gray-600 dark:bg-gray-700 sm:w-9 sm:flex-col">
                  <button
                    type="button"
                    className="w-full rounded-l-md py-1 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-600 sm:rounded-b-none sm:rounded-t-md"
                  >
                    +
                  </button>
                  <span className="px-2 py-1 text-xs font-medium text-gray-900 dark:text-white lg:px-0 lg:text-sm">
                    8
                  </span>
                  <button
                    type="button"
                    className="w-full  rounded-r-md py-1 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-600 sm:rounded-b-md sm:rounded-t-none"
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="order-1 text-gray-500 dark:text-gray-400 sm:order-2">
                <p className="mb-4 md:mb-5">
                  Absolutely! This package includes everything you need to set
                  up your first computer smoothly. From the computer itself to
                  necessary cables and adapters, you'll be ready to plug it in
                  and get started right away.
                </p>
                <p>
                  Asked 1 day ago by&nbsp;
                  <a
                    href="#"
                    className="font-medium text-gray-900 hover:underline dark:text-white"
                  >
                    Jese Leos
                  </a>
                </p>
              </div>
            </div>
          </article>
          <article className="mb-4 rounded-lg border border-gray-100 bg-gray-50 p-4 text-base dark:border-gray-700 dark:bg-gray-800 lg:p-6">
            <div className="flex flex-col sm:flex-row">
              <div className="order-2 mt-4 sm:order-1 sm:mr-4 sm:mt-0">
                <div className="flex w-24 items-center justify-center rounded-lg border border-gray-200 bg-gray-100 font-medium dark:border-gray-600 dark:bg-gray-700 sm:w-9 sm:flex-col">
                  <button
                    type="button"
                    className="w-full rounded-l-md py-1 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-600 sm:rounded-b-none sm:rounded-t-md"
                  >
                    +
                  </button>
                  <span className="px-2 py-1 text-xs font-medium text-gray-900 dark:text-white lg:px-0 lg:text-sm">
                    2
                  </span>
                  <button
                    type="button"
                    className="w-full  rounded-r-md py-1 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-600 sm:rounded-b-md sm:rounded-t-none"
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="order-1 text-gray-500 dark:text-gray-400 sm:order-2">
                <p className="mb-4 md:mb-5">
                  Yes, indeed! This comprehensive package ensures that you have
                  all the essentials to set up your computer hassle-free. No
                  need to worry about missing components or compatibility issues
                  – just plug it in, and you're good to go!
                </p>
                <p>
                  Asked 1 day ago by&nbsp;
                  <a
                    href="#"
                    className="font-medium text-gray-900 hover:underline dark:text-white"
                  >
                    Thomas Lean
                  </a>
                </p>
              </div>
            </div>
          </article>
          <article className="mb-4 rounded-lg border border-gray-100 bg-gray-50 p-4 text-base dark:border-gray-700 dark:bg-gray-800 lg:p-6">
            <div className="flex flex-col sm:flex-row">
              <div className="order-2 mt-4 sm:order-1 sm:mr-4 sm:mt-0">
                <div className="flex w-24 items-center justify-center rounded-lg border border-gray-200 bg-gray-100 font-medium dark:border-gray-600 dark:bg-gray-700 sm:w-9 sm:flex-col">
                  <button
                    type="button"
                    className="w-full rounded-l-md py-1 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-600 sm:rounded-b-none sm:rounded-t-md"
                  >
                    +
                  </button>
                  <span className="px-2 py-1 text-xs font-medium text-gray-900 dark:text-white lg:px-0 lg:text-sm">
                    1
                  </span>
                  <button
                    type="button"
                    className="w-full  rounded-r-md py-1 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-600 sm:rounded-b-md sm:rounded-t-none"
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="order-1 text-gray-500 dark:text-gray-400 sm:order-2">
                <p className="mb-4 md:mb-5">
                  You bet! They thought of everything to make your transition to
                  your first computer seamless. From power cords to peripherals,
                  this package has you covered. Just plug it in, power up, and
                  dive into the world of computing!
                </p>
                <p>
                  Asked 1 day ago by&nbsp;
                  <a
                    href="#"
                    className="font-medium text-gray-900 hover:underline dark:text-white"
                  >
                    Karen Nelson
                  </a>
                </p>
              </div>
            </div>
          </article>
          <article className="rounded-lg border border-gray-100 bg-gray-50 p-4 text-base dark:border-gray-700 dark:bg-gray-800 lg:p-6">
            <div className="flex flex-col sm:flex-row">
              <div className="order-2 mt-4 sm:order-1 sm:mr-4 sm:mt-0">
                <div className="flex w-24 items-center justify-center rounded-lg border border-gray-200 bg-gray-100 font-medium dark:border-gray-600 dark:bg-gray-700 sm:w-9 sm:flex-col">
                  <button
                    type="button"
                    className="w-full rounded-l-md py-1 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-600 sm:rounded-b-none sm:rounded-t-md"
                  >
                    +
                  </button>
                  <span className="px-2 py-1 text-xs font-medium text-gray-900 dark:text-white lg:px-0 lg:text-sm">
                    0
                  </span>
                  <button
                    type="button"
                    className="w-full  rounded-r-md py-1 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-600 sm:rounded-b-md sm:rounded-t-none"
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="order-1 text-gray-500 dark:text-gray-400 sm:order-2">
                <p className="mb-4 md:mb-5">
                  Apple taken care of the details so you can focus on helping
                  your 10-year-old excel in school with their new computer. Just
                  plug it in, power on, and begin your computing journey!
                </p>
                <p>
                  Asked 1 day ago by&nbsp;
                  <a
                    href="#"
                    className="font-medium text-gray-900 hover:underline dark:text-white"
                  >
                    Neil Sims
                  </a>
                </p>
              </div>
            </div>
          </article>
        </div>
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:mb-6 sm:text-2xl">
          Answer to this question
        </h2>
        <form action="#" className="mb-4 md:mb-8">
          <Label
            htmlFor="first_name"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Your name
          </Label>
          <TextInput
            id="first_name"
            name="first_name"
            placeholder="Enter your name"
            required
            className="mb-4 dark:[&_input]:bg-gray-800"
          />
          <Label
            htmlFor="response"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Write your answer here
          </Label>
          <div className="rounded-lg border border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
            <div className="w-full">
              <div className="rounded-t-lg bg-gray-50 px-4 py-2 dark:bg-gray-800">
                <textarea
                  id="response"
                  name="response"
                  rows={8}
                  required
                  className="w-full border-0 bg-transparent focus:ring-0 dark:text-white"
                />
              </div>
            </div>
            <div className="flex flex-wrap items-center divide-gray-200 rounded-b-lg border-t border-gray-200 px-4 py-3 text-gray-600 dark:divide-gray-700 dark:border-gray-700 sm:divide-x sm:rtl:divide-x-reverse">
              <div className="flex flex-wrap items-center space-x-1 sm:pe-4 rtl:space-x-reverse">
                <Tooltip content="Undo">
                  <span className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <Undo className="h-5 w-5" />
                  </span>
                  <span className="sr-only">Undo</span>
                </Tooltip>
                <Tooltip content="Redo">
                  <span className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <Redo className="h-5 w-5" />
                  </span>
                  <span className="sr-only">Redo</span>
                </Tooltip>
                <Dropdown
                  inline
                  label="Arial (Sans-serif)"
                  theme={{
                    inlineWrapper: twMerge(
                      theme.dropdown.inlineWrapper,
                      "flex items-center justify-center rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600",
                    ),
                  }}
                >
                  <DropdownItem>Arial (Sans-serif)</DropdownItem>
                  <DropdownItem>Times New Roman (Serif)</DropdownItem>
                  <DropdownItem>Helvetica (Sans-serif)</DropdownItem>
                  <DropdownItem>Verdana (Sans-serif)</DropdownItem>
                  <DropdownItem>Georgia (Sans-serif)</DropdownItem>
                  <DropdownItem>Roboto (Sans-serif)</DropdownItem>
                </Dropdown>
                <Tooltip content="Text size">
                  <span className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 6.2V5h11v1.2M8 5v14m-3 0h6m2-6.8V11h8v1.2M17 11v8m-1.5 0h3"
                      />
                    </svg>
                  </span>
                  <span className="sr-only">Text size</span>
                </Tooltip>
                <Tooltip content="Bold">
                  <span className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 5h4.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0-7H6m2 7h6.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0 0H6"
                      />
                    </svg>
                  </span>
                  <span className="sr-only">Bold</span>
                </Tooltip>
                <Tooltip content="Italic">
                  <span className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8.9 19 15 5M6 19h6.3m-.6-14H18"
                      />
                    </svg>
                  </span>
                  <span className="sr-only">Italic</span>
                </Tooltip>
                <Tooltip content="Underline">
                  <span className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="2"
                        d="M6 19h12M8 5v9a4 4 0 0 0 8 0V5M6 5h4m4 0h4"
                      />
                    </svg>
                  </span>
                  <span className="sr-only">Underline</span>
                </Tooltip>
                <Tooltip content="Text slash">
                  <span className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 6.2V5h12v1.2M7 19h6m.2-14-1.7 6.5M9.6 19l1-4M5 5l6.5 6.5M19 19l-7.5-7.5"
                      />
                    </svg>
                  </span>
                  <span className="sr-only">Text slash</span>
                </Tooltip>
                <Tooltip content="Paragraph">
                  <span className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <Paragraph className="h-5 w-5" />
                  </span>
                  <span className="sr-only">Paragraph</span>
                </Tooltip>
              </div>
              <div className="hidden flex-wrap items-center space-x-1 sm:ps-4 md:flex rtl:space-x-reverse">
                <Tooltip content="Quote">
                  <span className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <Quote className="h-5 w-5" />
                  </span>
                  <span className="sr-only">Quote</span>
                </Tooltip>
                <Tooltip content="Text center">
                  <span className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 6h8M6 10h12M8 14h8M6 18h12"
                      />
                    </svg>
                  </span>
                  <span className="sr-only">Text center</span>
                </Tooltip>
                <Tooltip content="Ordered list">
                  <span className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <OrderedList className="h-5 w-5" />
                  </span>
                  <span className="sr-only">Ordered list</span>
                </Tooltip>
                <Tooltip content="List">
                  <span className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <List className="h-5 w-5" />
                  </span>
                  <span className="sr-only">List</span>
                </Tooltip>
                <Tooltip content="Text indent">
                  <span className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <Indent className="h-5 w-5" />
                  </span>
                  <span className="sr-only">Text indent</span>
                </Tooltip>
                <Tooltip content="Text outdent">
                  <span className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <Outdent className="h-5 w-5" />
                  </span>
                  <span className="sr-only">Text outdent</span>
                </Tooltip>
              </div>
            </div>
            <div className="items-center space-x-1 rounded-b-lg border-t border-gray-200 px-4 py-3 text-gray-600 dark:border-gray-700 sm:flex">
              <Button type="submit" className="me-3 w-full md:w-fit">
                Submit answer
              </Button>
              <div className="mt-5 flex flex-row sm:mt-0">
                <Tooltip content="Attach file">
                  <span className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <PaperClip className="h-5 w-5" />
                  </span>
                  <span className="sr-only">Attach file</span>
                </Tooltip>
                <Tooltip content="Emoji">
                  <span className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <FaceGrin className="h-5 w-5" />
                  </span>
                  <span className="sr-only">Emoji</span>
                </Tooltip>
                <Tooltip content="Insert photo">
                  <span className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <FileImage className="h-5 w-5" />
                  </span>
                  <span className="sr-only">Insert photo</span>
                </Tooltip>
              </div>
            </div>
          </div>
        </form>
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:mb-6 sm:text-2xl">
          Related questions
        </h2>
        <div className="-my-6 divide-y divide-gray-200 dark:divide-gray-800">
          <div className="space-y-4 py-6 md:py-8">
            <div className="grid gap-4">
              <Badge color="green" className="w-fit">
                3 answers
              </Badge>
              <a
                href="#"
                className="text-xl font-semibold text-gray-900 hover:underline dark:text-white"
              >
                “The specs say this model has 2 USB ports. The one I received
                has none. Are they hidden somewhere?”
              </a>
            </div>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              It’s a USB-C port it’s a smaller port. Not the regular size USB
              port. See the picture below. It fits the newer Apple chargers.
            </p>
          </div>

          <div className="space-y-4 py-6 md:py-8">
            <div className="grid gap-4">
              <Badge color="green" className="w-fit">
                1 answer
              </Badge>
              <a
                href="#"
                className="text-xl font-semibold text-gray-900 hover:underline dark:text-white"
              >
                “Is this just the monitor?”
              </a>
            </div>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              It's an all-in-one (AIO). Which means everything in one structure.
              So it's not just a monitor it uses Apple's operating System.
            </p>
          </div>

          <div className="space-y-4 py-6 md:py-8">
            <div className="grid gap-4">
              <Badge color="green" className="w-fit">
                7 answers
              </Badge>
              <a
                href="#"
                className="text-xl font-semibold text-gray-900 hover:underline dark:text-white"
              >
                “For an inexpert 85-year-old general user with a ten-year old
                iMac (OSX Yosemite version 10.10.5), is this latest model 24"
                iMac with Retina 4.5K display Apple M1 8GB memory - 256GB SSD a
                decent upgrade?”
              </a>
            </div>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              It's basically the same system as your older machine, but bigger,
              lighter and faster. There is no disc drive and it has fewer ports.
            </p>
          </div>

          <div className="space-y-4 py-6 md:py-8">
            <div className="grid gap-4">
              <Badge color="green" className="w-fit">
                32 answers
              </Badge>
              <a
                href="#"
                className="text-xl font-semibold text-gray-900 hover:underline dark:text-white"
              >
                “I just brought home the Imac24". It saysthe mouse and Keyboard
                are wireless. Where do I install the power for them?”
              </a>
            </div>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              You can charge the mouse and keyboard with a lightning charger.
              Once charged, they last months before having to charge again.
            </p>
          </div>

          <div className="space-y-4 py-6 md:py-8">
            <div className="grid gap-4">
              <Badge color="gray" className="w-fit">
                No answers
              </Badge>
              <a
                href="#"
                className="text-xl font-semibold text-gray-900 hover:underline dark:text-white"
              >
                “Does this include the keyboard and mouse?”
              </a>
            </div>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Yes it does, color matched to the Mac. And the keyboard has Touch
              ID.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
