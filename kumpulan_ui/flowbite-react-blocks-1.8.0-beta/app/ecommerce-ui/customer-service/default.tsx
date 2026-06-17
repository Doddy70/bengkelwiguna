"use client";

import {
  Badge,
  Button,
  Checkbox,
  Label,
  Modal,
  Select,
  Textarea,
  TextInput,
  theme,
  Tooltip,
} from "flowbite-react";
import { Close, Search, Upload } from "flowbite-react-icons/outline";
import { QuestionCircle } from "flowbite-react-icons/solid";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function DefaultCustomerService() {
  const [isAskAQuestionModalOpen, setAskAQuestionModalOpen] = useState(false);

  return (
    <>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-lg px-4 2xl:px-0">
          <div className="lg:flex lg:items-center lg:justify-between lg:gap-4">
            <h2 className="shrink-0 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Questions (147)
            </h2>
            <form className="mt-4 w-full gap-4 sm:flex sm:items-center sm:justify-end lg:mt-0">
              <Label htmlFor="simple-search" className="sr-only">
                Search
              </Label>
              <TextInput
                icon={() => (
                  <Search className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                )}
                id="simple-search"
                name="simple-search"
                placeholder="Search Questions & Answers"
                required
                size={36}
                type="search"
              />
              <Button
                onClick={() => setAskAQuestionModalOpen(true)}
                size="lg"
                className="mt-4 w-full sm:mt-0 sm:w-fit [&_span]:text-sm"
              >
                Ask a question
              </Button>
            </form>
          </div>

          <div className="mt-6 flow-root">
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
                    “The specs say this model has 2 USB ports. The one I
                    received has none. Are they hidden somewhere?”
                  </a>
                </div>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  It’s a USB-C port it’s a smaller port. Not the regular size
                  USB port. See the picture below. It fits the newer Apple
                  chargers.
                </p>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Answered 1 day ago by&nbsp;
                  <a
                    href="#"
                    className="text-gray-900 hover:underline dark:text-white"
                  >
                    Bonnie Green
                  </a>
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
                  It's an all-in-one (AIO). Which means everything in one
                  structure. So it's not just a monitor it uses Apple's
                  operating System, macOS and it has storage, CPU, GPU etc.
                </p>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Answered 1 day ago by&nbsp;
                  <a
                    href="#"
                    className="text-gray-900 hover:underline dark:text-white"
                  >
                    Jese Leos
                  </a>
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
                    “For an inexpert 85-year-old general user with a ten-year
                    old iMac (OSX Yosemite version 10.10.5), is this latest
                    model 24" iMac with Retina 4.5K display Apple M1 8GB memory
                    - 256GB SSD a decent upgrade?”
                  </a>
                </div>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  It's basically the same system as your older machine, but
                  bigger, lighter and faster. There is no disc drive and it has
                  fewer ports.
                </p>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Answered 2 days ago by&nbsp;
                  <a
                    href="#"
                    className="text-gray-900 hover:underline dark:text-white"
                  >
                    Bonnie Green
                  </a>
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
                    “I just brought home the Imac24". It saysthe mouse and
                    Keyboard are wireless. Where do I install the power for
                    them?”
                  </a>
                </div>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  You can charge the mouse and keyboard with a lightning
                  charger. Once charged, they last months before having to
                  charge again.
                </p>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Answered 2 days ago by&nbsp;
                  <a
                    href="#"
                    className="text-gray-900 hover:underline dark:text-white"
                  >
                    Roberta Casas
                  </a>
                </p>
              </div>

              <div className="space-y-4 py-6 md:py-8">
                <div className="grid gap-4">
                  <Badge color="green" className="w-fit">
                    4 answers
                  </Badge>
                  <a
                    href="#"
                    className="text-xl font-semibold text-gray-900 hover:underline dark:text-white"
                  >
                    “Does this include the keyboard and mouse?”
                  </a>
                </div>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Yes it does, color matched to the Mac. And the keyboard has
                  Touch ID.
                </p>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Answered 1 week ago by&nbsp;
                  <a
                    href="#"
                    className="text-gray-900 hover:underline dark:text-white"
                  >
                    Joseph McFallen
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center lg:justify-start">
            <button
              type="button"
              className="w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
            >
              View more questions
            </button>
          </div>
        </div>
      </section>
      <Modal
        onClose={() => setAskAQuestionModalOpen(false)}
        popup
        show={isAskAQuestionModalOpen}
        theme={{
          content: {
            inner: twMerge(theme.modal.content.inner, "dark:bg-gray-800"),
          },
        }}
      >
        <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Ask a question
          </h3>
          <button
            onClick={() => setAskAQuestionModalOpen(false)}
            className="ms-auto inline-flex items-center justify-center rounded-lg bg-transparent p-1 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <Close className="h-5 w-5" />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <form className="p-4 md:p-5">
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Label
                htmlFor="question"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Your question&nbsp;
                <span className="text-gray-500 dark:text-gray-400">
                  (150-1000 characters)
                </span>
              </Label>
              <Textarea id="question" name="question" required rows={6} />
            </div>
            <div className="col-span-2 grid gap-4 md:grid-cols-2">
              <div>
                <Label
                  htmlFor="question-type"
                  className="mb-2 flex items-center text-sm font-medium text-gray-900 dark:text-white"
                >
                  <span className="me-1">Question type</span>
                  <Tooltip content="Choose your question type to get a faster answer.">
                    <QuestionCircle className="h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
                  </Tooltip>
                </Label>
                <Select id="question-type" name="question-type">
                  <option value="technical">Technical Question</option>
                  <option value="shipment">Shipment Question</option>
                  <option value="payment">Payment Issue</option>
                  <option value="other">Other</option>
                </Select>
              </div>
              <div>
                <Label
                  htmlFor="priority-type"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Priority
                </Label>
                <Select id="priority-type" name="priority-type">
                  <option value="very-high">Very High</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </Select>
              </div>
            </div>
            <div className="col-span-2">
              <p className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Upload files&nbsp;
                <span className="text-gray-500 dark:text-gray-400">
                  (Optional)
                </span>
              </p>
              <div className="flex w-full items-center justify-center">
                <Label
                  htmlFor="dropzone-file"
                  className="flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <Upload className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    name="dropzone-file"
                    type="file"
                    className="hidden"
                  />
                </Label>
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex items-center">
                <Checkbox id="link-checkbox" name="link-checkbox" />
                <Label
                  htmlFor="link-checkbox"
                  className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                >
                  I have read and agree with the&nbsp;
                  <a
                    href="#"
                    className="text-primary-600 hover:underline dark:text-primary-500"
                  >
                    terms and conditions
                  </a>
                  .
                </Label>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
            <Button
              size="lg"
              type="submit"
              className="me-3 inline-flex [&_span]:text-sm"
            >
              Submit question
            </Button>
            <button
              onClick={() => setAskAQuestionModalOpen(false)}
              className="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
